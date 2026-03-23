import Link from "next/link";

type PaymentsPageProps = {
  searchParams: Promise<{ courseId?: string }>;
};

export default async function PaymentsPage({
  searchParams,
}: PaymentsPageProps) {
  const params = await searchParams;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <h1 className="text-3xl font-black lg:text-4xl">الدفع الإلكتروني</h1>
      <p className="mt-2 text-sm font-semibold text-white/70">
        بوابات الدفع المتاحة: فيزا، ماستركارد، أبل باي، مدى.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
          <h2 className="text-lg font-black">بيانات الدفع</h2>
          <div className="mt-4 space-y-3">
            <input
              placeholder="اسم حامل البطاقة"
              className="h-11 w-full rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none"
            />
            <input
              placeholder="رقم البطاقة"
              className="h-11 w-full rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="MM/YY"
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none"
              />
              <input
                placeholder="CVV"
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none"
              />
            </div>
            <input
              placeholder="كود الخصم"
              className="h-11 w-full rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none"
            />
            <button className="h-11 w-full rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-4 text-sm font-extrabold text-neutral-950">
              تأكيد الدفع وإصدار الفاتورة
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
          <h2 className="text-lg font-black">ملخص الطلب</h2>
          <p className="mt-3 text-sm font-semibold text-white/80">
            معرف الدورة: {params.courseId ?? "غير محدد"}
          </p>
          <p className="mt-2 text-sm font-semibold text-white/80">
            السعر قبل الخصم: 49 ر.س
          </p>
          <p className="mt-1 text-sm font-semibold text-white/80">
            الخصم: 0 ر.س
          </p>
          <p className="mt-4 text-lg font-black text-lime-300">
            الإجمالي: 49 ر.س
          </p>
          <p className="mt-3 text-xs font-semibold text-white/70">
            سيتم إنشاء فاتورة إلكترونية وإرسالها للبريد بعد نجاح الدفع.
          </p>

          <Link
            href="/dashboard"
            className="mt-5 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15"
          >
            الذهاب إلى لوحتي
          </Link>
        </section>
      </div>
    </main>
  );
}
