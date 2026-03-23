import Image from "next/image";
import Link from "next/link";
import { trainers } from "../data/trainers";

export default function TrainersPage() {
  return (
    <main className="min-h-screen px-4 py-12 text-white sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-7xl rounded-3xl border border-white/15 bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-emerald-500/20 p-6 sm:p-8">
        <h1 className="text-3xl font-black sm:text-4xl">المدربون</h1>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-7 text-white/85">
          نخبة من المدربين المعتمدين بخبرات ميدانية حقيقية، مع أساليب تدريب
          عملية تناسب جميع المستويات.
        </p>
      </section>

      <section className="mx-auto mt-8 w-full max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <article
              key={trainer.id}
              className="sport-surface overflow-hidden rounded-2xl border backdrop-blur"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-extrabold">{trainer.name}</h2>
                <p className="mt-1 text-sm font-semibold text-white/75">
                  {trainer.specialty}
                </p>
                <p className="mt-3 text-xs font-bold text-emerald-300">
                  تقييم المدرب: {trainer.rating}/5
                </p>
                <p className="mt-1 text-xs text-white/75">
                  الخبرة: {trainer.experienceYears} سنوات
                </p>

                <Link
                  href={`/trainers/${trainer.id}`}
                  className="mt-4 inline-flex rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-xs font-extrabold text-white transition hover:bg-white/15"
                >
                  صفحة المدرب
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 grid w-full max-w-7xl gap-4 md:grid-cols-3">
        <article className="sport-surface rounded-2xl border p-5 backdrop-blur">
          <h3 className="text-lg font-black">منهجية التدريب</h3>
          <p className="mt-2 text-sm font-semibold text-white/80">
            خطط قصيرة المدى مع قياس أداء أسبوعي لتحسين النتائج.
          </p>
        </article>
        <article className="sport-surface rounded-2xl border p-5 backdrop-blur">
          <h3 className="text-lg font-black">السلامة أولًا</h3>
          <p className="mt-2 text-sm font-semibold text-white/80">
            تمارين مناسبة للحالة البدنية مع إرشادات واضحة لتقليل الإصابات.
          </p>
        </article>
        <article className="sport-surface rounded-2xl border p-5 backdrop-blur">
          <h3 className="text-lg font-black">متابعة شخصية</h3>
          <p className="mt-2 text-sm font-semibold text-white/80">
            توصيات فردية لكل متدرب حسب أهدافه ومستوى تقدمه.
          </p>
        </article>
      </section>

      <div className="mx-auto mt-8 w-full max-w-7xl">
        <Link
          href="/"
          className="inline-flex rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
