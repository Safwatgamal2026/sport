import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrainerById, trainers } from "../../data/trainers";

type TrainerProfilePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return trainers.map((trainer) => ({ id: trainer.id }));
}

export default async function TrainerProfilePage({
  params,
}: TrainerProfilePageProps) {
  const { id } = await params;
  const trainer = getTrainerById(id);

  if (!trainer) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Link
          href="/trainers"
          className="inline-flex rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15"
        >
          العودة إلى المدربين
        </Link>

        <section className="mt-5 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-white/15 lg:col-span-4">
            <Image
              src={trainer.image}
              alt={trainer.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/65 to-transparent" />
          </div>

          <div className="sport-surface rounded-3xl border p-6 backdrop-blur lg:col-span-8 lg:p-8">
            <p className="text-xs font-extrabold text-emerald-300">
              الملف التعريفي
            </p>
            <h1 className="mt-2 text-3xl font-black sm:text-4xl">
              {trainer.name}
            </h1>
            <p className="mt-2 text-base text-white/85">{trainer.specialty}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs text-white/70">المدينة</p>
                <p className="mt-1 font-bold">{trainer.city}</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs text-white/70">الخبرة</p>
                <p className="mt-1 font-bold">
                  {trainer.experienceYears} سنوات
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs text-white/70">التقييم</p>
                <p className="mt-1 font-bold">{trainer.rating}/5</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-xs text-white/70">ساعات التدريب</p>
                <p className="mt-1 font-bold">{trainer.weeklyHours}</p>
              </div>
            </div>

            <p className="mt-5 leading-8 text-white/85">{trainer.bio}</p>
          </div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="sport-surface rounded-2xl border p-5 backdrop-blur">
            <h2 className="text-xl font-black">أبرز الإنجازات</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              {trainer.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </article>

          <article className="sport-surface rounded-2xl border p-5 backdrop-blur">
            <h2 className="text-xl font-black">الشهادات والاعتمادات</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              {trainer.certifications.map((cert) => (
                <li
                  key={cert}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                >
                  {cert}
                </li>
              ))}
            </ul>

            <Link
              href="/courses"
              className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-500 px-4 py-2 text-sm font-extrabold text-slate-950"
            >
              احجز دورة مع هذا المدرب
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
}
