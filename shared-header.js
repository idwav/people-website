(()=>{
 const head=document.querySelector('.siteHead');
 if(!head)return;
 const academyContent=document.querySelector('.academy-content');
 const hero=document.querySelector('main > section:first-child, main > .hero, .hero, [class*="Hero"]');
 const syncScroll=()=>{
  const passedHero=hero?hero.getBoundingClientRect().bottom<=head.offsetHeight:scrollY>12;
  head.classList.toggle('is-scrolled',passedHero);
  if(academyContent)head.classList.toggle('is-academy-content',academyContent.getBoundingClientRect().top<=head.offsetHeight);
 };
 syncScroll();
 addEventListener('scroll',syncScroll,{passive:true});
 addEventListener('resize',syncScroll,{passive:true});
 const button=head.querySelector('.siteHead__burger');
 const menu=document.querySelector('.siteHeadMenu');
 if(!button||!menu)return;
 button.addEventListener('click',()=>{
  const open=!menu.classList.contains('is-open');
  menu.classList.toggle('is-open',open);head.classList.toggle('is-menu-open',open);
  button.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-hidden',String(!open));
  document.documentElement.style.overflow=open?'hidden':'';
 });
 menu.addEventListener('click',event=>{
  if(!event.target.closest('a'))return;
  menu.classList.remove('is-open');head.classList.remove('is-menu-open');
  button.setAttribute('aria-expanded','false');menu.setAttribute('aria-hidden','true');
  document.documentElement.style.overflow='';
 });
})();

(()=>{
 if(document.documentElement.dataset.siteMotion==='ready')return;
 document.documentElement.dataset.siteMotion='ready';
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const sections=[...document.querySelectorAll('main > section:not(.footerEditorial),main > div > section')];
 sections.forEach((section,sectionIndex)=>{
  /* Animate the section box itself. Animating positioned children changes
     their containing block and breaks carefully composed editorial layouts. */
  section.classList.add('site-motion-section','site-motion-item');
  section.style.setProperty('--motion-delay','0ms');
  if(sectionIndex===0)section.dataset.motionFirst='true';
 });
 document.documentElement.classList.add('site-motion-enabled');
 if(reduced){sections.forEach(section=>section.classList.add('is-motion-visible'));document.documentElement.classList.remove('site-motion-boot');return}
 /* Force one painted hidden frame so page-entry motion is visible even on a
    warm cache or instant local navigation. */
 document.documentElement.getBoundingClientRect();
 requestAnimationFrame(()=>requestAnimationFrame(()=>{
  document.documentElement.classList.remove('site-motion-boot');
  sections.filter(section=>section.dataset.motionFirst==='true'||section.getBoundingClientRect().top<innerHeight*.82).forEach(section=>section.classList.add('is-motion-visible'));
 }));
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  entry.target.classList.toggle('is-motion-visible',entry.isIntersecting);
 }),{threshold:.01,rootMargin:'-4% 0px -7% 0px'});
 sections.forEach(section=>observer.observe(section));

 /* Same inertial wheel glide used by the home page. */
 if(matchMedia('(min-width:821px) and (pointer:fine)').matches){
  document.documentElement.classList.add('inertial-scroll');
  let smoothY=scrollY,smoothTarget=scrollY,smoothFrame=0,smoothRunning=false;
  const smoothTick=()=>{
   smoothY+=(smoothTarget-smoothY)*.07;
   scrollTo(0,smoothY);
   if(Math.abs(smoothTarget-smoothY)>.45)smoothFrame=requestAnimationFrame(smoothTick);
   else{scrollTo(0,smoothTarget);smoothRunning=false;smoothFrame=0}
  };
  addEventListener('wheel',event=>{
   if(event.ctrlKey||event.metaKey)return;
   event.preventDefault();
   const maxY=Math.max(0,document.documentElement.scrollHeight-innerHeight);
   if(!smoothRunning){smoothY=scrollY;smoothTarget=scrollY}
   smoothTarget=Math.max(0,Math.min(maxY,smoothTarget+event.deltaY*.9));
   if(!smoothRunning){smoothRunning=true;smoothFrame=requestAnimationFrame(smoothTick)}
  },{passive:false});
  addEventListener('keydown',()=>{
   if(smoothFrame)cancelAnimationFrame(smoothFrame);
   smoothRunning=false;smoothY=smoothTarget=scrollY;
  });
 }
})();
