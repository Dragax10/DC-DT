// AFA · Proposition UX · deck FR · style Swiss International (accent = bleu AFA)
const pptxgen = require('pptxgenjs');
const { applyTheme } = require('/root/.claude/skills/synced/31ef0e56-18bd-4e51-9749-a7758f7a827e_6a0bbffe-e7dd-4764-9388-2ac357d006e9/pptx/scripts/apply_theme.js');
const OUT = process.argv[2];

const THEME = {
  name: 'AFA Swiss',
  headFontFace: 'Arial',
  bodyFontFace: 'Arial',
  colors: {
    dk1: '0A0A0A', lt1: 'FAFAF8', dk2: '1F4E80', lt2: 'EEEEEA',
    accent1: '006FB1', accent2: '1F4E80', accent3: '981222', accent4: '5B5F6B',
    accent5: 'D6D6D0', accent6: 'E3EEF7', hlink: '006FB1', folHlink: '1F4E80',
  },
};

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = 'Africa First Assist · Proposition UX';
pres.author = '[Studio]';
pres.company = '[Studio]';
const C = pres.SchemeColor;
const MONO = 'Courier New';
const NB = ' ';
const fr = (s) => s.replace(/ ([:;?!»])/g, NB + '$1').replace(/« /g, '«' + NB);

// grid: 16 columns
const M = 0.6, W = 13.333 - 2 * M, COL = W / 16;
const gx = (c) => M + c * COL;          // x of column c (0..16)
const gw = (n) => n * COL;              // width of n columns

// ---------- layouts ----------
const footer = (col) => ({
  text: {
    text: 'AFRICA FIRST ASSIST · PROPOSITION UX · DOCUMENT DE TRAVAIL',
    options: { x: M, y: 6.95, w: 8, h: 0.3, fontFace: MONO, fontSize: 9, color: col, charSpacing: 1, margin: 0 },
  },
});
const slideNum = (col) => ({ x: 11.73, y: 6.95, w: 1.0, h: 0.3, fontFace: MONO, fontSize: 9, color: col, align: 'right' });

pres.defineSlideMaster({
  title: 'SWISS_LIGHT',
  background: { color: C.background1 },
  objects: [
    footer(C.accent4),
    { placeholder: { options: { name: 'title', type: 'title', x: M, y: 0.95, w: gw(12), h: 1.25, fontFace: 'Arial', fontSize: 34, bold: true, color: C.text1, valign: 'top', align: 'left', margin: 0 }, text: '' } },
  ],
  slideNumber: slideNum(C.accent4),
});
pres.defineSlideMaster({
  title: 'SWISS_ACCENT',
  background: { color: C.accent1 },
  objects: [footer('FFFFFF')],
  slideNumber: slideNum('FFFFFF'),
});
pres.defineSlideMaster({
  title: 'SWISS_PLAIN',
  background: { color: C.background1 },
  objects: [],
  slideNumber: slideNum(C.accent4),
});
pres.defineSlideMaster({
  title: 'SWISS_INK',
  background: { color: C.text1 },
  objects: [footer('BDBDB8')],
  slideNumber: slideNum('BDBDB8'),
});

// ---------- helpers ----------
const T = (s, text, o) => s.addText(typeof text === 'string' ? fr(text) : text, { isTextBox: true, margin: 0, fontFace: 'Arial', color: C.text1, valign: 'top', ...o });
const label = (s, text, x, y, w, color = C.accent1) => T(s, text.toUpperCase(), { x, y, w, h: 0.3, fontFace: MONO, fontSize: 10, bold: true, color, charSpacing: 1.5 });
const rule = (s, x, y, w, color = C.text1, pt = 0.75) => s.addShape(pres.shapes.LINE, { x, y, w, h: 0, line: { color, width: pt } });
const vrule = (s, x, y, h, color = C.text1, pt = 0.75) => s.addShape(pres.shapes.LINE, { x, y, w: 0, h, line: { color, width: pt } });
const box = (s, x, y, w, h, fill, line) => s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: fill }, line: line ? { color: line, width: 0.75 } : { type: 'none' } });
function dotMatrix(s, x, y, cols, rows, step, size, color, pattern) {
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    if (pattern && !pattern(r, c)) continue;
    s.addShape(pres.shapes.RECTANGLE, { x: x + c * step, y: y + r * step, w: size, h: size, fill: { color }, line: { type: 'none' } });
  }
}
let n = 0;
function slide(master, section, kicker) {
  const s = pres.addSlide({ masterName: master, sectionTitle: section });
  n++;
  if (kicker) label(s, kicker, M, 0.5, gw(10), master === 'SWISS_LIGHT' ? C.accent1 : 'FFFFFF');
  return s;
}

// ================= SECTIONS =================
pres.addSection({ title: 'Ouverture' });

// 1 · Couverture (S01)
{
  const s = slide('SWISS_ACCENT', 'Ouverture');
  label(s, 'AFRICA FIRST ASSIST — PROPOSITION UX · N°01 · NOVEMBRE 2026', M, 0.5, gw(12), 'FFFFFF');
  dotMatrix(s, gx(11), 0.55, 14, 6, 0.2, 0.06, 'FFFFFF', (r, c) => (r + c) % 3 !== 0);
  T(s, 'L’assistance en un geste.', { x: M, y: 2.2, w: W, h: 2.4, fontSize: 60, bold: true, color: 'FFFFFF', valign: 'bottom', charSpacing: -1 });
  T(s, 'Une application mobile pensée pour le moment où les clients d’AFA ont besoin d’aide.', { x: M, y: 4.85, w: gw(10), h: 0.9, fontSize: 20, color: 'FFFFFF' });
  rule(s, M, 6.15, W, 'FFFFFF', 0.75);
  T(s, 'Recherche documentaire · benchmark · parcours UX · à valider avec AFA et ses clients', { x: M, y: 6.3, w: gw(12), h: 0.35, fontSize: 12, color: 'FFFFFF' });
  s.addNotes('Objet de la réunion : partager ce que nous avons appris, l’expérience que nous proposons et la façon dont nous la concevrons avec AFA. Nous restons dans le périmètre UX : les décisions métier, IT, juridiques et opérationnelles appartiennent aux équipes d’AFA.');
}

// 2 · Constat (S03 Statement)
{
  const s = slide('SWISS_LIGHT', 'Ouverture', '01 · Le constat');
  T(s, 'Aujourd’hui, être aidé, c’est un appel téléphonique.', { x: gx(2), y: 1.6, w: gw(13), h: 2.8, fontSize: 48, bold: true, charSpacing: -0.5 });
  rule(s, gx(2), 4.9, gw(14));
  T(s, 'On explique où l’on se trouve, puis on attend sans savoir qui arrive ni quand.', { x: gx(2), y: 5.1, w: gw(9), h: 0.8, fontSize: 18, color: C.accent4 });
  label(s, 'Scénario illustratif · à valider en recherche', gx(12), 5.15, gw(4), C.accent4);
  s.addNotes('C’est une hypothèse, pas une citation d’utilisateur. Les irritants viennent de la revue du site actuel : numéros d’urgence et de bureau confondus, formulaire de réclamation en texte libre, sans pièces jointes ni suivi.');
}

// 3 · Ce que nous avons appris (S18 Why Now)
{
  const s = slide('SWISS_LIGHT', 'Ouverture', '02 · Ce que nous avons appris');
  s.addText('Trois constats qui ouvrent une opportunité', { placeholder: 'title', align: 'left' });
  const cols = [
    ['Le marché', 'Aucune société d’assistance marocaine ne propose d’application grand public.', '0', 'application d’assistance au Maroc'],
    ['Les applis existantes', 'Les applis des assureurs gèrent les contrats, pas le moment de l’incident.', '41', 'applications étudiées'],
    ['Les clients', 'La plupart des bénéficiaires passent par des partenaires et ne connaissent pas toujours la marque AFA.', '8 M+', 'bénéficiaires (chiffre AFA, à confirmer)'],
  ];
  cols.forEach(([k, txt, big, cap], i) => {
    const x = gx(i * 5 + (i ? 0.5 : 0)), w = gw(4.5);
    label(s, k, x, 2.55, w, C.accent4);
    T(s, txt, { x, y: 2.95, w, h: 1.7, fontSize: 17 });
    rule(s, x, 4.85, w);
    T(s, big, { x, y: 5.0, w, h: 1.0, fontSize: 54, bold: true, color: i === 2 ? C.accent1 : C.text1 });
    T(s, cap, { x, y: 6.05, w, h: 0.4, fontSize: 12, color: C.accent4 });
  });
  s.addNotes('Sources : revue du site africafirstassist.com, recherche documentaire et benchmark de 41 applications (novembre 2026). Le chiffre de 8 millions de bénéficiaires est une déclaration d’AFA, à confirmer avant toute diffusion.');
}

pres.addSection({ title: 'Benchmark' });

// 4 · Benchmark (S19 Four Cards)
{
  const s = slide('SWISS_LIGHT', 'Benchmark', '03 · Benchmark · 41 applications');
  s.addText('Les assureurs gèrent les contrats, les leaders de l’assistance gèrent l’incident', { placeholder: 'title', align: 'left' });
  const cards = [
    ['MAROC · 10', 'Self-service pour assurés', 'My Wafa, MyRMA, MyAXA Maroc, Sanlam Maroc, AtlantaSanad. Contrat, sinistres, agences, paiement.'],
    ['AFRIQUE · 13', 'Mobile d’abord, peu de données', 'Discovery, Old Mutual, Hollard, Turaco, BIMA. Bouton d’urgence, WhatsApp, USSD.'],
    ['INTERNATIONAL · 18', 'Le « compagnon de voyage »', 'Allianz TravelSmart, AXA, Europ Assistance, International SOS. Appel en un geste, alertes, suivi du dépanneur.'],
    ['IA', 'Toujours avec un humain', 'Lemonade, Ping An, Discovery, Assia d’AtlantaSanad : l’IA aide, une personne décide.'],
  ];
  cards.forEach(([k, h, b], i) => {
    const x = gx(i * 4), w = gw(4) - 0.15;
    box(s, x, 2.55, w, 3.9, i === 3 ? C.accent6 : C.background2);
    label(s, k, x + 0.2, 2.75, w - 0.4, i === 3 ? C.accent1 : C.accent4);
    T(s, h, { x: x + 0.2, y: 3.15, w: w - 0.4, h: 0.9, fontSize: 18, bold: true });
    T(s, b, { x: x + 0.2, y: 4.15, w: w - 0.4, h: 2.1, fontSize: 14, color: C.accent4 });
  });
  s.addNotes('Chaque application du benchmark a au moins une source. Les notes et nombres de téléchargements n’ont pas pu être vérifiés dans les stores ; une vérification manuelle des applis marocaines est prévue avant la réunion.');
}

// 5 · L'opportunité (S05 Three sub-cards)
{
  const s = slide('SWISS_LIGHT', 'Benchmark', '04 · L’opportunité');
  T(s, 'Aucune appli marocaine n’associe ces trois éléments. Aucune ne parle darija.', { x: M, y: 0.95, w: gw(6), h: 4.5, fontSize: 34, bold: true });
  const rows = [
    ['01', 'Un SOS qui ouvre un dossier', 'Un geste lance l’appel et crée le dossier d’assistance, avec la position.'],
    ['02', 'Le suivi sur toutes les lignes', 'Routière, voyage, santé, habitation : un seul fil pour le client, sans rappeler.'],
    ['03', 'L’assurance voyage et l’attestation visa', 'Aucune appli marocaine ne vend l’assurance voyage ; AFA promet déjà une attestation immédiate.'],
  ];
  rows.forEach(([no, h, b], i) => {
    const y = 0.95 + i * 1.9;
    box(s, gx(7), y, gw(9), 1.7, C.background2);
    T(s, no, { x: gx(7) + 0.25, y: y + 0.25, w: 0.8, h: 0.6, fontSize: 28, bold: true, color: C.accent1 });
    T(s, h, { x: gx(7) + 1.2, y: y + 0.25, w: gw(9) - 1.45, h: 0.45, fontSize: 18, bold: true });
    T(s, b, { x: gx(7) + 1.2, y: y + 0.75, w: gw(9) - 1.45, h: 0.8, fontSize: 14, color: C.accent4 });
  });
  T(s, 'Certaines applis offrent déjà une aide géolocalisée ou de la téléconsultation : la différence est la combinaison.', { x: M, y: 5.95, w: gw(6), h: 0.8, fontSize: 12, color: C.accent4 });
  s.addNotes('Formulation volontairement précise. Ne pas dire « aucune appli marocaine n’offre d’aide géolocalisée » ni « aucune téléconsultation » : My Wafa et l’ancienne appli RMA proposeraient une aide géolocalisée, MyAXA propose de l’e-santé.');
}

pres.addSection({ title: 'Expérience proposée' });

// 6 · La promesse (S12 Manifesto + ink banner)
{
  const s = slide('SWISS_LIGHT', 'Expérience proposée', '05 · La promesse');
  T(s, [
    { text: 'L’assistance en un geste.', options: { breakLine: true } },
    { text: 'Votre couverture en poche.', options: { breakLine: true } },
    { text: 'Votre attestation visa en quelques minutes.', options: { color: C.accent1 } },
  ], { x: M, y: 1.0, w: gw(15), h: 3.3, fontSize: 44, bold: true, lineSpacingMultiple: 1.05 });
  box(s, 0, 4.85, 13.333, 1.75, C.text1);
  T(s, 'Trois promesses, une pour chaque moment qui compte : l’incident, « suis-je couvert ? » et la demande de visa.', { x: M, y: 5.2, w: gw(13), h: 1.0, fontSize: 18, color: 'FFFFFF' });
  s.addNotes('Chaque écran de la première version sert l’un de ces trois moments. Si une fonction n’en sert aucun, elle attend.');
}

// 7 · Première version (S04 Six cells)
{
  const s = slide('SWISS_LIGHT', 'Expérience proposée', '06 · Première version');
  s.addText('Ce que les clients pourront faire', { placeholder: 'title', align: 'left' });
  const cells = [
    ['01', 'SOS qui appelle d’abord', 'Un geste, une confirmation, l’appel démarre. La position suit.'],
    ['02', 'Assistance routière', 'Une demande en quatre écrans courts, préremplis.'],
    ['03', 'Suivi étape par étape', 'Reçu, couverture confirmée, aide en route, arrivée.'],
    ['04', 'Couverture hors ligne', 'Carte, documents et numéros utiles, même sans réseau.'],
    ['05', 'Assurance voyage', 'Prix complets, scan du passeport, attestation immédiate.'],
    ['06', 'Une question ?', 'Un assistant pour les questions de couverture, une personne toujours joignable.'],
  ];
  cells.forEach(([no, h, b], i) => {
    const c = i % 3, r = Math.floor(i / 3);
    const x = gx(c * 5.33), y = 2.45 + r * 2.15, w = gw(5.33) - 0.2;
    rule(s, x, y, w);
    T(s, no, { x, y: y + 0.15, w: 0.7, h: 0.4, fontSize: 12, bold: true, fontFace: MONO, color: C.accent1 });
    T(s, h, { x, y: y + 0.5, w, h: 0.45, fontSize: 18, bold: true });
    T(s, b, { x, y: y + 1.0, w, h: 0.9, fontSize: 14, color: C.accent4 });
  });
  T(s, 'Français et arabe (de droite à gauche) · accessible (WCAG 2.2 AA) · réseau faible · choix de confidentialité clairs. Périmètre à confirmer avec les équipes métier et IT d’AFA.', { x: M, y: 6.45, w: gw(16), h: 0.4, fontSize: 11, color: C.accent4 });
  s.addNotes('Hors première version, volontairement : carte en direct du dépanneur, téléconsultation, assistance habitation, déclaration de décès dans l’appli, membres de la famille, chat avec une personne. Les urgences médicales et les décès restent couverts dès le premier jour par le SOS et la ligne téléphonique.');
}

// 8 · Parcours SOS (S11 Horizontal timeline)
{
  const s = slide('SWISS_LIGHT', 'Expérience proposée', '07 · Parcours clé · SOS');
  s.addText('L’appel passe toujours en premier', { placeholder: 'title', align: 'left' });
  const steps = [
    ['Appui sur SOS', 'Sur tous les écrans, même verrouillé ou sans compte.'],
    ['Une confirmation', 'Pas de compte à rebours avec un lecteur d’écran. Options : « pour quelqu’un d’autre », « un proche est décédé ».'],
    ['L’appel démarre', 'Une personne répond d’abord : ni message enregistré, ni menu.'],
    ['En arrière-plan', 'Position, contrat et dossier envoyés ; rien ne retarde l’appel.'],
    ['Suivi et SMS', 'Le client suit son dossier, même sans l’appli, via un lien SMS.'],
  ];
  const y = 3.0;
  rule(s, M, y, W);
  steps.forEach(([h, b], i) => {
    const x = M + i * (W / 5);
    box(s, x, y - 0.09, 0.18, 0.18, i === 2 ? C.accent1 : C.text1);
    T(s, String(i + 1).padStart(2, '0'), { x, y: y + 0.3, w: 1, h: 0.4, fontSize: 12, bold: true, fontFace: MONO, color: C.accent1 });
    T(s, h, { x, y: y + 0.7, w: W / 5 - 0.25, h: 0.5, fontSize: 18, bold: true });
    T(s, b, { x, y: y + 1.25, w: W / 5 - 0.25, h: 1.9, fontSize: 13, color: C.accent4 });
  });
  label(s, 'Si l’appel échoue : rappel prioritaire, numéros d’urgence locaux hors ligne, SMS', M, 6.4, gw(14), C.accent3);
  s.addNotes('Parcours U02 sur le tableau FigJam. Le GPS, le réseau et le SMS ne bloquent jamais l’appel. Un code invité à 4 chiffres permet à l’agent de retrouver le dossier d’une personne sans compte.');
}

// 9 · Avant / Après (S08 Duo compare)
{
  const s = slide('SWISS_LIGHT', 'Expérience proposée', '08 · Avant · après');
  s.addText('Ce qui change pour le client', { placeholder: 'title', align: 'left' });
  vrule(s, 13.333 / 2, 2.4, 4.1);
  const L = ['Trouver le bon numéro', 'Expliquer où l’on est', 'Attendre sans information', 'Rappeler pour savoir', 'Formulaire libre, sans pièces jointes'];
  const R = ['Un geste sur SOS', 'Position partagée automatiquement', 'Nom, véhicule et heure d’arrivée', 'Statut visible, mises à jour par SMS', 'Réclamation guidée avec photos et suivi'];
  label(s, 'Aujourd’hui', M, 2.45, 5, C.accent4);
  label(s, 'Avec l’application', 13.333 / 2 + 0.4, 2.45, 5, C.accent1);
  L.forEach((t, i) => { T(s, t, { x: M, y: 2.95 + i * 0.68, w: 5.4, h: 0.5, fontSize: 18, color: C.accent4 }); });
  R.forEach((t, i) => { T(s, t, { x: 13.333 / 2 + 0.4, y: 2.95 + i * 0.68, w: 5.6, h: 0.5, fontSize: 18, bold: true }); });
  s.addNotes('La colonne de gauche résume les irritants observés sur les canaux actuels ; la colonne de droite décrit l’expérience proposée. À valider en recherche.');
}

// 10 · Personas (S16 Multi-card brief)
{
  const s = slide('SWISS_LIGHT', 'Expérience proposée', '09 · Pour qui · hypothèses');
  s.addText('Cinq parcours guident la première version', { placeholder: 'title', align: 'left' });
  const p = [
    ['P1', 'Demandeur de visa', 'Une attestation acceptée par le consulat, aujourd’hui, sans faute d’orthographe.'],
    ['P2', 'Famille à l’étranger', 'De l’aide dans une ville inconnue, sans données mobiles.'],
    ['P3', 'Conducteur d’un partenaire', 'En panne la nuit ; ne connaît pas forcément AFA, souvent sans l’appli.'],
    ['P4', 'Adhérent santé', 'Une aide médicale la nuit pour un enfant ou un parent.'],
    ['P5', 'Proche d’un défunt', 'Une personne répond d’abord, un seul interlocuteur, aucune sollicitation.'],
  ];
  p.forEach(([k, h, b], i) => {
    const c = i % 3, r = Math.floor(i / 3);
    const x = gx(c * 5.33), y = 2.45 + r * 2.05, w = gw(5.33) - 0.2;
    box(s, x, y, w, 1.85, i === 2 ? C.accent6 : C.background2);
    label(s, k, x + 0.2, y + 0.18, 1, C.accent1);
    T(s, h, { x: x + 0.2, y: y + 0.5, w: w - 0.4, h: 0.45, fontSize: 17, bold: true });
    T(s, b, { x: x + 0.2, y: y + 0.98, w: w - 0.4, h: 0.8, fontSize: 13, color: C.accent4 });
  });
  const x = gx(10.66), y = 2.45 + 2.05, w = gw(5.33) - 0.2;
  T(s, 'Construits à partir de la recherche documentaire, pas d’entretiens. Le parcours P3 est clé : la plupart utiliseront le téléphone.', { x, y: y + 0.2, w, h: 1.5, fontSize: 13, color: C.accent4, italic: true });
  s.addNotes('Proto-personas : les émotions et besoins sont des hypothèses jusqu’aux entretiens avec de vrais clients. Le parcours du conducteur d’un partenaire est central pour l’échelle : l’expérience doit fonctionner sans l’appli.');
}

// 11 · IA (S13 Three forces)
{
  const s = slide('SWISS_LIGHT', 'Expérience proposée', '10 · L’IA dans l’expérience');
  box(s, M, 0.95, gw(5.5), 5.6, C.text1);
  T(s, 'Une IA qui aide, une personne toujours à portée de main.', { x: M + 0.3, y: 1.25, w: gw(5.5) - 0.6, h: 3.2, fontSize: 28, bold: true, color: 'FFFFFF' });
  T(s, 'Outils d’IA, lieu de traitement des données et autorisations : décisions des équipes IT, juridique et conformité d’AFA.', { x: M + 0.3, y: 5.0, w: gw(5.5) - 0.6, h: 1.3, fontSize: 12, color: 'BDBDB8' });
  const cards = [
    ['PILOTE · V1', 'Poser une question', 'Répond sur la couverture en français ou en arabe et cite sa source. Jamais de conseil médical ni de décision de sinistre.'],
    ['V1', 'Scan du passeport', 'Préremplit noms et dates de l’attestation. Le client vérifie chaque champ avant de payer.'],
    ['CONCEPT · V2', 'Raconter par la voix ou la photo', 'En darija, français ou arabe. Le client confirme, puis un agent vérifie avant toute action.'],
  ];
  cards.forEach(([k, h, b], i) => {
    const y = 0.95 + i * 1.9, x = gx(6.5), w = gw(9.5);
    box(s, x, y, w, 1.7, C.background2);
    label(s, k, x + 0.25, y + 0.18, 3, C.accent1);
    T(s, h, { x: x + 0.25, y: y + 0.5, w: w - 0.5, h: 0.45, fontSize: 18, bold: true });
    T(s, b, { x: x + 0.25, y: y + 0.95, w: w - 0.5, h: 0.7, fontSize: 13, color: C.accent4 });
  });
  s.addNotes('Notre rôle est l’expérience : comment l’assistant se présente, ce qu’il dit quand il n’est pas sûr, et à quel moment une personne prend le relais.');
}

// 12 · Principes (S20 Stacked ledger)
{
  const s = slide('SWISS_LIGHT', 'Expérience proposée', '11 · Principes d’expérience');
  s.addText('Sept règles que chaque écran respecte', { placeholder: 'title', align: 'left' });
  const pr = [
    ['L’appel passe en premier', 'Rien ne retarde le contact avec une personne en urgence.'],
    ['Une personne à un geste', 'Sur chaque écran, y compris l’assistant.'],
    ['Montrer le statut', 'Personne ne devrait rappeler pour savoir où en est l’aide.'],
    ['Des mots simples, en français et en arabe', 'Mise en page de droite à gauche soignée, sans jargon.'],
    ['Fonctionner avec un réseau faible', 'Carte de couverture et numéros d’urgence hors ligne.'],
    ['Accessible à tous', 'WCAG 2.2 AA : grandes cibles, lecteurs d’écran, taille du texte.'],
    ['Respecter les moments difficiles', 'Ni marketing ni notation après un décès ou un refus.'],
  ];
  pr.forEach(([h, b], i) => {
    const y = 2.35 + i * 0.62;
    rule(s, M, y, W, C.accent5);
    T(s, String(i + 1).padStart(2, '0'), { x: M, y: y + 0.12, w: 0.8, h: 0.4, fontSize: 20, bold: true, color: C.accent1 });
    T(s, h, { x: gx(1.5), y: y + 0.15, w: gw(6), h: 0.4, fontSize: 16, bold: true });
    T(s, b, { x: gx(8), y: y + 0.17, w: gw(8), h: 0.4, fontSize: 14, color: C.accent4 });
  });
  rule(s, M, 2.35 + 7 * 0.62, W, C.accent5);
  s.addNotes('Ces principes deviennent les critères d’acceptation de chaque écran et des tests d’utilisabilité.');
}

pres.addSection({ title: 'Portée' });

// 13 · Pour tous (S13 variant: three columns)
{
  const s = slide('SWISS_LIGHT', 'Portée', '12 · Pour qui');
  s.addText('Pensée pour toutes les personnes qu’AFA aide, avec ou sans l’appli', { placeholder: 'title', align: 'left' });
  const cols = [
    ['Dans l’appli AFA', 'Les clients directs d’AFA', 'Voyage et visa, autres clients directs : SOS, suivi, portefeuille, assurance voyage.'],
    ['Par téléphone et SMS', 'Toute personne qui appelle', 'Après l’appel, un lien SMS ouvre le même suivi. Aucune installation nécessaire.'],
    ['Dans les applis partenaires', 'Si AFA le décide', 'Les mêmes étapes d’assistance, sous la marque du partenaire.'],
  ];
  cols.forEach(([k, h, b], i) => {
    const x = gx(i * 5.33), w = gw(5.33) - 0.25;
    box(s, x, 2.6, w, 3.0, i === 1 ? C.accent1 : C.background2);
    const fg = i === 1 ? 'FFFFFF' : C.text1, sub = i === 1 ? 'E3EEF7' : C.accent4;
    label(s, k, x + 0.25, 2.8, w - 0.5, i === 1 ? 'FFFFFF' : C.accent1);
    T(s, h, { x: x + 0.25, y: 3.25, w: w - 0.5, h: 0.8, fontSize: 20, bold: true, color: fg });
    T(s, b, { x: x + 0.25, y: 4.15, w: w - 0.5, h: 1.3, fontSize: 14, color: sub });
  });
  T(s, 'Mêmes étapes, mêmes mots, même suivi, quel que soit le canal. Canaux et partenaires : décision métier d’AFA.', { x: M, y: 5.95, w: gw(16), h: 0.5, fontSize: 14, color: C.accent4 });
  s.addNotes('La plupart des personnes aidées par AFA sont des clients de ses partenaires et ne connaissent pas toujours la marque. L’expérience doit aussi fonctionner pour elles, même par téléphone. La participation des partenaires relève des équipes métier et partenariats d’AFA.');
}

// 14 · Feuille de route (S11 timeline variant)
{
  const s = slide('SWISS_LIGHT', 'Portée', '13 · Feuille de route de l’expérience');
  s.addText('D’un geste à une aide partout', { placeholder: 'title', align: 'left' });
  const ph = [
    ['PREMIÈRE VERSION', 'L’assistance en un geste', 'SOS, assistance routière, suivi · portefeuille et compagnon de voyage · assurance voyage et attestation · assistant (pilote)'],
    ['V2', 'Aide en temps réel et santé', 'Dépanneur sur la carte · téléconsultation, habitation · décès, famille · chat, voix ou photo'],
    ['V3', 'Une aide partout', 'Les mêmes étapes dans les applis partenaires · plus de pays et de langues · ordonnances'],
    ['À EXPLORER', 'Idées à tester', 'Amazigh · accès faible débit pour d’autres marchés · prévention'],
  ];
  rule(s, M, 2.6, W);
  ph.forEach(([k, h, b], i) => {
    const x = gx(i * 4), w = gw(4) - 0.25;
    box(s, x, 2.51, 0.18, 0.18, i === 0 ? C.accent1 : C.text1);
    label(s, k, x, 2.9, w, i === 0 ? C.accent1 : C.accent4);
    T(s, h, { x, y: 3.3, w, h: 0.8, fontSize: 18, bold: true });
    T(s, b, { x, y: 4.15, w, h: 2.0, fontSize: 13, color: C.accent4 });
  });
  T(s, 'Ordre et calendrier à convenir avec AFA après la recherche.', { x: M, y: 6.35, w: gw(12), h: 0.4, fontSize: 12, color: C.accent4 });
  s.addNotes('Chaque étape dépend de décisions d’AFA hors UX : prestataires partageant leur position, partenaire médical, accords partenaires.');
}

pres.addSection({ title: 'Démarche' });

// 15 · Démarche (S02 Vertical timeline)
{
  const s = slide('SWISS_LIGHT', 'Démarche', '14 · Notre démarche avec AFA');
  T(s, 'Rechercher, tester, puis concevoir', { x: M, y: 0.95, w: gw(5.5), h: 2.5, fontSize: 34, bold: true });
  T(s, 'Chaque phase se termine par une validation d’AFA. Rien ne part vers les clients ou les développeurs sans son accord.', { x: M, y: 3.5, w: gw(5), h: 1.4, fontSize: 14, color: C.accent4 });
  const st = [
    ['4–6 SEMAINES', 'Découvrir', 'Entretiens avec des clients, des clients de partenaires et des agents ; analyse des motifs d’appel.', 'AFA valide le brief'],
    ['', 'Définir', 'Parcours et flux validés, wireframes, deux ou trois pistes graphiques.', 'AFA choisit une piste'],
    ['', 'Prototyper et tester', 'Prototype cliquable ; tests d’utilisabilité en français et en arabe, accessibilité comprise.', 'Résultats partagés'],
    ['', 'Concevoir et livrer', 'Écrans finaux, design system et spécifications pour l’équipe de développement.', 'AFA approuve'],
  ];
  const x0 = gx(7);
  vrule(s, x0 + 0.09, 1.05, 5.4, C.accent5);
  st.forEach(([k, h, b, gate], i) => {
    const y = 1.0 + i * 1.4;
    box(s, x0, y + 0.06, 0.18, 0.18, i === 0 ? C.accent1 : C.text1);
    T(s, h, { x: x0 + 0.45, y, w: gw(5), h: 0.4, fontSize: 18, bold: true });
    if (k) label(s, k, x0 + 0.45 + gw(5), y + 0.05, gw(3.5), C.accent4);
    T(s, b, { x: x0 + 0.45, y: y + 0.42, w: gw(8.4), h: 0.5, fontSize: 13, color: C.accent4 });
    label(s, '→ ' + gate, x0 + 0.45, y + 0.95, gw(6.3), C.accent1);
  });
  s.addNotes('Planification du développement, coûts et choix techniques : AFA IT et son partenaire technique. Nous travaillons à leurs côtés.');
}

// 16 · Mesures (S20 ledger with big numbers)
{
  const s = slide('SWISS_LIGHT', 'Démarche', '15 · Comment saurons-nous que ça marche');
  s.addText('Des mesures d’expérience, testées avant et après le lancement', { placeholder: 'title', align: 'left' });
  const ms = [
    ['Réussite des tâches', 'Demander de l’aide, suivre une demande, acheter une couverture sans assistance'],
    ['Temps pour joindre l’aide', 'Secondes entre l’ouverture de l’appli et le début de l’appel'],
    ['Achats menés à terme', 'Part des achats d’assurance voyage terminés une fois commencés'],
    ['« Où en est ma demande ? »', 'Fréquence des appels pour connaître le statut'],
    ['Facilité et confiance', 'Une question courte après chaque demande, jamais après un décès ou un refus'],
    ['Accessibilité', 'Problèmes relevés en test avec lecteur d’écran et grand texte'],
  ];
  ms.forEach(([h, b], i) => {
    const c = i % 2, r = Math.floor(i / 2);
    const x = gx(c * 8), y = 2.5 + r * 1.35, w = gw(8) - 0.3;
    rule(s, x, y, w);
    T(s, h, { x, y: y + 0.15, w, h: 0.45, fontSize: 18, bold: true });
    T(s, b, { x, y: y + 0.62, w, h: 0.6, fontSize: 13, color: C.accent4 });
  });
  T(s, 'Les objectifs chiffrés sont fixés par AFA.', { x: M, y: 6.5, w: gw(10), h: 0.3, fontSize: 12, color: C.accent4 });
  s.addNotes('Nous mesurons réussite et temps en tests d’utilisabilité avant le lancement, puis suivons les mêmes mesures dans l’appli avec AFA.');
}

// 17 · Questions aux équipes (S20 ledger)
{
  const s = slide('SWISS_LIGHT', 'Démarche', '16 · Questions aux équipes AFA');
  s.addText('Ce que nous devons savoir pour bien concevoir', { placeholder: 'title', align: 'left' });
  const q = [
    ['Métier et produit', 'Qui sont les clients, par groupe ? Quels marchés et quelles langues en premier ?'],
    ['Partenaires', 'AFA peut-elle inviter les clients des partenaires dans l’appli ? Comment afficher les marques ?'],
    ['IT', 'Quelles informations de couverture et de demande l’appli peut-elle afficher ? Qu’existe-t-il en ligne aujourd’hui ?'],
    ['Juridique et conformité', 'Quels consentements et quelles formulations pour la vente, les sinistres et l’IA ?'],
    ['Opérations', 'Comment les demandes sont-elles traitées aujourd’hui ? Pouvons-nous passer du temps avec les agents ?'],
    ['Équipe médicale', 'Quelle aide médicale l’appli pourrait-elle proposer plus tard ?'],
  ];
  q.forEach(([h, b], i) => {
    const y = 2.4 + i * 0.68;
    rule(s, M, y, W, C.accent5);
    T(s, h, { x: M, y: y + 0.17, w: gw(4), h: 0.4, fontSize: 15, bold: true, color: C.accent1 });
    T(s, b, { x: gx(4.5), y: y + 0.17, w: gw(11.5), h: 0.45, fontSize: 14 });
  });
  rule(s, M, 2.4 + 6 * 0.68, W, C.accent5);
  s.addNotes('Ce sont des questions, pas des recommandations. Chaque réponse appartient à l’équipe concernée et change ce que nous concevons : nous les posons tôt, en phase de découverte.');
}

// 18 · Prochaines étapes (S09 Closing manifesto)
{
  const s = slide('SWISS_PLAIN', 'Démarche');
  box(s, 0, 0, 13.333 * 6 / 16 + 0.3, 7.5, C.accent1);
  T(s, 'AFRICA FIRST ASSIST · PROPOSITION UX', { x: M, y: 6.95, w: 4.5, h: 0.3, fontFace: MONO, fontSize: 9, color: 'FFFFFF', charSpacing: 1 });
  label(s, '17 · Prochaines étapes', M, 0.5, 4, 'FFFFFF');
  dotMatrix(s, M, 1.0, 10, 4, 0.22, 0.07, 'FFFFFF', (r, c) => (r * 3 + c) % 4 !== 0);
  T(s, 'Ce qu’il nous faut pour démarrer la découverte', { x: M, y: 2.3, w: 4.4, h: 2.6, fontSize: 32, bold: true, color: 'FFFFFF' });
  T(s, 'Ensuite : 4 à 6 semaines de découverte, jusqu’à un brief validé par AFA.', { x: M, y: 5.3, w: 4.2, h: 1.0, fontSize: 14, color: 'FFFFFF' });
  const items = [
    ['01', 'Des clients', 'Accès à des clients récents et à des clients de partenaires pour des entretiens.'],
    ['02', 'Du temps avec les équipes', 'Agents, produit, partenaires : quelques heures chacun.'],
    ['03', 'L’existant', 'Charte graphique, motifs d’appel, retours clients, écrans en ligne actuels.'],
    ['04', 'Des décideurs', 'Une personne par domaine pour valider chaque phase.'],
  ];
  items.forEach(([no, h, b], i) => {
    const x = 5.8, y = 0.95 + i * 1.45, w = 6.9;
    rule(s, x, y, w);
    T(s, no, { x, y: y + 0.15, w: 0.8, h: 0.5, fontSize: 24, bold: true, color: C.accent1 });
    T(s, h, { x: x + 1.0, y: y + 0.18, w: w - 1.0, h: 0.45, fontSize: 18, bold: true });
    T(s, b, { x: x + 1.0, y: y + 0.65, w: w - 1.0, h: 0.6, fontSize: 13, color: C.accent4 });
  });
  s.addNotes('Une demande concrète et dans le périmètre UX : des personnes à interviewer, du temps avec les équipes, l’existant, et qui valide.');
}

// 19 · Annexe
{
  const s = slide('SWISS_LIGHT', 'Démarche', 'Annexe · Livrables UX');
  s.addText('Les livrables UX disponibles', { placeholder: 'title', align: 'left' });
  const a = [
    ['RECHERCHE', ['Ce que nous avons appris sur AFA', 'Revue du site actuel', 'Benchmark de 41 applications']],
    ['PARCOURS', ['Cinq proto-personas et parcours', 'Service blueprint, assistance routière']],
    ['FLUX UX (FIGJAM)', ['Architecture de l’appli', 'Huit parcours du point de vue du client', 'Conventions arabe, de droite à gauche']],
    ['WIREFRAMES (FIGMA)', ['28 écrans en niveaux de gris', 'Kit de composants', 'Notes UX par écran']],
  ];
  a.forEach(([k, list], i) => {
    const x = gx(i * 4), w = gw(4) - 0.25;
    rule(s, x, 2.5, w, C.accent1, 1.5);
    label(s, k, x, 2.7, w, C.accent1);
    T(s, list.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < list.length - 1 } })), { x, y: 3.15, w, h: 2.6, fontSize: 14, paraSpaceAfter: 6 });
  });
  T(s, 'Recherche documentaire de novembre 2026. La recherche avec les clients commence dès qu’AFA valide le brief. Liens Figma et FigJam communiqués par e-mail.', { x: M, y: 6.25, w: gw(16), h: 0.5, fontSize: 12, color: C.accent4 });
  s.addNotes('Les livrables sont envoyés en PDF par e-mail avant la réunion, avec les liens vers les tableaux Figma et FigJam.');
}

(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('written', OUT, n, 'slides');
})();
