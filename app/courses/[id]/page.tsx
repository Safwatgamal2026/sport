import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookNowButton from "./BookNowButton";
import { getCourseById, getCoursesData } from "../../data/courseService";

type CourseDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCoursesData();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl p-6 sm:p-8 lg:p-10">
      <Link
        href="/courses"
        className="inline-flex text-sm font-bold text-lime-300 hover:text-lime-200"
      >
        العودة إلى الدورات
      </Link>

      <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-8 lg:p-7">
          <p className="text-xs font-extrabold text-lime-300">تفاصيل الدورة</p>
          <h1 className="mt-2 text-2xl font-black text-white lg:text-3xl">
            {course.title}
          </h1>
          <p className="mt-3 text-sm font-semibold text-white/70">
            {course.description}
          </p>

          <div className="mt-5 grid gap-3 text-sm font-semibold text-white/80 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-neutral-950/50 p-3">
              المستوى: {course.level}
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/50 p-3">
              الفئة العمرية: {course.ageGroup}
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/50 p-3">
              الموقع: {course.location}
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/50 p-3">
              السعر: {course.price}
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/50 p-3">
              الموعد: {course.scheduleDay} - {course.scheduleDate}
            </div>
            <div className="rounded-xl border border-white/10 bg-neutral-950/50 p-3">
              الفترة: {course.period} ({course.scheduleTime})
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-neutral-950/50 p-3 text-sm font-semibold text-white/80">
            المقاعد الشاغرة: {course.seatsAvailable} من {course.seatsTotal}
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-cyan-900/30">
            {course.introMediaType === "video" ? (
              <video
                className="h-64 w-full object-cover"
                controls
                preload="metadata"
              >
                <source src={course.introMediaUrl} type="video/mp4" />
              </video>
            ) : (
              <div className="relative h-64 w-full">
                <Image
                  src={course.introMediaUrl}
                  alt="صورة تعريفية"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur lg:col-span-4 lg:p-6">
          <p className="text-xs font-extrabold text-lime-300">بيانات المدرب</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image
                src={course.coachImage}
                alt={course.coach}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-black">{course.coach}</p>
              <p className="text-xs font-semibold text-white/70">مدرب الدورة</p>
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-sm font-semibold text-white/80">
            {course.coachQualifications.map((q) => (
              <li
                key={q}
                className="rounded-lg border border-white/10 bg-neutral-950/50 px-3 py-2"
              >
                {q}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <BookNowButton
              courseId={course.id}
              seatsAvailable={course.seatsAvailable}
              isFree={course.isFree}
            />
          </div>

          {course.seatsAvailable === 0 && (
            <p className="mt-3 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-extrabold text-amber-200">
              مكتمل العدد - يمكنك الانضمام إلى قائمة الانتظار.
            </p>
          )}
        </aside>
      </div>
    </main>
  );
}
