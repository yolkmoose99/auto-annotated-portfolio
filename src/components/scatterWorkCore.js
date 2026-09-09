// Shared data + mounting logic for individual work pages and the CV page.
// Used by src/pages/[[...slug]].tsx to render /projects/<slug> and /cv as
// real, separate Next.js pages (so the browser's back/forward buttons work).
//
// To add a new work: add an entry to WORK_PAGES below, create a folder at
// public/site-assets/<slug>/ with images named 0.jpg (cover), 1.jpg, 2.jpg...
// and a square constellation icon at public/site-assets/thumbs/<slug>.jpg,
// then also add it to the WORKS array in scatterCore.js so it appears on
// the homepage.

export const WORK_PAGES = {
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
      materials: 'Sculptural installation, rubber gloves, plastic string, synthetic adhesive, mixed media filler. 4m \u00d7 0.6m \u00d7 2m.',
      paras: [
        'Born out of a 1928 intellectual property loss, Mickey Mouse was Disney\u2019s strategic ambassador, a fictional figure designed to codify the famous \u201cfour-fingered\u201d cartoon motif and build an universal empire.',
        'Over time, this four-fingered mascot became a global symbol of childhood innocence, optimism, and lightheartedness. Corporate fairytales like these tempt us to look upward, using these desirable icons as a ladder to reach the manufactured fantasy of paradise.',
        'Constructed from disposable gloves and air, Four-Fingered Faith materializes this temporary belief as a scaffold. A ladder allows for both ascent and descent: as easily as we inflate our belief in these icons, that same faith deflates the moment we unsee the iconic glove and reveal the inflated hands beneath it.'
      ],
      imgs: ['/site-assets/four-fingered-faith/0.jpg','/site-assets/four-fingered-faith/1.jpg','/site-assets/four-fingered-faith/2.jpg','/site-assets/four-fingered-faith/3.jpg']  // cover first — update this list if you add/remove image files
    },
    'making-archive': {
      title: 'Making Archive', year: '2026',
      medium: 'Site-Specific Installation',
      materials: 'Site-specific installation with clock, framed portrait, hung shirt, and printed matter. GMS Residency, That Phanom, Thailand.<br><br>Supported and collaborated with:<br>Prayoon Art<br>Nongkhaiandfriends<br><br>Textilework made by<br>ณัฐิกา  รัตนไพบูลย์   (พิณ)<br><br>Woodwork made by<br>นายชาญณรงค์ นุ่นพล<br>(Mr.Channarong Nunpol)<br><br>Glasswork made by<br>ช่างกรู<br>(Mr.Kru)<br><br>Clockwork assisted by<br>เสาวลักษณ์ จรรยาวดี (รุจนาฬิกา)<br><br>Narratives contributed by<br>จินตนา โกศัลวัฒน์<br>Jintara Kosulawat (Pet Chu Lek)<br><br>ชินาทิป กีรติกานนนท์<br>Shinatip kiratikannont (Kwang)<br><br>นางลอง.มูลเมื่อง.สบรรเทิง<br>นางอุดม.แสนมิตร.สอุษา<br>นางตอ่นจันทร์.เยี่ยมเจริญ.ส.ไพจิตร<br>(Nabua village)',
      paras: [
        'A long time ago, he brought out a relic passed down from his grandfather\u2014a clock once used to store his great-aunt\u2019s last woven bracelet, which became a symbol of home after his grandfather wound it for the final time. This clock, this shirt, and this portrait evoke a past shared collectively with that displaced Nakhon Phanom generation. In the stories recalled by the previous generation, was a true bearer of the past ever really necessary to preserve?',
        'The only truth exists in the time personally experienced within the materiality of an object. That one second becomes longer than a second. In the process of remaking a replica, the maker\u2019s hand inevitably implants an unavoidable fiction. With each retelling, the archive gains yet another layer of fairy-tale colour.'
      ],
      imgs: ['/site-assets/making-archive/0.jpg','/site-assets/making-archive/1.jpg','/site-assets/making-archive/2.jpg','/site-assets/making-archive/3.jpg','/site-assets/making-archive/4.jpg','/site-assets/making-archive/5.jpg','/site-assets/making-archive/6.jpg']  // cover first
    },
    'new-folder-chengdu': {
      title: 'New Folder_Chengdu', year: '2026',
      medium: 'Participatory Photographic and Multimedia Installation',
      materials: 'Paper print, spray, artificial turf, video projection. International Video Art Festival Residency Exhibition, Nongyuan Residency, Chengdu, China. Project by: Kitman Yeung, Tan Jing, Guo Fengping, Meng Jie.',
      paras: [
        'This work is an archive of projections on urban transformation. As the city accelerates toward a future planned by greening strategies, how will our past memories be stored, dispersed, and reassembled within our imagination of that future? The work\u2019s concept treats a photo collection as a folder carrying memory, documenting fragments of present-day Chengdu\u2014from the old Majia Garden facing redevelopment, to Tianfu Art Park and Dongjiao Memory. These fast-disappearing everyday scenes will, in time, face their next \u201coverwrite.\u201d',
        'The installation\u2019s outer layer is a green membrane that mimics the artificial turf of construction sites. We fed the city\u2019s ever-expanding real greening imagery to an AI, letting the algorithm learn and \u201cgrow\u201d a more organic turf. The algorithm\u2019s projection of the city\u2019s future is planted with new greening strategies. Behind this green hoarding are displayed the original photographs, sliced after being filtered through green. We invite you to pull out these \u201cmemory bookmarks\u201d and take them home. As the old city\u2019s memories are physically removed, the AI-generated \u201cgreen future\u201d comes to dominate. By taking the past away, the audience effectively participates in rendering the \u201cfuture.\u201d This interaction reveals the inexorable logic of urban renewal: for the \u201cnew\u201d to appear, the \u201cold\u201d must be taken away and dispersed. This photographic installation becomes a miniature vehicle for urban transformation, in which we are simultaneously \u201cplanting grass\u201d and \u201cpulling grass.\u201d',
        'The video work that runs parallel to this installation extends this exploration of \u201curban projection\u201d into the dimension of performative interaction. Through theatrical physical performance, it stages a dynamic bodily experiment with Majia Garden\u2014representative of the old streets of the city\u2019s north that are continually being overwritten and displaced. This cycle of old and new is closely tied to the broader backdrop of the \u201cNew Silk Road,\u201d bearing witness to the spatial exchange, across shifting eras, of Majia Garden, this historic railway workers\u2019 residential quarter. In the end, the city itself is a continuous mutual rewriting between \u201cthe speculation of the future\u201d and \u201clived memory.\u201d'
      ],
      imgs: ['/site-assets/new-folder-chengdu/0.jpg','/site-assets/new-folder-chengdu/1.jpg','/site-assets/new-folder-chengdu/2.jpg','/site-assets/new-folder-chengdu/3.jpg','/site-assets/new-folder-chengdu/4.jpg','/site-assets/new-folder-chengdu/5.jpg']  // cover first
    }
  };

export const CV_DATA = {
  body: '<p>Kitman Yeung is an interdisciplinary artist whose practice explores the dissonance between lived reality and imposed narratives of mobility. With an interest in socio-spatial research, Yeung investigates how air, volume, and inflation are weaponised to construct authority—from corporate mascots to psychological spectacles. Working across cast latex, ceramics, time-based media, and speculative fictions, Yeung examines “inflation” as both a physical process and an ideological state, analysing how buoyant icons hover above grounded human experiences. Beyond individual practice, Yeung co-founded the research collective groundtable, utilizing collaborative, food-based interventions to examine cultural identity and shared memories through consumption.</p><p class="cv-h">Exhibitions</p><p>2026 — Fresh Legs, 4.6.–25.7, group exhibition, INSELGALERIE Berlin, Germany<br>2026 — Cooking Box, Dealing in Distance Festival, Hanoi &amp; Ho Chi Minh City, Vietnam (groundtable)<br>2025 — Spielraum, Galerie für Zeitgenössische Kunst (GfZK), Leipzig<br>2025 — Upside Backwards, TOP Lab, Berlin, Germany<br>2025 — Fluchtpunkt, Schwanseestrasse 143, Weimar, Germany<br>2024 — Pera Reversed, Pera Museum, Istanbul, Turkey<br>2024 — Basic Units of Display, SCA Gallery, Sydney, Australia<br>2024 — Unheimlich, Stockwerk Project Space, Weimar, Germany<br>2024 — About Making a Nest to Leave Anyways, ACC Galerie, Weimar, Germany<br>2023 — Marriage Stories, Campo &amp; Campo Gallery, Antwerp, Belgium<br>2023 — Why Does It Hurt to Carry My Bag?, Royal Academy of Arts, The Hague, Netherlands<br>2022 — Sexy, Sexy, Stabby, Squishy, Squishy, Disneyland Paris Gallery, Perth, Australia<br>2021 — Home, Mudfest Arts Festival, Melbourne, Australia<br>2017 — Perspectives, Art Gallery of Western Australia, Perth, Australia</p><p class="cv-h">Residencies</p><p>2026 — GMS Art Residency, Mekong River, Thailand (July–August)<br>2026 — NY20 + Visureal · International Image Art Festival Residency, Chengdu, China (June)<br>2026 — Art feeds Residency, Brasov, Romania<br>2026 — Residency at Maajaam, Otepaa, Estonia, funded by Culture Moves Europe<br>2026 — Try Zine Residency, Asia Art Archive, Hong Kong<br>2024 — Artist Residency, Kunsthof Niederarnsdorf, Germany (groundtable)</p><p class="cv-h">Grants &amp; Funding</p><p>Deutschlandstipendium (2024–2025)<br>Student Bauhaus Module Grant (2024–2025)<br>Women’s Promotion Fund / Frauenförderfonds (2024)<br>Kreativfonds Bauhaus-Universität Weimar (2024–2025)<br>Merit Scholarship (University of Melbourne, 2018)</p><p class="cv-h">Education</p><p><strong>MFA in Public Art and New Artistic Strategies</strong><br>Bauhaus-Universitat Weimar | 2023 - 2025</p><p><strong>Bachelor of Fine Art</strong><br>Royal Academy of Arts (KABK), The Hague, Netherlands | 2022 - 2023</p><p><strong>Bachelor of Science (Neuroscience)</strong><br>The University of Melbourne, Australia | 2018 - 2021</p><p class="cv-h">Art and Cultural Experience</p><p><strong>Co-Founder | groundtable collective | International | 2024 - Present</strong><br>Co-lead an interdisciplinary collective exploring migration and identity through culinary heritage and community-based archiving. Facilitate participatory workshops and \\"contact zones\\" between diverse publics and artistic research.</p><p><strong>Co-Lecturer | Student Bauhaus Module: Onion Dine-investigations | 2024 - 2025</strong><br>Designed and led an interdisciplinary elective unit at Bauhaus-Universitat Weimar under the guidance of Prof. Mona Mahall.</p><p><strong>Museum Volunteer | Australian Centre for Contemporary Art (ACCA) | 2021</strong></p><p><strong>Product Designer | Tommy &amp; Bella Toys, Australia | 2018 - 2020</strong></p><p class="cv-h">Contact</p><p>yolkmoose@gmail.com<br>Instagram: @manonseat / @groundtableee</p>'
};

function rnd(a, b){ return a + Math.random() * (b - a); }

function buildLightbox(container){
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
  lightbox.addEventListener('click', closeLightbox);
  const onKey = e => { if (e.key === 'Escape' && lightbox.classList.contains('on')) closeLightbox(); };
  document.addEventListener('keydown', onKey);

  return { openLightbox, cleanup(){ document.removeEventListener('keydown', onKey); } };
}

function buildSignature(container){
  const sig = document.createElement('a');
  sig.id = 'signature';
  sig.href = '/cv/';
  sig.textContent = 'Kitman Yeung';
  container.appendChild(sig);
}

/* ---------- an individual work's scattered page ---------- */
export function mountWorkPage(container, wk){
  container.innerHTML = '';
  const { openLightbox, cleanup: cleanupLightbox } = buildLightbox(container);
  buildSignature(container);

  const vw = window.innerWidth, vh = window.innerHeight;
  const els = [];
  function el(inner, style){
    const d = document.createElement('div');
    d.className = 'wp-el';
    d.innerHTML = inner;
    Object.assign(d.style, style);
    container.appendChild(d);
    els.push(d);
    return d;
  }

  el(wk.title, { fontSize: rnd(16, 19) + 'px', fontWeight: 500, letterSpacing: '.04em', whiteSpace: 'nowrap' });
  el(wk.year,  { fontSize: rnd(10, 12) + 'px', fontWeight: 400, letterSpacing: '.14em' });
  if (wk.medium) el(wk.medium, { fontSize: rnd(9, 11) + 'px', letterSpacing: '.1em' });
  if (wk.materials) el(wk.materials, { fontSize: rnd(10, 14) + 'px', maxWidth: rnd(18, 30) + 'vw', lineHeight: 1.6, color: '#666' });

  // body text: not scattered — pinned bottom-right, just above the signature
  const body = document.createElement('div');
  body.className = 'wp-el wp-body';
  body.innerHTML = (wk.paras || []).map(p => '<p>' + p + '</p>').join('');
  Object.assign(body.style, {
    right: '22px', bottom: '46px',
    left: 'auto', top: 'auto',
    width: 'min(34vw, 380px)',
    fontSize: '12px', lineHeight: 1.7,
    textAlign: 'left'
  });
  container.appendChild(body);
  setTimeout(() => body.classList.add('on'), Math.random() * 1000);

  const coverW = rnd(24, 32);
  (wk.imgs || []).forEach((src, i) => {
    const wPct = i === 0 ? coverW : coverW / 1.2;   // cover always 20% larger than the rest
    const d = el('<img src="' + src + '" alt="">', { width: wPct + 'vmin' });
    d.dataset.basew = wPct;
    d.querySelector('img').addEventListener('click', () => openLightbox(src, wk.title));
  });

  (wk.links || []).forEach(l =>
    el('<a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a>', { fontSize: '12px', letterSpacing: '.1em' }));

  // a real link to the homepage — this is a genuine page, so the browser's
  // own back/forward buttons already work; this is just a convenient extra
  el('<a href="/">\u2190 back</a>', { fontSize: '12px', letterSpacing: '.1em' });

  const M = 14;
  function tryLayout(scale){
    els.forEach(d => { if (d.dataset.basew) d.style.width = (parseFloat(d.dataset.basew) * scale) + 'vmin'; });
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
      if (!ok) return null;
      placed.push({x, y, w: w2, h: h2});
      coords.push([d, x, y]);
    }
    return coords;
  }

  const photos = [...container.querySelectorAll('.wp-el img')];
  Promise.all(photos.map(p => p.decode ? p.decode().catch(()=>{}) : 1)).then(() => {
    let coords = null;
    for (let scale = 1; scale >= 0.5 && !coords; scale -= 0.08){
      coords = tryLayout(scale);
    }
    if (!coords){
      let y = 16;
      coords = els.map(d => { const c = [d, 16, y]; y += d.offsetHeight + M; return c; });
    }
    coords.forEach(([d, x, y]) => {
      d.style.left = x + 'px';
      d.style.top  = y + 'px';
      setTimeout(() => d.classList.add('on'), Math.random() * 1000);
    });
  });

  return function cleanup(){
    cleanupLightbox();
    container.innerHTML = '';
  };
}

/* ---------- the CV, in the same scattered style ---------- */
export function mountCvPage(container, cv){
  container.innerHTML = '';
  buildSignature(container);

  const vw = window.innerWidth, vh = window.innerHeight;
  const els = [];
  function el(inner, style){
    const d = document.createElement('div');
    d.className = 'wp-el';
    d.innerHTML = inner;
    Object.assign(d.style, style);
    container.appendChild(d);
    els.push(d);
    return d;
  }

  el('<a href="/">\u2190 back</a>', { fontSize: '12px', letterSpacing: '.1em' });

  const body = document.createElement('div');
  body.className = 'wp-el wp-body scrolling';
  body.innerHTML = cv.body;
  Object.assign(body.style, {
    right: '22px', bottom: '46px', left: 'auto', top: 'auto',
    width: 'min(38vw, 430px)',
    fontSize: '12px', lineHeight: 1.7, textAlign: 'left'
  });
  container.appendChild(body);
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

  return function cleanup(){
    container.innerHTML = '';
  };
}
