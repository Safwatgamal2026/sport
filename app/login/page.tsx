import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-10 sm:px-6 lg:py-14">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-7">
        <h1 className="text-2xl font-black lg:text-3xl">تسجيل الدخول</h1>
        <p className="mt-2 text-sm font-semibold text-white/70">
          الدخول بالبريد الإلكتروني أو عبر حسابات التواصل الاجتماعي.
        </p>

        <div className="mt-4 space-y-3">
          <input
            placeholder="البريد الإلكتروني"
            className="h-11 w-full rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none"
          />
          <input
            placeholder="كلمة المرور"
            type="password"
            className="h-11 w-full rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none"
          />
          <button className="h-11 w-full rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-4 text-sm font-extrabold text-neutral-950">
            دخول
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button className="h-11 rounded-xl border border-white/10 bg-white/5 text-sm font-extrabold">
              Google
            </button>
            <button className="h-11 rounded-xl border border-white/10 bg-white/5 text-sm font-extrabold">
              Apple
            </button>
          </div>
        </div>

        <Link
          href="/dashboard"
          className="mt-4 inline-flex text-sm font-bold text-lime-300"
        >
          الانتقال إلى لوحة المستخدم
        </Link>
      </div>
    </main>
  );
}
