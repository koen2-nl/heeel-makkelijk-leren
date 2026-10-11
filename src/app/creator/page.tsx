'use client';

import { useState } from 'react';
import { sampleLessons } from '@/data/seed';

export default function CreatorPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const lessonCount = sampleLessons.length;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Content maker</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Nieuwe lessen aanmaken</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="card space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Les titel</label>
            <input className="input" placeholder="Bijvoorbeeld: Basisrekenen" value={title} onChange={(event) => setTitle(event.target.value)} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Beschrijving</label>
            <textarea className="input min-h-[120px]" placeholder="Beschrijf wat deze les leert..." value={description} onChange={(event) => setDescription(event.target.value)} />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Vragen</label>
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
              Voeg meerdere vragen toe met verschillende vraagtypes zoals multiple choice, invulzin, matching en rekenen.
            </div>
          </div>

          <div className="flex gap-3">
            <button className="btn btn-outline">Opslaan als concept</button>
            <button className="btn btn-primary">Publiceren</button>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-slate-900">Snelle tools</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="rounded-xl bg-slate-50 p-3">Tekstblok</div>
            <div className="rounded-xl bg-slate-50 p-3">Afbeelding toevoegen</div>
            <div className="rounded-xl bg-slate-50 p-3">Uitleg</div>
            <div className="rounded-xl bg-slate-50 p-3">Vraag importeren</div>
          </div>

          <div className="mt-6 rounded-2xl bg-primary/5 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Aangemaakt</p>
            <p className="mt-2 text-2xl font-black text-slate-900">{lessonCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
