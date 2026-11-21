# V060 — إظهار شريط الروابط في الصين وتايلند وبقية صفحات آسيا

## السبب المؤكد
- صفحات مدن تايلند (مثل `thailand/bangkok.html`) لم تستورد `guangzhou-unified-v046.js` المسؤول عن إنشاء الشريط، على الرغم من استيراد CSS الخاص به؛ لذلك لم يظهر الشريط.
- صفحة `china/index.html` كانت تستخدم إطار iframe خارجيًا إلى GitHub Pages؛ لا يمكن للسكريبت من بويوسف ٠ تعديل محتوى إطار من مصدر آخر.

## المعالجة
- أضفنا ملفي `shared/asia-nav-v060.js` و`shared/asia-nav-v060.css` كمكوّن مركزي مستقل.
- أدرجنا ملفي الشريط في 58 صفحة مستقلة من بويوسف ٠، بما فيها الصفحات الرئيسية والخدمات والمدن.
- وضع الشريط داخل صفحات المدن بعد صف الصلاة/القبلة وقبل البحث كما في المرجع، لا في رأس الصفحة.
- أدرجنا نسخة مستقلة محلية من ملفات بويوسف ٢ المرفقة في `china/site/` (دون تعديل GitHub Pages الخارجي)، وضبطنا `china/index.html` ليفتح `site/index.html` داخل نفس الإطار؛ أدرجنا الشريط في 4 صفحات HTML رئيسية بالصين، ويتحرك تلقائيًا إلى ما بعد بطاقة الصلاة/القبلة في وضع المدينة.
- لم تُمسح بيانات الأماكن أو روابطها، ولم تُغيّر روابط واتساب أو سناب أو إنستغرام.
- لم نُضف روابط لمتجر هونغ كونغ/مكاو غير مثبتة؛ تظهر روابط المتجر حيث تتوفر صفحة محلية.

## حدود التحقق
- الفحص البنيوي ووجود الملفات ومواضع إدراج السكربتات لا يثبتان وحدهما اكتمال تفاعل الأزرار داخل التطبيق.
- يمكن أن تضيف نسخة الصين المحلية 54 ميغابايت تقريبًا إلى حجم الأرشيف؛ ينبغي اختبار الموقع على GitHub Pages قبل نشره للعامة.
- تحديث الصين المضمّنة لا يغيّر ملفات المستودع الأصلي بويوسف ٢ المنشور.

## الصفحات المعدلة
- index.html
- malaysia/tdac-guide.html
- malaysia/login.html
- malaysia/island-penang.html
- malaysia/grab-guide.html
- malaysia/island-perhentian.html
- malaysia/store.html
- malaysia/putrajaya.html
- malaysia/currency.html
- malaysia/island-pangkor.html
- malaysia/johorbahru.html
- malaysia/index.html
- malaysia/ipoh.html
- malaysia/apps.html
- malaysia/islands.html
- malaysia/island-redang.html
- malaysia/kualalumpur.html
- malaysia/travel-info.html
- malaysia/reset-password.html
- malaysia/melaka.html
- malaysia/bolt-guide.html
- malaysia/island-langkawi.html
- malaysia/island-tioman.html
- shared/china-chrome-v051.html
- hong-kong/causeway-bay.html
- hong-kong/tsim-sha-tsui.html
- hong-kong/sha-tin.html
- hong-kong/index.html
- hong-kong/kowloon.html
- hong-kong/central.html
- hong-kong/hong-kong-island.html
- hong-kong/mong-kok.html
- hong-kong/lantau.html
- hong-kong/new-territories.html
- thailand/tdac-guide.html
- thailand/login.html
- thailand/grab-guide.html
- thailand/store.html
- thailand/currency.html
- thailand/bangkok.html
- thailand/krabi.html
- thailand/pattaya.html
- thailand/index.html
- thailand/phuket.html
- thailand/chiangmai.html
- thailand/apps.html
- thailand/kohsamui.html
- thailand/travel-info.html
- thailand/huahin.html
- thailand/reset-password.html
- thailand/bolt-guide.html
- macau/macau-peninsula.html
- macau/cotai.html
- macau/index.html
- macau/coloane.html
- macau/taipa.html
- thailand/V073_BACKUP/bangkok.html
- thailand/V073_BACKUP/chiangmai.html

## صفحات الصين الأساسية المعدلة
- china/site/arrival.html
- china/site/index.html
- china/site/apps.html
- china/site/reset-password.html

## فحص إضافي
- جرى اختبار مكوّن الشريط داخل Chromium بصورة **معزولة** عند عروض 390 و768 و1024 و1366 بكسل: ظهر مرة واحدة بعد حاوية الصلاة وقبل البحث، ولم يسبب تجاوزًا أفقيًا في السيناريو المعزول.
- تعذر اختبار الصفحات الحقيقية عبر خادم localhost بسبب ERR_BLOCKED_BY_ADMINISTRATOR؛ لا يُعد هذا إثباتًا لسلامة كل صفحات التطبيق في التشغيل الحقيقي.
- صفحات `thailand/V073_BACKUP/` نسخ احتياطية غير مستهدفة بالنشر؛ لم تُغيّر.
- زر متجرنا داخل نسخة الصين يستخدم زر المتجر الأصلي في التطبيق، وليس رابط `store.html` غير الموجود هناك.
