(function(){
  try {
    const src='assets/organizer-alexei.mp4?v=20260810-hq3';
    const video=document.querySelector('#organizer video.organizer-photo, #organizer .organizer-profile video');
    if(!video) return;
    let source=video.querySelector('source');
    if(!source){
      source=document.createElement('source');
      source.type='video/mp4';
      video.appendChild(source);
    }
    source.src=src;
    video.src=src;
    video.muted=true;
    video.loop=true;
    video.playsInline=true;
    video.preload='metadata';
    video.load();
    video.play().catch(()=>{});
  } catch(e) {
    console.error('Organizer video load failed',e);
  }
})();
