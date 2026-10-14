import {useState,useEffect,useRef,useCallback} from 'react'
import emailjs from '@emailjs/browser'
import {content as C} from './data/content.js'
import {emailConfig as E,emailReady} from './emailConfig.js'
const B=import.meta.env.BASE_URL, u=p=>p?(/^https?:/.test(p)?p:B+p):''
const scenes=[['hero','Birthday'],['gallery','Pieces'],['timeline','Moments'],['cards','Admire'],['wishes','Ahead'],['letter','Letter']]

function Img({src,alt,...r}){const [bad,setBad]=useState(false)
 return bad?<div className="imgfb" role="img" aria-label={alt}>Replace this photo</div>:<img src={u(src)} alt={alt} loading="lazy" onError={()=>setBad(true)} {...r}/>}

function Cake({lit}){return <svg className="cake" viewBox="0 0 220 200" role="img" aria-label="Kue ulang tahun dengan lilin">
 <ellipse cx="110" cy="186" rx="100" ry="10" fill="#0008"/>
 <rect x="30" y="130" width="160" height="52" rx="8" fill="#B9ADD9"/><rect x="50" y="86" width="120" height="48" rx="8" fill="#F6F0E8"/>
 <path d="M50 100q15 14 30 0t30 0 30 0 30 0v-14H50z" fill="#D9C49A"/><path d="M30 144q20 14 40 0t40 0 40 0 40 0v-14H30z" fill="#F6F0E8"/>
 {[80,110,140].map(x=><g key={x}><rect x={x-4} y="58" width="8" height="30" rx="2" fill="#D9C49A"/>
  {lit?<ellipse className="flame" cx={x} cy="48" rx="6" ry="11" fill="#FFD27A"/>:<path className="smoke" d={`M${x} 54c-8-10 8-16 0-28`} stroke="#B8BDCC" fill="none" strokeWidth="2"/>}</g>)}</svg>}

function Opening({onDone}){const [lit,setLit]=useState(true),[mic,setMic]=useState('idle'),[bits,setBits]=useState([]),ctx=useRef(),br=useRef()
 const stopMic=()=>{const c=ctx.current;ctx.current=null;if(c){c.stream.getTracks().forEach(t=>t.stop());c.ac.close().catch(()=>{})}}
 const blow=useCallback(()=>{if(!lit)return;setLit(false);stopMic();setBits(Array.from({length:36},(_,i)=>({i,x:Math.random()*100,d:Math.random()*.6,c:['#D9C49A','#B9ADD9','#F6F0E8'][i%3]})))},[lit])
 br.current=blow;useEffect(()=>stopMic,[])
 const listen=async()=>{ // izin mikrofon hanya diminta saat tombol ini ditekan
  if(!navigator.mediaDevices?.getUserMedia){setMic('na');return}
  try{setMic('ask');const stream=await navigator.mediaDevices.getUserMedia({audio:true}),ac=new(window.AudioContext||window.webkitAudioContext)(),an=ac.createAnalyser();an.fftSize=512
   ac.createMediaStreamSource(stream).connect(an);ctx.current={stream,ac};setMic('on');const buf=new Uint8Array(an.fftSize);let hits=0
   const tick=()=>{if(!ctx.current)return;an.getByteTimeDomainData(buf);let q=0;for(const v of buf)q+=(v-128)**2
    hits=Math.sqrt(q/buf.length)>28?hits+1:0;if(hits>6){br.current();return};requestAnimationFrame(tick)};tick()
  }catch{setMic('denied')}}
 return <section className="open" aria-label="Opening"><i className="orb"/>
  <div className="ostage">
   <p className="eyebrow">A little something made just for you</p>
   <h1 className="otitle">For My Lovely Nur</h1>
   <p className="olead">Today, the universe is celebrating someone truly special.</p>
   <Cake lit={lit}/>
   {lit?<div className="octl" aria-live="polite"><p className="owish">Make a wish, then blow out your candles.</p>
    <div className="row"><button className="btn" onClick={blow}>Blow the Candles</button>
    {mic!=='on'&&<button className="btn ghost" onClick={listen} disabled={mic==='ask'}>🎤 Blow with microphone</button>}</div>
    {mic==='on'&&<p className="hint">Mendengarkan… tiup ke mikrofon, atau tekan tombol.</p>}
    {(mic==='denied'||mic==='na')&&<p className="hint">Mikrofon tidak tersedia — pakai tombol saja.</p>}</div>
   :<div className="octl happy"><h2>Happy Birthday, My Lovely Nur!</h2><button className="btn" onClick={onDone}>Continue</button></div>}
   <button className="link" onClick={onDone}>Skip</button></div>
  {bits.map(b=><span key={b.i} className="conf" style={{left:b.x+'%',background:b.c,animationDelay:b.d+'s'}}/>)}</section>}

function Nav(){const [act,setAct]=useState('hero'),[p,setP]=useState(0),[m,setM]=useState(false),[top,setTop]=useState(false)
 useEffect(()=>{const f=()=>{const h=document.documentElement;setP(h.scrollTop/((h.scrollHeight-h.clientHeight)||1)*100);setTop(h.scrollTop>600);h.style.setProperty('--sy',h.scrollTop)
  let a='hero';for(const [id] of scenes){const e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<innerHeight*.4)a=id};setAct(a)}
  f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
 return <><header className="nav"><div className="bar" style={{width:p+'%'}}/><span className="brand">Nur</span>
  <button className="burger" aria-expanded={m} aria-label="Menu" onClick={()=>setM(!m)}>{m?'✕':'☰'}</button>
  <nav className={m?'show':''}>{scenes.map(([id,l])=><a key={id} href={'#'+id} className={act===id?'on':''} aria-current={act===id} onClick={()=>setM(false)}>{l}</a>)}</nav></header>
  {top&&<button className="totop" aria-label="Kembali ke atas" onClick={()=>scrollTo({top:0,behavior:'smooth'})}>↑</button>}</>}

function Hero(){const t=new Date().toLocaleDateString('en-CA'),d=Math.round((new Date(C.birthday)-new Date(t))/864e5)
 const note=d>0?`${d} hari lagi menuju harimu`:d===0?'Hari ini harimu':''
 return <section id="hero" className="sec hero"><Img src={C.heroImage} alt={C.title} className="heroimg" loading="eager"/>
  <p className="eyebrow">Happy Birthday</p><h1>My Lovely {C.recipient}</h1><p className="date">{C.birthdayLabel}</p>{note&&<p className="note">{note}</p>}
  <p className="greet">{C.greeting}</p><p className="sub">{C.subtitle}</p>
  <div className="row"><a className="btn" href="#gallery">Lihat kenangan</a><button className="btn ghost" onClick={()=>dispatchEvent(new Event('toggle-music'))}>♪ Play / Pause</button></div></section>}

function Gallery({onView}){const [i,setI]=useState(null),x=useRef(0),L=C.photos.length
 const go=useCallback(d=>setI(v=>(v+d+L)%L),[L])
 useEffect(()=>{if(i!=null)onView(C.photos[i].id)},[i])
 useEffect(()=>{if(i==null)return;const k=e=>{if(e.key==='Escape')setI(null);if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)}
  addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[i,go])
 const ph=i!=null&&C.photos[i]
 return <section id="gallery" className="sec"><h2>Little Pieces of Us</h2>
  <div className="grid">{C.photos.map((p,n)=><button key={p.id} className="polaroid" style={{'--r':((n%5)-2)*1.2+'deg'}} onClick={()=>setI(n)} aria-label={'Buka foto: '+p.caption}><Img src={p.src} alt={p.alt}/><span>{p.caption}</span></button>)}</div>
  {ph&&<div className="lb" role="dialog" aria-modal="true" aria-label="Foto" onClick={e=>e.target===e.currentTarget&&setI(null)}
   onTouchStart={e=>x.current=e.touches[0].clientX} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-x.current;if(Math.abs(d)>50)go(d<0?1:-1)}}>
   <button className="x" autoFocus onClick={()=>setI(null)} aria-label="Tutup">✕</button>
   <figure><Img src={ph.src} alt={ph.alt} loading="eager"/><figcaption>{ph.caption}{ph.date&&<small> · {ph.date}</small>}</figcaption></figure>
   <div className="row"><button className="btn ghost" onClick={()=>go(-1)} aria-label="Foto sebelumnya">←</button><button className="btn ghost" onClick={()=>go(1)} aria-label="Foto berikutnya">→</button></div></div>}</section>}

function Timeline(){const [s,setS]=useState(null),t=C.timeline.find(x=>x.id===s)
 return <section id="timeline" className="sec"><h2>The Moments That Became Memories</h2>
  <ol className="tl">{C.timeline.map(m=><li key={m.id}><button aria-expanded={s===m.id} className={s===m.id?'on':''} onClick={()=>setS(s===m.id?null:m.id)}><b>{m.title}</b>{m.date&&<small>{m.date}</small>}</button></li>)}</ol>
  {t&&<article className="panel"><h3>{t.title}</h3><p>{t.text}</p>{t.image&&<Img src={t.image} alt={t.title}/>}<button className="link" onClick={()=>setS(null)}>Tutup</button></article>}</section>}

function Cards({unlocked}){const [o,setO]=useState(null),[h,setH]=useState(false)
 return <section id="cards" className="sec"><h2>Things I Admire About You</h2>
  <div className="cards">{C.cards.map((c,n)=><button key={c.id} className={'card v'+n%3+(o===c.id?' open':'')} aria-expanded={o===c.id} onClick={()=>setO(o===c.id?null:c.id)}><small>{c.category}</small>{o===c.id?<p>{c.text}</p>:<span>Tap to open</span>}</button>)}</div>
  {unlocked?<button className="card secret open" onClick={()=>setH(!h)}><small>A hidden memory</small>{h?<p>{C.hidden.text}</p>:<span>{C.hidden.title} — tap</span>}</button>
   :<p className="hint">Ada satu kenangan tersembunyi… mungkin ada di galeri.</p>}</section>}

function WishWrite(){const [t,setT]=useState(''),[st,setSt]=useState('idle'),[err,setErr]=useState(''),W=C.wishWrite
 const fail=m=>{setErr(m);setSt('error')}
 const send=async()=>{const m=t.trim()
  if(!m)return fail('Tulis harapanmu dulu ya.')
  if(m.length>E.maxLength)return fail(`Maksimal ${E.maxLength} karakter.`)
  if(!emailReady)return fail('Pengiriman belum dikonfigurasi (isi file .env — lihat README).')
  setSt('sending');setErr('')
  try{const r=await emailjs.send(E.serviceId,E.templateId,{message:m,sent_at:new Date().toLocaleString('id-ID',{dateStyle:'full',timeStyle:'short'})},{publicKey:E.publicKey})
   if(r.status!==200)throw new Error('status '+r.status);setSt('sent')}catch{fail(W.error)}}
 const busy=st==='sending',done=st==='sent'
 return <div className="wwrite"><h3>{W.title}</h3><p>{W.intro}</p>
  <textarea value={t} onChange={e=>setT(e.target.value)} placeholder={W.placeholder} rows={6} maxLength={E.maxLength} disabled={busy||done} aria-label={W.title}/>
  <small className="cnt">{t.length}/{E.maxLength}</small>
  {err&&<p className="werr" role="alert">{err}</p>}
  {done?<div className="wsent" role="status">{[...Array(14)].map((_,i)=><i key={i} className="wstar" style={{left:(i*7+4)+'%',animationDelay:i*.12+'s'}}>✦</i>)}<p>{W.sent}</p>
   <div className="row"><a className="btn" href="#letter">Lanjut ke surat</a><button className="btn ghost" onClick={()=>{setT('');setSt('idle')}}>Write another wish</button></div></div>
  :<div className="row"><button className="btn" onClick={send} disabled={busy}>{busy?W.sending:st==='error'&&t.trim()?W.retry:W.send}</button></div>}</div>}

function Wishes(){const [g,setG]=useState(false),[i,setI]=useState(-1),L=C.wishes.length,w=C.wishes[i]
 return <section id="wishes" className="sec"><h2>For All the Days Ahead</h2>
  <div className="wish" aria-live="polite">{w?<><small>{w.category}</small><p>{w.text}</p></>:<p>Open a little wish for the year ahead.</p>}</div>
  <div className="row">{i>0&&<button className="btn ghost" onClick={()=>setI(i-1)}>Back</button>}<button className="btn" onClick={()=>setI((i+1)%L)}>{i<0?'Open a Wish':C.buttons.wish}</button></div>
  <WishWrite/>
  <button className={'gift'+(g?' open':'')} aria-expanded={g} onClick={()=>setG(!g)}><span className="lid"/><span className="gbox"/><b>{g?'':'A little gift — tap to open'}</b></button>
  {g&&<div className="giftmsg"><h3>{C.gift.title}</h3><p>{C.gift.text}</p></div>}</section>}

function Letter(){const [o,setO]=useState(false)
 return <section id="letter" className="sec letter"><h2>One Last Thing, My Lovely </h2>
  {!o?<button className="btn" onClick={()=>setO(true)}>{C.buttons.letter}</button>:<>
   <article className="paper">{C.letter.map((t,n)=><p key={n} style={{animationDelay:n*.35+'s'}}>{t}</p>)}<p className="sign">{C.sign}</p></article>
   <div className="closing"><h3>{C.closing.title}</h3><p>{C.closing.text}</p></div></>}</section>}

function Music(){const a=useRef(),M=C.music,[pl,setPl]=useState(false),[t,setT]=useState(0),[d,setD]=useState(0),[vol,setVol]=useState(.7),[err,setErr]=useState(!M.src)
 const toggle=useCallback(()=>{const e=a.current;if(!e||err)return;e.paused?e.play().catch(()=>setErr(true)):e.pause()},[err])
 useEffect(()=>{const p=()=>a.current&&a.current.pause();addEventListener('toggle-music',toggle);addEventListener('pause-music',p)
  return()=>{removeEventListener('toggle-music',toggle);removeEventListener('pause-music',p)}},[toggle])
 useEffect(()=>{if(a.current)a.current.volume=vol},[vol])
 return <aside className="music" aria-label="Music player">
  {M.src&&<audio ref={a} src={u(M.src)} preload="none" onPlay={()=>setPl(true)} onPause={()=>setPl(false)} onTimeUpdate={e=>setT(e.target.currentTime)} onLoadedMetadata={e=>setD(e.target.duration)} onError={()=>setErr(true)}/>}
  <button className="pp" onClick={toggle} disabled={err} aria-label={pl?'Pause':'Play'}>{pl?'❚❚':'▶'}</button>
  <div className="meta"><b>{M.title}</b> <small>{M.artist}</small><small className="st">{err?'Audio belum tersedia — lihat README':pl?'Playing':'Paused'}</small></div>
  <input type="range" aria-label="Progress" min="0" max={d||1} step="0.1" value={t} disabled={err} onChange={e=>{a.current.currentTime=+e.target.value}}/>
  <input type="range" aria-label="Volume" className="vol" min="0" max="1" step="0.05" value={vol} onChange={e=>setVol(+e.target.value)}/></aside>}

export default function App(){const [opened,setOpened]=useState(false),[views,setViews]=useState(new Set())
 useEffect(()=>{document.body.style.overflow=opened?'':'hidden'},[opened])
 return <>{!opened&&<Opening onDone={()=>setOpened(true)}/>}<div className="plx" aria-hidden="true"><i className="plx1"/><i className="plx2"/></div><Nav/>
  <main><Hero/><Gallery onView={id=>setViews(s=>s.has(id)?s:new Set(s).add(id))}/><Timeline/><Cards unlocked={views.size>=3}/><Wishes/><Letter/></main><Music/></>}
