import clientPromise from '@/src/lib/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;
    if (!email) return NextResponse.json({ ok: false, error: 'Missing email' }, { status: 400 });

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('vault_entries');

    const entries = await collection.find({ email: email.toLowerCase() }).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({ ok: true, entries });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
