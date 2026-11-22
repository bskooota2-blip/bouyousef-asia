# تقرير تنفيذ V103 — 22 نوفمبر 2026

الأساس: V102. النطاق: هونغ كونغ ومكاو (الصفحات المستهدفة فقط).

- استعادة بيان إلغاء بطاقة الوصول والمغادرة في هونغ كونغ (16 أكتوبر 2024) مع نصيحة احتياطية لصلاحية جواز السفر.
- إضافة دليل أوبر في هونغ كونغ، بروابط iOS وAndroid الرسمية و6 رسوم SVG إرشادية أصلية، وليست لقطات تطبيق حقيقية.
- استبدال صفحتي المتجر الوصفيتين بواجهة المتجر العاملة التي تستخدم مكوّن متجر الصين ذاته عبر ملف ماليزيا المشترك؛ لا تعديل على منتجات الصين أو الأقسام المقفلة.
- تحسين تسجيل الخروج في صفحات الخدمات لإزالة جميع مفاتيح الجلسات المعروفة والمحاولة أولًا لإنهاء جلسة Supabase. لا يمكن تأكيد إنهاء الجلسة الخادمية دون اتصال حي.
- معلومات سفر هونغ كونغ مع مصادر رسمية للهجرة والجمارك وأمن المطار.
- إضافة تحديثات موثقة إلى سجل هونغ كونغ ومكاو، مع روابط للصفحات المعنية؛ السجل يحدّث مع كل إصدار وليس آليًا أثناء التصفح.

## مصادر رسمية
- https://www.immd.gov.hk/eng/services/immigration_clearance2.html
- https://www.customs.gov.hk/en/service-enforcement-information/passenger-clearance/prohibited-controlled-items/index.html
- https://www.customs.gov.hk/en/service-enforcement-information/passenger-clearance/currency-bearer-negotiable-instruments/index.html
- https://www.hongkongairport.com/en/passenger-guide/airport-security/
- https://www.uber.com/hk/en/
- https://apps.apple.com/kw/app/uber-request-a-ride/id368677368
- https://play.google.com/store/apps/details?id=com.ubercab

## حدود الاختبار
- لم يُختبر تسجيل الدخول الفعلي بحساب Supabase، ولا إرسال طلب أوبر، ولا تحميل التطبيقات على الأجهزة.
- لم تُعدّل البيانات السياحية أو ملفات المتجر الصيني.
