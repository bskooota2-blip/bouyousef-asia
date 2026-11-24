/* V163: remove legacy dynamically-created scroll-to-top control in Thai city nav. */
(()=>{'use strict';
  const clean=()=>{
    document.querySelectorAll('#by060-nav .by060-top').forEach(btn=>btn.remove());
    document.querySelectorAll('#pageScrollTop,.bottom-navigation button.up').forEach(btn=>btn.remove());
  };
  function ready(){
    clean();
    const watch=new MutationObserver(()=>clean());
    watch.observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();
