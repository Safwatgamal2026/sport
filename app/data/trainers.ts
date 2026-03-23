export type Trainer = {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experienceYears: number;
  rating: number;
  bio: string;
  achievements: string[];
  certifications: string[];
  weeklyHours: string;
  city: string;
};

export const trainers: Trainer[] = [
  {
    id: "malik",
    name: "الكابتن مالك",
    specialty: "كرة القدم والسرعة",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    experienceYears: 12,
    rating: 4.9,
    city: "الرياض",
    weeklyHours: "22 ساعة",
    bio: "مدرب متخصص في تطوير الانطلاق والرشاقة واتخاذ القرار تحت الضغط داخل الملعب.",
    achievements: [
      "تدريب أكثر من 300 لاعب ناشئ",
      "إعداد برامج سرعة لفرق تنافسية",
      "قيادة معسكرات تطوير فنية موسمية",
    ],
    certifications: ["AFC B", "شهادة إعداد بدني", "تحليل أداء"],
  },
  {
    id: "sofia",
    name: "المدربة صوفيا",
    specialty: "تقنيات السباحة",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    experienceYears: 9,
    rating: 4.8,
    city: "جدة",
    weeklyHours: "18 ساعة",
    bio: "خبيرة في تحسين التنفس والإيقاع داخل الماء مع خطط تصاعدية للمبتدئين والمتوسطين.",
    achievements: [
      "إعداد متدربين لبطولات محلية",
      "تصميم برامج سباحة علاجية",
      "ورش تقنية لحركة الذراع والدوران",
    ],
    certifications: ["مدرب سباحة معتمد", "إنقاذ مائي", "إسعافات أولية"],
  },
  {
    id: "aisha",
    name: "المدربة عائشة",
    specialty: "اليوغا والتعافي",
    image:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=1000&auto=format&fit=crop",
    experienceYears: 8,
    rating: 4.9,
    city: "عن بُعد",
    weeklyHours: "20 ساعة",
    bio: "تركز على تحسين المرونة والتوازن الذهني والتعافي بعد الأحمال التدريبية العالية.",
    achievements: [
      "بناء برامج تعافٍ للرياضيين",
      "جلسات جماعية أسبوعية منتظمة",
      "تقليل مؤشرات الإرهاق لدى المتدربين",
    ],
    certifications: ["RYT-500", "تأهيل إصابات رياضية", "تنفس علاجي"],
  },
  {
    id: "samer",
    name: "الكابتن سامر",
    specialty: "التنس والإعداد البدني",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1000&auto=format&fit=crop",
    experienceYears: 11,
    rating: 4.7,
    city: "الدمام",
    weeklyHours: "16 ساعة",
    bio: "مدرب تنس يدمج التقنية مع اللياقة لتحقيق أداء ثابت في المباريات الطويلة.",
    achievements: [
      "تطوير لاعبين لفئات تحت 18",
      "تصميم برامج إرسال واستقبال",
      "جلسات تحليل فيديو للمباريات",
    ],
    certifications: ["شهادة تدريب تنس", "Strength & Conditioning"],
  },
  {
    id: "raed",
    name: "الكابتن رائد",
    specialty: "كروس فيت والتحمل",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
    experienceYears: 10,
    rating: 4.8,
    city: "الرياض",
    weeklyHours: "24 ساعة",
    bio: "متخصص في برامج القوة الوظيفية والتحمل مع مراقبة دقيقة للتقدم الأسبوعي.",
    achievements: [
      "إدارة بطولات داخلية للكروس فيت",
      "إعداد خطط متقدمة للقدرة الهوائية",
      "تطوير برامج لياقة للمبتدئين",
    ],
    certifications: ["CrossFit Level 2", "CPR", "برمجة أحمال"],
  },
  {
    id: "layan",
    name: "المدربة ليان",
    specialty: "السباحة للأطفال",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
    experienceYears: 7,
    rating: 4.9,
    city: "جدة",
    weeklyHours: "15 ساعة",
    bio: "تركز على بناء الثقة في الماء للأطفال عبر أساليب تعليم مرحلية وآمنة.",
    achievements: [
      "تدريب أكثر من 200 طفل",
      "برامج سباحة صيفية موسمية",
      "تحسين ملحوظ في مهارات السلامة المائية",
    ],
    certifications: ["تعليم سباحة أطفال", "سلامة مائية", "إدارة مجموعات"],
  },
  {
    id: "haya",
    name: "المدربة هيا",
    specialty: "الجري وتقنيات التنفس",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
    experienceYears: 6,
    rating: 4.7,
    city: "المدينة",
    weeklyHours: "14 ساعة",
    bio: "مدربة جري تساعد على رفع الكفاءة الهوائية وتقليل الإصابات الناتجة عن الحمل الزائد.",
    achievements: [
      "قيادة مجموعات جري أسبوعية",
      "خطط تحسين زمن 5K و10K",
      "جلسات تصحيح أسلوب الجري",
    ],
    certifications: ["Running Coach", "إسعافات أولية"],
  },
  {
    id: "mazen",
    name: "الكابتن مازن",
    specialty: "فنون قتالية وانضباط ذهني",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    experienceYears: 13,
    rating: 4.9,
    city: "الدمام",
    weeklyHours: "21 ساعة",
    bio: "يركز على التقنية السليمة وردة الفعل والاتزان النفسي أثناء المنافسة.",
    achievements: [
      "تأهيل متدربين لبطولات وطنية",
      "إدارة معسكرات انضباط ذهني",
      "برامج دفاع عن النفس للمبتدئين",
    ],
    certifications: ["مدرب فنون قتالية", "تحكيم محلي", "سلامة رياضية"],
  },
];

export function getTrainerById(id: string): Trainer | undefined {
  return trainers.find((trainer) => trainer.id === id);
}
