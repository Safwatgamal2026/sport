"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 280);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noreferrer"
        aria-label="واتساب"
        className="fixed bottom-5 left-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/40"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.58 5.96L0 24l6.32-1.66a11.82 11.82 0 0 0 5.73 1.46h.01c6.57 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.44-8.4Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.75.98 1-3.65-.24-.37a9.84 9.84 0 0 1-1.52-5.24c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.46-4.45 9.9-9.9 9.9Zm5.43-7.41c-.3-.15-1.79-.88-2.06-.98-.27-.1-.47-.15-.67.15s-.76.98-.93 1.18c-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.72.63.72.23 1.37.2 1.88.12.58-.09 1.79-.73 2.04-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="الرجوع إلى أعلى الصفحة"
        className={`fixed bottom-5 right-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg shadow-black/30 backdrop-blur transition focus:outline-none focus:ring-2 focus:ring-white/40 ${
          showTopButton
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m6 15 6-6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
