export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p>Dashboard</p>
        <h1>Welkom terug</h1>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Dashboard</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Welkom terug</h1>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {sampleStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} delta={stat.delta} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {sampleGoals.map((goal) => (
          <GoalProgress key={goal.label} label={goal.label} value={goal.value} progress={goal.progress} />
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-xl font-bold text-slate-900">Recente activiteit</h2>
        <div className="mt-4 space-y-3">
          {['5 vragen beantwoord', 'Nieuwe streak gestart', 'Quiz afgerond: 
