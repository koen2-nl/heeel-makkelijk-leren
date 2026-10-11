export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Resultaten</p>
      <h1 className="mt-2 text-3xl font-black text-slate-900">Je quiz is afgerond</h1>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="card">
          <p className="text-sm text-slate-500">Score</p>
          <p className="mt-2 text-3xl font-black text-slate-900">85%</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-500">Goed</p>
          <p className="mt-2 text-3xl font-black text-slate-900">17</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-500">Leertijd</p>
          <p className="mt-2 text-3xl font-black text-slate-900">00:42</p>
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <button className="btn btn-primary">Opnieuw oefenen</button>
        <button className="btn btn-outline">Terug naar dashboard</button>
      </div>
    </div>
  );
}
