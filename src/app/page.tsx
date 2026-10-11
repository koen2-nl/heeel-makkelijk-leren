import Link from 'next/link';
import { sampleBadges, sampleLessons, sampleStats } from '@/data/seed';
import { StatCard } from '@/components/ui/StatCard';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-soft">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            MakkelijkLeren
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Leer elke dag een klein stapje verder.</h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            Verhoog je kennis met quizzen, dagelijkse doelen, streaks, badges en een moderne leerervaring voor alle leeftijden.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/auth/signup" className="rounded-full bg-white px-5 py-3 font-semibold text-primary">
              Gratis starten
            </Link>
            <Link href="/learn" className="rounded-full border border-white/30 px-5 py-3 font-semibold text-white">
              Bekijk lessen
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Overzicht</h2>
          <Link href="/dashboard" className="text-sm font-semibold text-primary">Naar dashboard</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sampleStats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} delta={stat.delta} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Aanbevolen lessen</h3>
            <Link href="/learn" className="text-sm font-semibold text-primary">Alles bekijken</Link>
          </div>
          <div className="space-y-4">
            {sampleLessons.map((lesson) => (
              <div key={lesson.id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{lesson.title}</p>
                  <p className="text-sm text-slate-500">{lesson.description}</p>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${lesson.status === 'published' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                  {lesson.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Badges</h3>
          <div className="mt-5 space-y-4">
            {sampleBadges.map((badge) => (
              <div key={badge.id} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-xl">{badge.icon}</div>
                <div>
                  <p className="font-semibold text-slate-900">{badge.name}</p>
                  <p className="text-sm text-slate-500">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
