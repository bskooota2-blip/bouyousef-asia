/* V057: interactive Qibla for Malaysian city pages. No fabricated live heading. */
(()=>{'use strict';
 const card=document.querySelector('.gz-qibla-panel .by4-compass');
 const arrow=document.getElementById('by4-needle');
 if(!card||!arrow)return;
 const ring=card.querySelector('.by4-dial');
 const marker=ring?.querySelector('.n');
 const button=document.createElement('button');button.type='button';button.className='by4-qibla-enable';button.textContent='🧭 تفعيل البوصلة الحية';
 const status=document.createElement('span');status.className='by4-qibla-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.textContent='الاتجاه ثابت حتى تفعيل مستشعر الهاتف';
 card.append(button,status);
 const norm=deg=>(deg%360+360)%360;
 let heading=null,enabled=false,gotReading=false,starting=false;
 function bearing(){return Number(window.by057QiblaBearing)}
 function redraw(){
  const direction=bearing();if(!Number.isFinite(direction))return;
  const rel=heading===null?direction:norm(direction-heading);
  arrow.style.transform=`translate(-50%,-50%) rotate(${rel-90}deg)`;
  if(marker&&ring){
   if(heading===null){marker.style.left='50%';marker.style.top='2px';marker.style.transform='translateX(-50%)'}
   else{const radius=(ring.clientWidth-14)/2,theta=heading*Math.PI/180;
    marker.style.left=`calc(50% + ${(-radius*Math.sin(theta)).toFixed(1)}px)`;
    marker.style.top=`calc(50% - ${(radius*Math.cos(theta)).toFixed(1)}px)`;
    marker.style.transform='translate(-50%,-50%)';}
  }
 }
 window.by057UpdateQibla=redraw;
 redraw();
 function orientationReading(e){
  if(!enabled)return;
  let h=null;
  if(typeof e.webkitCompassHeading==='number'&&Number.isFinite(e.webkitCompassHeading))h=e.webkitCompassHeading;
  else if(e.absolute===true && typeof e.alpha==='number'&&Number.isFinite(e.alpha)){
   const angle=(window.screen&&window.screen.orientation&&Number(window.screen.orientation.angle))||0;
   h=norm(360-e.alpha+angle);
  }
  if(h===null)return;heading=norm(h);redraw();
  if(!gotReading){gotReading=true;status.textContent='البوصلة حية — حرّك الهاتف على شكل 8 للمعايرة';button.textContent='🧭 البوصلة مفعّلة';button.disabled=true;}
 }
 button.addEventListener('click',async()=>{
  if(starting||gotReading)return;
  starting=true;button.disabled=true;
  if(!window.isSecureContext){status.textContent='البوصلة الحية تتطلب HTTPS وهاتفًا يدعم مستشعر الاتجاه';button.disabled=false;starting=false;return;}
  if(typeof window.DeviceOrientationEvent==='undefined'){
   status.textContent='هذا الجهاز أو المتصفح لا يدعم مستشعر اتجاه البوصلة';button.disabled=false;starting=false;return;
  }
  try{
   if(typeof DeviceOrientationEvent.requestPermission==='function'){
    const result=await DeviceOrientationEvent.requestPermission();
    if(result!=='granted')throw Error('permission');
   }
   enabled=true;
   window.addEventListener('deviceorientationabsolute',orientationReading,true);
   window.addEventListener('deviceorientation',orientationReading,true);
   status.textContent='جارٍ انتظار قراءة مستشعر الاتجاه…';
   button.textContent='🧭 انتظار المستشعر';
   window.setTimeout(()=>{if(!gotReading){status.textContent='لم تتوفر قراءة شمال موثوقة؛ ما زال الاتجاه الجغرافي المحسوب ظاهرًا';button.textContent='🧭 إعادة المحاولة';button.disabled=false;starting=false;}},4500);
  }catch(e){status.textContent=e?.message==='permission'?'لم يُسمح باستخدام البوصلة؛ يمكنك تفعيل الإذن من إعدادات المتصفح':'تعذر تشغيل مستشعر البوصلة على هذا الجهاز';button.disabled=false;}
  starting=false;
 });
})();
