import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import FloatingActions from "./components/FloatingActions";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "الدورات الرياضية",
  description: "منصة لاكتشاف وحجز الدورات الرياضية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} min-h-screen text-white`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}
