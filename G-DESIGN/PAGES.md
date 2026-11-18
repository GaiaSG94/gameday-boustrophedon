# PAGES — Boustrophédon

> Pages déduites de `IDEE.md` (mécanique, boucle quotidienne, carte de fin) et des 4 critères du jury.
> Planches en desktop seul, 1440 × 900 (décision de Gaia du 2026-11-18 : le règlement officiel ne demande pas le mobile).
> Statuts : `à dessiner` · `en revue` · `validée`.
> **Style verrouillé le 2026-11-18 (`/lock`)** : les 4 pages sont validées.

| # | Page | Rôle | Contenu clé | Statut |
|---|------|------|-------------|--------|
| 1 | **Post** | Donner envie de lire depuis le feed (vue inline, `splash.html`) | En-tête du post, nom du jeu, date du jour, une ligne de règle, aperçu de la grille, série du joueur, bouton d'ouverture ; état « déjà lu » (reçu du jour) | **validée** — `planches/v4/02-post.html` |
| 2 | **Jeu** *(page principale)* | Faire comprendre la règle en 5 s et lire la grille (vue étendue, `game.html`) | Grille 4 × 6, tracé qui serpente sous les lignes, ligne active, lettres choisies numérotées, mot en cours, chrono, série, `Clear` / `Read it out`, états : vide · en lecture · mauvaise lecture · mot trouvé | **validée** — `planches/v4/01-chemin.html` |
| 3 | **Carte de fin** | Clore la partie et pousser au commentaire | Mot du jour, temps de lecture, série, rappel « nouvelle page à 00:00 UTC », invitation à commenter en un geste | **validée** — `planches/v4/03-carte-de-fin.html` |
| 4 | **Séries & classement** | Rendre la communauté visible | Série du joueur, scores de la communauté du jour (temps de lecture) | **validée** — `planches/v4/04-series-classement.html` |

## Questions produit (propositions dessinées, validées avec les planches le 2026-11-18)

1. **Classement (page 4)** : `IDEE.md` promet des « community scores », mais le serveur ne stocke aujourd'hui que la série par joueur. Quel score classe-t-on : temps de lecture du jour, longueur de série, ou les deux ? → *Proposition dessinée : deux onglets TODAY (temps) et STREAKS (séries).*
2. **Invitation à commenter (page 3)** : le commentaire pré-rempli contient-il le temps de lecture seul, ou aussi une trace visuelle de la grille (sans spoiler le mot) ? → *Proposition dessinée : temps + série + date, plus un petit dessin de route générique.*
3. **Mauvaise lecture** : le joueur peut-il réessayer sans limite (comportement actuel du code) ? La planche montre l'état actuel : réessai libre.

4. **Données serveur** : le Post (état « lu »), la Carte de fin et le classement supposent de stocker le temps de lecture du jour par joueur et de pouvoir trier les joueurs. Aujourd'hui, seule la série du joueur est stockée.
