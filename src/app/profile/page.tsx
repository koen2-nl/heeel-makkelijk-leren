export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Profiel</p>
      <h1 className="mt-2 text-3xl font-black text-slate-900">Jouw progressie</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="card">
          <p className="text-sm text-slate-500">Naam</p>
          <p className="mt-2 text-xl font-bold text-slate-900">Jan Jansen</p>
        </div>
        <div className="card">
          <p className="text-sm text-slate-500">Rol</p>
          <p className="mt-2 text-xl font-bold text-slate-900">User</p>
        </div>
      </div>
    </div>
  );
}
