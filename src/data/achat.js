// Liens d'achat — source de vérité unique du site.
//
// Depuis le 13 août 2026, la vente passe par Amazon (KDP) et non plus par
// TheBookEdition. Chaque tome existe en deux formats ; les fiches broché et Kindle
// sont associées sur Amazon, donc la page broché affiche déjà le sélecteur des deux.
// On expose malgré tout les deux liens pour que le lecteur choisisse d'emblée.
//
// ⚠️ Les ASIN sont relevés sur les fiches Amazon elles-mêmes, jamais reconstitués.

export const ACHAT = {
  I: {
    broche: "https://www.amazon.fr/dp/B0HDJLF3X2",
    kindle: "https://www.amazon.fr/dp/B0HDYCJ4S5",
    prixBroche: "26,90 €",
    prixKindle: "4,99 €",
    isbn: "979-10-986797-0-4",
    pages: 744,
  },
  II: {
    broche: "https://www.amazon.fr/dp/B0HDJWYBWG",
    kindle: "https://www.amazon.fr/dp/B0HDYL8X84",
    prixBroche: "26,90 €",
    prixKindle: "7,99 €",
    isbn: "979-10-986797-1-1",
    pages: 749,
  },
  // Paru le 19 août 2026.
  III: {
    broche: "https://www.amazon.fr/dp/B0HFSFB6P4",
    kindle: "https://www.amazon.fr/dp/B0GX34JS2M",
    prixBroche: "26,90 €",
    prixKindle: "7,99 €",
    isbn: "979-10-986797-2-8",
    pages: 650,
  },
};

// Compatibilité : lien principal d'un tome (la page broché montre les deux formats).
export const ACHAT_TOME1 = ACHAT.I.broche;
export const ACHAT_TOME2 = ACHAT.II.broche;
export const ACHAT_TOME3 = ACHAT.III.broche;
