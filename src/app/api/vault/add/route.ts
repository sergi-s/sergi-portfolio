import clientPromise from '@/src/lib/mongodb';
import { NextResponse } from 'next/server';

// Expected body: { ownerEmail, label, encrypted, allowedViewers: string[] }
// encrypted value produced client-side via AES-GCM (see crypto.ts)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { ownerEmail, label, encrypted, allowedViewers } = body || {};

    if (!ownerEmail || !label || !encrypted) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    ownerEmail = String(ownerEmail).trim().toLowerCase();
    label = String(label).trim();
    if (!Array.isArray(allowedViewers)) allowedViewers = [];

    // Normalise viewer emails & ensure owner included for retrieval
    const viewers: string[] = Array.from(new Set([
      ownerEmail,
      ...allowedViewers
        .map((e: any) => (typeof e === 'string' ? e.trim().toLowerCase() : ''))
        .filter(Boolean)
    ]));

    if (label.length > 200) {
      return NextResponse.json({ ok: false, error: 'Label too long' }, { status: 400 });
    }
    if (encrypted.length > 5000) {
      return NextResponse.json({ ok: false, error: 'Encrypted payload too large' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('vault_entries');

    const doc = {
      ownerEmail,
      label,
      encrypted, // format: saltHex:ivHex:base64Cipher
      allowedViewers: viewers,
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1
    } as const;

    const { insertedId } = await collection.insertOne(doc);

    return NextResponse.json({ ok: true, id: insertedId.toString() });
  } catch (e) {
    console.error('vault/add error', e);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
