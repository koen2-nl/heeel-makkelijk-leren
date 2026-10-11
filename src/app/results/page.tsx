export default function ResultsPage() {
  const score = 85;
  const correct = 17;
  const total = 20;
  const time = '00:42';

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Resultaten</p>
      <h1 className="mt-2 text-3xl font-black text-slate-900">Je quiz is afgerond</h1>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="card">
          <p className="text-sm text-slate-500">Score</p>
          <p className="mt-2 text-3xl font-black text-slate-900">{score}%</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-500">Goed</p>
          <p className="mt-2 text-3xl font-black text-slate-900">{correct}</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-500">Leertijd</p>
          <p className="mt-2 text-3xl font-black text-slate-900">{time}</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
        Je hebt {correct} van de {total} vragen correct beantwoord. Je streak blijft actief en je dagelijkse doel is bijgewerkt.
      </div>

      <div className="mt-8 flex gap-3">
        <a href="/quiz" className="btn btn-primary">Opnieuw oefenen</a>
        <a href="/dashboard" className="btn btn-outline">Terug naar dashboard</a>
      </div>
    </div>
  );
}
