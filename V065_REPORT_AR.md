# V065 – بطاقات التواصل على الصفحة الرئيسية فقط

الأساس: V064.

تم حذف مجموعات بطاقات التواصل العلوية من صفحات الصين وتايلند وماليزيا وهونغ كونغ ومكاو.
بقيت بطاقات WeChat وSnapchat وWhatsApp وInstagram في بوابة آسيا الرئيسية (`index.html`) فقط.

أزرار التواصل الموجودة في شريط التنقل السفلي ليست بطاقات الرأس الأربع، وقد بقيت كما كانت لتجنب تغيير وظائف شريط التنقل.

الملفات المعدلة:
- china/site/index.html
- malaysia/putrajaya.html
- malaysia/johorbahru.html
- malaysia/index.html
- malaysia/ipoh.html
- malaysia/kualalumpur.html
- malaysia/melaka.html
- index.html
- shared/china-chrome-v051.js
- hong-kong/index.html
- thailand/V073_BACKUP/bangkok.html
- thailand/V073_BACKUP/chiangmai.html
- thailand/bangkok.html
- thailand/krabi.html
- thailand/pattaya.html
- thailand/index.html
- thailand/phuket.html
- thailand/chiangmai.html
- thailand/kohsamui.html
- thailand/huahin.html
- macau/index.html

التحقق: تم فحص بنية الملفات بعد التعديل وتوزيع مجموعات الأيقونات داخل HTML وJS. لم يتم التحقق من روابط الاتصال أو شكل الصفحة على جميع الأجهزة داخل متصفح حي.
