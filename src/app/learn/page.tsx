import Link from 'next/link';
import { sampleLessons } from '@/data/seed';

export default function LearnPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Leren</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Ontdek lessen en oefeningen</h1>
        </div>
        <Link href="/quiz" className="btn btn-primary">Start quiz</Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sampleLessons.map((lesson) => (
          <div key={lesson.id} className="card">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-bold text-slate-900">{lesson.title}</p>
                <p className="mt-2 text-sm text-slate-600">{lesson.description}</p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${lesson.status === 'published' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                {lesson.status}
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">12 vragen</span>
              <Link href="/quiz" className="btn btn-outline">Openen</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
