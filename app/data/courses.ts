export type Course = {
  id: string;
  title: string;
  category: string;
  coach: string;
  location: string;
  coachQualifications: string[];
  coachImage: string;
  ageGroup: string;
  level: string;
  scheduleDay: string;
  scheduleDate: string;
  period: "صباحية" | "مسائية";
  scheduleTime: string;
  price: string;
  isFree: boolean;
  seatsAvailable: number;
  seatsTotal: number;
  image: string;
  introMediaType: "image" | "video";
  introMediaUrl: string;
  description: string;
};

const seedCourses: Course[] = [
  {
    id: "course-1",
    title: "تطوير السرعة والانفجار لكرة القدم",
    category: "كرة القدم",
    coach: "الكابتن مالك",
    coachQualifications: [
      "مدرب معتمد AFC B",
      "خبرة 12 سنة",
      "أخصائي إعداد بدني",
    ],
    coachImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
    location: "الرياض - صالة النخبة",
    ageGroup: "شباب",
    level: "متوسط",
    scheduleDay: "الإثنين",
    scheduleDate: "2026-04-20",
    period: "مسائية",
    scheduleTime: "18:00 - 19:30",
    price: "49 ر.س",
    isFree: false,
    seatsAvailable: 7,
    seatsTotal: 20,
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1600&auto=format&fit=crop",
    introMediaType: "video",
    introMediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "برنامج عملي يركز على الانطلاق، التوازن، والسرعات القصيرة مع تدريبات ميدانية مكثفة.",
  },
  {
    id: "course-2",
    title: "تقنيات السباحة الحرة بسرعة أعلى",
    category: "السباحة",
    coach: "المدربة صوفيا",
    coachQualifications: ["مدربة سباحة معتمدة", "إنقاذ مائي", "خبرة 9 سنوات"],
    coachImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=900&auto=format&fit=crop",
    location: "جدة - نادي الموج",
    ageGroup: "كبار سن",
    level: "مبتدئ",
    scheduleDay: "الأربعاء",
    scheduleDate: "2026-04-22",
    period: "صباحية",
    scheduleTime: "09:00 - 10:30",
    price: "39 ر.س",
    isFree: false,
    seatsAvailable: 10,
    seatsTotal: 16,
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=1600&auto=format&fit=crop",
    introMediaType: "image",
    introMediaUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop",
    description:
      "حصة تقنية لتحسين التنفس وحركة الذراع والاندفاع داخل الماء بخطة تطور تدريجية.",
  },
  {
    id: "course-3",
    title: "يوغا المرونة والتعافي للرياضيين",
    category: "اليوغا",
    coach: "المدربة عائشة",
    coachQualifications: ["مدربة يوغا RYT-500", "تأهيل إصابات رياضية"],
    coachImage:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=900&auto=format&fit=crop",
    location: "عن بُعد",
    ageGroup: "جميع الأعمار",
    level: "مبتدئ",
    scheduleDay: "السبت",
    scheduleDate: "2026-04-25",
    period: "صباحية",
    scheduleTime: "08:00 - 09:00",
    price: "مجاني",
    isFree: true,
    seatsAvailable: 25,
    seatsTotal: 25,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop",
    introMediaType: "video",
    introMediaUrl: "https://www.w3schools.com/html/movie.mp4",
    description:
      "جلسات مرونة وتعافي لتقليل الإصابات وتحسين المدى الحركي بعد التمارين الشاقة.",
  },
  {
    id: "course-4",
    title: "مهارات المراوغة والإنهاء في السلة",
    category: "كرة السلة",
    coach: "الكابتن داريوس",
    coachQualifications: ["مدرب فئات ناشئين", "لاعب دوري سابق"],
    coachImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop",
    location: "الدمام - أكاديمية السلة",
    ageGroup: "أطفال",
    level: "مبتدئ",
    scheduleDay: "الخميس",
    scheduleDate: "2026-04-23",
    period: "مسائية",
    scheduleTime: "17:00 - 18:30",
    price: "45 ر.س",
    isFree: false,
    seatsAvailable: 0,
    seatsTotal: 18,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
    introMediaType: "image",
    introMediaUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop",
    description:
      "تدريبات مركزة على التحكم بالكرة والتوازن والإنهاء تحت الضغط التنافسي.",
  },
];

const categories = [
  {
    name: "كرة القدم",
    coaches: ["الكابتن مالك", "الكابتن فهد", "الكابتن نواف"],
    images: [
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "برنامج متدرج لتطوير المهارات الأساسية والتكتيكية مع متابعة الأداء أسبوعيًا.",
  },
  {
    name: "السباحة",
    coaches: ["المدربة صوفيا", "المدرب خالد", "المدربة ليان"],
    images: [
      "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "تدريبات تقنية لرفع الكفاءة في التنفس والحركة والانسيابية داخل الماء.",
  },
  {
    name: "اليوغا",
    coaches: ["المدربة عائشة", "المدربة نور", "المدرب سامي"],
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "جلسات تركّز على المرونة والتنفس والتعافي وتحسين جودة الحركة اليومية.",
  },
  {
    name: "كرة السلة",
    coaches: ["الكابتن داريوس", "الكابتن يزن", "الكابتن حسام"],
    images: [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "حصة عملية لتقوية التحكم بالكرة، الرؤية الميدانية، وإنهاء الهجمات بثبات.",
  },
  {
    name: "التنس",
    coaches: ["الكابتن سامر", "الكابتن ريان", "الكابتن يوسف"],
    images: [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595435742656-5272d0b3fa8b?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "تطوير الإرسال والاستقبال وتمركز القدمين مع تدريبات تنافسية قصيرة.",
  },
  {
    name: "الكروس فيت",
    coaches: ["المدرب راشد", "المدربة هيا", "المدرب أمين"],
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "برنامج عالي الكثافة يجمع القوة والتحمّل والرشاقة بخطة آمنة ومقننة.",
  },
  {
    name: "الجري",
    coaches: ["المدرب طلال", "المدربة سارة", "المدرب بدر"],
    images: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "خطط جري عملية لرفع السرعة والتحمل مع متابعة زمنية دورية وتحليل أداء.",
  },
  {
    name: "فنون قتالية",
    coaches: ["الكابتن مازن", "الكابتن زياد", "الكابتن عمر"],
    images: [
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "تدريب متوازن بين التقنية والانضباط الذهني وردّة الفعل في مواقف القتال.",
  },
] as const;

const locations = [
  "الرياض - صالة النخبة",
  "جدة - نادي الموج",
  "الدمام - أكاديمية السلة",
  "المدينة - مركز الأداء",
  "مكة - نادي القمة",
  "عن بُعد",
] as const;

const ageGroups = [
  "أطفال",
  "مراهقون",
  "شباب",
  "بالغون",
  "كبار سن",
  "جميع الأعمار",
] as const;

const levels = ["مبتدئ", "متوسط", "متقدم"] as const;
const days = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
] as const;
const times = [
  "07:00 - 08:00",
  "08:30 - 10:00",
  "16:00 - 17:30",
  "18:00 - 19:30",
  "20:00 - 21:30",
] as const;

function pad2(value: number): string {
  return value.toString().padStart(2, "0");
}

function buildDate(offset: number): string {
  const baseMonth = 5;
  const day = (offset % 28) + 1;
  return `2026-${pad2(baseMonth)}-${pad2(day)}`;
}

function buildGeneratedCourses(count: number): Course[] {
  const generated: Course[] = [];

  for (let i = 0; i < count; i += 1) {
    const category = categories[i % categories.length];
    const coach = category.coaches[i % category.coaches.length];
    const level = levels[i % levels.length];
    const ageGroup = ageGroups[i % ageGroups.length];
    const day = days[i % days.length];
    const period: "صباحية" | "مسائية" = i % 2 === 0 ? "صباحية" : "مسائية";
    const date = buildDate(i + 1);
    const seatsTotal = 18 + (i % 8) * 2;
    const seatsAvailable = Math.max(0, seatsTotal - ((i * 3) % 14));
    const isFree = i % 11 === 0;
    const priceValue = 35 + (i % 9) * 7;

    generated.push({
      id: `course-${i + 5}`,
      title: `${category.name} - مجموعة ${i + 1}`,
      category: category.name,
      coach,
      coachQualifications: [
        "مدرب معتمد",
        "خبرة عملية في التدريب الرياضي",
        "متابعة أداء أسبوعية",
      ],
      coachImage:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop",
      location: locations[i % locations.length],
      ageGroup,
      level,
      scheduleDay: day,
      scheduleDate: date,
      period,
      scheduleTime: times[i % times.length],
      price: isFree ? "مجاني" : `${priceValue} ر.س`,
      isFree,
      seatsAvailable,
      seatsTotal,
      image: category.images[i % category.images.length],
      introMediaType: i % 3 === 0 ? "video" : "image",
      introMediaUrl:
        i % 3 === 0
          ? "https://www.w3schools.com/html/mov_bbb.mp4"
          : category.images[(i + 1) % category.images.length],
      description: category.description,
    });
  }

  return generated;
}

export const courses: Course[] = [...seedCourses, ...buildGeneratedCourses(50)];
