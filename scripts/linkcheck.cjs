const fs=require('fs'),path=require('path');
const root='out'; const BASE=process.env.NEXT_PUBLIC_BASE_PATH||''; const pages={};
(function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);if(fs.statSync(p).isDirectory())walk(p);else if(f.endsWith('.html'))pages[p]=fs.readFileSync(p,'utf8');}})(root);
const unesc=s=>s.replace(/&amp;/g,'&').replace(/&#x27;/g,"'").replace(/&quot;/g,'"');
const exists=h0=>{const h=BASE&&h0.startsWith(BASE+'/')?h0.slice(BASE.length):h0;const pth=h.split('#')[0].split('?')[0];if(!pth||!pth.startsWith('/'))return true;const fs1=path.join(root,pth.replace(/^\//,''));if(pth.endsWith('/'))return fs.existsSync(path.join(fs1,'index.html'));return fs.existsSync(fs1)||fs.existsSync(fs1+'.html')||fs.existsSync(path.join(fs1,'index.html'));};
const broken={},anchors={};let h1=[];const titles={};
for(const [p,src] of Object.entries(pages)){
  for(const m of src.matchAll(/(?:href|src)="([^"]+)"/g)){const h=unesc(m[1]);if(/^(https?:|mailto:|tel:|data:|\/\/)/.test(h))continue;if(!exists(h))(broken[h]??=[]).push(p);
    if(h.includes('#')){let [pth,frag]=h.split('#'); if(BASE&&pth.startsWith(BASE+'/')) pth=pth.slice(BASE.length);const target=pth?path.join(root,pth.replace(/^\//,''),'index.html'):p;if(frag&&fs.existsSync(target)&&!fs.readFileSync(target,'utf8').includes(`id="${frag}"`))(anchors[h]??=[]).push(p);}}
  const n=(src.match(/<h1[\s>]/g)||[]).length;if(n!==1)h1.push([n,p]);
  const t=src.match(/<title>(.*?)<\/title>/);if(t)(titles[t[1]]??=[]).push(p);
}
console.log('pages',Object.keys(pages).length);
console.log('broken',Object.keys(broken).length?Object.fromEntries(Object.entries(broken).map(([k,v])=>[k,v[0]])):'none');
console.log('missing anchors',Object.keys(anchors).length?Object.fromEntries(Object.entries(anchors).map(([k,v])=>[k,v[0]])):'none');
console.log('h1 issues',h1.filter(([n,p])=>!p.includes('404')&&!p.includes('_not-found')));
console.log('dup titles',Object.entries(titles).filter(([k,v])=>v.length>1&&!v.join().includes('404')).map(([k,v])=>[k,v.length]));
for(const ph of ['complete water management','call for price','wonderful world of water']){const hits=Object.entries(pages).filter(([p,s])=>s.toLowerCase().includes(ph));if(hits.length)console.log('phrase',ph,hits[0][0]);}
