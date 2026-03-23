export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <h1 className="text-3xl font-black lg:text-4xl">اتصل بنا</h1>
      <p className="mt-2 text-sm font-semibold text-white/70">
        للأسئلة والاستفسارات أو طلبات الشراكة، تواصل معنا عبر النموذج التالي.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
          <h2 className="text-lg font-black">نموذج الاستفسار</h2>
          <div className="mt-4 space-y-3">
            <input
              placeholder="الاسم الكامل"
              className="h-11 w-full rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none"
            />
            <input
              placeholder="البريد الإلكتروني"
              className="h-11 w-full rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none"
            />
            <textarea
              placeholder="اكتب رسالتك هنا"
              className="min-h-32 w-full rounded-xl border border-white/10 bg-neutral-950/70 px-3 py-3 text-sm font-semibold outline-none"
            />
            <button className="h-11 w-full rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-4 text-sm font-extrabold text-neutral-950">
              إرسال الرسالة
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
          <h2 className="text-lg font-black">التقييمات بعد انتهاء الدورة</h2>
          <p className="mt-3 text-sm font-semibold text-white/80">
            نمنح المشتركين نموذج تقييم للمدرب وجودة الدورة لتحسين التجربة
            باستمرار.
          </p>
          <ul className="mt-3 space-y-2 text-sm font-semibold text-white/80">
            <li>تقييم المحتوى من 1 إلى 5</li>
            <li>تقييم المدرب من 1 إلى 5</li>
            <li>ملاحظات واقتراحات مفتوحة</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
