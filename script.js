(function () {
  'use strict';

  var BASE = [

  { verb: 'abhängen', prep: 'von', fall: 'Dativ', en: 'to depend on',
    de: 'Wie gut man in einer Stadt lebt, {{hängt}} [[von]] vielen Faktoren {{ab}}.',
    tr: 'How well one lives in a city depends on many factors.' },
  { verb: 'sich amüsieren', prep: 'über', fall: 'Akkusativ', en: 'to be amused by',
    de: 'Er {{amüsiert}} sich oft [[über]] seine Kinder.',
    tr: 'He is often amused by his children.' },
  { verb: 'ankommen', prep: 'auf', fall: 'Dativ', en: 'to depend on / to matter',
    de: 'Bei einer Bewerbung {{kommt}} es [[auf]] gute Unterlagen {{an}}.',
    tr: 'In an application, good documents matter.' },
  { verb: 'anpassen', prep: 'an', fall: 'Akkusativ', en: 'to adapt to',
    de: 'Wir {{passen}} die Farbe der Wände [[an]] die Möbel {{an}}.',
    tr: 'We adapt the color of the walls to the furniture.' },
  { verb: 'anregen', prep: 'zu', fall: 'Dativ', en: 'to stimulate to',
    de: 'Ich mag Kunst, die [[zum]] Nachdenken {{anregt}}.',
    tr: 'I like art that stimulates thinking.' },
  { verb: 'sich ärgern', prep: 'über', fall: 'Akkusativ', en: 'to be annoyed about',
    de: 'Ich {{ärgere}} mich [[über]] den Lärm.',
    tr: 'I am annoyed about the noise.' },
  { verb: 'sich aufregen', prep: 'über', fall: 'Akkusativ', en: 'to get upset about',
    de: 'Reg dich doch nicht immer [[über]] meine Unpünktlichkeit {{auf}}.',
    tr: 'Don\'t always get upset about my unpunctuality.' },
  { verb: 'ausgehen', prep: 'von', fall: 'Dativ', en: 'to assume',
    de: 'Experten {{gehen}} [[davon]] aus, dass ...',
    tr: 'Experts assume that ...' },
  { verb: 'sich auskennen', prep: 'mit', fall: 'Dativ', en: 'to be familiar with',
    de: 'Ich {{kenne}} mich gut [[mit]] Computern {{aus}}.',
    tr: 'I am familiar with computers.' },
  { verb: 'basieren', prep: 'auf', fall: 'Dativ', en: 'to be based on',
    de: 'Das Konzept {{basiert}} [[auf]] der Ehrlichkeit der Kunden.',
    tr: 'The concept is based on the honesty of the customers.' },
  { verb: 'sich bedanken', prep: 'bei', fall: 'Dativ', en: 'to thank',
    de: 'Hast du dich schon [[bei]] Oma {{bedankt}}?',
    tr: 'Have you already thanked grandma?' },
  { verb: 'berichten', prep: 'über', fall: 'Akkusativ', en: 'to report on',
    de: 'Die Zeitung {{berichtet}} [[über]] einen Unfall im Stadtzentrum.',
    tr: 'The newspaper reports on an accident in the city center.' },
  { verb: 'sich beschäftigen', prep: 'mit', fall: 'Dativ', en: 'to occupy oneself with',
    de: 'Ich {{beschäftige}} mich gern [[mit]] Musik.',
    tr: 'I like to occupy myself with music.' },
  { verb: 'sich beschweren', prep: 'über', fall: 'Akkusativ', en: 'to complain about',
    de: 'Frau Koller {{beschwert}} sich manchmal [[über]] die Nachbarn.',
    tr: 'Mrs. Koller sometimes complains about the neighbors.' },
  { verb: 'bestehen', prep: 'aus', fall: 'Dativ', en: 'to consist of',
    de: 'Das Team {{besteht}} [[aus]] zehn Personen.',
    tr: 'The team consists of ten people.' },
  { verb: 'sich beteiligen', prep: 'an', fall: 'Dativ', en: 'to participate in',
    de: 'Luna möchte sich gerne aktiv [[am]] Projekt „Wildkatze“ {{beteiligen}}.',
    tr: 'Luna would like to actively participate in the "Wildcat" project.' },
  { verb: 'sich beziehen', prep: 'auf', fall: 'Akkusativ', en: 'to refer to',
    de: 'Worauf {{bezieht}} sich Ihre Frage?',
    tr: 'What does your question refer to?' },
  { verb: 'denken', prep: 'an', fall: 'Akkusativ', en: 'to think of',
    de: 'Ich {{denke}} oft [[an]] meine Familie.',
    tr: 'I often think of my family.' },
  { verb: 'deuten', prep: 'auf', fall: 'Akkusativ', en: 'to point at',
    de: '{{Deuten}} Sie [[auf]] die Bilder.',
    tr: 'Point at the pictures.' },
  { verb: 'sich eignen', prep: 'für', fall: 'Akkusativ', en: 'to be suitable for',
    de: 'Coole Fotos vom letzten Urlaub {{eignen}} sich nicht [[für]] eine Bewerbung.',
    tr: 'Cool photos from the last vacation are not suitable for an application.' },
  { verb: 'eingehen', prep: 'auf', fall: 'Dativ', en: 'to go into / address',
    de: 'In einer Diskussion sollte man auch [[auf]] die Standpunkte von anderen {{eingehen}}.',
    tr: 'In a discussion, one should also address the points of view of others.' },
  { verb: 'sich einigen', prep: 'auf', fall: 'Akkusativ', en: 'to agree on',
    de: 'Bei einem Streit ist wichtig, dass man sich am Ende [[auf]] etwas {{einigt}}.',
    tr: 'In an argument, it is important that one agrees on something in the end.' },
  { verb: 'sich einsetzen', prep: 'für', fall: 'Akkusativ', en: 'to stand up for',
    de: 'Er {{setzt}} sich [[für]] den Schutz der Nashörner {{ein}}.',
    tr: 'He stands up for the protection of rhinos.' },
  { verb: 'sich engagieren', prep: 'für', fall: 'Akkusativ', en: 'to get involved in',
    de: 'Jenny {{engagiert}} sich [[für]] den Naturschutz.',
    tr: 'Jenny gets involved in nature conservation.' },
  { verb: 'sich entscheiden', prep: 'für', fall: 'Akkusativ', en: 'to decide on',
    de: '{{Entscheidest}} du dich [[für]] eine Reise nach Berlin?',
    tr: 'Are you deciding on a trip to Berlin?' },
  { verb: 'sich entschließen', prep: 'zu', fall: 'Dativ', en: 'to decide to',
    de: 'Ich habe mich [[zu]] einem Urlaub auf der Alm {{entschlossen}}.',
    tr: 'I have decided on a vacation on the alpine pasture.' },
  { verb: 'sich erinnern', prep: 'an', fall: 'Akkusativ', en: 'to remember',
    de: '{{Erinnerst}} du dich noch [[an]] unseren ersten Tag?',
    tr: 'Do you still remember our first day?' },
  { verb: 'sich erkundigen', prep: 'nach', fall: 'Dativ', en: 'to inquire about',
    de: 'Ich wollte mich [[nach]] dem Stand meiner Bewerbung {{erkundigen}}.',
    tr: 'I wanted to inquire about the status of my application.' },
  { verb: 'sich freuen', prep: 'auf', fall: 'Akkusativ', en: 'to look forward to',
    de: 'Ich {{freue}} mich [[auf]] den Urlaub im Sommer.',
    tr: 'I am looking forward to the holiday in summer.' },
  { verb: 'führen', prep: 'zu', fall: 'Dativ', en: 'to lead to',
    de: 'Welche Ereignisse können [[zu]] Veränderungen {{führen}}?',
    tr: 'Which events can lead to changes?' },
  { verb: 'gehören', prep: 'zu', fall: 'Dativ', en: 'to belong to',
    de: 'Er {{gehört}} [[zu]] den besten Schülern.',
    tr: 'He is one of the best students.' },
  { verb: 'sich gewöhnen', prep: 'an', fall: 'Akkusativ', en: 'to get used to',
    de: 'Ich {{gewöhne}} mich langsam [[an]] das Wetter.',
    tr: 'I am slowly getting used to the weather.' },
  { verb: 'sich handeln', prep: 'um', fall: 'Akkusativ', en: 'to be about',
    de: 'Bei diesem Gegenstand {{handelt}} es sich [[um]] ein wertvolles Kunstwerk.',
    tr: 'This object is a valuable work of art.' },
  { verb: 'herankommen', prep: 'an', fall: 'Akkusativ', en: 'to approach',
    de: 'Kommen Sie doch näher [[an]] das Bild {{heran}}.',
    tr: 'Do come closer to the picture.' },
  { verb: 'hindern', prep: 'an', fall: 'Dativ', en: 'to hinder from',
    de: 'Niemand {{hindert}} mich [[daran]], ein eigenes Geschäft zu eröffnen.',
    tr: 'Nobody hinders me from opening my own business.' },
  { verb: 'sich informieren', prep: 'über', fall: 'Akkusativ', en: 'to inform oneself about',
    de: 'Julia {{informiert}} sich [[über]] Restaurants in Köln.',
    tr: 'Julia informs herself about restaurants in Cologne.' },
  { verb: 'sich interessieren', prep: 'für', fall: 'Akkusativ', en: 'to be interested in',
    de: 'Er {{interessiert}} sich [[für]] moderne Kunst.',
    tr: 'He is interested in modern art.' },
  { verb: 'sich irren', prep: 'in', fall: 'Dativ', en: 'to be mistaken in',
    de: 'Ich habe mich wohl [[im]] Raum {{geirrt}}.',
    tr: 'I was probably mistaken about the room.' },
  { verb: 'kämpfen', prep: 'für', fall: 'Akkusativ', en: 'to fight for',
    de: 'Er {{kämpft}} [[für]] eine bessere Bezahlung.',
    tr: 'He fights for better pay.' },
  { verb: 'klicken', prep: 'auf', fall: 'Akkusativ', en: 'to click on',
    de: '{{Klick}} [[auf]] die Datei, um sie zu öffnen.',
    tr: 'Click on the file to open it.' },
  { verb: 'kommen', prep: 'auf', fall: 'Akkusativ', en: 'to come up with',
    de: 'Ich {{komme}} gerade nicht [[auf]] die Lösung.',
    tr: 'I just can\'t come up with the solution.' },
  { verb: 'sich konzentrieren', prep: 'auf', fall: 'Akkusativ', en: 'to concentrate on',
    de: '{{Konzentrieren}} Sie sich [[auf]] wichtige Informationen im Text.',
    tr: 'Concentrate on important information in the text.' },
  { verb: 'sich kümmern', prep: 'um', fall: 'Akkusativ', en: 'to take care of',
    de: 'Sie {{kümmert}} sich [[um]] ihre kranke Mutter.',
    tr: 'She takes care of her sick mother.' },
  { verb: 'leiden', prep: 'an', fall: 'Dativ', en: 'to suffer from',
    de: 'Meine Oma {{leidet}} [[an]] Alzheimer.',
    tr: 'My grandma suffers from Alzheimer\'s.' },
  { verb: 'machen', prep: 'zu', fall: 'Dativ', en: 'to make into',
    de: 'Wir haben die Wohnung [[zu]] einem Smart Home {{gemacht}}.',
    tr: 'We made the apartment into a smart home.' },
  { verb: 'profitieren', prep: 'von', fall: 'Dativ', en: 'to profit from',
    de: 'Viele Länder {{profitieren}} [[von]] der Globalisierung.',
    tr: 'Many countries profit from globalization.' },
  { verb: 'raten', prep: 'zu', fall: 'Dativ', en: 'to advise to',
    de: 'Ich {{rate}} dir, [[auf]] deine Gesundheit zu achten.',
    tr: 'I advise you to pay attention to your health.' },
  { verb: 'sich registrieren', prep: 'bei', fall: 'Dativ', en: 'to register with',
    de: '{{Registrieren}} Sie sich [[beim]] Kundenservice und werden Sie Kunde.',
    tr: 'Register with customer service and become a customer.' },
  { verb: 'schätzen', prep: 'an', fall: 'Dativ', en: 'to value in',
    de: 'An meinem Chef {{schätze}} ich vor allem seine Ruhe und Freundlichkeit.',
    tr: 'In my boss, I value above all his calmness and friendliness.' },
  { verb: 'schützen', prep: 'vor', fall: 'Dativ', en: 'to protect from',
    de: 'Das Medikament {{schützt}} [[vor]] Erkältung.',
    tr: 'The medicine protects against colds.' },
  { verb: 'sorgen', prep: 'für', fall: 'Akkusativ', en: 'to care for',
    de: 'Ich {{sorge}} [[für]] drei Katzen im Haus.',
    tr: 'I care for three cats in the house.' },
  { verb: 'sich spiegeln', prep: 'in', fall: 'Dativ', en: 'to reflect in',
    de: 'Die Wolken {{spiegeln}} sich [[im]] Wasser.',
    tr: 'The clouds reflect in the water.' },
  { verb: 'sprechen', prep: 'über', fall: 'Akkusativ', en: 'to talk about',
    de: 'Wir {{sprechen}} [[über]] das Wetter.',
    tr: 'We are talking about the weather.' },
  { verb: 'stammen', prep: 'aus', fall: 'Dativ', en: 'to originate from',
    de: 'Die Möbel {{stammen}} [[aus]] dem 18. Jahrhundert.',
    tr: 'The furniture originates from the 18th century.' },
  { verb: 'stecken', prep: 'in', fall: 'Dativ', en: 'to be in / to lie in',
    de: 'Welche Lebensweisheit {{steckt}} [[in]] der Geschichte?',
    tr: 'Which wisdom lies in the story?' },
  { verb: 'stehen', prep: 'für', fall: 'Akkusativ', en: 'to stand for',
    de: 'Das Herz-Symbol {{steht}} [[für]] die Liebe.',
    tr: 'The heart symbol stands for love.' },
  { verb: 'sich streiten', prep: 'mit', fall: 'Dativ', en: 'to argue with',
    de: '{{Streitest}} du dich manchmal [[mit]] deinen Freunden?',
    tr: 'Do you sometimes argue with your friends?' },
  { verb: 'träumen', prep: 'von', fall: 'Dativ', en: 'to dream of',
    de: 'Sie {{träumt}} [[von]] einem eigenen Haus.',
    tr: 'She dreams of a house of her own.' },
  { verb: 'überzeugen', prep: 'von', fall: 'Dativ', en: 'to convince of',
    de: '{{Überzeuge}} den Arbeitgeber [[von]] deinen Qualitäten.',
    tr: 'Convince the employer of your qualities.' },
  { verb: 'sich unterhalten', prep: 'mit', fall: 'Dativ', en: 'to converse with',
    de: 'Ich {{unterhalte}} mich gern [[mit]] meiner Nachbarin.',
    tr: 'I like to converse with my neighbor.' },
  { verb: 'unternehmen', prep: 'mit', fall: 'Dativ', en: 'to do something with',
    de: '{{Unternimm}} etwas [[mit]] Freunden.',
    tr: 'Do something with friends.' },
  { verb: 'verbringen', prep: 'mit', fall: 'Dativ', en: 'to spend time with',
    de: 'Ich {{verbringe}} am liebsten Zeit [[mit]] meiner Familie.',
    tr: 'I like to spend time with my family best.' },
  { verb: 'sich verlieben', prep: 'in', fall: 'Akkusativ', en: 'to fall in love with',
    de: 'Er {{hat}} sich [[in]] eine Kollegin {{verliebt}}.',
    tr: 'He fell in love with a colleague.' },
  { verb: 'sich verstehen', prep: 'mit', fall: 'Dativ', en: 'to get along with',
    de: 'Ich {{verstehe}} mich nicht so gut [[mit]] meinem Mitbewohner.',
    tr: 'I don\'t get along so well with my roommate.' },
  { verb: 'verzichten', prep: 'auf', fall: 'Akkusativ', en: 'to do without',
    de: 'Kannst du [[auf]] Schokolade {{verzichten}}?',
    tr: 'Can you do without chocolate?' },
  { verb: 'sich vorbereiten', prep: 'auf', fall: 'Akkusativ', en: 'to prepare for',
    de: 'Ich {{bereite}} mich [[auf]] die Prüfung {{vor}}.',
    tr: 'I am preparing for the exam.' },
  { verb: 'warnen', prep: 'vor', fall: 'Dativ', en: 'to warn against',
    de: 'Er {{warnt}} sie [[vor]] dem Hund in seinem Garten.',
    tr: 'He warns her about the dog in his garden.' },
  { verb: 'warten', prep: 'auf', fall: 'Akkusativ', en: 'to wait for',
    de: 'Ich {{warte}} seit zehn Minuten [[auf]] den Bus.',
    tr: 'I have been waiting for the bus for ten minutes.' },
  { verb: 'wirken', prep: 'auf', fall: 'Akkusativ', en: 'to seem to',
    de: 'Das Bild {{wirkt}} [[auf]] mich sehr modern.',
    tr: 'The picture seems very modern to me.' },
  { verb: 'sich wundern', prep: 'über', fall: 'Akkusativ', en: 'to be surprised about',
    de: '{{Wundere}} dich nicht [[über]] ihn - er hat heute schlechte Laune.',
    tr: 'Don\'t be surprised about him - he is in a bad mood today.' },
  { verb: 'zählen', prep: 'zu', fall: 'Dativ', en: 'to count among',
    de: 'Sonja {{zählt}} Verena und Felix [[zu]] ihren besten Freunden.',
    tr: 'Sonja counts Verena and Felix among her best friends.' },
  { verb: 'teilnehmen', prep: 'an', fall: 'Dativ', en: 'to take part in',
    de: 'Möchtest du [[an]] dem Deutschkurs {{teilnehmen}}?',
    tr: 'Would you like to take part in the German course?' },
  { verb: 'fragen', prep: 'nach', fall: 'Dativ', en: 'to ask about',
    de: 'Er {{fragt}} den Lehrer [[nach]] dem Weg.',
    tr: 'He asks the teacher for directions.' },
  { verb: 'anfangen', prep: 'mit', fall: 'Dativ', en: 'to begin with',
    de: 'Wir {{fangen}} um neun Uhr [[mit]] dem Unterricht {{an}}.',
    tr: 'We start the lesson at nine o’clock.' },
  { verb: 'aufhören', prep: 'mit', fall: 'Dativ', en: 'to stop doing something',
    de: 'Ich {{höre}} [[mit]] dem Rauchen {{auf}}.',
    tr: 'I am quitting smoking.' },
  { verb: 'glauben', prep: 'an', fall: 'Akkusativ', en: 'to believe in',
    de: 'Ich {{glaube}} [[an]] dich.',
    tr: 'I believe in you.' },
  { verb: 'Angst haben', prep: 'vor', fall: 'Dativ', en: 'to be afraid of',
    de: 'Das Kind {{hat}} {{Angst}} [[vor]] dem Hund.',
    tr: 'The child is afraid of the dog.' },
  { verb: 'einladen', prep: 'zu', fall: 'Dativ', en: 'to invite to',
    de: 'Ich {{lade}} dich [[zu]] meiner Party {{ein}}.',
    tr: 'I am inviting you to my party.' },
  { verb: 'sich bewerben', prep: 'um', fall: 'Akkusativ', en: 'to apply for',
    de: 'Sie {{bewirbt}} sich [[um]] eine Stelle als Ingenieurin.',
    tr: 'She is applying for a job as an engineer.' },
  { verb: 'bitten', prep: 'um', fall: 'Akkusativ', en: 'to ask for',
    de: 'Ich {{bitte}} Sie [[um]] Hilfe.',
    tr: 'I ask you for help.' },
  { verb: 'suchen', prep: 'nach', fall: 'Dativ', en: 'to search for',
    de: 'Ich {{suche}} [[nach]] meinem Schlüssel.',
    tr: 'I am looking for my key.' },
  { verb: 'halten', prep: 'für', fall: 'Akkusativ', en: 'to consider something to be',
    de: 'Ich {{halte}} das [[für]] eine gute Idee.',
    tr: 'I think that is a good idea.' }

  ];

  var BASE_PREPS = ['an', 'auf', 'aus', 'bei', 'für', 'gegen', 'in', 'mit', 'nach', 'über', 'um', 'unter', 'von', 'vor', 'zu'];
  var KEY = 'verben-praep-eigene-v1';

  var $ = function (id) { return document.getElementById(id); };

  /* ---------- sound and speech ---------- */
  /* Put your own sound files in a folder called "sounds" next to index.html:
     sounds/right.mp3 plays for a right answer, sounds/wrong.mp3 for a wrong one. */
  var SOUND_KEY = 'verben-praep-ton-v1';
  var soundOn = true;
  try { soundOn = localStorage.getItem(SOUND_KEY) !== 'off'; } catch (e) { /* storage unavailable */ }

  function makeAudio(src) {
    try { var a = new Audio(src); a.preload = 'auto'; return a; } catch (e) { return null; }
  }
  var sfx = { right: makeAudio('sounds/right.mp3'), wrong: makeAudio('sounds/wrong.mp3') };
  function playSfx(name) {
    if (!soundOn || !sfx[name]) return;
    try {
      sfx[name].currentTime = 0;
      var p = sfx[name].play();
      if (p && p.catch) p.catch(function () { /* file missing or blocked */ });
    } catch (e) { /* ignore */ }
  }

  var hasSpeech = 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';
  var deVoice = null;
  function pickVoice() {
    if (!hasSpeech) return;
    var vs = window.speechSynthesis.getVoices();
    deVoice = null;
    for (var i = 0; i < vs.length; i++) {
      if (/^de(-|_|$)/i.test(vs[i].lang)) { deVoice = vs[i]; break; }
    }
  }
  if (hasSpeech) {
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(text, force) {
    if (!hasSpeech || !text || (!soundOn && !force)) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE';
      u.rate = 0.85;
      if (deVoice) u.voice = deVoice;
      window.speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }
  function spokenVerb(c) { return (c.refl ? 'sich ' : '') + (c.pre ? c.pre + c.verb : c.verb); }
  function syncSound() {
    $('soundBtn').setAttribute('aria-pressed', String(soundOn));
    $('soundBtn').textContent = soundOn ? 'Ton an' : 'Ton aus';
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function markup(s) {
    return esc(s)
      .replace(/\{\{(.+?)\}\}/g, '<mark>$1</mark>')
      .replace(/\[\[(.+?)\]\]/g, '<span class="p">$1</span>');
  }
  function plain(s) { return s.replace(/\[\[|\]\]|\{\{|\}\}/g, ''); }
  function shuffle(a) {
    var r = a.slice();
    for (var i = r.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = r[i]; r[i] = r[j]; r[j] = t;
    }
    return r;
  }
  function frame(c) {
    var inf = (c.refl ? 'sich ' : '') + (c.pre ? c.pre + c.verb : c.verb);
    return inf + ' ' + c.prep + ' + ' + c.fall;
  }
  function keyOf(c) { return (c.pre || '') + c.verb + c.prep + plain(c.de); }

  function autoMark(sentence, prep) {
    if (/\[\[|\{\{/.test(sentence)) return sentence;
    var safe = prep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var re = new RegExp('(^|[^\\p{L}])(' + safe + ')(?=[^\\p{L}]|$)', 'iu');
    var m = re.exec(sentence);
    if (!m) return sentence;
    var s = m.index + m[1].length, e = s + m[2].length;
    return sentence.slice(0, s) + '[[' + sentence.slice(s, e) + ']]' + sentence.slice(e);
  }
  function caseOf(x) {
    if (/^a/i.test(x)) return 'Akkusativ';
    if (/^d/i.test(x)) return 'Dativ';
    return null;
  }
  function parseVerb(raw) {
    var s = raw.trim(), refl = false, pre = '';
    if (/^sich\s+/i.test(s)) { refl = true; s = s.replace(/^sich\s+/i, ''); }
    if (s.indexOf('|') > -1) {
      var p = s.split('|');
      pre = p[0].trim();
      s = p.slice(1).join('').trim();
    }
    return { pre: pre, verb: s, refl: refl };
  }

  /* ---------- own cards (per-browser convenience) ---------- */
  function validCard(c) {
    return c && typeof c.verb === 'string' && typeof c.prep === 'string' && typeof c.de === 'string' &&
      (c.fall === 'Akkusativ' || c.fall === 'Dativ');
  }
  function loadCustom() {
    try {
      var raw = localStorage.getItem(KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.filter(validCard) : [];
    } catch (e) { return []; }
  }
  function saveCustom() {
    try { localStorage.setItem(KEY, JSON.stringify(custom)); } catch (e) { /* storage unavailable */ }
  }
  var custom = loadCustom();

  /* ---------- game state ---------- */
  var size = 10;
  var pool = [], queue = [], total = 0, mastered = 0, firstTry = 0, streak = 0;
  var missed = new Set();
  var current = null, answered = false, selPrep = null, selCase = null;

  function stats() {
    $('prog').textContent = mastered + ' / ' + total + ' gelernt';
    $('streak').textContent = 'Serie ' + streak;
    $('fill').style.width = (total ? (mastered / total) * 100 : 0) + '%';
    $('bar').setAttribute('aria-valuemax', String(total));
    $('bar').setAttribute('aria-valuenow', String(mastered));
  }

  function startRound() {
    var deck = BASE.concat(custom).map(function (c, i) {
      var copy = {}; for (var k in c) copy[k] = c[k];
      copy.id = i;
      return copy;
    });
    var n = size === 'all' ? deck.length : Math.min(size, deck.length);
    pool = shuffle(deck).slice(0, n);
    queue = pool.slice();
    total = pool.length; mastered = 0; firstTry = 0; streak = 0;
    missed = new Set();
    showCard();
  }

  function buildPreps(c) {
    var set = BASE_PREPS.slice();
    custom.forEach(function (x) { if (set.indexOf(x.prep) < 0) set.push(x.prep); });
    if (set.indexOf(c.prep) < 0) set.push(c.prep);
    set.sort(function (a, b) { return a.localeCompare(b, 'de'); });
    var box = $('preps');
    box.innerHTML = '';
    set.forEach(function (p) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.textContent = p;
      b.dataset.v = p;
      b.setAttribute('aria-pressed', 'false');
      box.appendChild(b);
    });
  }

  function showCard() {
    current = queue[0];
    answered = false; selPrep = null; selCase = null;
    var c = current;
    $('game').hidden = false;
    $('done').hidden = true;

    var tags = $('tags');
    tags.innerHTML = '';
    function addTag(t) {
      var s = document.createElement('span');
      s.className = 'tag';
      s.textContent = t;
      tags.appendChild(s);
    }
    if (c.refl) addTag('reflexiv');
    if (c.pre) addTag('trennbar');

    $('verb').innerHTML =
      (c.refl ? '<span class="sich">sich</span>' : '') +
      (c.pre
        ? '<span class="pre">' + esc(c.pre) + '</span><span class="cut" aria-hidden="true">|</span><span class="stem">' + esc(c.verb) + '</span>'
        : esc(c.verb));
    $('en').textContent = c.en || '';

    buildPreps(c);
    document.querySelectorAll('#cases .case').forEach(function (b) {
      b.disabled = false;
      b.className = 'case';
      b.setAttribute('aria-pressed', 'false');
    });
    $('ask').hidden = false;
    $('result').hidden = true;
    $('check').disabled = true;
    stats();
    speak(spokenVerb(c));
  }

  function select(groupId, val, which) {
    if (answered) return;
    if (which === 'prep') selPrep = val; else selCase = val;
    document.querySelectorAll('#' + groupId + ' button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.v === val));
    });
    $('check').disabled = !(selPrep && selCase);
  }

  function check() {
    if (answered || !selPrep || !selCase) return;
    answered = true;
    var c = current;
    var pOk = selPrep === c.prep, fOk = selCase === c.fall, ok = pOk && fOk;
    playSfx(ok ? 'right' : 'wrong');

    function mark(sel, right, chosen) {
      document.querySelectorAll(sel).forEach(function (b) {
        b.disabled = true;
        if (b.dataset.v === right) b.classList.add('is-right');
        else if (b.dataset.v === chosen) b.classList.add('is-wrong');
      });
    }
    mark('#preps .chip', c.prep, selPrep);
    mark('#cases .case', c.fall, selCase);

    queue.shift();
    if (ok) {
      mastered++;
      if (!missed.has(c.id)) firstTry++;
      streak++;
    } else {
      missed.add(c.id);
      streak = 0;
      queue.splice(Math.min(3, queue.length), 0, c);
    }

    var v = $('verdict');
    v.className = 'verdict ' + (ok ? 'ok' : 'no');
    v.textContent = ok ? 'Richtig!' : 'Leider falsch.';
    var d = $('detail');
    if (ok) {
      d.hidden = true;
    } else {
      d.hidden = false;
      d.textContent =
        (!pOk && !fOk ? 'Präposition und Fall stimmen nicht.' :
          !pOk ? 'Der Fall stimmt, die Präposition nicht.' :
            'Die Präposition stimmt, der Fall nicht.') + ' Die Karte kommt gleich wieder.';
    }
    $('merke').innerHTML = esc(frame(c).slice(0, -c.fall.length)) + '<span class="fall ' + (c.fall === 'Dativ' ? 'fall-dat' : 'fall-akk') + '">' + c.fall + '</span>';
    $('sentence').innerHTML = markup(c.de);
    $('sentence').className = 'sentence ' + (c.fall === 'Dativ' ? 's-dat' : 's-akk');
    $('tr').textContent = c.tr || '';
    $('tr').hidden = !c.tr;
    $('next').textContent = queue.length ? 'Weiter' : 'Ergebnis';

    $('ask').hidden = true;
    $('result').hidden = false;
    stats();
    $('next').focus({ preventScroll: true });
    var r = $('result').getBoundingClientRect();
    if (r.bottom > window.innerHeight) $('result').scrollIntoView({ block: 'end' });
  }

  function next() {
    if (queue.length) {
      showCard();
      var top = $('game').getBoundingClientRect().top;
      if (top < 0) $('game').scrollIntoView({ block: 'start' });
    } else {
      showDone();
    }
  }

  function showDone() {
    $('game').hidden = true;
    $('done').hidden = false;
    $('score').textContent = firstTry + ' von ' + total;
    var list = $('againList');
    list.innerHTML = '';
    var any = false;
    pool.forEach(function (c) {
      if (missed.has(c.id)) {
        any = true;
        var li = document.createElement('li');
        li.textContent = frame(c);
        list.appendChild(li);
      }
    });
    $('againBox').hidden = !any;
    stats();
    $('newRound2').focus({ preventScroll: true });
  }

  /* ---------- wiring ---------- */
  $('preps').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (b) select('preps', b.dataset.v, 'prep');
  });
  $('cases').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (b) select('cases', b.dataset.v, 'case');
  });
  $('check').addEventListener('click', check);
  $('next').addEventListener('click', next);
  $('newRound').addEventListener('click', startRound);
  $('newRound2').addEventListener('click', startRound);
  $('sizes').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    size = b.dataset.n === 'all' ? 'all' : parseInt(b.dataset.n, 10);
    document.querySelectorAll('#sizes button').forEach(function (x) {
      x.setAttribute('aria-pressed', String(x === b));
    });
    startRound();
  });

  /* ---------- own verbs ---------- */
  function updateCount() {
    $('ownCount').textContent = custom.length ? '(' + custom.length + ')' : '';
    $('clearBtn').hidden = custom.length === 0;
  }
  var clearArmed = false;
  function disarm() { clearArmed = false; $('clearBtn').textContent = 'Eigene Verben löschen'; }

  $('addBtn').addEventListener('click', function () {
    disarm();
    var lines = $('bulk').value.split(/\r?\n/);
    var parsed = [], bad = [];
    lines.forEach(function (line, i) {
      if (!line.trim()) return;
      var p = line.split(';').map(function (x) { return x.trim(); });
      var fall = caseOf(p[2] || '');
      if (p.length < 4 || !p[0] || !p[1] || !fall || !p[3]) { bad.push(i + 1); return; }
      var v = parseVerb(p[0]);
      var prep = p[1].toLowerCase();
      parsed.push({ pre: v.pre, verb: v.verb, refl: v.refl, prep: prep, fall: fall, en: p[4] || '', de: autoMark(p[3], prep), tr: p[5] || '' });
    });
    var added = 0, dupes = 0;
    parsed.forEach(function (c) {
      var k = keyOf(c);
      var exists = custom.some(function (x) { return keyOf(x) === k; }) || BASE.some(function (x) { return keyOf(x) === k; });
      if (exists) { dupes++; } else { custom.push(c); added++; }
    });
    var msg = [];
    if (added) msg.push('Added ' + added + (added === 1 ? ' card.' : ' cards.') + ' They appear in the next round (press Neue Runde).');
    if (dupes) msg.push(dupes + ' already existed.');
    if (bad.length) msg.push('Line ' + bad.join(', ') + ' skipped: needs verb; preposition; Akkusativ or Dativ; sentence.');
    if (!parsed.length && !bad.length) msg.push('Nothing to add yet. Paste at least one line.');
    $('status').textContent = msg.join(' ');
    if (added) saveCustom();
    if (!bad.length && parsed.length) $('bulk').value = '';
    updateCount();
  });

  $('clearBtn').addEventListener('click', function () {
    if (!clearArmed) {
      clearArmed = true;
      $('clearBtn').textContent = 'Wirklich löschen?';
      return;
    }
    custom = [];
    saveCustom();
    disarm();
    updateCount();
    $('status').textContent = 'Your own verbs were removed. The built-in cards stay.';
  });

  $('say').addEventListener('click', function () { if (current) speak(spokenVerb(current), true); });
  $('saySentence').addEventListener('click', function () { if (current) speak(plain(current.de), true); });
  $('soundBtn').addEventListener('click', function () {
    soundOn = !soundOn;
    try { localStorage.setItem(SOUND_KEY, soundOn ? 'on' : 'off'); } catch (e) { /* ignore */ }
    if (!soundOn && hasSpeech) window.speechSynthesis.cancel();
    syncSound();
  });
  if (!hasSpeech) { $('say').hidden = true; $('saySentence').hidden = true; }

  syncSound();
  updateCount();
  startRound();

  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* offline mode unavailable */ });
    });
  }
})();
