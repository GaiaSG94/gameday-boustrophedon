# DESIGN — Boustrophédon

> Journal de design. Versions datées, jamais écrasées. Tenu par Claude.

## V1 — 2026-11-18 · exploration de la page principale

**Étape du process** : A (pages) + B (3 directions sur la page `Jeu`). En attente de validation de Gaia.

### Compris du produit
- Puzzle de lecture : un mot est caché dans une grille 4 × 6 et suit le sens du boustrophédon (gauche → droite, puis droite → gauche, ligne après ligne) ; on tape ses lettres dans l'ordre de lecture.
- Une page par jour, même seed pour tout le monde (UTC) ; série par joueur stockée en Redis.
- Post Devvit Web : vue inline dans le feed (`splash.html`) puis vue étendue (`game.html`).

### Livré
- `PAGES.md` — 4 pages : Post, Jeu, Carte de fin, Séries & classement (+ 3 questions produit ouvertes).
- `REFS.md` — Cosmos (typo comme matière, focus par atténuation) ; Mobbin (penser en états et en flux).
- `planches/v1/01-cahier.html` — direction de départ poussée : papier quadrillé, encre `#1f3a93`, mono, tracé d'encre sous les lignes.
- `planches/v1/02-epreuve.html` — direction qui s'écarte : épreuve d'imprimeur, noir + vermillon `#e8452c`, grosses lettres sans, lignes inactives éteintes.
- `planches/v1/03-stele.html` — direction sombre : pierre `#17181a`, tablettes en relief, craie + ocre `#e0a83a`, tracé pointillé.

Chaque planche : desktop 1440 × 900 et mobile 390 × 844 côte à côte, dans le cadre du post, + bande des 4 états (vide, en lecture, mauvaise lecture, mot trouvé). Données de démo = sortie réelle de `generateSnake('2026-12-09')` (mot QUARTZ, qui tourne en bout de ligne).

### Décisions
- Le tracé passe **sous** les lettres, comme une ligne d'écriture, et se retourne en demi-boucle au bord : c'est le seul motif, commun aux 3 directions ; seuls son traitement et la palette changent.
- Chevrons de sens au milieu de chaque ligne ; celui de la ligne active est mis en avant.
- Pas d'emoji : la série est signalée par un petit pictogramme de bâtonnets (tally) dessiné en SVG.
- Le chrome Reddit est volontairement neutre (gris, sans logo) pour ne pas confondre le cadre hôte et le design du jeu.
- Polices : piles système uniquement (aucune requête réseau, conforme CSP Devvit). La police finale embarquée sera choisie après validation du style.

### Hors périmètre (constaté, non modifié)
- Le code actuel insère les lettres du mot en majuscules et le bruit en minuscules (`src/shared/puzzle.ts`). Masqué à l'écran par `uppercase`, mais visible dans le DOM : à corriger côté dev.

### Suite
- Gaia choisit une direction (ou demande des `/variantes`).
- Puis étape C : `STYLE.md` + planches Post, Carte de fin, Séries & classement.
