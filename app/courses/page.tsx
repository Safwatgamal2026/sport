import Image from "next/image";
import Link from "next/link";
import { getCoursesData } from "../data/courseService";

type CoursesPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    location?: string;
    ageGroup?: string;
    level?: string;
    day?: string;
    date?: string;
    period?: string;
    sort?: string;
  }>;
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const params = await searchParams;
  const courses = await getCoursesData();

  const categoryOptions = Array.from(new Set(courses.map((c) => c.category)));
  const locationOptions = Array.from(new Set(courses.map((c) => c.location)));
  const ageGroupOptions = Array.from(new Set(courses.map((c) => c.ageGroup)));
  const levelOptions = Array.from(new Set(courses.map((c) => c.level)));
  const dayOptions = Array.from(new Set(courses.map((c) => c.scheduleDay)));

  const q = params.q?.trim().toLowerCase() ?? "";
  const hasFilters = Boolean(
    q ||
    params.category ||
    params.location ||
    params.ageGroup ||
    params.level ||
    params.day ||
    params.date ||
    params.period ||
    params.sort,
  );

  let filtered = courses.filter((course) => {
    const matchesQuery =
      !q ||
      course.title.toLowerCase().includes(q) ||
      course.coach.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q) ||
      course.location.toLowerCase().includes(q);

    const matchesCategory =
      !params.category || course.category === params.category;
    const matchesLocation =
      !params.location || course.location.includes(params.location);
    const matchesAgeGroup =
      !params.ageGroup || course.ageGroup === params.ageGroup;
    const matchesLevel = !params.level || course.level === params.level;
    const matchesDay = !params.day || course.scheduleDay === params.day;
    const matchesDate = !params.date || course.scheduleDate === params.date;
    const matchesPeriod = !params.period || course.period === params.period;

    return (
      matchesQuery &&
      matchesCategory &&
      matchesLocation &&
      matchesAgeGroup &&
      matchesLevel &&
      matchesDay &&
      matchesDate &&
      matchesPeriod
    );
  });

  if (params.sort === "new") {
    filtered = [...filtered].reverse();
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-extrabold text-lime-300">الدورات</p>
            <h1 className="mt-1 text-3xl font-black sm:text-4xl lg:text-5xl">
              كل الدورات الرياضية
            </h1>
            <p className="mt-2 text-sm font-semibold text-white/70">
              {hasFilters
                ? `تم العثور على ${filtered.length} نتيجة حسب الفلاتر الحالية.`
                : "تصفح جميع الدورات المتاحة واحجز الدورة المناسبة لك."}
            </p>
          </div>

          <div className="flex gap-2">
            {hasFilters && (
              <Link
                href="/courses"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                مسح الفلاتر
              </Link>
            )}
            <Link
              href="/"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-extrabold text-white transition hover:bg-white/10"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>

        <form
          action="/courses"
          method="get"
          className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 backdrop-blur xl:p-5"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-extrabold text-white">تصفية متقدمة</p>
            <p className="text-xs font-semibold text-white/60">
              اختر أكثر من فلتر للوصول للدورة المناسبة بسرعة
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">بحث</span>
              <input
                name="q"
                defaultValue={params.q}
                placeholder="ابحث باسم الدورة أو المدرب"
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none transition focus:border-white/25"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">
                نوع الرياضة
              </span>
              <select
                name="category"
                defaultValue={params.category ?? ""}
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none transition focus:border-white/25"
              >
                <option value="">الكل</option>
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">
                الموقع
              </span>
              <select
                name="location"
                defaultValue={params.location ?? ""}
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none transition focus:border-white/25"
              >
                <option value="">الكل</option>
                {locationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">
                الفئة العمرية
              </span>
              <select
                name="ageGroup"
                defaultValue={params.ageGroup ?? ""}
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none transition focus:border-white/25"
              >
                <option value="">الكل</option>
                {ageGroupOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">
                المستوى
              </span>
              <select
                name="level"
                defaultValue={params.level ?? ""}
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none transition focus:border-white/25"
              >
                <option value="">الكل</option>
                {levelOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">اليوم</span>
              <select
                name="day"
                defaultValue={params.day ?? ""}
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none transition focus:border-white/25"
              >
                <option value="">الكل</option>
                {dayOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">
                التاريخ
              </span>
              <input
                name="date"
                defaultValue={params.date}
                type="date"
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none transition focus:border-white/25"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">
                الفترة
              </span>
              <select
                name="period"
                defaultValue={params.period ?? ""}
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none transition focus:border-white/25"
              >
                <option value="">الكل</option>
                <option value="صباحية">صباحية</option>
                <option value="مسائية">مسائية</option>
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">
                الترتيب
              </span>
              <select
                name="sort"
                defaultValue={params.sort ?? ""}
                className="h-11 rounded-xl border border-white/10 bg-neutral-950/70 px-3 text-sm font-semibold outline-none transition focus:border-white/25"
              >
                <option value="">افتراضي</option>
                <option value="new">الأحدث</option>
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="submit"
              className="h-11 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-5 text-sm font-extrabold text-neutral-950"
            >
              تطبيق الفلاتر
            </button>
            <Link
              href="/courses"
              className="inline-flex h-11 items-center rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-extrabold text-white transition hover:bg-white/10"
            >
              إعادة ضبط
            </Link>
          </div>
        </form>

        {hasFilters && (
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-white/80">
            {q && (
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                بحث: {params.q}
              </span>
            )}
            {params.category && (
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                نوع الرياضة: {params.category}
              </span>
            )}
            {params.location && (
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                الموقع: {params.location}
              </span>
            )}
            {params.ageGroup && (
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                العمر: {params.ageGroup}
              </span>
            )}
            {params.level && (
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                المستوى: {params.level}
              </span>
            )}
            {params.day && (
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                اليوم: {params.day}
              </span>
            )}
            {params.date && (
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                التاريخ: {params.date}
              </span>
            )}
            {params.period && (
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                الفترة: {params.period}
              </span>
            )}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-lg font-black">لا توجد نتائج مطابقة</p>
            <p className="mt-2 text-sm font-semibold text-white/70">
              غيّر كلمات البحث أو أزل بعض الفلاتر للحصول على نتائج أكثر.
            </p>
            <Link
              href="/courses"
              className="mt-4 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15"
            >
              عرض كل الدورات
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {filtered.map((course) => (
              <article
                key={course.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-black">{course.title}</h2>
                  <p className="mt-1 text-sm font-semibold text-white/70">
                    {course.coach} • {course.location}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-lg border border-white/10 bg-neutral-950/50 px-2.5 py-1">
                      {course.category}
                    </span>
                    <span className="rounded-lg border border-white/10 bg-neutral-950/50 px-2.5 py-1">
                      {course.level}
                    </span>
                    <span className="rounded-lg border border-white/10 bg-neutral-950/50 px-2.5 py-1">
                      {course.scheduleDay}
                    </span>
                    <span className="rounded-lg border border-white/10 bg-neutral-950/50 px-2.5 py-1">
                      {course.period}
                    </span>
                  </div>

                  <p className="mt-2 text-xs font-semibold text-white/70">
                    {course.scheduleDate} • {course.scheduleTime}
                  </p>
                  <p className="text-xs font-semibold text-white/70">
                    المقاعد الشاغرة: {course.seatsAvailable} /{" "}
                    {course.seatsTotal}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-base font-black">{course.price}</div>
                    <Link
                      href={`/courses/${course.id}`}
                      className="rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-3 py-2 text-sm font-extrabold text-neutral-950"
                    >
                      التفاصيل
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
