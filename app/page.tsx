import Image from "next/image";
import Link from "next/link";
import type { Course } from "./data/courses";
import { getCoursesData } from "./data/courseService";

type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
};

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
};

const SPORT_TYPES = [
  "كرة القدم",
  "السباحة",
  "اليوغا",
  "كرة السلة",
  "التنس",
  "الجري",
  "الكروس فيت",
  "فنون قتالية",
] as const;

const LOCATIONS = [
  "عن بُعد",
  "الرياض",
  "جدة",
  "الدمام",
  "المدينة المنورة",
] as const;

const AGE_GROUPS = [
  "أطفال (6-12)",
  "مراهقون (13-17)",
  "بالغون (18+)",
  "جميع الأعمار",
] as const;

const SKILL_LEVELS = ["مبتدئ", "متوسط", "متقدم", "احترافي"] as const;

const DAYS = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
] as const;

const PERIODS = ["صباحية", "مسائية"] as const;

const categories: Category[] = [
  {
    id: "cat1",
    name: "كرة القدم",
    count: 48,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 12c0-4.418 3.582-8 8-8 1.35 0 2.62.334 3.735.925L6.925 15.735A7.96 7.96 0 0 1 6 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M18 12c0 4.418-3.582 8-8 8-1.35 0-2.62-.334-3.735-.925L17.075 8.265A7.96 7.96 0 0 1 18 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M8.5 10.5l5 5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "cat2",
    name: "السباحة",
    count: 26,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 17c2.5 2 5.5 2 8 0 2.5 2 5.5 2 8 0 1 .8 2.2 1.3 3.5 1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M7 10.5c2-2.5 4.2-3.8 6.5-3.8 2.2 0 3.8 1 5 2.8"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M12 7.5l-1-2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "cat3",
    name: "اليوغا",
    count: 34,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M7 22c1-4 2.8-6 5-6s4 2 5 6"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M12 8v8" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M6 14c2.2-2 4.2-3 6-3s3.8 1 6 3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    id: "cat4",
    name: "كرة السلة",
    count: 19,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M4.5 7.5c4.5 2 10.5 7.5 15 9"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M6 18c2-4.5 7.5-10.5 9-15"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    id: "cat5",
    name: "التنس",
    count: 12,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 14c3 3 7 4 10 1s2-7-1-10-7-2-10 1-2 7 1 10Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M6 18l-3 3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 17l2 2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    id: "cat6",
    name: "الكروس فيت",
    count: 22,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 8h10M7 16h10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M5 10v4M19 10v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M9 6v12M15 6v12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "جوردان مايلز",
    role: "لاعب كرة قدم هاوٍ",
    quote:
      "التمارين قوية لكن منظمة جدًا. تحسن زمن السرعة عندي خلال 3 أسابيع وصرت ألعب بثقة أكبر.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "كاميلا نغوين",
    role: "مبتدئة في الترايثلون",
    quote:
      "الفلاتر سهّلت علي إيجاد حصص قريبة مني. المدربين ممتازين وتجربة المنصة احترافية جدًا.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t3",
    name: "حسن السيد",
    role: "موظف بدوام كامل",
    quote:
      "حصص المرونة في نهاية الأسبوع صارت جزءًا ثابتًا من روتيني. واجهة نظيفة وواضحة بدون تعقيد.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const classes =
    "inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-5 py-3 text-sm font-extrabold text-neutral-950 shadow-lg shadow-emerald-500/20 ring-1 ring-white/10 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-300";
  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
}

function GhostButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const classes =
    "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30";
  if (href)
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  return <button className={classes}>{children}</button>;
}

function SelectField({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  options: readonly string[];
  defaultValue?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold tracking-wide text-white/75">
        {label}
      </span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="h-11 rounded-xl border border-white/15 bg-white/10 px-3 text-sm font-semibold text-white outline-none ring-0 backdrop-blur transition focus:border-emerald-300/50 focus:bg-white/15"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-sky-950">
            {opt === "" ? "الكل" : opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function SearchBar() {
  return (
    <form
      action="/courses"
      method="get"
      className="rounded-3xl border border-white/20 bg-gradient-to-b from-white/18 to-white/8 p-4 shadow-2xl shadow-sky-950/30 backdrop-blur-xl sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <p className="text-sm font-extrabold text-white">بحث سريع</p>
          <p className="mt-1 text-xs font-semibold text-white/65">
            اختر المعايير واضغط بحث لعرض أفضل النتائج
          </p>
        </div>
        <Link
          href="/courses"
          className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1.5 text-xs font-bold text-emerald-100 transition hover:bg-white/15 hover:text-white"
        >
          عرض كل الدورات
        </Link>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        <div className="sm:col-span-2 xl:col-span-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-bold tracking-wide text-white/75">
              بحث
            </span>
            <div className="relative">
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M16.5 16.5 21 21"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                name="q"
                placeholder="ابحث عن دورة، مدرب، نادي..."
                className="h-11 w-full rounded-xl border border-white/15 bg-white/10 pr-10 pl-3 text-sm font-semibold text-white placeholder:text-white/45 outline-none backdrop-blur transition focus:border-emerald-300/50 focus:bg-white/15"
              />
            </div>
          </label>
        </div>

        <div>
          <SelectField
            label="نوع الرياضة"
            name="category"
            options={["", ...SPORT_TYPES]}
            defaultValue=""
          />
        </div>

        <div>
          <SelectField
            label="الموقع"
            name="location"
            options={["", ...LOCATIONS]}
            defaultValue=""
          />
        </div>

        <div>
          <SelectField
            label="الفئة العمرية"
            name="ageGroup"
            options={["", ...AGE_GROUPS]}
            defaultValue=""
          />
        </div>

        <div>
          <SelectField
            label="المستوى"
            name="level"
            options={["", ...SKILL_LEVELS]}
            defaultValue=""
          />
        </div>

        <div>
          <SelectField
            label="اليوم"
            name="day"
            options={["", ...DAYS]}
            defaultValue=""
          />
        </div>

        <div>
          <SelectField
            label="الفترة"
            name="period"
            options={["", ...PERIODS]}
            defaultValue=""
          />
        </div>

        <div className="flex flex-wrap items-end gap-2 sm:col-span-2 xl:col-span-6">
          <button
            type="submit"
            className="mt-1 h-11 rounded-xl bg-gradient-to-r from-emerald-300 to-cyan-300 px-5 text-sm font-extrabold text-slate-900 shadow-lg shadow-cyan-900/25 transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            ابحث الآن
          </button>
          <Link
            href="/courses"
            className="mt-1 inline-flex h-11 items-center rounded-xl border border-white/15 bg-white/10 px-4 text-sm font-bold text-white transition hover:bg-white/15"
          >
            تصفية متقدمة
          </Link>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3">
        <Badge>حجز سريع</Badge>
        <Badge>مدربون موثقون</Badge>
        <Badge>مواعيد مرنة</Badge>
      </div>
    </form>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
      <div className="relative h-44 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/15 to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-neutral-950/60 px-3 py-1 text-xs font-extrabold text-white ring-1 ring-white/10">
            {course.category}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/10">
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base font-extrabold tracking-tight text-white">
          {course.title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-white/70">
          {course.coach} • {course.location}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-lg border border-white/10 bg-neutral-950/40 px-2.5 py-1 text-xs font-semibold text-white/80">
            {course.ageGroup}
          </span>
          <span className="rounded-lg border border-white/10 bg-neutral-950/40 px-2.5 py-1 text-xs font-semibold text-white/80">
            {course.time}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-black text-white">{course.price}</div>
          <Link
            href={`/courses/${course.id}`}
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-extrabold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/25"
          >
            عرض التفاصيل
          </Link>
        </div>
      </div>
    </article>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/courses?category=${encodeURIComponent(category.name)}`}
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-white/10 text-white/90 transition group-hover:brightness-110">
          {category.icon}
        </div>
        <div>
          <div className="text-sm font-extrabold text-white">
            {category.name}
          </div>
          <div className="text-xs font-semibold text-white/60">
            {category.count} دورة
          </div>
        </div>
      </div>
      <span className="text-white/60 transition group-hover:text-white">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 18 15 12 9 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} من 5 نجوم`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rating;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${filled ? "text-lime-300" : "text-white/20"}`}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      })}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-white/10">
            <Image
              src={t.avatar}
              alt={t.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <figcaption className="text-sm font-extrabold text-white">
              {t.name}
            </figcaption>
            <div className="text-xs font-semibold text-white/60">{t.role}</div>
          </div>
        </div>
        <Stars rating={t.rating} />
      </div>
      <blockquote className="mt-4 text-sm font-medium leading-relaxed text-white/80">
        “{t.quote}”
      </blockquote>
    </figure>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950" id="contact">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-black tracking-tight text-white">
              نبض<span className="text-lime-300">الرياضة</span>
            </div>
            <p className="mt-3 text-sm font-medium text-white/60">
              منصة عربية حديثة لاكتشاف البرامج الرياضية، المدربين، والحصص
              المناسبة لك.
            </p>
          </div>

          <div>
            <div className="text-sm font-extrabold text-white">التواصل</div>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-white/70">
              <li>البريد: hello@pulsetrain.io</li>
              <li>الهاتف: +966 55 000 0000</li>
              <li>الأوقات: من السبت إلى الخميس، 8 ص - 8 م</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold text-white">عن المنصة</div>
            <ul className="mt-3 space-y-2 text-sm font-semibold text-white/70">
              <li>
                <Link className="hover:text-white" href="/about">
                  من نحن
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/trainers">
                  المدربون
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/pricing">
                  الأسعار
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/support">
                  الدعم
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold text-white">
              وسائل التواصل
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-extrabold text-white/90 hover:bg-white/10"
              >
                X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-extrabold text-white/90 hover:bg-white/10"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-extrabold text-white/90 hover:bg-white/10"
              >
                يوتيوب
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-extrabold text-white/90 hover:bg-white/10"
              >
                تيك توك
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm font-semibold text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} نبض الرياضة. جميع الحقوق محفوظة.
          </div>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/privacy">
              الخصوصية
            </Link>
            <Link className="hover:text-white" href="/terms">
              الشروط
            </Link>
            <Link className="hover:text-white" href="/cookies">
              ملفات الارتباط
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default async function HomePage() {
  const featuredCourses = (await getCoursesData()).slice(0, 4);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=2000&auto=format&fit=crop"
            alt="خلفية رياضية حماسية"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/75 via-neutral-950/45 to-neutral-950" />
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <Container>
          <div className="relative z-10 grid gap-10 pb-14 pt-24 lg:grid-cols-12 lg:items-end lg:pb-20 lg:pt-32">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Badge>برامج جديدة لعام 2026</Badge>
                <Badge>تدريب حضوري + عن بُعد</Badge>
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                تدرّب بقوة. تحرّك بسرعة أكبر.{" "}
                <span className="bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text text-transparent">
                  ارتقِ بمستواك
                </span>{" "}
                مع نخبة المدربين.
              </h1>

              <p className="mt-4 max-w-xl text-base font-semibold leading-relaxed text-white/75 sm:text-lg">
                اكتشف دورات رياضية تناسب كل مستوى، مع بحث ذكي حسب نوع الرياضة،
                الموقع، الفئة العمرية، المستوى، والوقت.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryButton href="/courses">تصفح الدورات</PrimaryButton>
                <GhostButton href="#categories">استكشف التصنيفات</GhostButton>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-xl font-black text-white">120+</div>
                  <div className="text-xs font-semibold text-white/60">
                    دورة نشطة
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-xl font-black text-white">60+</div>
                  <div className="text-xs font-semibold text-white/60">
                    مدرب موثق
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-xl font-black text-white">4.9</div>
                  <div className="text-xs font-semibold text-white/60">
                    متوسط التقييم
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SearchBar />
            </div>
          </div>
        </Container>
      </section>

      <section id="featured" className="py-14 sm:py-16">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-lime-300/90">
                المميز
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                أفضل الدورات هذا الأسبوع
              </h2>
              <p className="mt-2 text-sm font-semibold text-white/60">
                حصص مختارة بعناية مع تقييمات مرتفعة وخطط تدريب واضحة.
              </p>
            </div>

            <Link
              className="hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-extrabold text-white hover:bg-white/10 sm:inline-flex"
              href="/courses"
            >
              عرض الكل
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </Container>
      </section>

      <section id="categories" className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-300/90">
                التصنيفات
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                اختر رياضتك
              </h2>
              <p className="mt-2 text-sm font-semibold text-white/60">
                من الرياضات الجماعية عالية الحماس إلى المرونة والتعافي، اختر
                تصنيفك وابدأ التدريب.
              </p>

              <div className="mt-6 inline-flex rounded-2xl border border-white/10 bg-gradient-to-r from-lime-400/10 to-emerald-500/10 p-1">
                <Link
                  href="/courses?sort=popular"
                  className="rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold text-white"
                >
                  الأكثر طلبًا
                </Link>
                <Link
                  href="/courses?sort=new"
                  className="rounded-xl px-4 py-2 text-sm font-extrabold text-white/70 hover:text-white"
                >
                  جديد
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((cat) => (
                  <CategoryCard key={cat.id} category={cat} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="testimonials" className="py-14 sm:py-16">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-lime-300/90">
                آراء المتدربين
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                المتدربون يلاحظون الفرق
              </h2>
              <p className="mt-2 text-sm font-semibold text-white/60">
                تجارب حقيقية من مشتركين يتدربون أسبوعيًا عبر المنصة.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-6 backdrop-blur sm:p-8">
            <div className="grid gap-5 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                  جاهز لبناء روتين تدريبي ثابت؟
                </h3>
                <p className="mt-2 text-sm font-semibold text-white/70">
                  تصفح الدورات حسب الوقت والمستوى، ثم احفظ المفضلة للرجوع لها
                  لاحقًا.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <PrimaryButton href="/courses">ابدأ الآن</PrimaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
