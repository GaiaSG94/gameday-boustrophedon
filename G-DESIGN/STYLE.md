# STYLE — Boustrophédon · « Chemin »

> Style validé par Gaia le 2026-11-18, sur la planche `planches/v4/01-chemin.html`.
> Toutes les pages le déclinent strictement. Références : Don't Look Up (trait, personnages), Gapsy (objets, annotations).

## 1. Idée
La phrase du jour est une **route noire qui serpente** sur du papier blanc. Une petite foule de lecteurs dessinés vit autour. Le joueur, en jaune, marche sur la route de lettre en lettre. Tout est dessiné à la main et bouge comme un dessin animé.

## 2. Palette (3 couleurs + 1 gris)
| Rôle | Hex | Usage |
|---|---|---|
| Blanc papier | `#fffdf7` | fond, corps des lecteurs, bulles, lettres actives sur la route |
| Noir | `#151515` | route, encre, contours, texte, bouton principal |
| Jaune | `#ffd23a` | **le joueur** (personnage, pierres, voie en cours), panneau, logo surligné, libellé du bouton principal |
| Gris | `#7f7c75` | lettres au repos, chevrons au repos (seule nuance autorisée) |

Règles : jamais de dégradé, jamais une 4e couleur. Le jaune désigne toujours « toi » ou une action ; il n'est jamais décoratif ailleurs.

## 3. Typographie
- **Lettrage maison au feutre** (SVG, `hand.js`) : lettres de la grille, logo, chiffres, boutons, bulles, étiquettes dessinées. Trait irrégulier, chaque apparition est légèrement différente (penchée, ondulée). Épaisseur = 17 à 23 % de la hauteur de capitale.
- **Ubuntu Sans** (licence Ubuntu Font, embarquable) : phrases (règle, messages), étiquettes en capitales espacées.
- Échelle :
  - 11 px : étiquettes en capitales, graisse 800, interlettrage 0,18 em ;
  - 13 à 15 px : messages ;
  - 17 px : règle ;
  - lettrage de 10 à 12 px : bulles ;
  - lettrage de 17 px : boutons ;
  - lettrage de 34 à 40 px : logo, chiffres ;
  - lettres de grille à 56 % de la case.

## 4. Grille et cadre
- Vue étendue **1120 × 756**. La zone de jeu va de 0 à 780 px ; le **panneau jaune** va de 780 à 1120 px, avec un bord gauche dessiné (vague).
- Marges de 40 px. Panneau : contenu de 808 à 1080 px, boutons en bas.
- Route de jeu : case de 66 px, espace de 22 px. Virages en demi-cercle de rayon (case + espace) / 2. La route déborde de 30 px avant la première lettre.
- Vue inline (feed) : même logique en réduction (case de 40 px), avec le panneau en bas ou à droite selon le format.

## 5. Composants
- **Route** : ruban noir aux bords tremblés, tirets blancs à 7 px du bord ; la voie en cours a des tirets jaunes plus épais. Des chevrons de sens sont peints au centre de chaque ligne.
- **Lettres** : blanches sur la ligne en cours, grises au repos, noires dans les pierres.
- **Pierre** (lettre choisie) : boucle de feutre fermée, remplie de jaune, contour noir, avec une pastille blanche numérotée (ordre de lecture).
- **Lecteurs** :
  - 4 silhouettes : haricot, grand, rond, enfant ;
  - accessoires : béret, casquette, chignon, lunettes, écharpe, sac, livre ;
  - poses : debout, marche, montre, salue, lit, assis, saute ;
  - contour blanc façon autocollant et ombre au sol ;
  - **toi** : corps et tête jaunes, béret noir, étiquette YOU.
- **Bulles** : blanches à contour noir et queue vers la bouche. Elles commentent le chemin, **jamais le mot ni sa position**.
- **Drapeaux** : START (jaune) et END (blanc).
- **Série** : bâtonnets barrés par cinq, plus « N-day streak ».
- **Boutons** : 62 px de haut, contour de 3 px, rayon 18 px, ombre pleine décalée de 4 × 5 px.
  - Principal : fond noir, libellé jaune.
  - Secondaire : fond blanc, libellé noir.
  - Au clic, le bouton s'enfonce.
- **Logo** : BOUSTRO, demi-tour, puis PHEDON à rebours, surligné au jaune, avec la signature « A DAILY READING ROAD ».

## 6. Mouvement
- **Trait qui bout** : le grain du filtre change environ 7 fois par seconde (valeurs 2, 9, 17, 5 sur 0,56 s). Il ne s'applique qu'aux personnages, bulles et drapeaux.
- **Entrée** :
  1. la route apparaît en fondu (0 à 0,5 s) ;
  2. les lettres sortent une à une **dans l'ordre du boustrophédon** (45 ms par lettre) ;
  3. les pierres et leurs numéros apparaissent ;
  4. la foule surgit, puis les bulles.
- **Boucles continues** :
  - marche à 2 images (0,44 s) ;
  - rebond (0,5 à 1,4 s, déphasé par personnage) ;
  - salut ;
  - saut à la victoire ;
  - bulles qui tanguent (± 1,6°, par paliers) ;
  - curseur qui clignote.
- L'animation est par paliers (`steps`) quand c'est du dessin, et avec un rebond élastique quand quelque chose apparaît.
- Avec `prefers-reduced-motion`, tout est figé à l'état final.

## 7. États
| État | Route | Toi | Foule | Panneau |
|---|---|---|---|---|
| Vide | ligne 1 active | au départ, salue, « LET'S READ » | attend | « Tap a letter to take your first step », boutons inactifs |
| En lecture | ligne de la dernière lettre active | marche sur la route, « HMM? » | commente le chemin | pierres de lecture, curseur |
| Mauvaise lecture | pierres blanches | « BACKWARDS? » | — | message d'erreur sans révéler le mot |
| Mot trouvé | lettres hors mot en gris | saute, crie le mot | tout le monde saute | « SEE YOUR CARD » |
| Déjà lu aujourd'hui (feed) | route fermée, ton mot en pierres | assis, satisfait | — | temps, série, compte à rebours |

## 8. Interdits propres au style
- Pas d'emoji, pas de Snoo, pas de karma, pas de logo tiers.
- Un personnage ne montre jamais du doigt la prochaine lettre du mot.
- Pas de texte en lettrage maison sous 9 px.
