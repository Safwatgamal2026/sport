export default function AdminPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <h1 className="text-3xl font-black lg:text-4xl">لوحة تحكم المديرين</h1>
      <p className="mt-2 text-sm font-semibold text-white/70">
        إدارة المحتوى والمستخدمين والتقارير والتحليلات.
      </p>

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
          <h2 className="text-lg font-black">إدارة الدورات</h2>
          <ul className="mt-3 space-y-2 text-sm font-semibold text-white/80">
            <li>إضافة/تعديل/حذف الدورات</li>
            <li>التحكم في الجداول والمواعيد</li>
            <li>تعيين المدربين لكل دورة</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
          <h2 className="text-lg font-black">إدارة المستخدمين</h2>
          <ul className="mt-3 space-y-2 text-sm font-semibold text-white/80">
            <li>عرض المشتركين وتفاصيل التواصل</li>
            <li>إرسال رسائل جماعية</li>
            <li>تحديد صلاحيات المدربين</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
          <h2 className="text-lg font-black">التقارير والتحليلات</h2>
          <ul className="mt-3 space-y-2 text-sm font-semibold text-white/80">
            <li>إيرادات شهرية: 24,300 ر.س</li>
            <li>أكثر دورة تسجيلًا: السباحة الحرة</li>
            <li>نسبة الإشغال الحالية: 84%</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
