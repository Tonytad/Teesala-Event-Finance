// ===== SETTINGS: edit these three lines =====
const IG='https://www.instagram.com/teesala/';   // your Instagram link
const CAL_MC='https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RGksB752ERC41TdjvLFIZ55sUt6QKHPJDS_428jLjWUADHuE3v6P7uba78siLKD8dQwfbDWSf?gv=true';   // Google Calendar booking link for event hosting
const CAL_FIN='https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RGksB752ERC41TdjvLFIZ55sUt6QKHPJDS_428jLjWUADHuE3v6P7uba78siLKD8dQwfbDWSf?gv=true';  // Google Calendar booking link for financial services
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');x.target.querySelectorAll?.('[data-c]').forEach(count);if(x.target.dataset.c)count(x.target);io.unobserve(x.target)}}),{threshold:.15});
function count(el){if(el.done)return;el.done=1;const t=+el.dataset.c,s=performance.now();(function f(n){const p=Math.min((n-s)/1800,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+(t>=50&&t<100?'+':t==300?'+':'');if(p<1)requestAnimationFrame(f)})(s)}
function route(){let h=(location.hash||'#home').slice(1);if(h==='mc-book'||h==='calc')return;if(!$('#'+h)||!$('#'+h).classList.contains('page'))h='home';
 $$('.page').forEach(p=>p.classList.toggle('on',p.id===h));$$('nav a[data-n]').forEach(a=>a.classList.toggle('on',a.dataset.n===h));
 document.body.classList.toggle('fin',h==='finance');window.scrollTo(0,0);
 $$('#'+h+' .rv').forEach(e=>{e.classList.remove('in');io.observe(e)});$$('#'+h+' .stats b').forEach(e=>{e.done=0;e.textContent=0;io.observe(e)})}
addEventListener('hashchange',route);route();
$$('.card').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty('--x',x+'px');c.style.setProperty('--y',y+'px');c.style.transform=`perspective(700px) rotateX(${(y/r.height-.5)*-8}deg) rotateY(${(x/r.width-.5)*8}deg) translateY(-4px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
const SVG='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>';
$$('a.ig').forEach(a=>{a.href=IG;a.target='_blank';a.rel='noopener';a.insertAdjacentHTML('afterbegin',SVG)});
[['#cal-mc',CAL_MC],['#cal-fin',CAL_FIN]].forEach(([s,u])=>{if(!u)return;$(s).innerHTML=/appointments\/schedules/.test(u)?'<div style="width:100%"><iframe loading="lazy" src="'+u+'"></iframe><p><a class="gold" target="_blank" rel="noopener" href="https://calendar.app.google/MRaqSqZnWfchWmGeA">Trouble loading? Open the booking page</a></p></div>':'<div><h3>Book a free conversation</h3><p>Pick a time that suits you on Google Calendar. You will get a confirmation by email.</p><a class="btn solid" target="_blank" rel="noopener" href="'+u+'">Pick a time</a></div>'});
// calculator
const f=n=>'₦'+Math.round(n).toLocaleString('en-NG');
function calc(){const m=+$('#i1').value,y=+$('#i2').value,r=+$('#i3').value/100/12;$('#o1').textContent=f(m);$('#o2').textContent=y+' yrs';$('#o3').textContent=$('#i3').value+'%';
 const v=k=>r?m*((Math.pow(1+r,k*12)-1)/r):m*k*12;$('#out').textContent=f(v(y));
 $('#bars').innerHTML=Array.from({length:y},(_,i)=>`<i style="height:${Math.max(4,v(i+1)/v(y)*100)}%"></i>`).join('')}
['i1','i2','i3'].forEach(i=>$('#'+i).addEventListener('input',calc));calc();
// gold dust
const cv=$('#fx'),cx=cv.getContext('2d');let W,H,P=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener('resize',rs);
for(let i=0;i<60;i++)P.push({x:Math.random()*2000,y:Math.random()*1200,r:Math.random()*2+.4,s:Math.random()*.4+.1,a:Math.random()*6});
(function d(){cx.clearRect(0,0,W,H);P.forEach(p=>{p.y-=p.s;p.a+=.02;p.x+=Math.sin(p.a)*.3;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}cx.globalAlpha=.4+Math.sin(p.a*2)*.4;cx.fillStyle='#c9a961';cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill()});requestAnimationFrame(d)})();