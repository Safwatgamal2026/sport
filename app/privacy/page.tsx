import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-12 text-white sm:px-6">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h1 className="text-3xl font-black">سياسة الخصوصية</h1>
        <p className="mt-4 text-sm font-semibold leading-7 text-white/75">
          نحن نحترم خصوصيتك. يتم استخدام البيانات فقط لإدارة الحسابات والحجوزات
          وتحسين الخدمة.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
