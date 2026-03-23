import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-12 text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-12 lg:items-center">
        <div className="sport-surface rounded-3xl border p-6 backdrop-blur sm:p-8 lg:col-span-7">
          <p className="text-xs font-extrabold text-emerald-300">من نحن</p>
          <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">
            منصة رياضية عربية لبناء مجتمع نشط وصحي
          </h1>
          <p className="mt-4 text-sm font-semibold leading-7 text-white/80">
            نبض الرياضة تربط المتدربين بأفضل البرامج والمدربين في مدن مختلفة
            وعبر التدريب عن بُعد، مع تجربة حجز واضحة، تقييمات حقيقية، ومحتوى
            تدريبي مبني على النتائج.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-2xl font-black text-emerald-300">54+</p>
              <p className="text-xs font-bold text-white/75">برنامج تدريبي</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-2xl font-black text-cyan-300">20+</p>
              <p className="text-xs font-bold text-white/75">مدرب معتمد</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
              <p className="text-2xl font-black text-lime-300">4.9</p>
              <p className="text-xs font-bold text-white/75">متوسط التقييم</p>
            </div>
          </div>
        </div>

        <div className="relative h-72 overflow-hidden rounded-3xl border border-white/15 lg:col-span-5 lg:h-full lg:min-h-[360px]">
          <Image
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1400&auto=format&fit=crop"
            alt="فريق رياضي يتدرب"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="sport-surface rounded-2xl border p-5 backdrop-blur">
            <h2 className="text-lg font-black">رؤيتنا</h2>
            <p className="mt-2 text-sm font-semibold text-white/80">
              أن تكون الرياضة اليومية أسلوب حياة سهل الوصول لكل شخص في المنطقة.
            </p>
          </article>
          <article className="sport-surface rounded-2xl border p-5 backdrop-blur">
            <h2 className="text-lg font-black">رسالتنا</h2>
            <p className="mt-2 text-sm font-semibold text-white/80">
              تقديم تجربة تدريب موثوقة ومرنة وممتعة تدعم الالتزام والنتائج.
            </p>
          </article>
          <article className="sport-surface rounded-2xl border p-5 backdrop-blur">
            <h2 className="text-lg font-black">قيمنا</h2>
            <p className="mt-2 text-sm font-semibold text-white/80">
              الاحترافية، الشفافية، السلامة، وتمكين المجتمع الرياضي العربي.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl rounded-3xl border border-white/15 bg-gradient-to-r from-cyan-500/20 via-emerald-500/15 to-lime-400/20 p-6 sm:p-8">
        <h2 className="text-2xl font-black">رحلتنا في 3 مراحل</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <p className="text-sm font-extrabold text-cyan-300">2024</p>
            <p className="mt-1 text-sm font-semibold text-white/80">
              إطلاق المنصة بنواة تدريبية أساسية.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <p className="text-sm font-extrabold text-emerald-300">2025</p>
            <p className="mt-1 text-sm font-semibold text-white/80">
              التوسع إلى مدن جديدة وإطلاق الحجز الفوري.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
            <p className="text-sm font-extrabold text-lime-300">2026</p>
            <p className="mt-1 text-sm font-semibold text-white/80">
              إضافة تحليلات أداء وتجربة مخصصة بالذكاء.
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15"
        >
          العودة للرئيسية
        </Link>
      </section>
    </main>
  );
}
