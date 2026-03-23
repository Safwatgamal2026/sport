"use client";

import { useState } from "react";
import Link from "next/link";

const initialBookings = [
  {
    id: "b1",
    course: "تطوير السرعة والانفجار لكرة القدم",
    date: "2026-04-20",
    status: "مؤكد",
  },
  {
    id: "b2",
    course: "يوغا المرونة والتعافي للرياضيين",
    date: "2026-04-25",
    status: "مؤكد",
  },
];

export default function DashboardPage() {
  const [bookings, setBookings] = useState(initialBookings);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <h1 className="text-3xl font-black lg:text-4xl">لوحة المستخدم</h1>
      <p className="mt-2 text-sm font-semibold text-white/70">
        عرض الدورات المسجل بها وإلغاء الحجز عند الحاجة.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:gap-5">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
          <p className="text-xs font-extrabold text-lime-300">الملف الشخصي</p>
          <p className="mt-2 text-sm font-semibold">الاسم: محمد</p>
          <p className="mt-1 text-sm font-semibold text-white/70">
            البريد: user@example.com
          </p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
          <p className="text-xs font-extrabold text-lime-300">ملخص التسجيل</p>
          <p className="mt-2 text-sm font-semibold">
            عدد الدورات الحالية: {bookings.length}
          </p>
          <p className="mt-1 text-sm font-semibold text-white/70">
            إشعار تذكير قبل الموعد: مفعل
          </p>
        </article>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 lg:p-6">
        <h2 className="text-xl font-black">الدورات المسجل بها</h2>
        <div className="mt-4 space-y-3">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-neutral-950/50 p-3"
            >
              <div>
                <p className="text-sm font-extrabold">{booking.course}</p>
                <p className="text-xs font-semibold text-white/70">
                  {booking.date} • {booking.status}
                </p>
              </div>
              <button
                onClick={() =>
                  setBookings((prev) =>
                    prev.filter((item) => item.id !== booking.id),
                  )
                }
                className="rounded-lg border border-red-300/40 bg-red-300/10 px-3 py-2 text-xs font-extrabold text-red-200"
              >
                إلغاء الحجز
              </button>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/courses"
        className="mt-6 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15"
      >
        حجز دورة جديدة
      </Link>
    </main>
  );
}
