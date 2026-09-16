// Structural crawl of aquafinity.com/catalog/ (public pages only) for the migration manifest.
// Records URLs, titles, breadcrumbs, catalog links, image sources, and document links. Text is
// stored only as a short excerpt for analyst context and is never reused as copy.
const fs=require('fs'),path=require('path');
const OUT=process.argv[2]||'docs/research/aquafinity-catalog/crawl.json';
const CACHE=process.argv[3]||'/tmp/aq';
fs.mkdirSync(CACHE,{recursive:true});
const UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const norm=u=>{try{const x=new URL(u,'https://aquafinity.com');x.hash='';x.search='';let s=x.toString();if(!s.endsWith('/'))s+='/';return s;}catch{return null;}};
const inCatalog=u=>u&&u.startsWith('https://aquafinity.com/catalog/');
const strip=h=>h.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&#8217;|&rsquo;/g,"'").replace(/&#8211;/g,'-').replace(/\s+/g,' ').trim();
async function get(u){const f=path.join(CACHE,encodeURIComponent(u)+'.html');if(fs.existsSync(f))return fs.readFileSync(f,'utf8');for(let i=0;i<3;i++){try{const r=await fetch(u,{headers:{'user-agent':UA,'accept':'text/html'}});if(r.status===200){const t=await r.text();fs.writeFileSync(f,t);return t;}console.error('status',r.status,u);}catch(e){console.error('err',u,e.message);}await sleep(1500*(i+1));}return null;}
(async()=>{
  const start='https://aquafinity.com/catalog/';const seen=new Set([start]);const queue=[start];const pages=[];
  while(queue.length){const u=queue.shift();const html=await get(u);if(!html){pages.push({url:u,error:true});continue;}
    const title=(html.match(/<title>([^<]*)<\/title>/i)||[])[1]?.trim()||'';
    const h1=strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)||[])[1]||'');
    const crumbs=[...html.matchAll(/class="[^"]*breadcrumb[^"]*"[\s\S]*?<\/(?:nav|ol|ul|div)>/gi)].map(m=>strip(m[0])).slice(0,1);
    const links=[...new Set([...html.matchAll(/href="([^"]+)"/g)].map(m=>norm(m[1])).filter(inCatalog))];
    // main content region heuristics
    const mainMatch=html.match(/<main[\s\S]*?<\/main>/i)||html.match(/<article[\s\S]*?<\/article>/i);const main=mainMatch?mainMatch[0]:html;
    const images=[...new Set([...main.matchAll(/<img[^>]+>/g)].map(m=>m[0]).map(tag=>({src:(tag.match(/(?:data-src|src)="([^"]+)"/)||[])[1],alt:(tag.match(/alt="([^"]*)"/)||[])[1]||''})).filter(i=>i.src&&!/logo|icon|svg|placeholder|avatar|gravatar/i.test(i.src)).map(i=>JSON.stringify(i)))].map(s=>JSON.parse(s)).slice(0,25);
    const docs=[...new Set([...html.matchAll(/href="([^"]+\.pdf[^"]*)"/gi)].map(m=>m[1]))];
    const external=[...new Set([...html.matchAll(/href="(https?:\/\/(?!aquafinity\.com)[^"]+)"/g)].map(m=>m[1]).filter(x=>!/facebook|twitter|linkedin|instagram|youtube|google|wp\.com|gravatar|w\.org/i.test(x)))].slice(0,30);
    const headings=[...main.matchAll(/<h([2-4])[^>]*>([\s\S]*?)<\/h\1>/gi)].map(m=>strip(m[2])).filter(Boolean).slice(0,60);
    const tabs=[...main.matchAll(/(?:tab|accordion)[^>]*>([^<]{2,60})</gi)].map(m=>m[1].trim()).filter(Boolean).slice(0,40);
    const excerpt=strip(main).slice(0,1500);
    pages.push({url:u,title,h1,crumbs,depth:u.replace(start,'').split('/').filter(Boolean).length,links,images,docs,external,headings,tabs,excerpt});
    for(const l of links){if(!seen.has(l)){seen.add(l);queue.push(l);}}
    await sleep(400);
    if(pages.length%20===0)console.error('crawled',pages.length,'queue',queue.length);
  }
  fs.writeFileSync(OUT,JSON.stringify(pages,null,1));
  console.log('pages',pages.length,'errors',pages.filter(p=>p.error).length);
})();
