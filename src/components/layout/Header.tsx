'use client';

import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/learn', label: 'Leren' },
  { href: '/creator', label: 'Maker' },
  { href: '/admin', label: 'Admin' },
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight text-primary">
          MakkelijkLeren
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
            Inloggen
          </Link>
          <Link href="/auth/signup" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft">
            Aanmelden
          </Link>
        </div>
      </div>
    </header>
  );
}
