// Architecture de la saga — source de vérité unique du site.
//
// Remplace les quatre copies divergentes qui vivaient dans index.astro,
// chantier.astro, saga.astro et tomes/index.astro. Toute correction se fait ici.
//
// Mise à jour du 20 août 2026 :
//   – Le tome III, « Le Zénith », est paru le 19 août 2026 (Amazon, broché + Kindle).
//   – Les onze tomes écrits portent leur titre et leurs bornes réelles, relevées sur
//     les `chapters_meta.py` des manuscrits (13 août 2026), jamais reconstituées.
//   – La découpe en cycles passe de quatre à six. L'ancienne (4 cycles / 12 tomes,
//     dernier cycle « Le Second Empire — de la Deuxième République à Sedan ») était
//     devenue publiquement fausse sur deux points : le roman ne s'arrête plus à Sedan,
//     et le cycle « Restauration » de trois tomes en pesait cinq.
//     Les bornes de chaque cycle sont désormais l'union exacte des bornes des tomes
//     qu'il contient — aucun chiffre affiché n'en contredit un autre.
//
// Mise à jour du 6 novembre 2026 :
//   – Le tome IV, « Le Roi de Rome », paraît en ebook Kindle en février 2027 (pas de
//     broché). Deux champs facultatifs pour un tome à paraître : `parution` (quand) et
//     `format` (sous quelle forme), lus par l'accueil, /tomes et les pastilles du
//     chantier. L'ASIN, le prix et le bouton d'achat viendront avec la mise en ligne.
//
// ⚠️ Les titres des cycles IV, V et VI (« L'Établissement », « La Relève »,
//    « Le Nom hérité ») sont des propositions non arbitrées par François.

export const CYCLES = [
  {
    num: "I",
    titre: "L'Ascension",
    periode: "1793 — 1811",
    accroche: "De la Terreur au baptême du Roi de Rome",
    tomes: "Tomes I à IV",
    count: "4 tomes",
    description: `Le cycle fondateur. Un soir d'hiver 1793, dans une rue de Paris sous
    la Terreur, une jeune aristocrate croise le regard d'un officier républicain lors d'un
    contrôle de papiers. Il pourrait la livrer. Il ne le fait pas. Ce qui se noue ce soir-là
    portera la maison Moreau de Paris à l'Italie, d'Égypte aux salons du Consulat, jusqu'aux
    palais de l'Empire et au berceau du Roi de Rome.`,
  },
  {
    num: "II",
    titre: "La Chute",
    periode: "1812 — 1814",
    accroche: "Du passage du Niémen aux Cosaques rue du Bac",
    tomes: "Tomes V et VI",
    count: "2 tomes",
    description: `Le cycle des grandes catastrophes. Moscou en flammes, la Bérézina, la
    campagne de Saxe, Leipzig, la campagne de France, l'abdication. Pour la maison Moreau,
    trois années où tout ce qui a été bâti pendant vingt ans est mis à l'épreuve — la
    fidélité, le nom, l'honneur militaire — et où chaque survie se paie d'un renoncement.`,
  },
  {
    num: "III",
    titre: "La Restauration",
    periode: "1814 — 1824",
    accroche: "Des Cent-Jours à la mort de Louis XVIII",
    tomes: "Tomes VII et VIII",
    count: "2 tomes",
    description: `Le cycle de l'enracinement. Les Cent-Jours, Waterloo, puis l'année sans
    été : la récolte qui ne vient pas, les greniers qu'on ouvre, la soudure d'un hiver. Sous
    les Bourbons revenus, une maison d'Empire découvre que ce n'est plus la guerre qui fait
    tenir un nom, mais la terre, le blé et les hommes qu'on nourrit.`,
  },
  {
    num: "IV",
    titre: "L'Établissement",
    periode: "1825 — 1847",
    accroche: "Du sacre de Charles X à la fièvre du rail",
    tomes: "Tomes IX à XI",
    count: "3 tomes",
    description: `Le cycle de la deuxième génération. Henri, Éléonore, Charles et Madeleine
    entrent en âge d'agir. Le sacre de Charles X, le choléra, les Trois Glorieuses, puis la
    monarchie de Juillet : l'acier, les maisons de banque, le fer français contre la barre
    anglaise, et le rail qu'on pose. La même question sous des formes neuves — que vaut un
    nom impérial dans un royaume, puis dans un siècle de machines ?`,
  },
  {
    num: "V",
    titre: "La Relève",
    periode: "1848 — 1851",
    accroche: "De Février au 2 décembre",
    tomes: "Tomes XII et XIII",
    count: "2 tomes",
    reste: "un tome encore à écrire",
    description: `La République devant l'homme de 1796. La maison découvre qu'elle
    fonctionne sans son maître, apprend l'influence, et prend le relais avant qu'il ne
    faille le prendre. Le cycle se ferme sur la nuit du 1er au 2 décembre 1851.`,
  },
  {
    num: "VI",
    titre: "Le Nom hérité",
    periode: "1852 — 1874",
    accroche: "De l'Empire du neveu au dernier été",
    tomes: "Tomes XIV et suivants",
    count: "2 à 3 tomes",
    reste: "deux à trois tomes à écrire",
    description: `Le cycle de clôture. La maison après lui : l'acier qui prend le nom, le
    salon d'Éléonore devenu foyer d'opposition, la troisième génération, la Crimée puis la
    guerre. Le nom conquis est devenu le nom hérité — et il faut encore décider ce qu'il
    oblige.`,
  },
];

// Statuts : "disponible" (paru, en vente) · "a-paraitre" (écrit, parution annoncée :
//           champs `parution` et `format`) · "retouches" (écrit, en révision) ·
//           "a-ecrire" (en cours d'écriture)
export const TOMES = [
  {
    num: "I", titre: "La Ruelle", periode: "1793 — 1804", cycle: "L'Ascension",
    statut: "disponible", href: "/tomes/la-ruelle", achat: "I", couverture: "/assets/cover_tome1.jpg", dim: [900, 1141],
    resume: "Sarah de La Roche-Aymon, Julian Moreau, et la naissance d'une maison sous la Révolution, le Consulat et l'Empire naissant.",
  },
  {
    num: "II", titre: "Le Maréchal", periode: "1804 — 1807", cycle: "L'Ascension",
    statut: "disponible", href: "/tomes/le-marechal", achat: "II", couverture: "/assets/cover_tome2.jpg", dim: [900, 1141],
    resume: "1804. L'Empire se couronne. Bataille après bataille — Austerlitz, Iéna, Eylau —, Julian gagne le droit d'exister, jusqu'au bâton de maréchal. Mais la gloire menace le secret que Sarah protège seule.",
  },
  {
    num: "III", titre: "Le Zénith", periode: "1807 — 1809", cycle: "L'Ascension",
    statut: "disponible", href: null, achat: "III", couverture: "/assets/cover_tome3.jpg", dim: [900, 1277],
    resume: "Un duché, un majorat, une succession où le fils entre sans savoir ce qu'il reçoit. C'est le moment où l'Empire découvre qu'il peut perdre — Bailén, Saragosse, le Danube. Au zénith, l'ombre est au plus court.",
  },
  {
    num: "IV", titre: "Le Roi de Rome", periode: "1809 — 1811", cycle: "L'Ascension",
    statut: "a-paraitre", parution: "février 2027", format: "Ebook Kindle",
    href: "/tomes/le-roi-de-rome", achat: null, couverture: "/assets/cover_tome4.jpg", dim: [900, 1275],
    resume: "Le divorce, le mariage autrichien, la naissance de l'héritier. La cour se refait, les places changent de mains, et la fortune des Moreau se met à l'abri.",
  },
  {
    num: "V", titre: "Le Niémen", periode: "1812 — 1814", cycle: "La Chute",
    statut: "retouches", href: null, achat: null, couverture: null, dim: null,
    resume: "Le fleuve qu'on passe deux fois. Borodino, Moscou, la Bérézina, le vingt-neuvième bulletin — puis l'Allemagne, Leipzig, et la campagne de France jusqu'à Saint-Cloud.",
  },
  {
    num: "VI", titre: "La Place", periode: "1814", cycle: "La Chute",
    statut: "retouches", href: null, achat: null, couverture: null, dim: null,
    resume: "Les Cosaques rue du Bac, la Charte, la première Restauration. Ce qu'on perd, ce qu'on reprend, et la place qu'on tient sans la revendiquer.",
  },
  {
    num: "VII", titre: "Les Greniers", periode: "1814 — 1818", cycle: "La Restauration",
    statut: "retouches", href: null, achat: null, couverture: null, dim: null,
    resume: "Les Cent-Jours, puis l'année sans été : la récolte qui ne vient pas, les greniers qu'on ouvre, la soudure d'un hiver. C'est en nourrissant qu'une maison s'enracine.",
  },
  {
    num: "VIII", titre: "Les Sablons", periode: "1818 — 1824", cycle: "La Restauration",
    statut: "retouches", href: null, achat: null, couverture: null, dim: null,
    resume: "Henri entre aux Ponts, le domaine devient une industrie, un fils se marie. Le nom cesse d'être une dette pour devenir un capital.",
  },
  {
    num: "IX", titre: "Le Nom rendu", periode: "1825 — 1835", cycle: "L'Établissement",
    statut: "retouches", href: null, achat: null, couverture: null, dim: null,
    resume: "Le sacre de Charles X, le choléra, les Trois Glorieuses. La deuxième génération prend la maison en main, et le nom qu'on avait payé se voit enfin rendu.",
  },
  {
    num: "X", titre: "Les Feux de Noirlac", periode: "1835 — 1840", cycle: "L'Établissement",
    statut: "retouches", href: null, achat: null, couverture: null, dim: null,
    resume: "L'acier, les maisons de banque, le fer français contre la barre anglaise. Sous la monarchie de Juillet, une famille apprend le siècle des machines.",
  },
  {
    num: "XI", titre: "La Ligne", periode: "1840 — 1847", cycle: "L'Établissement",
    statut: "retouches", href: null, achat: null, couverture: null, dim: null,
    resume: "Le retour des cendres, le rail qu'on pose, la ligne qu'on trace. Trois sens d'un même mot : la voie ferrée, la ligne d'un registre, et la lignée.",
  },
  {
    num: "XII", titre: "(en cours d'écriture)", periode: "1848 —", cycle: "La Relève",
    statut: "a-ecrire", href: null, achat: null, couverture: null, dim: null,
    resume: "Février, puis Juin en miroir de 1834. La maison dans l'effondrement, et la République devant l'homme de 1796.",
  },
];

export const statutLabel = {
  disponible: "Disponible",
  "a-paraitre": "À paraître",
  retouches: "En retouches",
  "a-ecrire": "En cours d'écriture",
};

// Compteurs dérivés — jamais saisis à la main.
export const NB_PARUS = TOMES.filter((t) => t.statut === "disponible").length;
export const NB_ECRITS = TOMES.filter((t) =>
  ["disponible", "a-paraitre", "retouches"].includes(t.statut)
).length;
export const NB_CYCLES = CYCLES.length;

// Pour écrire les compteurs en toutes lettres sans les figer dans une phrase.
const CHIFFRES = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept",
                  "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze",
                  "quinze", "seize"];
export const enLettres = (n) => CHIFFRES[n] ?? String(n);

// État du chantier, à la main — c'est le seul chiffre que le site ne peut pas déduire.
export const DATE_MAJ = "6 novembre 2026";
export const CHAPITRES_ECRITS = 521;
