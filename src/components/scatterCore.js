// Auto-generated from prototype v38 — the entire site experience.
export const SCATTER_CSS = "\n  :root{\n    --ink:#111111;\n    --paper:#ffffff;\n    --grey:#8a8a8a;\n    --line:#e6e6e6;\n  }\n  *{margin:0;padding:0;box-sizing:border-box}\n  .scatter-root{min-height:100vh}\n  .scatter-root{\n    font-family:ui-monospace,'SF Mono',Menlo,Consolas,monospace;\n    background:var(--paper);\n    color:var(--ink);\n    overflow-x:hidden;\n  }\n\n  /* ---------- INTRO ---------- */\n  #intro{\n    position:fixed;inset:0;z-index:50;\n    background:var(--paper);\n    overflow:hidden;\n    transition:opacity .1s ease;   /* the 0.1s vanish */\n  }\n  #intro.leaving{opacity:0;pointer-events:none}\n\n  /* the anchored hand photo: left side, ~40% of the screen */\n  .anchor{\n    position:absolute;left:0;top:50%;\n    transform:translateY(-50%);\n    height:42vh;width:auto;      /* whole photo, no crop, with white space at the left */\n    display:block;\n    user-select:none;\n    -webkit-user-drag:none;\n  }\n\n  /* the drifting glove */\n  .floater{\n    position:absolute;left:0;top:0;\n    width:min(14.3vw,162px);\n    display:block;\n    cursor:pointer;\n    will-change:transform;\n    user-select:none;\n    -webkit-user-drag:none;\n  }\n\n  /* ---------- VIDEO SQUARE ----------\n     A 25vmin square pinned where the visitor clicked the glove.\n     The page behind it stays white.                              */\n  #videoStage{\n    position:fixed;z-index:40;\n    width:17.5vmin;height:17.5vmin;\n    display:block;\n    opacity:0;visibility:hidden;\n    transition:opacity .8s ease;\n    cursor:pointer;\n  }\n  #videoStage.on{opacity:1;visibility:visible;cursor:default}\n  #loopVid{\n    width:100%;height:100%;\n    object-fit:cover;   /* crops the 4:3 clip into the square */\n    display:block;\n  }\n\n  /* ---------- SIGNATURE ---------- */\n  #signature{\n    position:fixed;right:22px;bottom:18px;z-index:70;\n    cursor:pointer;\n    font-family:'Helvetica Neue',Helvetica,-apple-system,'Segoe UI',Arial,sans-serif;\n    font-size:12px;font-weight:400;\n    letter-spacing:.14em;\n    color:var(--ink);\n    text-decoration:none;\n    user-select:none;\n  }\n  #signature:hover{text-decoration:underline}\n\n  /* ---------- CURSOR TOOLTIP ---------- */\n  #cursorTip{\n    position:fixed;z-index:80;\n    display:none;\n    font-family:'Helvetica Neue',Helvetica,-apple-system,'Segoe UI',Arial,sans-serif;\n    font-size:11px;letter-spacing:.08em;\n    color:var(--ink);background:var(--paper);\n    padding:3px 8px;\n    pointer-events:none;\n    white-space:nowrap;\n  }\n\n  /* ---------- SCATTERED WORKS ---------- */\n  .work-icon{\n    position:fixed;z-index:35;      /* under the video square (40) */\n    display:block;\n    opacity:0;\n    transition:opacity .8s ease, transform .35s cubic-bezier(.22,1,.36,1);\n    cursor:pointer;\n  }\n  .work-icon.on{opacity:1}\n  .work-icon:hover{transform:scale(1.06)}\n  .work-icon img{\n    width:100%;height:100%;\n    object-fit:cover;display:block;\n  }\n\n  /* ---------- SCATTERED WORK PAGE ---------- */\n  #workPage{\n    position:fixed;inset:0;z-index:45;\n    background:var(--paper);\n    display:none;\n    font-family:'Helvetica Neue',Helvetica,-apple-system,'Segoe UI',Arial,'Noto Sans Thai','Leelawadee UI',Thonburi,sans-serif;\n  }\n  #workPage.on{display:block}\n  .wp-el{\n    position:absolute;\n    opacity:0;\n    transition:opacity .8s ease;\n    color:var(--ink);\n  }\n  .wp-el.on{opacity:1}\n  .wp-el img{width:100%;display:block}\n  .wp-body p{margin:0 0 10px}\n  .wp-body .cv-h{margin-top:16px;letter-spacing:.18em;text-transform:uppercase;font-size:10px;color:#888}\n  .wp-body.scrolling{max-height:62vh;overflow-y:auto}\n  .wp-el a{color:var(--ink)}\n\n  /* ---------- LIGHTBOX ---------- */\n  #lightbox{\n    position:fixed;inset:0;z-index:90;\n    background:var(--paper);\n    display:none;\n    align-items:center;justify-content:center;\n  }\n  #lightbox.on{display:flex}\n  #lightbox img{\n    max-width:92vw;max-height:92vh;\n    display:block;\n    cursor:zoom-out;\n  }\n  #lightbox .close{\n    position:fixed;top:18px;right:22px;\n    font-family:'Helvetica Neue',Helvetica,-apple-system,'Segoe UI',Arial,sans-serif;\n    font-size:20px;line-height:1;\n    color:var(--ink);\n    cursor:pointer;\n    user-select:none;\n    padding:6px;\n  }\n  .wp-el img{cursor:zoom-in}\n\n  @media (prefers-reduced-motion: reduce){\n    #site{transition:none}\n  }\n";

const SKELETON = "<!-- INTRO -->\n<div id=\"intro\">\n  <img class=\"anchor\" src=\"/site-assets/intro/hand.jpg\" alt=\"\">\n  <img class=\"floater\" id=\"floater\" src=\"/site-assets/intro/glove.png\" alt=\"Gloves \u2014 click to enter\" role=\"button\" tabindex=\"0\">\n</div>\n\n<a id=\"signature\" href=\"/cv/\">Kitman Yeung</a>\n\n<!-- scattered work icons are created by script on entry -->\n<!-- VIDEO STAGE -->\n<div id=\"videoStage\" aria-label=\"Video loop\">\n  <video id=\"loopVid\" src=\"/site-assets/intro/loop.mp4\" muted loop playsinline preload=\"auto\"></video>\n</div>";

export function initScatter(container){
  container.innerHTML = SKELETON;
  let destroyed = false;


  const intro   = container.querySelector('#intro');
  const floater = container.querySelector('#floater');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- horizontal cloud drift (v7 DNA, rotated) ----------
     The glove starts at the centre of the screen and drifts slowly LEFT,
     toward the anchored hand photo. On touching it, it turns and drifts
     slowly back to centre, then the cycle repeats. A gentle bob and a
     lazy vertical wander ride on top, same character as v7.              */
  let w = floater.clientWidth  || 340;
  let h = floater.clientHeight || 204;

  const TOWARD_SPEED = 0.3;   // px per frame — brisker horizontal drift
  const BOB_AMPL     = 14;    // px of up-and-down hover
  const BOB_SECS     = 3.2;

  const anchorImg = container.querySelector('.anchor');
  const anchorEdge = () => anchorImg.getBoundingClientRect().right; // photo's real right edge

  let xBase = (window.innerWidth - w) / 2;  // start centered
  let arrived = false;                      // once true, it drifts within proximity
  let tArrive = 0;
  let t = 0;

  let running = !reducedMotion;
  let last = performance.now();

  floater.addEventListener('load', () => {
    w = floater.clientWidth; h = floater.clientHeight;
  });

  function cloudLoop(now){
    if (destroyed || !running) return;
    const dt = Math.min((now - last) / 1000, .05);
    last = now;
    t += dt;

    // the glove drifts INTO the photo and settles half-overlapping it
    const restX = anchorEdge() - w * 0.5;

    if (!arrived){
      xBase -= TOWARD_SPEED * dt * 60;
      if (xBase <= restX){ xBase = restX; arrived = true; tArrive = t; }
    }

    // once arrived: gentle cloud drift within proximity of the hand.
    // two slow out-of-phase sines per axis, ramped in softly over 6s
    // so there's no jump at the moment of arrival.
    let xLocal = 0;
    let proximity = 0;
    if (arrived){
      proximity = Math.min((t - tArrive) / 6, 1);
      const R = 70; // px radius of the local wander
      xLocal = (Math.sin(t * .17) * .6 + Math.sin(t * .41 + 2.1) * .4) * R * proximity;
    }

    // gentle bob layered on the travel
    const bob = Math.sin(t * 2 * Math.PI / BOB_SECS) * BOB_AMPL;

    // vertical wander: wide during the journey, tightening to a small
    // cloud-like radius (~70px) once it has arrived at the hand
    const cy = (window.innerHeight - h) / 2;
    const wideRange  = Math.max((window.innerHeight - h) / 2 - 20, 0) * 0.5;
    const tightRange = 70;
    const range = wideRange + (tightRange - wideRange) * proximity;
    const y = cy + (Math.sin(t * .21) * .7 + Math.sin(t * .53 + 1.3) * .3) * range + bob;

    floater.style.transform = 'translate(' + (xBase + xLocal) + 'px,' + y + 'px)';
    requestAnimationFrame(cloudLoop);
  }
  floater.style.transform = 'translate(' + xBase + 'px,' + ((window.innerHeight - h) / 2) + 'px)';
  requestAnimationFrame(cloudLoop);

  /* ---------- click the glove -> fullscreen looping video ---------- */
  const videoStage = container.querySelector('#videoStage');
  const loopVid    = container.querySelector('#loopVid');

  function enter(e){
    running = false;

    // pin the video square centred on the click point, clamped to the screen
    const S = Math.min(window.innerWidth, window.innerHeight) * 0.175;
    const cx = (e && e.clientX != null) ? e.clientX : window.innerWidth / 2;
    const cy2 = (e && e.clientY != null) ? e.clientY : window.innerHeight / 2;
    videoStage.style.left = Math.min(Math.max(cx - S/2, 0), window.innerWidth  - S) + 'px';
    videoStage.style.top  = Math.min(Math.max(cy2 - S/2, 0), window.innerHeight - S) + 'px';

    intro.classList.add('leaving');       // 0.1s fade
    videoStage.classList.add('on');
    loopVid.playbackRate = 0.3;           // 30% speed
    loopVid.play().catch(()=>{});         // muted, so autoplay is allowed
    setTimeout(()=> intro.remove(), 130);

    scatterWorks({ x: parseFloat(videoStage.style.left), y: parseFloat(videoStage.style.top), s: S });
  }

  /* ---------- the other works, scattered as icon squares ---------- */
  const WORKS = [
    { slug:'air-nest',                      title:'Air Nest',                       year:'2024', src:'/site-assets/thumbs/air-nest.jpg' },
    { slug:'brace-brace',                   title:'Brace, Brace',                   year:'2025', src:'/site-assets/thumbs/brace-brace.jpg' },
    { slug:'come-come',                     title:'Come Come',                      year:'2021', src:'/site-assets/thumbs/come-come.jpg' },
    { slug:'farewell-parties',              title:'Farewell Parties',               year:'2025', src:'/site-assets/thumbs/farewell-parties.jpg' },
    { slug:'four-fingered-faith',           title:'Four-Fingered Faith',            year:'2025', src:'/site-assets/thumbs/four-fingered-faith.jpg' },
    { slug:'genesis',                       title:'Genesis',                        year:'2022', src:'/site-assets/thumbs/genesis.jpg' },
    { slug:'hold-the-swallow',              title:'Hold the Swallow',               year:'2025', src:'/site-assets/thumbs/hold-the-swallow.jpg' },
    { slug:'inflatable-act',                title:'The Inflatable Act',             year:'2025', src:'/site-assets/thumbs/inflatable-act.jpg' },
    { slug:'masking-urban-transformations', title:'Masking, Urban Transformations', year:'2024', src:'/site-assets/thumbs/masking-urban-transformations.jpg' },
    { slug:'open-tour',                     title:'Open Tour',                      year:'2025', src:'/site-assets/thumbs/open-tour.jpg' },
    { slug:'paper-city',                    title:'Paper City',                     year:'2026', src:'/site-assets/thumbs/paper-city.jpg' },
    { slug:'making-archive',                title:'Making Archive',                 year:'2026', src:'/site-assets/thumbs/making-archive.jpg' },
    { slug:'new-folder-chengdu',            title:'New Folder_Chengdu',             year:'2026', src:'/site-assets/thumbs/new-folder-chengdu.jpg' },
  ];

  // one shared cursor-following label: shows instantly, no browser delay
  const tip = document.createElement('div');
  tip.id = 'cursorTip';
  container.appendChild(tip);
  function moveTip(e){
    tip.style.left = (e.clientX + 14) + 'px';
    tip.style.top  = (e.clientY + 16) + 'px';
  }

  function scatterWorks(videoRect){
    const vw = window.innerWidth, vh = window.innerHeight;
    const vmin = Math.min(vw, vh);
    const placed = [videoRect ? {x:videoRect.x, y:videoRect.y, s:videoRect.s} : null].filter(Boolean);
    const M = 8; // min gap between squares, px

    function collides(x, y, s){
      return placed.some(p =>
        x < p.x + p.s + M && x + s + M > p.x &&
        y < p.y + p.s + M && y + s + M > p.y);
    }

    /* size hierarchy: these four are always the largest, in this order;
       every other work is always smaller than the smallest of them.     */
    const SIZE_RANK = {
      'brace-brace':                   0.25,  // 1. largest
      'making-archive':                0.25,  // 2. tied with Brace, Brace
      'paper-city':                    0.22,  // 3.
      'four-fingered-faith':           0.20,  // 4.
      'new-folder-chengdu':            0.19,  // 5.
      'open-tour':                     0.18,  // 6.
      'masking-urban-transformations': 0.15,  // 7.
    };
    const OTHERS_MIN = 0.10, OTHERS_MAX = 0.145; // always below the 4th

    // place the big ones first — easier to fit everything without overlap
    const ordered = [...WORKS].sort((a, b) =>
      (SIZE_RANK[b.slug] || 0) - (SIZE_RANK[a.slug] || 0));

    ordered.forEach((wk) => {
      const frac = SIZE_RANK[wk.slug] ?? (OTHERS_MIN + Math.random() * (OTHERS_MAX - OTHERS_MIN));
      const s = vmin * frac;

      // rejection sampling with a least-overlap fallback so nothing is lost
      let x, y, tries = 0, best = null, bestOverlap = Infinity;
      do {
        x = Math.random() * (vw - s);
        y = Math.random() * (vh - s);
        const ov = placed.reduce((sum, p) => {
          const ox = Math.max(0, Math.min(x+s, p.x+p.s) - Math.max(x, p.x));
          const oy = Math.max(0, Math.min(y+s, p.y+p.s) - Math.max(y, p.y));
          return sum + ox * oy;
        }, 0);
        if (ov < bestOverlap){ bestOverlap = ov; best = {x, y}; }
        tries++;
      } while (collides(x, y, s) && tries < 300);
      x = best.x; y = best.y;
      placed.push({x, y, s});

      const a = document.createElement('a');
      a.className = 'work-icon';
      a.href = '/projects/' + wk.slug + '/';
      a.setAttribute('aria-label', wk.title + ', ' + wk.year);
      a.addEventListener('mouseenter', e => {
        tip.textContent = wk.title + ', ' + wk.year;
        tip.style.display = 'block';
        moveTip(e);
      });
      a.addEventListener('mousemove', moveTip);
      a.addEventListener('mouseleave', () => { tip.style.display = 'none'; });
      a.style.width = a.style.height = s + 'px';
      a.style.left = x + 'px';
      a.style.top  = y + 'px';
      const img = document.createElement('img');
      img.src = wk.src; img.alt = wk.title;
      a.appendChild(img);
      container.appendChild(a);

      // each square fades in on its own moment, over ~1.5s total
      setTimeout(()=> a.classList.add('on'), Math.random() * 1000);  // random order, within 1s
    });
  }


  floater.addEventListener('click', enter);
  floater.addEventListener('keydown', e => {
    if (e.key==='Enter'||e.key===' '){
      const r = floater.getBoundingClientRect();
      enter({ clientX: r.left + r.width/2, clientY: r.top + r.height/2 });
    }
  });

  return function cleanup(){
    destroyed = true;
    running = false;
    container.innerHTML = '';
  };
}
