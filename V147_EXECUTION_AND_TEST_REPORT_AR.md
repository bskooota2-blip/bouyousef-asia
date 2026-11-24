# تقرير التنفيذ V147 – توحيد صفحات المدن وفق غوانزو

النسخة الأساسية: V146، وتسليم V147 كاملًا دون نشر على GitHub.

## النطاق
- الصين: مدن الصين العشر + غوانزو المرجعية محفوظة دون أي تغيير في ملفات المصدر.
- تايلند: السبع صفحات المعتمدة في V146 محفوظة كما هي دون أي تغيير.
- ماليزيا: 11 صفحة داخلية (5 مدن و6 جزر) خضعت لتنسيق V147.
- هونغ كونغ: 9 صفحات مناطق خضعت لتنسيق V147.
- مكاو: 4 صفحات مناطق خضعت لتنسيق V147.

## ما تغيّر
- تنسيق بطاقات صور وأسماء المدن والمناطق استنادًا إلى قيم بطاقة غوانزو في ملفات تايلند V146، والتي استخدمت المقاسات نفسها للصور والحدود والبطاقات.
- إخفاء الصلاة والقبلة في رؤوس صفحات المدن والمناطق، مع إبقاء هذه الخدمات في الصفحات الرئيسية للدول.
- توحيد شريط أيقونات التنقل والبحث وإظهار زر الرجوع إلى مدن/مناطق الدولة.
- ربط البحث في الشريط بمدخل البحث الأصلي للمدن/المناطق، مع إبقاء فلاتر الأقسام ومجموعات الأماكن وبياناتها.
- في الجزر الماليزية التي لا تحتوي أصلًا على محرك بحث نصي، أُضيف بحث محلي يعتمد على النصوص الموجودة بالبطاقات دون تغيير البيانات أو روابطها.
- اعتماد ألوان وأطر وأنماط الفلاتر والبطاقات المستمدة من تصميم غوانزو.

## مقارنة الملفات
- ملفات HTML الموجودة التي تغيرت: 24، كلها ضمن صفحات مدن ومناطق ماليزيا وهونغ كونغ ومكاو.
- الملفات الأصلية المحذوفة: 0.
- الملفات الجديدة للعرض والتفاعل: 8 (قبل إضافة التقرير).
- لم تتغير أي ملفات في الصين أو تايلند أو الصفحات الرئيسية أو مجلد shared أو ملفات البيانات والصور الأصلية.

### الملفات المعدلة
- `hong-kong/causeway-bay.html`
- `hong-kong/central.html`
- `hong-kong/hong-kong-island.html`
- `hong-kong/kowloon.html`
- `hong-kong/lantau.html`
- `hong-kong/mong-kok.html`
- `hong-kong/new-territories.html`
- `hong-kong/sha-tin.html`
- `hong-kong/tsim-sha-tsui.html`
- `macau/coloane.html`
- `macau/cotai.html`
- `macau/macau-peninsula.html`
- `macau/taipa.html`
- `malaysia/ipoh.html`
- `malaysia/island-langkawi.html`
- `malaysia/island-pangkor.html`
- `malaysia/island-penang.html`
- `malaysia/island-perhentian.html`
- `malaysia/island-redang.html`
- `malaysia/island-tioman.html`
- `malaysia/johorbahru.html`
- `malaysia/kualalumpur.html`
- `malaysia/melaka.html`
- `malaysia/putrajaya.html`

### الملفات الجديدة
- `hong-kong/assets/guangzhou-regions-v147.css`
- `hong-kong/assets/guangzhou-regions-v147.js`
- `macau/assets/guangzhou-regions-v147.css`
- `macau/assets/guangzhou-regions-v147.js`
- `malaysia/assets/guangzhou-city-v147.css`
- `malaysia/assets/guangzhou-city-v147.js`
- `malaysia/assets/guangzhou-regions-v147.css`
- `malaysia/assets/guangzhou-regions-v147.js`

## الفحوصات التي أُجريت
- فحص وجود الملفات ومقارنة CRC32 لكل ملف موجود مقابل V146.
- التحقق من وجود `index.html` الرئيسي وعدم حذف أي ملف.
- فحص الصياغة البرمجية لملفات JavaScript الجديدة بواسطة `node --check`.
- فحص توافق المسارات وأسماء الملفات مع Windows.
- فحص سلامة ملف ZIP بعد إعداده.

## الفحوصات التي تعذّر إجراؤها
- تجربة العرض والتفاعل في Chromium: حظر المتصفح الوصول إلى file:// و http://127.0.0.1 المحلي (ERR_BLOCKED_BY_ADMINISTRATOR). لم نثبت التطابق البصري الكامل ولا نجاح جميع وظائف البحث/التنقل على الأجهزة الحقيقية.
- لذا يلزم معاينة V147 على Windows في متصفح عادي، خصوصًا البحث والفلاتر وشريط التنقل والصور على 1440 و1024 و768 و390 و360 بكسل قبل النشر.
