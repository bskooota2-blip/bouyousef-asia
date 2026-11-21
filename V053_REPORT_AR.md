# V053 – إصلاح تنسيق المسافات في تايلند وماليزيا

## نطاق التنفيذ
- قاعدة العمل: V052 الكاملة. تعديل ملفات HTML للصفحات الرئيسية والمدن والجزر التي تحمل واجهة V052 في تايلند وماليزيا فقط.
- إضافة ملف CSS مشترك `shared/city-spacing-v053.css`، يُحمّل بعد قواعد V052، مع تفعيل خاص للصفحات المستهدفة بواسطة `by053-spacing` و`by051-active`.
- تقليل المسافات الزائدة بعد البانر، بين الصلاة والطقس والبحث وبطاقات الأقسام، وتوحيد شبكة بطاقات الأقسام إلى أربع أعمدة على الشاشات الواسعة وعمودين للشاشات الصغيرة.
- منع بقاء هامش رأس المدينة القديم بعدما انتقلت منه واجهة الصلاة؛ إخفاء نص الملاحظة الفلكية الصغيرة فقط لا حذف البيانات أو الوظيفة.
- تقليص هوامش قائمة الجزر دون تغيير بنيتها أو معلوماتها.

## حدود الإصلاح
- هذا إصلاح للمسافات، وليس إعادة بناء برمجة غوانزو أو توحيد وظائف بحث الجزر.
- لم يتم تعديل هونغ كونغ أو مكاو أو الصين أو موقع GitHub.
- البيانات والعناوين والصور وروابط المواصلات محفوظة كما كانت في V052.
- يحتاج اختبارًا على الهاتف الحقيقي والاتصال بخدمات الصلاة والطقس؛ التقاط صور محلي قد يستبدل الصور الحقيقية عند الفحص التقني.

## الصفحات المحدثة
- `thailand/bangkok.html`
- `thailand/chiangmai.html`
- `thailand/huahin.html`
- `thailand/index.html`
- `thailand/kohsamui.html`
- `thailand/krabi.html`
- `thailand/pattaya.html`
- `thailand/phuket.html`
- `malaysia/index.html`
- `malaysia/ipoh.html`
- `malaysia/island-langkawi.html`
- `malaysia/island-pangkor.html`
- `malaysia/island-penang.html`
- `malaysia/island-perhentian.html`
- `malaysia/island-redang.html`
- `malaysia/island-tioman.html`
- `malaysia/islands.html`
- `malaysia/johorbahru.html`
- `malaysia/kualalumpur.html`
- `malaysia/melaka.html`
- `malaysia/putrajaya.html`
