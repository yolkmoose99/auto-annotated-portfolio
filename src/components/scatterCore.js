// Auto-generated from prototype v38 — the entire site experience.
export const SCATTER_CSS = "\n  :root{\n    --ink:#111111;\n    --paper:#ffffff;\n    --grey:#8a8a8a;\n    --line:#e6e6e6;\n  }\n  *{margin:0;padding:0;box-sizing:border-box}\n  .scatter-root{min-height:100vh}\n  .scatter-root{\n    font-family:ui-monospace,'SF Mono',Menlo,Consolas,monospace;\n    background:var(--paper);\n    color:var(--ink);\n    overflow-x:hidden;\n  }\n\n  /* ---------- INTRO ---------- */\n  #intro{\n    position:fixed;inset:0;z-index:50;\n    background:var(--paper);\n    overflow:hidden;\n    transition:opacity .1s ease;   /* the 0.1s vanish */\n  }\n  #intro.leaving{opacity:0;pointer-events:none}\n\n  /* the anchored hand photo: left side, ~40% of the screen */\n  .anchor{\n    position:absolute;left:0;top:50%;\n    transform:translateY(-50%);\n    height:42vh;width:auto;      /* whole photo, no crop, with white space at the left */\n    display:block;\n    user-select:none;\n    -webkit-user-drag:none;\n  }\n\n  /* the drifting glove */\n  .floater{\n    position:absolute;left:0;top:0;\n    width:min(14.3vw,162px);\n    display:block;\n    cursor:pointer;\n    will-change:transform;\n    user-select:none;\n    -webkit-user-drag:none;\n  }\n\n  /* ---------- VIDEO SQUARE ----------\n     A 25vmin square pinned where the visitor clicked the glove.\n     The page behind it stays white.                              */\n  #videoStage{\n    position:fixed;z-index:40;\n    width:17.5vmin;height:17.5vmin;\n    display:block;\n    opacity:0;visibility:hidden;\n    transition:opacity .8s ease;\n    cursor:pointer;\n  }\n  #videoStage.on{opacity:1;visibility:visible;cursor:default}\n  #loopVid{\n    width:100%;height:100%;\n    object-fit:cover;   /* crops the 4:3 clip into the square */\n    display:block;\n  }\n\n  /* ---------- SIGNATURE ---------- */\n  #signature{\n    position:fixed;right:22px;bottom:18px;z-index:70;\n    cursor:pointer;\n    font-family:'Helvetica Neue',Helvetica,-apple-system,'Segoe UI',Arial,sans-serif;\n    font-size:12px;font-weight:400;\n    letter-spacing:.14em;\n    color:var(--ink);\n    text-decoration:none;\n    user-select:none;\n  }\n  #signature:hover{text-decoration:underline}\n\n  /* ---------- CURSOR TOOLTIP ---------- */\n  #cursorTip{\n    position:fixed;z-index:80;\n    display:none;\n    font-family:'Helvetica Neue',Helvetica,-apple-system,'Segoe UI',Arial,sans-serif;\n    font-size:11px;letter-spacing:.08em;\n    color:var(--ink);background:var(--paper);\n    padding:3px 8px;\n    pointer-events:none;\n    white-space:nowrap;\n  }\n\n  /* ---------- SCATTERED WORKS ---------- */\n  .work-icon{\n    position:fixed;z-index:35;      /* under the video square (40) */\n    display:block;\n    opacity:0;\n    transition:opacity .8s ease, transform .35s cubic-bezier(.22,1,.36,1);\n    cursor:pointer;\n  }\n  .work-icon.on{opacity:1}\n  .work-icon:hover{transform:scale(1.06)}\n  .work-icon img{\n    width:100%;height:100%;\n    object-fit:cover;display:block;\n  }\n\n  /* ---------- SCATTERED WORK PAGE ---------- */\n  #workPage{\n    position:fixed;inset:0;z-index:45;\n    background:var(--paper);\n    display:none;\n    font-family:'Helvetica Neue',Helvetica,-apple-system,'Segoe UI',Arial,sans-serif;\n  }\n  #workPage.on{display:block}\n  .wp-el{\n    position:absolute;\n    opacity:0;\n    transition:opacity .8s ease;\n    color:var(--ink);\n  }\n  .wp-el.on{opacity:1}\n  .wp-el img{width:100%;display:block}\n  .wp-body p{margin:0 0 10px}\n  .wp-body .cv-h{margin-top:16px;letter-spacing:.18em;text-transform:uppercase;font-size:10px;color:#888}\n  .wp-body.scrolling{max-height:62vh;overflow-y:auto}\n  .wp-el a{color:var(--ink)}\n\n  /* ---------- LIGHTBOX ---------- */\n  #lightbox{\n    position:fixed;inset:0;z-index:90;\n    background:var(--paper);\n    display:none;\n    align-items:center;justify-content:center;\n  }\n  #lightbox.on{display:flex}\n  #lightbox img{\n    max-width:92vw;max-height:92vh;\n    display:block;\n    cursor:zoom-out;\n  }\n  #lightbox .close{\n    position:fixed;top:18px;right:22px;\n    font-family:'Helvetica Neue',Helvetica,-apple-system,'Segoe UI',Arial,sans-serif;\n    font-size:20px;line-height:1;\n    color:var(--ink);\n    cursor:pointer;\n    user-select:none;\n    padding:6px;\n  }\n  .wp-el img{cursor:zoom-in}\n\n  @media (prefers-reduced-motion: reduce){\n    #site{transition:none}\n  }\n";

const SKELETON = "<!-- INTRO -->\n<div id=\"intro\">\n  <img class=\"anchor\" src=\"/site-assets/intro/hand.jpg\" alt=\"\">\n  <img class=\"floater\" id=\"floater\" src=\"/site-assets/intro/glove.png\" alt=\"Gloves \u2014 click to enter\" role=\"button\" tabindex=\"0\">\n</div>\n\n<a id=\"signature\" href=\"#\">Kitman Yeung</a>\n\n<!-- scattered work icons are created by script on entry -->\n<div id=\"workPage\"></div>\n\n<!-- VIDEO STAGE -->\n<div id=\"videoStage\" aria-label=\"Video loop\">\n  <video id=\"loopVid\" src=\"/site-assets/intro/loop.mp4\" muted loop playsinline preload=\"auto\"></video>\n</div>";

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
      'paper-city':                    0.22,  // 2. always second
      'four-fingered-faith':           0.20,  // 3.
      'open-tour':                     0.18,  // 4.
      'masking-urban-transformations': 0.15,  // 5.
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
      a.href = 'https://kitmanyeung.com/projects/' + wk.slug + '/';
      a.setAttribute('aria-label', wk.title + ', ' + wk.year);
      if (WORK_PAGES[wk.slug]){
        a.addEventListener('click', e => { e.preventDefault(); openWorkPage(WORK_PAGES[wk.slug]); });
      }
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
  /* ---------- scattered work page (Brace, Brace as the template demo) ----------
     Elements are built invisibly, measured, then placed with the same
     collision-avoidance as the homepage scatter. Random sizes each visit. */
  const workPage = container.querySelector('#workPage');

  const WORK_PAGES = {
    'brace-brace': {
      title: 'Brace, Brace', year: '2025',
      medium: 'Sculptural Installation',
      materials: 'Customised latex moulds, plastic string, hand cream, glue. 5m \u00d7 3m \u00d7 0.5m.',
      paras: [
        'This sculptural installation presents a room sized ladder, made from latex gloves of ascending and descending parallels, cast in latex directly from the living hands from the artist and friends.',
        'Brace, Brace visualizes the necessary, grounded alternative to the fantasy of untethered flight. It proposes that true agency lies in the deliberate, embodied act of climbing and descending, of maintaining contact with the very structures that connect us to the ground.'
      ],
      imgs: ['/site-assets/brace-brace/0.jpg','/site-assets/brace-brace/1.jpg','/site-assets/brace-brace/2.jpg','/site-assets/brace-brace/3.jpg','/site-assets/brace-brace/4.jpg','/site-assets/brace-brace/5.jpg']  // cover first
    },
    'open-tour': {
      title: 'Open Tour', year: '2025',
      medium: 'Collage Stop Motion Animation',
      materials: 'Collage stop motion animation, 5 minutes. Selection, Poetryfilmtage Festival, Germany.',
      paras: [
        'It starts with two eyes in China. The family finds their ways to communicate across long distances. Then the eyes re-allocate from the sea. Memories are drawn between smells, restaurants, and traffic rhythms. Landscapes are tossed into jumbled regurgitations, as the Chinese city I recall is in a constant cycle of deconstructed reconstructions. Poetry by the Chinese poet, Yang Lian, the drifted eyes accompany this tour.'
      ],
      links: [{ label: 'watch on YouTube \u2192', url: 'https://www.youtube.com/watch?v=Yby8tzOJcDo' }],
      imgs: ['/site-assets/open-tour/0.jpg','/site-assets/open-tour/1.jpg','/site-assets/open-tour/2.jpg','/site-assets/open-tour/3.jpg','/site-assets/open-tour/4.jpg','/site-assets/open-tour/5.jpg','/site-assets/open-tour/6.jpg','/site-assets/open-tour/7.jpg']  // cover first
    },
    'air-nest': {
      title: 'Air Nest', year: '2024',
      medium: 'Single Channel Video Projection',
      materials: 'Single channel video projection, size variable. ACC Gallery, Weimar, Germany.',
      paras: [
        'Building a nest requires repetitive labour with a homogenous medium. Temporary furnitures come into use to contain such needs, the modern air mattress as an expandable and retractable nest. First you construct the space and structures for a home, then it allows the attaching of meanings. This change in situations of displacement is experienced unequally. Accelerated for the underprivileged is the rhythm of adapting to a home and packing to leave. Accommodated users include the temporary bypassers in a city, the visitor, the migrant, the unprepared, the homeless, the alien.',
        'The seemingly absurd pumping figure escapes the futility of a Bruegelian and Sisyphean landscape, the repetitive making and un-making a bed is a cyclic struggle of the temporary bypasser. In the confrontation of building a temporary air nest in german spaces of bureaucratic repression, political unwelcome, touristic landscapes, assigned dormitories and the erection of it in the current gallery, banalities of such labours surface.',
        'The inflation narrates a permission for residence. The pumping, the silence, then the release, follows the acceptance/toleration of the rejection/unwelcomed. The medium of air that constitutes the environment, is consequently the same medium of air to constitute the air mattress. Does the homogeneity of the ingredients contribute to the failure of this nesting. Nevermind that, the air nest packs itself flat for conversations at the next destination.'
      ],
      links: [{ label: 'watch on YouTube \u2192', url: 'https://www.youtube.com/watch?v=y_ocwZSTQJo' }],
      imgs: ['/site-assets/air-nest/0.jpg']  // cover first
    },
    'come-come': {
      title: 'Come Come', year: '2021',
      medium: '2D Handdrawn Animation',
      materials: '2D handdrawn animation, digital colour, 4 minutes. Selection, Poetryfilmtage Festival, Germany.',
      paras: [
        'Keep your eyes on the kindness ahead, and the river carries away the boat. This short animation is about naivety, represented by the child and the rabbit. Neither one is aware of its own actions being caught up by another being. They chase after what\'s ahead of them with bliss. The owl participates in the cycle as with a wise reputation.'
      ],
      links: [{ label: 'watch on YouTube \u2192', url: 'https://www.youtube.com/watch?v=arKX-a-iZ2Q' }],
      imgs: ['/site-assets/come-come/0.jpg','/site-assets/come-come/1.jpg']  // cover first
    },
    'farewell-parties': {
      title: 'Farewell Parties', year: '2025',
      medium: 'Participatory Installation',
      materials: 'Latex balloons, recycled drink plastics, printed invitations, helium and airs of invitees. 8th–9th February 2025. Schwanseestrasse 143, Weimar.',
      paras: [
        'Through invitations attached to recycled balloons, this work initiates a tangible exchange of air and dialogue within Weimar\'s social housing neighborhood. It explores the fragile, fleeting cohesion, where celebratory air mingles with the everyday breath of a community park.'
      ],
      imgs: ['/site-assets/farewell-parties/0.jpg','/site-assets/farewell-parties/1.jpg','/site-assets/farewell-parties/2.jpg','/site-assets/farewell-parties/3.jpg','/site-assets/farewell-parties/4.jpg','/site-assets/farewell-parties/5.jpg','/site-assets/farewell-parties/6.jpg','/site-assets/farewell-parties/7.jpg']  // cover first
    },
    'genesis': {
      title: 'Genesis', year: '2022',
      medium: 'Sculpture',
      materials: 'Plaster sculpture, clay, cardboard carton, grounded egg shell, stones, charcoal powder.',
      paras: [
        'This is a work originating from the \'chicken or egg first\' problem. I am often amazed by the eggs\' ability to adapt; we can make all sorts of genetic alterations during its growth. Mature oocyte cryopreservation has become a capitalised service for the privileged.',
        'The hybrid egg sculptures are made of plaster, with cracks and indents filled with black clay, the two materials are like fire and water in the kiln, only in its cold form as such, they can remain in harmony for a short period. I am a believer of the egg first theory.'
      ],
      imgs: ['/site-assets/genesis/0.jpg']  // cover first
    },
    'hold-the-swallow': {
      title: 'Hold the Swallow', year: '2025',
      medium: 'Participatory Performance',
      materials: 'Participatory performance with sculptural elements, glazed porcelain. 15 minutes. Performance series part of Marionette (Suse Weber) at GfZK Leipzig\'s exhibition, Spielräume.',
      paras: [
        'This performance responds to the gendered imagery within the Marionette installation by introducing a silencing through the ungendered form of eggs. The eggs are rendered in glazed porcelain as direct replicas of the "Chicken Cup in Doucai Painted Enamels" (明成化鬥彩雞缸杯), a Ming dynasty artifact housed in the Taiwan Palace Museum.',
        'This work challenges the neutrality of historical artefacts through created tension from appropriating this historically significant object into ovular and testicular forms.'
      ],
      imgs: ['/site-assets/hold-the-swallow/0.jpg','/site-assets/hold-the-swallow/1.jpg']  // cover first
    },
    'masking-urban-transformations': {
      title: 'Masking, Urban Transformations', year: '2024',
      medium: 'Textile Installation',
      materials: 'Textile installation with silk screen on skin tights. 3m × 0.1m × 4m. Pera Museum, Istanbul, Turkey. At the courtesy of Bauhaus University Weimar project Prof. Mona Mahall with Yelta Köm, and Hochschule für Künste Bremen\'s "Temporary Spaces" class of Prof. Aslı Serbest. Collaborators: Anıl Aydınoğlu, Arın Aydın, Aslı Serbest, Ayça Tuğran, Çisel Karacebe, Celal Orkun Gözübüyük, Dorian Beer, Elizaveta Boucke, Elif İmre Bilgin, Helen Christina Hümmer, Iben Schneider, Jolina Mix, Jisu Kim, Kitman Yeung, Leonie Link, Mona Mahall, Negar Rahname, Talia Ölker, Yelta Köm, Yuhe Lin.',
      paras: [
        'As the city of Istanbul finds itself through rapid urban redevelopment plans and gentrification, the city panorama is always in mid-construction, with scattered buildings wrapped in coloured or printed construction safety nets. The work translates the scaffolding nets with the wrapping of the human body in the material of intimate skin tights. A conversation between the building and the net, as it happens between the body and the tights.',
        'The touristic gaze prepares us with expectations towards the coming forms, whilst the locals observe the Pera district perishing through speculative uncertainties. The temporal state of a wrapped building is sometimes given a facade, a printed and flattened facade of what is to come; it sometimes remains in this mid-construction for years until the next investment phase; or sometimes it is the final political form of a building, one that should never be completed. The building in mid-construction becomes blurred, filtered, smoothened image for the onlookers, sometimes, however, distorted.'
      ],
      imgs: ['/site-assets/masking-urban-transformations/0.jpg','/site-assets/masking-urban-transformations/1.jpg']  // cover first
    },
    'paper-city': {
      title: 'Paper City', year: '2026',
      medium: 'Collaborative Photo-zine and Workshop',
      materials: 'Produced as part of the Try try zine residency 2026 by Asia Art Archive. Showcase at ACO books, 14F Foo Tak Building, Hong Kong, venue sponsored by Art and Culture Outreach.',
      paras: [
        'In the Paper City, \u201cpaper tigers\u201d (\u7d19\u8001\u864e) are formidable and substantial. If even a tiger made of paper can seem powerful, the immense potential of illusions is clear.',
        'Yeung initiated an open call for participants to submit documents about a significant city in their lives, which they present with their grandmother\u2019s travel photography in the collaged photo-zine People in Paper City, inspiring intergenerational dialogue on globalisation and city-making. In Yeung\u2019s workshop, we will read stories of these collaged places while walking around the city and noting our observations in the accompanying notepad, Notes for Paper City. The notepad includes a compilation of exercises developed from contemporary artist critiques of urban mobility and proposals from the Cities on the Move Exhibition Archive. We invite people to sketch, listen, share, and disseminate mobile experiences together in the Paper City.'
      ],
      links: [
        { label: 'open call \u2192', url: 'https://www.instagram.com/p/DXdx0B3j5PD/' },
        { label: 'People in Paper City \u2192', url: 'https://aaa.org.hk/tc/collections/search/library/people-in-paper-city' },
        { label: 'Notes for Paper City \u2192', url: 'https://aaa.org.hk/tc/collections/search/library/notes-for-paper-city' },
        { label: 'Cities on the Move archive \u2192', url: 'https://aaa.org.hk/en/collections/search/archive/cities-on-the-move-exhibition-archive' }
      ],
      imgs: ['/site-assets/paper-city/0.jpg','/site-assets/paper-city/1.jpg','/site-assets/paper-city/2.jpg','/site-assets/paper-city/3.jpg','/site-assets/paper-city/4.jpg','/site-assets/paper-city/5.jpg','/site-assets/paper-city/6.jpg','/site-assets/paper-city/7.jpg','/site-assets/paper-city/8.jpg','/site-assets/paper-city/9.jpg','/site-assets/paper-city/10.jpg','/site-assets/paper-city/11.jpg','/site-assets/paper-city/12.jpg','/site-assets/paper-city/13.jpg']  // cover first
    },
    'inflatable-act': {
      title: 'The Inflatable Act', year: '2025',
      medium: 'Single Channel Video Projection',
      materials: 'Single channel video projection, size variable.',
      paras: [
        'This video essay is an inquiry into the inflatable\u2014a form defined by its rebellion against the ground. Through a lineage of open-sourced and found footage, the work traces a path from corporate mascots and psychological warfare balloons to airspace and environmental shelters.',
        'It reveals how the authority of ascent, the aerial, acrophilic perspective has been historically constructed, weaponized, and commercialized. This aerial authority promises detachment, but is one that is historically traceable to systems of power, capital, and colonial observation. In an age of climate crisis and geopolitical fracture, the essay interrogates the fantasy of becoming untethered, arguing instead for a new terrestrial responsibility, a conscious re-tethering to our collective reality.'
      ],
      links: [{ label: 'watch on YouTube \u2192', url: 'https://www.youtube.com/watch?v=0i8J5B_-Vcs' }],
      imgs: ['/site-assets/inflatable-act/0.jpg','/site-assets/inflatable-act/1.jpg','/site-assets/inflatable-act/2.jpg','/site-assets/inflatable-act/3.jpg','/site-assets/inflatable-act/4.jpg','/site-assets/inflatable-act/5.jpg','/site-assets/inflatable-act/6.jpg','/site-assets/inflatable-act/7.jpg','/site-assets/inflatable-act/8.jpg','/site-assets/inflatable-act/9.jpg']  // cover first
    },
    'four-fingered-faith': {
      title: 'Four-Fingered Faith', year: '2025',
      medium: 'Sculptural Installation',
      materials: 'Rubber gloves, plastic string, hand cream, glue. 4m \u00d7 0.6m \u00d7 2m.',
      paras: [
        'Four-Fingered Faith presents a vertical apparatus, a ladder built from mass-produced rubber gloves. This ladder is the physical counterpart to the latex casts of Brace, Brace, this one is inflated and iconic.',
        'The work visualizes the authority of the iconic persona. Each glove is animated by the fiction of a persona\u2014the four-fingered cartoon hand, the branded mascot.'
      ],
      imgs: ['/site-assets/four-fingered-faith/0.jpg','/site-assets/four-fingered-faith/1.jpg','/site-assets/four-fingered-faith/2.jpg','/site-assets/four-fingered-faith/3.jpg','/site-assets/four-fingered-faith/4.jpg','/site-assets/four-fingered-faith/5.jpg']  // cover first
    }
  };

  function rnd(a, b){ return a + Math.random() * (b - a); }

  /* ---------- fullscreen image viewer ---------- */
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.innerHTML = '<img alt=""><span class="close" role="button" aria-label="Close" tabindex="0">\u00d7</span>';
  container.appendChild(lightbox);
  const lbImg = lightbox.querySelector('img');

  function openLightbox(src, alt){
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('on');
  }
  function closeLightbox(){ lightbox.classList.remove('on'); lbImg.src = ''; }

  lightbox.querySelector('.close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', closeLightbox);  // image, backdrop, anywhere: click again to un-zoom
  const __onKey = e => {
    if (e.key === 'Escape' && lightbox.classList.contains('on')) closeLightbox();
  };
  document.addEventListener('keydown', __onKey);

  const CV = {
    body: '<p>Finding ways to approach global migration, and the dissonance between lived reality and imposed narratives. Experience in navigating the intersection of scientific inquiry, social practice, and cultural production. Artistic practices through latex, ceramic, and time-based media installations, performance, and community-led archiving and collaborative artistic research.</p><p class="cv-h">Education</p><p><strong>MFA in Public Art and New Artistic Strategies</strong><br>Bauhaus-Universitat Weimar | 2023 - 2025</p><p><strong>Bachelor of Fine Art</strong><br>Royal Academy of Arts (KABK), The Hague, Netherlands | 2022 - 2023</p><p><strong>Bachelor of Science (Neuroscience)</strong><br>The University of Melbourne, Australia | 2018 - 2021</p><p class="cv-h">Art and Cultural Experience</p><p><strong>Co-Founder | groundtable collective | International | 2024 - Present</strong><br>Co-lead an interdisciplinary collective exploring migration and identity through culinary heritage and community-based archiving. Facilitate participatory workshops and "contact zones" between diverse publics and artistic research.</p><p><strong>Co-Lecturer | Student Bauhaus Module: Onion Dine-investigations | 2024 - 2025</strong><br>Designed and led an interdisciplinary elective unit at Bauhaus-Universitat Weimar under the guidance of Prof. Mona Mahall.</p><p><strong>Museum Volunteer | Australian Centre for Contemporary Art (ACCA) | 2021</strong></p><p><strong>Product Designer | Tommy &amp; Bella Toys, Australia | 2018 - 2020</strong></p>'
  };


  function openCvPage(){
    workPage.innerHTML = '';
    workPage.classList.add('on');
    const vw = window.innerWidth, vh = window.innerHeight;

    const els = [];
    function el(inner, style){
      const d = document.createElement('div');
      d.className = 'wp-el';
      d.innerHTML = inner;
      Object.assign(d.style, style);
      workPage.appendChild(d);
      els.push(d);
      return d;
    }

    const back = el('<a href="#">\u2190 back</a>', { fontSize: '12px', letterSpacing: '.1em' });
    back.querySelector('a').addEventListener('click', e => {
      e.preventDefault();
      workPage.classList.remove('on');
    });

    // CV text pinned bottom right, scrollable if long
    const body = document.createElement('div');
    body.className = 'wp-el wp-body scrolling';
    body.innerHTML = CV.body;
    Object.assign(body.style, {
      right: '22px', bottom: '46px', left: 'auto', top: 'auto',
      width: 'min(38vw, 430px)',
      fontSize: '12px', lineHeight: 1.7, textAlign: 'left'
    });
    workPage.appendChild(body);
    setTimeout(() => body.classList.add('on'), Math.random() * 1000);

    requestAnimationFrame(() => {
      const M = 14;
      const br = body.getBoundingClientRect();
      const placed = [{x: br.left, y: br.top, w: br.width, h: br.height}];
      els.forEach(d => {
        const w2 = d.offsetWidth, h2 = d.offsetHeight;
        let ok = false, x, y, tries = 0;
        while (!ok && tries < 600){
          x = rnd(0, Math.max(vw - w2, 1));
          y = rnd(0, Math.max(vh - h2, 1));
          ok = !placed.some(p =>
            x < p.x + p.w + M && x + w2 + M > p.x &&
            y < p.y + p.h + M && y + h2 + M > p.y);
          tries++;
        }
        placed.push({x, y, w: w2, h: h2});
        d.style.left = x + 'px';
        d.style.top  = y + 'px';
        setTimeout(() => d.classList.add('on'), Math.random() * 1000);
      });
    });
  }

  function openWorkPage(wk){
    workPage.innerHTML = '';
    workPage.classList.add('on');
    const vw = window.innerWidth, vh = window.innerHeight;

    const els = [];
    function el(inner, style){
      const d = document.createElement('div');
      d.className = 'wp-el';
      d.innerHTML = inner;
      Object.assign(d.style, style);
      workPage.appendChild(d);
      els.push(d);
      return d;
    }

    el(wk.title, { fontSize: rnd(16, 19) + 'px', fontWeight: 500, letterSpacing: '.04em', whiteSpace: 'nowrap' });
    el(wk.year,  { fontSize: rnd(10, 12) + 'px', fontWeight: 400, letterSpacing: '.14em' });
    el(wk.medium, { fontSize: rnd(9, 11) + 'px', letterSpacing: '.1em' });
    el(wk.materials, { fontSize: rnd(10, 14) + 'px', maxWidth: rnd(18, 30) + 'vw', lineHeight: 1.6, color: '#666' });
    // body text: not scattered — pinned bottom-right, just above the name
    const body = document.createElement('div');
    body.className = 'wp-el wp-body';
    body.innerHTML = wk.paras.map(p => '<p>' + p + '</p>').join('');
    Object.assign(body.style, {
      right: '22px', bottom: '46px',           // sits just above the signature
      left: 'auto', top: 'auto',
      width: 'min(34vw, 380px)',
      fontSize: '12px', lineHeight: 1.7,
      textAlign: 'left'
    });
    workPage.appendChild(body);
    setTimeout(() => body.classList.add('on'), Math.random() * 1000);
    const coverW = rnd(24, 32);                       // vmin, fresh each visit
    wk.imgs.forEach((src, i) => {
      const wPct = i === 0 ? coverW : coverW / 1.2;   // cover always 20% larger than the rest
      const d = el('<img src="' + src + '" alt="">', { width: wPct + 'vmin' });
      d.dataset.basew = wPct;                          // for adaptive shrinking
      d.querySelector('img').addEventListener('click', () => openLightbox(src, wk.title));
    });
    (wk.links || []).forEach(l =>
      el('<a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a>',
         { fontSize: '12px', letterSpacing: '.1em' }));
    const back = el('<a href="#">\u2190 back</a>', { fontSize: '12px', letterSpacing: '.1em' });
    back.querySelector('a').addEventListener('click', e => {
      e.preventDefault();
      workPage.classList.remove('on');
    });

    // wait for the photos to decode (so sizes are real), then lay out with
    // a STRICT no-overlap rule: if everything can't fit, shrink the images
    // step by step and retry the whole layout until it does.
    const M = 14;

    function tryLayout(scale){
      els.forEach(d => {
        if (d.dataset.basew) d.style.width = (parseFloat(d.dataset.basew) * scale) + 'vmin';
      });
      const br = body.getBoundingClientRect();
      const placed = [{x: br.left, y: br.top, w: br.width, h: br.height}];
      const coords = [];
      for (const d of els){
        const w2 = d.offsetWidth, h2 = d.offsetHeight;
        let ok = false, x, y;
        for (let tries = 0; tries < 600 && !ok; tries++){
          x = rnd(0, Math.max(vw - w2, 1));
          y = rnd(0, Math.max(vh - h2, 1));
          ok = !placed.some(p =>
            x < p.x + p.w + M && x + w2 + M > p.x &&
            y < p.y + p.h + M && y + h2 + M > p.y);
        }
        if (!ok) return null;               // no clean spot -> shrink and retry
        placed.push({x, y, w: w2, h: h2});
        coords.push([d, x, y]);
      }
      return coords;
    }

    const photos = [...workPage.querySelectorAll('img')];
    Promise.all(photos.map(p => p.decode ? p.decode().catch(()=>{}) : 1)).then(() => {
      let coords = null;
      for (let scale = 1; scale >= 0.5 && !coords; scale -= 0.08){
        coords = tryLayout(scale);          // 1.0, 0.92, 0.84 ... down to half size
      }
      if (!coords){
        // extremely small window: stack everything in a simple column instead
        let y = 16;
        coords = els.map(d => { const c = [d, 16, y]; y += d.offsetHeight + M; return c; });
      }
      coords.forEach(([d, x, y]) => {
        d.style.left = x + 'px';
        d.style.top  = y + 'px';
        setTimeout(() => d.classList.add('on'), Math.random() * 1000);
      });
    });
  }

  container.querySelector('#signature').addEventListener('click', e => {
    e.preventDefault();
    openCvPage();
  });

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
    document.removeEventListener('keydown', __onKey);
    container.innerHTML = '';
  };
}
