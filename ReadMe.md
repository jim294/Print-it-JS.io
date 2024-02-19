# PrinIt
### OpenClassrooms P5 - Premier pas sur le langage JavaScript

L'objectif du projet a pour objectif de faire découvrir le langage JavaScript pas à pas à travers plusieurs étapes.

Mon site est visible sur : [PrintIt by Jim294](https://jim294.github.io/Print-it-JS.io/)

## Objectifs

1. Mettre à jour le code HTML
2. Ajouter des Event Listeners sur les flèches
3. Ajouter des bullets points au slider
4. Modifier le slide au clic sur le bouton
5. mettre en place le défilement infini sur le carrousel

## Livrables

### Pages à intégrer selon les maquettes

- **Page d’accueil**
- **Pages de menu (x4)**

### Animation

**Boutons**
- Au survol, la couleur de fond des boutons principaux devra légèrement s’éclaircir. L’ombre portée devra également être plus visible.
- À terme, les visiteurs pourront sauvegarder leurs menus préférés. Pour ça, unbouton "J’aime" en forme de cœur est présent sur la maquette. Au clic, il devra se remplir progressivement. Pour cette première version, l’effet peut être apparaître au survol au lieu du clic.

**Page d’accueil**
- Quand l’application aura plus de menus, un “loading spinner” sera nécessaire. Sur cette maquette, nous souhaitons en avoir un aperçu. Il devra apparaître pendant 1 à 3 secondes quand on arrive sur la page d'accueil, couvrir l'intégralité de l'écran, et utiliser les animations CSS (pas de librairie). Le design de ce loader n’est pas défini,toute proposition est donc la bienvenue tant qu’elle est cohérente avec la chartegraphique du site.

**Pages de menu**
- À l’arrivée sur la page, les plats devront apparaître progressivement avec un léger décalage dans le temps. Ils pourront soit apparaître un par un, soit par groupe “Entrée”, “Plat” et “Dessert”. Un exemple de l’effet attendu est fourni.
- Le visiteur peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus. Cela fait apparaître une petite coche à droite du plat. Cette coche devra coulisser dela droite vers la gauche. Pour cette première version, l’effet peut apparaître au survolau lieu du clic. Si l’intitulé du plat est trop long, il devra être rogné avec des points de suspension. Un exemple de l’effet attendu est fourni

## Technologies

**Autorisés:** HTML / CSS / Sass

**Recommandée:** HTML / Sass

**Interdit:** Javascript / Frameworks CSS / Inline CSS

## Notes

**Polices :**
- Logo & titres: Shrikhand
- Texte: Roboto

**Couleurs :**
- Primaire: #9356DC
- Secondaire: #FF79DA
- Tertiaire: #99E2D0
- Principal-background: #EAEAEA
- Main-container: #F6F6F6
- Hard-grey: #353535
- New: #2FAF94

**Contraintes :**
- Approche mobile-first: oui
- Maquette mobile : oui
- Maquette desktop : à improviser
- Validation W3C HTML : à passer, warning autorisés
- Validation W3C CSS : à passer, warning autorisés
- Compatibilité : Dernières versions de Chrome, Firefox & Safari

## Tester le projet

Clonez le projet
```terminal
git clone https://github.com/jim294/OhMyFood.io.git
```
Installez les dépendances
```terminal
npm install
```
Et lancez le serveur !
```terminal
npm start
```
Pour avoir une actualisation Sass Permanente n'oubliez pas
```terminal
npm run sass-actualisation
```
