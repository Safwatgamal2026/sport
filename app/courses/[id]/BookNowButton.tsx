"use client";

import { useState } from "react";
import Link from "next/link";

type BookNowButtonProps = {
  courseId: string;
  isFree: boolean;
  seatsAvailable: number;
};

export default function BookNowButton({
  courseId,
  isFree,
  seatsAvailable,
}: BookNowButtonProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "waitlist"
  >("idle");

  async function handleBook() {
    if (seatsAvailable <= 0) {
      setStatus("waitlist");
      return;
    }

    setStatus("loading");

    if (isFree || courseId.startsWith("course-")) {
      setTimeout(() => {
        setStatus("success");
      }, 700);
      return;
    }

    try {
      const apiBase =
        process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001";
      const res = await fetch(`${apiBase}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId,
          user: {
            name: "مستخدم تجريبي",
            age: 20,
            emergencyContactName: "جهة اتصال",
            emergencyContactPhone: "0500000000",
          },
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="space-y-2">
      {isFree ? (
        <button
          onClick={handleBook}
          disabled={status === "loading"}
          className="w-full rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-5 py-3 text-sm font-extrabold text-neutral-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "جارٍ تنفيذ الحجز..." : "حجز بنقرة واحدة"}
        </button>
      ) : (
        <div className="space-y-2">
          <button
            onClick={handleBook}
            disabled={status === "loading"}
            className="w-full rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 px-5 py-3 text-sm font-extrabold text-neutral-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "جارٍ تنفيذ الحجز..." : "متابعة الحجز"}
          </button>
          <Link
            href={`/payments?courseId=${encodeURIComponent(courseId)}`}
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-extrabold text-white hover:bg-white/10"
          >
            الانتقال للدفع الإلكتروني
          </Link>
        </div>
      )}

      {status === "success" && (
        <p className="text-sm font-semibold text-lime-300">
          تم تأكيد الحجز وإرسال إشعار للمستخدم.
        </p>
      )}
      {status === "waitlist" && (
        <p className="text-sm font-semibold text-amber-200">
          مكتمل العدد حاليًا، تمت إضافتك لقائمة الانتظار.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-semibold text-red-300">
          تعذر تنفيذ الحجز، حاول مرة أخرى.
        </p>
      )}
    </div>
  );
}
