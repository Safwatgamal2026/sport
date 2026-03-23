import { courses as localCourses, type Course } from "./courses";

type ApiCourse = {
  id: string;
  title: string;
  description: string;
  price_cents: number;
  currency: string;
  seats_total: number;
  seats_available: number;
};

type ApiResponse = {
  data: ApiCourse[];
};

const API_BASE_URL =
  process.env.API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "http://localhost:3001";

function inferCategory(title: string, description: string): string {
  const text = `${title} ${description}`.toLowerCase();

  if (text.includes("football") || text.includes("كرة")) return "كرة القدم";
  if (text.includes("swim") || text.includes("سباح")) return "السباحة";
  if (text.includes("yoga") || text.includes("يوغا")) return "اليوغا";
  if (text.includes("basket") || text.includes("سلة")) return "كرة السلة";
  if (text.includes("tennis") || text.includes("تنس")) return "التنس";

  return "لياقة عامة";
}

const categoryMeta: Record<
  string,
  {
    coach: string;
    coachQualifications: string[];
    coachImage: string;
    location: string;
    ageGroup: string;
    level: string;
    scheduleDay: string;
    period: "صباحية" | "مسائية";
    scheduleTime: string;
  }
> = {
  "كرة القدم": {
    coach: "الكابتن مالك",
    coachQualifications: ["مدرب معتمد AFC B", "أخصائي إعداد بدني"],
    coachImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
    location: "الرياض",
    ageGroup: "شباب",
    level: "متوسط",
    scheduleDay: "الإثنين",
    period: "مسائية",
    scheduleTime: "18:00 - 19:30",
  },
  السباحة: {
    coach: "المدربة صوفيا",
    coachQualifications: ["مدربة سباحة معتمدة", "إنقاذ مائي"],
    coachImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop",
    location: "جدة",
    ageGroup: "كبار سن",
    level: "مبتدئ",
    scheduleDay: "الأربعاء",
    period: "صباحية",
    scheduleTime: "09:00 - 10:30",
  },
  اليوغا: {
    coach: "المدربة عائشة",
    coachQualifications: ["مدربة يوغا RYT-500", "تأهيل إصابات رياضية"],
    coachImage:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=900&auto=format&fit=crop",
    location: "عن بُعد",
    ageGroup: "جميع الأعمار",
    level: "مبتدئ",
    scheduleDay: "السبت",
    period: "صباحية",
    scheduleTime: "08:00 - 09:00",
  },
  "كرة السلة": {
    coach: "الكابتن داريوس",
    coachQualifications: ["مدرب فئات ناشئين", "لاعب دوري سابق"],
    coachImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop",
    location: "الدمام",
    ageGroup: "أطفال",
    level: "مبتدئ",
    scheduleDay: "الخميس",
    period: "مسائية",
    scheduleTime: "17:00 - 18:30",
  },
  التنس: {
    coach: "الكابتن سامر",
    coachQualifications: ["مدرب تنس معتمد"],
    coachImage:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=900&auto=format&fit=crop",
    location: "الرياض",
    ageGroup: "شباب",
    level: "متوسط",
    scheduleDay: "الجمعة",
    period: "مسائية",
    scheduleTime: "16:00 - 17:30",
  },
  "لياقة عامة": {
    coach: "مدرب معتمد",
    coachQualifications: ["مدرب لياقة معتمد"],
    coachImage:
      "https://images.unsplash.com/photo-1567013127542-490d757e6349?q=80&w=900&auto=format&fit=crop",
    location: "عن بُعد",
    ageGroup: "جميع الأعمار",
    level: "مبتدئ",
    scheduleDay: "الأحد",
    period: "مسائية",
    scheduleTime: "19:00 - 20:00",
  },
};

function getCategoryImage(category: string): string {
  const localMatch = localCourses.find(
    (course) => course.category === category,
  );
  return (
    localMatch?.image ||
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
  );
}

function mapApiCourse(course: ApiCourse): Course {
  const category = inferCategory(course.title, course.description);
  const meta = categoryMeta[category] ?? categoryMeta["لياقة عامة"];
  const amount = Number.isFinite(course.price_cents)
    ? Math.round(course.price_cents / 100)
    : 0;
  const currencyText =
    course.currency?.toUpperCase() === "USD" ? "دولار" : "ر.س";
  const isFree = amount <= 0;

  return {
    id: course.id,
    title: course.title,
    category,
    coach: meta.coach,
    coachQualifications: meta.coachQualifications,
    coachImage: meta.coachImage,
    location: meta.location,
    ageGroup: meta.ageGroup,
    level: meta.level,
    scheduleDay: meta.scheduleDay,
    scheduleDate: new Date().toISOString().slice(0, 10),
    period: meta.period,
    scheduleTime: meta.scheduleTime,
    price: isFree ? "مجاني" : `${amount} ${currencyText}`,
    isFree,
    seatsAvailable: course.seats_available,
    seatsTotal: course.seats_total,
    image: getCategoryImage(category),
    introMediaType: "video",
    introMediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: course.description,
  };
}

async function fetchApiCourses(): Promise<Course[]> {
  const response = await fetch(`${API_BASE_URL}/api/courses`, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch API courses: ${response.status}`);
  }

  const json = (await response.json()) as ApiResponse;
  if (!json?.data?.length) {
    return [];
  }

  return json.data.map(mapApiCourse);
}

export async function getCoursesData(): Promise<Course[]> {
  try {
    const remoteCourses = await fetchApiCourses();
    if (remoteCourses.length > 0) {
      const merged = [...remoteCourses, ...localCourses];
      const unique = new Map<string, Course>();
      for (const course of merged) {
        if (!unique.has(course.id)) {
          unique.set(course.id, course);
        }
      }
      return Array.from(unique.values());
    }
  } catch {
    // fall back to local data if API is unavailable
  }

  return localCourses;
}

export async function getCourseById(id: string): Promise<Course | undefined> {
  const allCourses = await getCoursesData();
  return allCourses.find((course) => course.id === id);
}
