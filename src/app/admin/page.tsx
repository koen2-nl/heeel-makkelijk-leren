import { sampleLeaderboard, sampleReports } from '@/data/seed';

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Admin</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Beheer en rapportages</h1>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <p className="text-sm text-slate-500">Gebruikers</p>
          <p className="mt-3 text-3xl font-black text-slate-900">2.408</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-500">Lessen</p>
          <p className="mt-3 text-3xl font-black text-slate-900">184</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-500">Leertijd totaal</p>
          <p className="mt-3 text-3xl font-black text-slate-900">1.248h</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card">
          <h2 className="text-xl font-bold text-slate-900">Ranglijst</h2>
          <div className="mt-4 space-y-3">
            {sampleLeaderboard.map((entry) => (
              <div key={entry.rank} className="flex items-center justify-between rounded-2xl border border-slate-200 p-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">#{entry.rank}</span>
                  <span className="font-semibold text-slate-800">{entry.name}</span>
                </div>
                <span className="text-sm text-slate-500">{entry.points} pts</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-slate-900">Rapportages</h2>
          <div className="mt-4 space-y-3">
            {sampleReports.map((report) => (
              <div key={report.id} className="rounded-2xl border border-slate-200 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">{report.reason}</p>
                  <span className="rounded-full bg-warning/10 px-2 py-1 text-[11px] font-semibold text-warning">{report.status}</span>
                </div>
                <p className="mt-2 text-sm text-slate-500">{report.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
