(function(){
"use strict";
const $=s=>document.querySelector(s),B=document.body,bg=$("#bg");
const ageOf=d=>{if(!d)return"";const t=new Date(),b=new Date(d);let a=t.getFullYear()-b.getFullYear(),m=t.getMonth()-b.getMonth();if(m<0||(m===0&&t.getDate()<b.getDate()))a--;return a};
const ini=n=>n.split(" ").map(w=>w[0]).join("").slice(0,2);
const dir=p=>"assets/players/"+p.slug+"/";
const row=(k,v)=>v?`<dt>${k}</dt><dd>${v}</dd>`:"";
const li=a=>a.map(x=>`<li>${x}</li>`).join("");

/* intro: video plays, logo fades in, click (or video end) dissolves to the site */
function enter(){if(B.classList.contains("in"))return;B.classList.add("in");bg.loop=true;bg.play().catch(()=>{})}
$("#enter").onclick=enter;
bg.addEventListener("ended",()=>{if(!B.classList.contains("in"))enter()});
bg.play().catch(()=>{});

/* nav */
addEventListener("scroll",()=>$("#nav").classList.toggle("s",scrollY>50),{passive:true});
$("#mb").onclick=()=>$("#menu").classList.toggle("o");
document.querySelectorAll("#menu a").forEach(a=>a.onclick=()=>$("#menu").classList.remove("o"));
$("#em").textContent=EMAIL;$("#em").href="mailto:"+EMAIL;

/* player cards */
$("#pl").innerHTML=PLAYERS.map((p,i)=>{const a=ageOf(p.dob);
return `<div class="card" data-i="${i}" tabindex="0"><div class="ph">${ini(p.name)}<img src="${dir(p)}profile.jpg" alt="${p.name}" loading="lazy" onerror="this.remove()"><i>&#9654;</i></div><div class="t"><h3>${p.name}</h3><span>${p.pos||"Profile coming soon"}${a?" &middot; "+a+" yrs":""}</span></div></div>`}).join("");
$("#cl").innerHTML=CLUBS.length?CLUBS.map(c=>`<div class="club"><b>${c.name}</b>${c.country||""}</div>`).join(""):[["01","Scout","We find talent at schools, community leagues and trials."],["02","Verify","Age, fitness, ability and character are checked and documented."],["03","Prepare","Players are readied for trials, contracts and life abroad."],["04","Present","Verified players are introduced to our partner clubs in Europe."]].map(x=>`<div class="club"><b>${x[0]} &middot; ${x[1]}</b>${x[2]}</div>`).join("");

/* player profile pop-up */
function open(i){const p=PLAYERS[i],a=ageOf(p.dob),n=p.shots||0;let sh="";const vs=p.videos||[{src:p.video||"highlights.mp4"}];const vh=`<h3 class="sh">${vs.length>1?"Videos":"Video"}</h3>`+vs.map((v,j)=>`<div class="vb" data-v="${j}">${v.poster?`<img src="${dir(p)}${v.poster}" alt="" onerror="this.remove()">`:""}<span>&#9654;</span>${v.label?`<em>${v.label}</em>`:""}</div>`).join("");
for(let k=1;k<=n;k++)sh+=`<img src="${dir(p)}action-${k}.jpg" alt="${p.name} in action" loading="lazy">`;
$("#mc").innerHTML=`<div class="ph" style="aspect-ratio:4/5">${ini(p.name)}<img src="${dir(p)}profile.jpg" alt="${p.name}" onerror="this.remove()"></div><div><p class="eb">${p.status||""}</p><h2>${p.name}</h2><dl>${row("Position",p.pos)}${row("Age",a)}${row("Height",p.h)}${row("Weight",p.w)}${row("Preferred foot",p.foot)}${row("Strengths",(p.tags||[]).join(" &middot; "))}${row("Agent",p.agent)}</dl>${p.bio?`<p class="lead">${p.bio}</p>`:""}${p.honours?`<h3 class="sh">Honours</h3><ul class="ls">${li(p.honours)}</ul>`:""}${p.clubs?`<h3 class="sh">Club Experience</h3><ul class="ls">${li(p.clubs)}</ul>`:""}${sh?`<h3 class="sh">In Action</h3><div class="shots">${sh}</div>`:""}${vh}<p style="margin-top:20px"><a class="btn f" href="#partner" id="enq">Enquire About ${p.name}</a></p></div>`;
$("#mc").querySelectorAll(".vb").forEach(b=>b.onclick=()=>{const c=vs[+b.dataset.v],v=document.createElement("video");v.controls=true;v.autoplay=true;v.playsInline=true;v.src=dir(p)+c.src+(c.start!=null?"#t="+c.start+(c.end!=null?","+c.end:""):"");v.style.cssText="width:100%;max-height:72vh;margin-top:18px;background:#000";
v.onerror=()=>{v.replaceWith(Object.assign(document.createElement("p"),{className:"lead",textContent:"Highlight video coming soon."}))};b.replaceWith(v)});
$("#enq").onclick=()=>{$("#pi").value=p.name;close()};
$("#mc").querySelectorAll(".shots img").forEach(im=>im.onclick=()=>{$("#lb img").src=im.src;$("#lb").classList.add("o")});
$("#modal").classList.add("o");B.style.overflow="hidden"}
function close(){$("#modal").classList.remove("o");$("#mc").innerHTML="";B.style.overflow=""}
$("#pl").onclick=e=>{const c=e.target.closest(".card");if(c)open(+c.dataset.i)};
$("#pl").onkeydown=e=>{if(e.key==="Enter"){const c=e.target.closest(".card");if(c)open(+c.dataset.i)}};
$("#mx").onclick=close;$("#lb").onclick=()=>$("#lb").classList.remove("o");
addEventListener("keydown",e=>{if(e.key==="Escape"){if($("#lb").classList.contains("o"))$("#lb").classList.remove("o");else close()}});

/* partnership form: opens the visitor's email app with the enquiry ready to send */
$("#pf").onsubmit=e=>{e.preventDefault();const d=new FormData(e.target),g=k=>d.get(k)||"-";
location.href=`mailto:${EMAIL}?subject=${encodeURIComponent("Partnership enquiry: "+g("n"))}&body=${encodeURIComponent(`Name: ${g("n")}\nOrganisation: ${g("o")}\nEmail: ${g("e")}\nPhone: ${g("p")}\nRole: ${g("r")}\nInterested in: ${g("i")}\nPlayer: ${g("pl")}\n\n${g("m")}`)}`};

/* scroll reveal */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("v");io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
})();
