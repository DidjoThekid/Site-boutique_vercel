# Fork&Rôle

Boutique statique (Next.js + Tailwind CSS) présentant des rôles Discord et
des accès à des dépôts GitHub privés. Le paiement se fait sur **TikTok
Shop** : chaque produit affiche un bouton qui renvoie vers sa fiche produit
sur votre boutique TikTok Shop.

## Pourquoi un simple bouton, et pas un paiement intégré ?

TikTok Shop ne propose pas d'API publique permettant d'intégrer un vrai
module de paiement/checkout sur un site tiers : les achats se finalisent
dans l'application TikTok. Ce projet fait donc le lien — catalogue et
présentation sur votre site, paiement sur TikTok Shop — via un bouton
« Acheter sur TikTok Shop » par produit.

Si vous préférez à terme un vrai paiement sur le site lui-même (carte
bancaire, etc.), Stripe ou PayPal peuvent être ajoutés en complément ; ce
n'est pas inclus ici mais l'architecture (un composant `ProductRow` par
produit) permet de le brancher facilement.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Personnaliser le contenu

- **Produits** : éditez `data/products.ts`. Chaque entrée a un nom, une
  description, un prix et un champ `tiktokUrl`.
- **Liens TikTok Shop** : remplacez la valeur `TIKTOK_SHOP_PLACEHOLDER`
  (ou chaque `tiktokUrl` individuellement) par les vraies URLs de vos
  fiches produits TikTok Shop.
- **Nom, couleurs, textes** : `app/layout.tsx` (métadonnées), `tailwind.config.ts`
  (couleurs), `components/Hero.tsx` (titre et accroche).

## Déployer sur Vercel

**Option 1 — via le site Vercel (le plus simple)**
1. Poussez ce dossier sur un dépôt GitHub (ou GitLab/Bitbucket).
2. Allez sur [vercel.com/new](https://vercel.com/new) et importez le dépôt.
3. Vercel détecte automatiquement Next.js — laissez les réglages par
   défaut et cliquez sur « Deploy ».

**Option 2 — via la CLI Vercel**
```bash
npm i -g vercel
vercel
```
Suivez les invites (première fois : connexion, choix du scope, confirmation
du dossier). Pour mettre en production directement :
```bash
vercel --prod
```

Aucune variable d'environnement n'est requise pour cette version — tout le
contenu est statique.
