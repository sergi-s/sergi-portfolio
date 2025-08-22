"use client";

import { useCallback, useEffect, useState } from 'react';
import { encrypt, decrypt } from './crypto';

interface VaultEntry {
  _id: string;
  label: string;
  encrypted: string; // salt:iv:cipher
  ownerEmail: string;
  createdAt: string;
}

export default function Vault() {
  const [ownerEmail, setOwnerEmail] = useState('');
  const [masterPass, setMasterPass] = useState('');
  const [ready, setReady] = useState(false);

  const [label, setLabel] = useState('');
  const [password, setPassword] = useState('');
  const [allowedViewersInput, setAllowedViewersInput] = useState('');

  const [viewerEmail, setViewerEmail] = useState('');
  const [entries, setEntries] = useState<VaultEntry[]>([]);
  const [decryptingId, setDecryptingId] = useState<string | null>(null);
  const [decrypted, setDecrypted] = useState<Record<string,string>>({});
  const [err, setErr] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const fetchEntries = useCallback(async () => {
    if (!viewerEmail) return;
    setErr(null);
    try {
      setLoading(true);
      const body: any = { viewerEmail };
      if (ownerEmail) body.ownerEmail = ownerEmail; // optional filter
      const res = await fetch('/api/vault/view', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Failed');
      setEntries(data.entries);
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }, [viewerEmail, ownerEmail]);

  const addEntry = useCallback(async () => {
    setErr(null);
    if (!ownerEmail || !masterPass || !label || !password) {
      setErr('Missing fields');
      return;
    }
    try {
      setAdding(true);
      const encrypted = await encrypt(password, masterPass);
      const allowedViewers = allowedViewersInput.split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
      const res = await fetch('/api/vault/add', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ownerEmail, label, encrypted, allowedViewers }) });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Failed');
      setLabel('');
      setPassword('');
      // refresh list for owner view
      if (viewerEmail === ownerEmail) fetchEntries();
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setAdding(false);
    }
  }, [ownerEmail, masterPass, label, password, allowedViewersInput, viewerEmail, fetchEntries]);

  const doDecrypt = async (id: string, encrypted: string) => {
    if (!masterPass) { setErr('Need master password to decrypt'); return; }
    setDecryptingId(id);
    setErr(null);
    try {
      const plain = await decrypt(encrypted, masterPass);
      setDecrypted(d => ({ ...d, [id]: plain }));
    } catch (e: any) {
      setErr('Decrypt failed (wrong master password?)');
    } finally {
      setDecryptingId(null);
    }
  };

  if (!ready) return null;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold">Password Vault (Hidden)</h1>
      <p className="text-sm opacity-70">All encryption & decryption happens locally in your browser using AES-GCM with PBKDF2 derived key (100k iterations, 256-bit). Store only encrypted blobs in DB.</p>

      <section className="space-y-2 border p-4 rounded">
        <h2 className="font-semibold">Owner Setup & Add Entry</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">Your Email (Owner)</label>
            <input className="w-full input" value={ownerEmail} onChange={e => setOwnerEmail(e.target.value)} placeholder="owner@example.com" />
          </div>
          <div>
            <label className="block text-sm">Master Password</label>
            <input className="w-full input" type="password" value={masterPass} onChange={e => setMasterPass(e.target.value)} placeholder="Master password" />
          </div>
          <div>
            <label className="block text-sm">Label</label>
            <input className="w-full input" value={label} onChange={e => setLabel(e.target.value)} placeholder="e.g. Gmail" />
          </div>
          <div>
            <label className="block text-sm">Password / Secret</label>
            <input className="w-full input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Actual password" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm">Allowed Viewer Emails (comma separated)</label>
            <input className="w-full input" value={allowedViewersInput} onChange={e => setAllowedViewersInput(e.target.value)} placeholder="viewer1@example.com, viewer2@example.com" />
          </div>
        </div>
        <button disabled={adding} onClick={addEntry} className="btn mt-2 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50">{adding ? 'Adding...' : 'Add Encrypted Entry'}</button>
      </section>

      <section className="space-y-2 border p-4 rounded">
        <h2 className="font-semibold">View Entries</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm">Viewer Email</label>
            <input className="w-full input" value={viewerEmail} onChange={e => setViewerEmail(e.target.value)} placeholder="viewer@example.com" />
          </div>
          <div>
            <label className="block text-sm">(Optional) Filter Owner Email</label>
            <input className="w-full input" value={ownerEmail} onChange={e => setOwnerEmail(e.target.value)} placeholder="owner@example.com" />
          </div>
          <div className="flex items-end">
            <button onClick={fetchEntries} disabled={loading} className="btn w-full px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50">{loading ? 'Loading...' : 'Fetch'}</button>
          </div>
        </div>
        <div className="space-y-2">
          {entries.map(e => (
            <div key={e._id} className="border rounded p-3">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{e.label}</div>
                  <div className="text-xs opacity-60">Owner: {e.ownerEmail}</div>
                </div>
                <div>
                  {decrypted[e._id] ? (
                    <span className="font-mono text-sm">{decrypted[e._id]}</span>
                  ) : (
                    <button onClick={() => doDecrypt(e._id, e.encrypted)} className="btn text-sm px-3 py-1 bg-purple-600 text-white rounded disabled:opacity-50" disabled={decryptingId === e._id}>{decryptingId === e._id ? 'Decrypting...' : 'Decrypt'}</button>
                  )}
                </div>
              </div>
            </div>
          ))}
          {entries.length === 0 && <div className="text-sm opacity-60">No entries</div>}
        </div>
      </section>

      {err && <div className="text-red-500 text-sm">{err}</div>}
    </div>
  );
}
