# نشر المشروع على استضافة مجانية (Frontend + Backend)

هذا المشروع يحتوي:

- واجهة Next.js (frontend)
- API بـ Express (backend)

أفضل نشر مجاني عملي:

1. Frontend على Vercel (خطة مجانية)
2. Backend على Render (خطة مجانية/Starter حسب المتاح)
3. قاعدة بيانات PostgreSQL مجانية على Neon

## 1) تجهيز GitHub

- ارفع المشروع على GitHub.
- تأكد أن الملفات موجودة: `package.json`, `server.js`, `app/`.

## 2) إنشاء قاعدة بيانات مجانية (Neon)

- افتح Neon وأنشئ مشروع PostgreSQL مجاني.
- انسخ `DATABASE_URL`.

## 3) نشر Backend (Render)

- أنشئ Web Service جديد من نفس مستودع GitHub.
- الإعدادات:
  - Build Command: `npm install`
  - Start Command: `npm run api`
- أضف متغيرات البيئة:
  - `DATABASE_URL` = (رابط Neon)
  - `CORS_ORIGIN` = `https://YOUR-VERCEL-DOMAIN.vercel.app`
- بعد النشر انسخ رابط الخدمة (مثال):
  - `https://sport-courses-api.onrender.com`

تحقق سريع:

- افتح: `https://sport-courses-api.onrender.com/health`
- يجب أن يرجع: `{ "status": "ok" }`

## 4) نشر Frontend (Vercel)

- أنشئ مشروع Vercel من نفس مستودع GitHub.
- Framework: Next.js (يتعرف تلقائيًا).
- أضف متغيرات البيئة في Vercel:
  - `API_BASE_URL` = `https://sport-courses-api.onrender.com`
  - `NEXT_PUBLIC_API_BASE_URL` = `https://sport-courses-api.onrender.com`
- Deploy.

## 5) تحديث CORS بعد معرفة رابط Vercel

- بعد أول نشر، انسخ رابط Vercel النهائي.
- ارجع إلى Render وعدل `CORS_ORIGIN` ليطابق رابط Vercel بالضبط.
- أعد نشر Render.

## 6) فحص نهائي

- الصفحة الرئيسية تعمل.
- صفحة الدورات تعرض نتائج.
- فتح تفاصيل دورة ثم الضغط على الحجز يعمل.
- رابط `health` في API يرجع `ok`.

## ملاحظات مهمة

- إذا لم تضع `DATABASE_URL` سيعمل API بقاعدة in-memory (بيانات مؤقتة).
- في الوضع المجاني قد يتأخر تشغيل Render أول طلب (cold start).
- إذا كانت المنصة تمنع free plan في منطقتك، استخدم بديل مشابه (Railway/Koyeb) بنفس متغيرات البيئة.
