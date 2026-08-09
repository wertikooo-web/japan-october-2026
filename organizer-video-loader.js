(async function(){
  try {
    const files=['.video_embed/0.txt','.video_embed/1.txt','.video_embed/2.txt'];
    const parts=await Promise.all(files.map(f=>fetch(f+'?v=20260810-hq2').then(r=>{if(!r.ok) throw new Error(f); return r.text();})));
    const src='data:video/mp4;base64,'+parts.join('').replace(/\s+/g,'');
    const video=document.querySelector('#organizer video.organizer-photo, #organizer .organizer-profile video');
    if(!video) return;
    let source=video.querySelector('source');
    if(!source){source=document.createElement('source');source.type='video/mp4';video.appendChild(source);}
    source.src=src;
    video.src=src;
    video.muted=true;
    video.loop=true;
    video.playsInline=true;
    video.load();
    video.play().catch(()=>{});
  } catch(e) { console.error('Organizer video load failed',e); }
})();
