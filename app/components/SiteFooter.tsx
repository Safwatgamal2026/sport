import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-gradient-to-r from-sky-900/40 via-cyan-900/30 to-emerald-900/35 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-6 text-sm font-semibold text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} نبض الرياضة. جميع الحقوق محفوظة.</p>

        <div className="flex flex-wrap items-center gap-5">
          <Link className="hover:text-white" href="/privacy">
            الخصوصية
          </Link>
          <Link className="hover:text-white" href="/terms">
            الشروط
          </Link>
          <Link className="hover:text-white" href="/cookies">
            الكوكيز
          </Link>
          <Link className="hover:text-white" href="/support">
            الدعم
          </Link>
        </div>
      </div>
    </footer>
  );
}
