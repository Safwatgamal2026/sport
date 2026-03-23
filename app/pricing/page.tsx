import Link from "next/link";

const plans = [
  {
    name: "خطة أساسية",
    price: "49 ر.س شهريًا",
    features: "الوصول للدورات الأساسية",
  },
  {
    name: "خطة متقدمة",
    price: "99 ر.س شهريًا",
    features: "الوصول لجميع الدورات + متابعة",
  },
  {
    name: "خطة احترافية",
    price: "149 ر.س شهريًا",
    features: "جلسات فردية ودعم أولوي",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-12 text-white sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-black">الأسعار</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-lg font-extrabold">{plan.name}</h2>
              <p className="mt-2 text-2xl font-black text-lime-300">
                {plan.price}
              </p>
              <p className="mt-2 text-sm font-semibold text-white/70">
                {plan.features}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold hover:bg-white/15"
        >
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
