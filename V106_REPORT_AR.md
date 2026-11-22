# تقرير بويوسف ٠ V106 – 22 نوفمبر 2026

## النطاق
تم تعديل صفحات الخدمات والمدن الداخلية لأربع دول (تايلند، ماليزيا، هونغ كونغ، مكاو) وربطها بمكوّن تنقل V106 مخصص. تبقى واجهات الصين الداخلية ومتجر الصين بلا تعديل، لأنهما يعتمدان على صفحة تطبيق واحدة لها قائمة خاصة وأزرار تنقل وحالة داخلية.

## التصميم
- القائمة على الكمبيوتر بعرض موحد 220px مع تموضع ثابت وشريط تمرير داخلي.
- القائمة على الهاتف تفتح من اليمين بواسطة زر ثابت وتغلق من الداخل.
- أزرار عودة علوية وسفلية إلى الرئيسية المحلية وبوابة آسيا، بروابط نسبية.
- تم توحيد حاوية المتجر وصفحات الخدمات، دون استبدال صور أو بيانات المتاجر ودون فتح أقسام مقفلة.
- لم يتم تعديل شعارات أو محتوى أسواق أو حسابات Supabase أو بيانات أسعار الصرف.

## حدود التنفيذ
- لم ننسخ ملفات بيانات متجر الصين على بقية البلدان؛ تصميم متاجر الدول الأربعة يستخدم أصلًا أصول CSS من متجر الصين مع اختلافات في بيانات المتجر. تقتصر هذه المرحلة على توحيد التخطيط البصري وحاوية المتجر ولا يثبت تطابق جميع البيانات وطرق العرض.
- صفحات الدول الرئيسية والصين المستقلة بقيت على تخطيط V105 للحفاظ على أدوات التنقل الأصلية.
- مسار التنقل العلوي يُعدَّل عند وجود عنصر breadcrumb نصي؛ لا يُحذف لفظ بويوسف من عناوين العلامة التجارية.
- يتطلب الاختبار اليدوي للعضوية والطلبات وخرائط المدن حسابات وخدمات شبكة غير متاحة محلياً.

## الملفات المعدلة
- thailand/apps.html
- thailand/bangkok.html
- thailand/bolt-guide.html
- thailand/chiangmai.html
- thailand/currency.html
- thailand/grab-guide.html
- thailand/huahin.html
- thailand/kohsamui.html
- thailand/krabi.html
- thailand/pattaya.html
- thailand/phuket.html
- thailand/store.html
- thailand/tdac-guide.html
- thailand/travel-info.html
- thailand/updates.html
- malaysia/apps.html
- malaysia/bolt-guide.html
- malaysia/currency.html
- malaysia/grab-guide.html
- malaysia/ipoh.html
- malaysia/island-langkawi.html
- malaysia/island-pangkor.html
- malaysia/island-penang.html
- malaysia/island-perhentian.html
- malaysia/island-redang.html
- malaysia/island-tioman.html
- malaysia/islands.html
- malaysia/johorbahru.html
- malaysia/kualalumpur.html
- malaysia/mdac-guide.html
- malaysia/melaka.html
- malaysia/putrajaya.html
- malaysia/store.html
- malaysia/tdac-guide.html
- malaysia/travel-info.html
- malaysia/updates.html
- hong-kong/apps.html
- hong-kong/arrival.html
- hong-kong/causeway-bay.html
- hong-kong/central.html
- hong-kong/currency.html
- hong-kong/hong-kong-island.html
- hong-kong/kowloon.html
- hong-kong/lantau.html
- hong-kong/mong-kok.html
- hong-kong/new-territories.html
- hong-kong/sha-tin.html
- hong-kong/store.html
- hong-kong/travel-info.html
- hong-kong/tsim-sha-tsui.html
- hong-kong/updates.html
- macau/apps.html
- macau/arrival.html
- macau/coloane.html
- macau/cotai.html
- macau/currency.html
- macau/macau-peninsula.html
- macau/store.html
- macau/taipa.html
- macau/travel-info.html
- macau/updates.html

## الملفات الجديدة
- shared/by106-layout.css
- shared/by106-thailand.js
- shared/by106-malaysia.js
- shared/by106-hong-kong.js
- shared/by106-macau.js

## نتائج الفحص الفني
- فحص صياغة ملفات JavaScript الجديدة باستخدام `node --check`: **ناجح**.
- التأكد من وجود ملفات CSS/JS المحلية المرتبطة بكل صفحة من الصفحات المعدلة: **61/61، دون روابط محلية مفقودة**.
- فحص سلامة المشروع المضغوط: **810 مدخلات V105 الأصلية محفوظة**، مع 7 ملفات جديدة، و714 ملفًا أصليًا غير مستهدف مطابقًا بحسب CRC.
- جرت محاولة اختبار 9 صفحات عند عروض 390/768/1024/1366 باستخدام متصفح Chromium الآلي. **كل المحاولات مُنعت بواسطة إعدادات بيئة المتصفح (ERR_BLOCKED_BY_ADMINISTRATOR)**، ولذلك لم يتم التحقق من المقاسات الفعلية أو الضغط والتنقل بصريًا. راجع V106_BROWSER_TESTS.json.
- **لا يجوز اعتبار هذا التسليم اختبار قبول نهائيًا**؛ لا تزال هناك حاجة لفحص العرض البصري الحقيقي على الهاتف والكمبيوتر، ووظائف الصور والتكبير وعرض المزيد في كل متجر.
- لا يشمل الإصدار إصلاحًا متحققًا لتصميم الصين الداخلي، ولم تتم مطابقة متاجر الدول الأخرى مع متجر الصين على مستوى مكونات JavaScript والبيانات؛ تم إصلاح تخطيط الحاوية والقائمة فقط.
- لم يحدث نشر على GitHub.
