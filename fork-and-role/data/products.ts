export type Category = "discord" | "github";

export interface Product {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: string;
  /**
   * Lien vers la fiche produit sur TikTok Shop.
   * Remplacez ces valeurs par les vraies URLs de vos fiches produits
   * une fois votre boutique TikTok Shop configurée.
   */
  tiktokUrl: string;
}

const TIKTOK_SHOP_PLACEHOLDER = "https://shop.tiktok.com/view/product/REMPLACEZ_MOI";

export const products: Product[] = [
  {
    id: "role-fondateur",
    category: "discord",
    name: "Rôle Fondateur",
    description:
      "Accès aux salons privés, priorité sur le support et badge distinctif sur le serveur.",
    price: "4,99 € / mois",
    tiktokUrl: TIKTOK_SHOP_PLACEHOLDER,
  },
  {
    id: "role-contributeur",
    category: "discord",
    name: "Rôle Contributeur Vérifié",
    description:
      "Badge coloré, accès au salon beta-testeurs et droit de vote sur les prochaines fonctionnalités.",
    price: "2,99 € / mois",
    tiktokUrl: TIKTOK_SHOP_PLACEHOLDER,
  },
  {
    id: "role-mecene",
    category: "discord",
    name: "Rôle Mécène",
    description:
      "Accès vocal prioritaire, salon dédié et mention permanente dans le canal des remerciements.",
    price: "9,99 € / mois",
    tiktokUrl: TIKTOK_SHOP_PLACEHOLDER,
  },
  {
    id: "repo-saas-starter",
    category: "github",
    name: "Starter Kit SaaS — Next.js + Stripe",
    description:
      "Accès au dépôt privé complet : authentification, facturation et tableau de bord prêts à l'emploi.",
    price: "39 €",
    tiktokUrl: TIKTOK_SHOP_PLACEHOLDER,
  },
  {
    id: "repo-discord-bot",
    category: "github",
    name: "Bot Discord modulaire — TypeScript",
    description:
      "Architecture de commandes et d'événements prête à étendre, avec base de données incluse.",
    price: "29 €",
    tiktokUrl: TIKTOK_SHOP_PLACEHOLDER,
  },
  {
    id: "repo-admin-dashboard",
    category: "github",
    name: "Dashboard Admin — React + Tailwind",
    description:
      "Licence d'utilisation complète pour un tableau de bord d'administration personnalisable.",
    price: "49 €",
    tiktokUrl: TIKTOK_SHOP_PLACEHOLDER,
  },
];
