import clientPromise from '@/src/lib/mongodb';
import { NextResponse } from 'next/server';

// Body: { viewerEmail, ownerEmail?, label? }
// Returns entries where viewerEmail is in allowedViewers and (if ownerEmail provided) ownerEmail matches.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { viewerEmail, ownerEmail, label } = body || {};

    if (!viewerEmail) {
      return NextResponse.json({ ok: false, error: 'Missing viewerEmail' }, { status: 400 });
    }

    viewerEmail = String(viewerEmail).trim().toLowerCase();
    if (ownerEmail) ownerEmail = String(ownerEmail).trim().toLowerCase();
    if (label) label = String(label).trim();

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('vault_entries');

    const query: any = { allowedViewers: viewerEmail };
    if (ownerEmail) query.ownerEmail = ownerEmail;
    if (label) query.label = label;

    const entries = await collection
      .find(query, { projection: { encrypted: 1, label: 1, ownerEmail: 1, createdAt: 1, updatedAt: 1 } })
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();

    return NextResponse.json({ ok: true, entries });
  } catch (e) {
    console.error('vault/view error', e);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
