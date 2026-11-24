/* Persist language preference. Does not claim machine translation of all existing city content. */
(function(){'use strict';let lang='ar';try{lang=localStorage.getItem('by116-preferred-language')||'ar'}catch(e){}
if(!['ar','en','zh'].includes(lang))lang='ar';document.documentElement.dataset.preferredLanguage=lang;
})();