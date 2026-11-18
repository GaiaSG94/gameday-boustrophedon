# PAGES — Boustrophédon

> Pages déduites de `IDEE.md` (mécanique, boucle quotidienne, carte de fin) et des 4 critères du jury.
> Chaque planche montre deux cadres : 1440 × 900 (desktop) et 390 × 844 (mobile, contexte réel d'un post Reddit).
> Statuts : `à dessiner` · `en revue` · `validée`.

| # | Page | Rôle | Contenu clé | Statut |
|---|------|------|-------------|--------|
| 1 | **Post** | Donner envie de lire depuis le feed (vue inline, `splash.html`) | En-tête du post, nom du jeu, date du jour, une ligne de règle, aperçu de la grille, série du joueur, bouton d'ouverture | à dessiner |
| 2 | **Jeu** *(page principale)* | Faire comprendre la règle en 5 s et lire la grille (vue étendue, `game.html`) | Grille 4 × 6, tracé qui serpente sous les lignes, ligne active, lettres choisies numérotées, mot en cours, chrono, série, `Clear` / `Read it out`, états : vide · en lecture · mauvaise lecture · mot trouvé | **en revue** (3 directions, v1) |
| 3 | **Carte de fin** | Clore la partie et pousser au commentaire | Mot du jour, temps de lecture, série, rappel « nouvelle page à 00:00 UTC », invitation à commenter en un geste | à dessiner |
| 4 | **Séries & classement** | Rendre la communauté visible | Série du joueur, scores de la communauté du jour (temps de lecture) | à dessiner |

## Questions produit ouvertes (non tranchées, à valider par Gaia)

1. **Classement (page 4)** : `IDEE.md` promet des « community scores », mais le serveur ne stocke aujourd'hui que la série par joueur. Quel score classe-t-on : temps de lecture du jour, longueur de série, ou les deux ?
2. **Invitation à commenter (page 3)** : le commentaire pré-rempli contient-il le temps de lecture seul, ou aussi une trace visuelle de la grille (sans spoiler le mot) ?
3. **Mauvaise lecture** : le joueur peut-il réessayer sans limite (comportement actuel du code) ? La planche montre l'état actuel : réessai libre.
