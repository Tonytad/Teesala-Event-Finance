const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');x.target.querySelectorAll?.('[data-c]').forEach(count);if(x.target.dataset.c)count(x.target);io.unobserve(x.target)}}),{threshold:.15});
function count(el){if(el.done)return;el.done=1;const t=+el.dataset.c,s=performance.now();(function f(n){const p=Math.min((n-s)/1800,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+(t>=50&&t<100?'+':t==300?'+':'');if(p<1)requestAnimationFrame(f)})(s)}
function route(){let h=(location.hash||'#home').slice(1);if(h==='mc-book'||h==='calc')return;if(!$('#'+h)||!$('#'+h).classList.contains('page'))h='home';
 $$('.page').forEach(p=>p.classList.toggle('on',p.id===h));$$('nav a[data-n]').forEach(a=>a.classList.toggle('on',a.dataset.n===h));
 document.body.classList.toggle('fin',h==='finance');window.scrollTo(0,0);
 $$('#'+h+' .rv').forEach(e=>{e.classList.remove('in');io.observe(e)});$$('#'+h+' .stats b').forEach(e=>{e.done=0;e.textContent=0;io.observe(e)})}
addEventListener('hashchange',route);route();
$$('.card').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty('--x',x+'px');c.style.setProperty('--y',y+'px');c.style.transform=`perspective(700px) rotateX(${(y/r.height-.5)*-8}deg) rotateY(${(x/r.width-.5)*8}deg) translateY(-4px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
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