# Sport Courses Platform

منصة عربية لحجز وإدارة الدورات الرياضية، مبنية على Next.js للواجهة وExpress للـ API، مع دعم PostgreSQL وإمكانية التشغيل بقاعدة in-memory كحل بديل أثناء التطوير.

## المميزات

- واجهة عربية RTL مع خط Cairo.
- صفحة رئيسية احترافية مع بحث سريع وفلاتر.
- قائمة دورات مع فلاتر متقدمة (نوع الرياضة، الموقع، المستوى، اليوم، التاريخ، الفترة).
- صفحة تفاصيل لكل دورة مع حالة الحجز.
- صفحة مدربين + صفحة تعريفية لكل مدرب.
- صفحات إضافية: من نحن، الأسعار، الدعم، الدفع، التواصل، لوحة المستخدم، لوحة الإدارة.
- زر واتساب عائم + زر الرجوع لأعلى.
- تصميم بصري موحد وخلفية متحركة بطابع رياضي.

## التقنيات المستخدمة

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Express 5
- PostgreSQL عبر pg
- pg-mem كبديل محلي عند غياب DATABASE_URL

## بنية المشروع

- app/: واجهة Next.js بالكامل (الصفحات + المكونات)
- app/data/: بيانات وخدمات الدورات والمدربين
- server.js: API Express
- schema.sql: مخطط قاعدة البيانات
- DEPLOY_FREE.md: دليل النشر المجاني
- .env.example: نموذج متغيرات البيئة

## متطلبات التشغيل

- Node.js 18+
- npm

## التشغيل المحلي

### 1) تثبيت الحزم

npm install

### 2) إعداد متغيرات البيئة

أنشئ ملف .env.local (للواجهة) و/أو .env (عام) انطلاقًا من .env.example.

أهم المتغيرات:

- API_BASE_URL=http://localhost:3001
- NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
- CORS_ORIGIN=http://localhost:3000
- DATABASE_URL=... (اختياري)

### 3) تشغيل الـ API

npm run api

الـ API يعمل على:

http://localhost:3001

### 4) تشغيل الواجهة

npm run dev

الواجهة تعمل على:

http://localhost:3000

## Scripts

- npm run dev: تشغيل واجهة Next.js بوضع التطوير
- npm run build: بناء نسخة production للواجهة
- npm run nextstart: تشغيل واجهة Next.js بعد build
- npm run api: تشغيل API Express
- npm start: تشغيل server.js

## API Endpoints

- GET /api/courses
- GET /api/courses/:courseId
- POST /api/bookings
- GET /api/bookings/:bookingId
- GET /health

## سلوك قاعدة البيانات

- عند توفر DATABASE_URL: الاتصال بقاعدة PostgreSQL خارجية.
- عند عدم توفر DATABASE_URL: تشغيل قاعدة in-memory (pg-mem) تلقائيًا مع بيانات تجريبية.

## النشر المجاني

يوجد شرح كامل في:

DEPLOY_FREE.md

السيناريو المقترح:

- Frontend: Vercel
- Backend: Render
- Database: Neon

## ملاحظات

- تأكد من ضبط CORS_ORIGIN بعد نشر الواجهة.
- في الخطط المجانية قد يحدث تأخير أول طلب على خدمة الـ API (cold start).
- ملف .gitignore مضاف ويستثني ملفات build وnode_modules وملفات البيئة.
