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

## V2 — 2026-11-18 · 3 directions à concept, desktop seul

**Retour de Gaia sur la V1** : « assez slop IA » — couleurs, motifs et détails pas travaillés, pas d'identité visuelle. Le mobile est inutile : on ne montre un téléphone que si le hackathon le demande.

**Vérification** : le règlement officiel (redditgameofday2026.devpost.com/rules) ne mentionne jamais le mobile. Le « mobile first » venait de nos notes internes (`IDEES.md`). → planches **desktop seul** ; le §6 du brief est annulé sur décision de Gaia.

**Diagnostic de la V1** : même gabarit pour les 3 directions (pile centrée titre / règle / grille / boutons), polices système, boutons pilule, palettes « papier + accent ». Seules les couleurs changeaient.

**Ce qui change en V2**
- Chaque direction part d'un **concept tiré du mot lui-même**, et l'identité en découle : composition, matière, marque, détails.
  - `planches/v2/01-sillon.html` — **Sillon** : « comme tourne le bœuf ». La grille est un champ labouré : un seul sillon rayé qui fait demi-tour au bord. La lecture laisse la trace rouille du soc. Bookman Demi, avoine / terre / rouille `#c2471d`.
  - `planches/v2/02-stele.html` — **Stèle** : l'inscription archaïque rétrograde. Les lignes retour ont **les lettres en miroir** (détail historique réel). Les lettres sont gravées, celles qu'on choisit sont peintes au miltos `#a3341f`. La marque s'écrit elle-même en boustrophédon. P052, calcaire sur mur sombre.
  - `planches/v2/03-ruban.html` — **Ruban** : une bande de papier pliée en accordéon. Les plis montrent le verso, la bande a des perforations et des bords déchirés, la lecture se fait au marqueur `#ffd23f`, la réponse sort sur un ticket déchiré. Nimbus Mono, ardoise.
- **Trois compositions différentes** : bandeau + champ + colonne (Sillon), colonne d'identité + stèle (Stèle), bande pleine largeur + barre (Ruban).
- **Vraies polices embarquées** en base64 : aucune requête réseau.
- **Cadre réaliste** : le post s'ouvre en vue étendue (modale Devvit) au-dessus du feed atténué.
- **États** : vide, mauvaise lecture, mot trouvé. Ils sont rendus en vrai avec la même seed, sous la planche.

**Points à trancher**
- La Stèle avec lettres en miroir change la difficulté : c'est un choix de design, pas seulement de style.
- **Licence des polices** : les URW base35 (Bookman, P052, Nimbus) sont en AGPL avec exception limitée au PostScript/PDF. Elles conviennent pour explorer, mais **pas pour le jeu publié**. Une fois la direction choisie, il faudra un équivalent sous licence OFL (ex. Sillon → une égyptienne ronde type Bookman ; Stèle → une capitale romaine type Cinzel / Marcellus ; Ruban → une mono type Courier Prime).

V1 conservée dans `planches/v1/` pour l'historique.

## V3 — 2026-11-18 · lettrage et dessins faits main en SVG (réf. Don't Look Up + Gapsy)

**Retour de Gaia sur la V2** : encore « slop IA » (matière, couleurs, motifs non travaillés, pas d'identité). Gaia renvoie vers les références de la catégorie jeu du hub (`narratif-jeu`, analysées dans `REFS.md`). Choix des refs : **Don't Look Up + Gapsy**. Décision : les visuels faits main sont dessinés par Claude, en SVG.

**Ce qui change en V3**
- **Un alphabet maison au feutre**, dessiné en SVG : 38 signes (A–Z utiles, chiffres, ponctuation). Le tracé est irrégulier, chaque apparition d'une lettre est légèrement différente (penchée, ondulée), avec des bords « encre » via un filtre. C'est l'identité : la grille, le logo, les chiffres et les boutons utilisent tous ce lettrage.
- **Des dessins faits pour le projet** : une main qui pointe (manche, poing, index), des boucles de feutre qui débordent, des demi-tours fléchés, des bâtonnets de série barrés par cinq, des ratures.
- **Le logo s'écrit en boustrophédon** : BOUSTRO, demi-tour, puis PHEDON à rebours.
- **2 directions au lieu de 3**, pour tenir le niveau de finition. Toutes deux sont dans la même famille de références, avec deux matières opposées :
  - `planches/v3/01-marqueur.html` — **Marqueur** : trait d'encre sur papier `#f4f3ef`, encre `#141414`, crayon `#b9b6ae`, feutre rouge `#e5493a`. Une grande main entre dans le cadre et pointe la dernière lettre lue.
  - `planches/v3/02-relief.html` — **Relief** : lettres en plâtre extrudées (face, tranche, liseré, ombre portée) sur un mur éclairé par trois puits de lumière, parquet au sol. Les lettres choisies sont peintes en terre cuite `#c8553d`. Le mode d'emploi est griffonné au feutre sur le mur. Le mot lu se pose au sol avec son ombre.
- **Texte courant en Ubuntu Sans** : licence Ubuntu Font, embarquable dans le jeu. Le lettrage maison, lui, est du SVG : aucun problème de licence.

**À trancher**
- Le choix de la direction (Marqueur ou Relief), ou un mélange : la matière de Relief avec la main de Marqueur, par exemple.
- **Relief** : coût de rendu (environ 10 couches SVG par lettre), à vérifier sur mobile Reddit si le jeu y tourne.
- La main de Marqueur pointe la dernière lettre lue, jamais la suivante : elle ne doit pas souffler la réponse.

### V3 bis — 2026-11-18 · deux directions de plus pour la page Jeu

Demande de Gaia : « autres directions Jeu ». Même alphabet au feutre, nouvelles matières et nouvelles mises en scène. Les planches 01 et 02 sont reconstruites avec le kit enrichi (rendu identique, filtres corrigés).
- `planches/v3/03-chemin.html` — **Chemin** (réf. Don't Look Up) : la ligne devient une route qui serpente. De petits lecteurs dessinés s'y promènent et commentent le chemin dans des bulles, jamais le mot. Toi, en jaune `#f5c84b`, tu avances de lettre en lettre. Les lettres choisies deviennent des pierres de gué jaunes. Drapeaux START et END.
- `planches/v3/04-tampon.html` — **Tampon** (réf. Gapsy pour la matière) : la page du jour est tamponnée sur du kraft `#d7bf98`, avec un tampon par lettre, un tampon dateur « 09 DEC 2026 » et le logo dans un cadre. L'encre bleu-noir `#283069` est fraîche sur la ligne en cours et sèche ailleurs. Les lettres choisies sont re-tamponnées en rouge `#c7372f`. Grands tampons d'état « TRY AGAIN » et « SOLVED ». La lecture sort sur un ticket dentelé.

Kit SVG ajouté : personnages-haricots (marche, bras levés, casquette ou cheveux), bulles de dialogue, filtre « encre de tampon » (couverture mouchetée et bords mâchés), glyphes F, G, X et apostrophe. Correctif : les filtres travaillent maintenant en coordonnées absolues, car les traits parfaitement verticaux disparaissaient.

## V4 — 2026-11-18 · Chemin retenu, identité jaune / noir / blanc, dessin animé

**Retour de Gaia** : « améliore Chemin », en renforçant l'identité jaune, noir et blanc, les petits personnages, et un style dessin qui s'anime. → `planches/v4/01-chemin.html` (V3 conservée).

**Identité**
- Trois couleurs : blanc papier `#fffdf7`, noir `#151515`, jaune `#ffd23a` ; un seul gris `#7f7c75` pour les lettres au repos.
- La route devient noire, avec des bords tremblés, un marquage blanc en tirets et ta voie marquée en jaune. Les chevrons de sens sont peints sur la chaussée.
- Un grand panneau jaune à bord dessiné, sur la droite, accueille le temps, la série, la lecture et les boutons.
- Le logo est surligné au jaune, avec la signature « A DAILY READING ROAD ».

**Personnages**
- 4 silhouettes (haricot, grand, rond, enfant), des accessoires (béret, casquette, chignon, lunettes, écharpe, sac, livre) et des poses (marche, montre, salue, lit, assis, saute de joie).
- Un contour blanc façon autocollant les rend lisibles sur la route noire comme sur le papier.
- Toi : corps et tête jaunes, béret noir, étiquette YOU. Neuf lecteurs sur les trottoirs et aux virages. Leurs bulles commentent le chemin, jamais le mot.

**Animation (dessin animé à la main)**
- Trait qui bout : le grain du trait change environ 7 fois par seconde (graine du filtre animée). C'est appliqué aux personnages, bulles et drapeaux seulement, pour les performances.
- À l'ouverture : la route apparaît, puis les lettres sortent une à une **dans l'ordre du boustrophédon**, puis les pierres numérotées, puis la foule, puis les bulles.
- En continu : marche à 2 images, rebond, salut, saut de joie à la victoire, bulles qui tanguent, curseur qui clignote.
- Les boutons s'enfoncent au clic. Tout s'arrête si le système demande moins d'animations.

**Correctifs** : placement des personnages tournés vers la gauche (une règle `transform-box` trop large les décalait). La bulle de « toi » ne couvre plus la lettre suivante (elle soufflait la réponse). Les pierres de lecture rétrécissent pour les mots longs.

**À noter pour l'intégration** : le trait qui bout recalcule un filtre SVG en continu. En production, il faudra le limiter aux personnages visibles, ou pré-calculer 3 images par personnage.
