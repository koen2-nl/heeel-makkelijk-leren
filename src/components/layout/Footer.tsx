'use client';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 MakkelijkLeren</p>
        <div className="flex gap-5">
          <span>Privacy</span>
          <span>Voorwaarden</span>
          <span>Hulp</span>
        </div>
      </div>
    </footer>
  );
}
