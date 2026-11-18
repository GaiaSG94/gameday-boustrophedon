# REFS — Boustrophédon

> Principes seulement : aucun layout, texte, asset, police ou marque repris.
> Références ouvertes le 2026-11-18 dans le navigateur avant d'être citées.

## 1. Cosmos — cosmos.so

**Ce que j'ai vu** : fond blanc cassé chaud, encre presque noire, titres sans-serif très gros et serrés ; navigation et listes où seul l'élément actif est en pleine encre, les autres passent en gris clair ; une seule touche de couleur, qui vient du contenu, jamais de l'interface.

**Ce que j'en retiens**
- **La typo est la matière** : la lettre n'est pas posée dans une case, elle *est* l'objet. → grandes lettres, peu de cadres.
- **Le focus par atténuation** : la ligne active en pleine encre, le reste en retrait. C'est exactement le geste de lecture d'un boustrophédon (une ligne à la fois). → direction 02 en fait son principe, les deux autres l'utilisent plus doucement.
- **Une grille qu'on sent sans la voir** : alignements stricts, gouttières régulières, beaucoup d'air.

## 2. Mobbin — mobbin.com

**Ce que j'ai vu** : la page n'a chargé qu'en partie (feuilles de style absentes dans le navigateur de travail) ; j'ai lu son contenu texte. Le site classe les interfaces par **flux** et par **écrans** (onboarding, paywall, états d'éléments) plutôt que par app.

**Ce que j'en retiens**
- **Penser en états, pas en écran unique** : chaque planche montre la page principale dans ses états réels — vide, en lecture, mauvaise lecture, mot trouvé — sur une bande en bas de planche.
- **Progression lisible** : le joueur doit toujours savoir où il en est (lettres choisies numérotées, mot en cours, ligne active).
- **Fin de partie comme transition** : l'état « mot trouvé » mène à la carte de fin, il ne la remplace pas.

> À revoir au prochain passage : rouvrir Mobbin avec un navigateur qui charge les styles pour vérifier le traitement visuel (densité, mouvement), pas seulement la structure.

---

## V2 — 2026-11-18 · catégorie `narratif-jeu` (base REFERENCES-DESIGN.md du hub, 10 refs)

Captures lues depuis `REFERENCES-CAPTURES/narratif-jeu/` (GitHub, `main`). Les couleurs sont relevées au pixel sur les captures.

### Ce que les 10 refs ont en commun (et que les planches V1/V2 n'avaient pas)
1. **Un objet héros fait main ou rendu** : illustration, lettres en relief, rendu 3D. Jamais une forme dessinée en CSS. L'identité vient d'un *asset*, pas d'une mise en page.
2. **Une typo d'affichage qui a une voix** : lettrage dessiné (Don't Look Up, avec des yeux dans les O), capitales en volume avec ombre portée (Gapsy), condensée très grasse (Matchball). Ce n'est pas une police de texte agrandie.
3. **Une lumière dirigée** : ombres portées nettes, lumière qui vient d'un côté (Gapsy, Raben Rifaie). Pas d'ombres floues génériques.
4. **Un fond neutre et un seul accent** : l'objet ou le lettrage porte toute la couleur.
5. **Des boutons au caractère du lettrage** : bords épais, ombre décalée pleine (Don't Look Up), pas de pilule standard.

### Fiche par ref

| Ref | Matière / technique | Palette relevée | Typo | Coût de reproduction | Pour Boustrophédon |
|---|---|---|---|---|---|
| **Don't Look Up (jeu)** | Illustration au trait monochrome, petits personnages avec bulles, grand objet coupé par le cadre | fond `#f4f3ef`, encre `#111`, gris `#545553` | Lettrage main très gras (police du jeu distribuée, « Marsipan ») | **Faible** : SVG au trait + une police | **Oui** : c'est un vrai jeu web, ton léger, lisible en 5 s |
| **Gapsy Studio** | Lettres en volume dans une pièce éclairée, ombres portées, griffonnages main par-dessus | lettres `#c16153`, murs `#a8a6a7`, sol bois `#9c8974` | Condensée capitale en relief + écriture manuscrite | **Moyen** : un fond pré-rendu + relief CSS | **Oui** : les lettres deviennent des *objets*, ce qui est exactement le sujet du jeu |
| **Gemeos** | Stickers illustrés à contour blanc, fond grain crème | fond `#f6f4eb`, texte `#55576a` + couleurs pastel des stickers | Display très grasse, arrondie | Faible si les stickers existent | Partiel : le ton « sticker » est générique (template d'agence) |
| **Matchball** (quiz) | Objets réalistes alignés, ombres au sol | blanc / noir | Condensée noire géante | Moyen (images) | Partiel : une collection d'objets, un grand titre condensé |
| **Raben Rifaie** | Rendu 3D doux : fenêtre sur un paysage, lumière chaude | sable `#ab9d8a`, crème `#edeceb` | Serif italique + linéale | Élevé (rendu 3D) | L'idée « fenêtre sur un champ » rejoint Sillon, mais l'image doit être produite |
| Dairy Food Bulgaria | Diorama 3D flottant | ciel, vert | Linéale | Élevé | Non (marketing) |
| Memory Quest | Borne d'arcade 3D néon | noir, magenta, bleu | Pixel | Élevé | Non : référence arcade trop proche du « jeu rétro » générique |
| Funtech | Scène 3D néon, personnage | multicolore | — | Très élevé | Non (budget) |
| Merci Studio | Dégradé + arches 3D | corail, vert | Display ronde | Moyen | Non : le dégradé est interdit par le brief |
| Sponge | Créature 3D, brume | brun-rouge | Linéale | Élevé | Non (hors sujet) |

### Recommandation : 2 refs de la même famille
**Don't Look Up + Gapsy.** Elles partagent les mêmes tokens : fond neutre clair, encre noire, un seul accent chaud, une typo d'affichage qui est une image, des ajouts faits main par-dessus.
- De Don't Look Up : le trait illustré, le lettrage dessiné, les boutons épais à ombre pleine, l'humour discret.
- De Gapsy : les lettres comme objets posés dans la lumière, avec une vraie ombre portée.

### Ce que ça implique (honnêtement)
Ces identités reposent sur des **assets faits pour le projet**, au minimum un logo-lettrage et une illustration. Une planche 100 % code (V1, V2) ne peut pas y arriver. Il faut donc décider qui produit ces assets avant la V3.
