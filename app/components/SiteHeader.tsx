"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/courses", label: "الدورات" },
  { href: "/trainers", label: "المدربون" },
  { href: "/dashboard", label: "لوحتي" },
  { href: "/payments", label: "المدفوعات" },
  { href: "/admin", label: "الإدارة" },
  { href: "/contact", label: "اتصل بنا" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-50 bg-transparent"
          : "sticky top-0 z-50 border-b border-white/10 bg-transparent"
      }
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-white lg:text-2xl"
        >
          نبض<span className="text-emerald-300">الرياضة</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-white/80 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/login"
          className="hidden rounded-xl border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:border-emerald-300/50 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/30 lg:inline-flex"
        >
          تسجيل الدخول
        </Link>
      </div>

      <div className="px-4 py-2 lg:hidden">
        <nav className="mx-auto flex w-full max-w-7xl items-center gap-2 overflow-x-auto whitespace-nowrap text-xs font-bold text-white/80">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.href}`}
              href={item.href}
              className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-lg border border-white/20 px-3 py-1.5 font-extrabold text-white hover:text-emerald-200"
          >
            دخول
          </Link>
        </nav>
      </div>
    </header>
  );
}
