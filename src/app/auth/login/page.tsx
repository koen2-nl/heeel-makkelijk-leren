import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Inloggen</p>
      <h1 className="mt-3 text-3xl font-black text-slate-900">Welkom terug</h1>

      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
          <input className="input" type="email" placeholder="jij@email.nl" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Wachtwoord</label>
          <input className="input" type="password" placeholder="••••••••" />
        </div>

        <button type="submit" className="btn btn-primary w-full">Inloggen</button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-600">
        Nog geen account?{' '}
        <Link href="/auth/signup" className="font-semibold text-primary">Maak een account</Link>
      </div>
    </div>
  );
}
