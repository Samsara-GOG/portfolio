# TP - CV Portfolio

Développeur : **Samsara**, alias *Jérôme Demuynck*  

Date de finalisation du TP : 3 décembre 2020.

Codé d'après ma propre maquette réalisée sur *[Figma](https://www.figma.com/file/B9Z2tWkTF0GyqGcqZewzOJ/Maquette-PopSchool-TP?node-id=0%3A1 " ")*.

Codage du **CV portfolio** avec **HTML / SASS / Bootstrap / Javascript / Node.js** sous **Visual Studio Code**.   
Code source sur **github** et connecté à **netlify** pour le déploiement, avec renvoi de nom de domaine réservé personnel vers [netlify](https://www.netlify.com/ "the fastest way to build the fastest sites") pour la gestion (temporaire) du formulaire (https://www.samsara.live/portfolio/ => https://samsara-portfolio.netlify.app/)

* Cahier des charges : 
  * Responsive ET Mobile First
  * Utilisation de Bootstrap pour la navbar et le grid
  * Application de la méthodologie BEM pour l'organisation du code SASS
  * Dossier SCSS avec architecture (dossier layout, components, _base.scss, main.scss, etc.)
  * Développement avec un script npm fonctionnel pour dev et prod sous Node.js
    * node-sass pour compiler les fichiers .scss en .css
    * librairie JavaScript [PostCSS](https://github.com/postcss/postcss "PostCSS is a tool for transforming styles with JS plugins.") pour optimiser la feuille de style avec les plugins [normalize.css](https://github.com/necolas/normalize.css/ "A modern alternative to CSS resets") et [Autoprefixer](https://github.com/postcss/autoprefixer "Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you. ") pour assurer la compatibilité entre tous les navigateurs avec le code CSS moderne; [Purgecss](https://github.com/FullHuman/purgecss "It removes unused selectors from your css, resulting in smaller css files.") pour nettoyer le CSS inutile; et [Cssnano](https://github.com/cssnano/cssnano "cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem") afin d'assurer la minification et l'optimisation du fichier CSS pour gagner en performances lors du chargement de la page sur le navigateur   
    
  * Compatible W3C (validation HTML/CSS via [w3.org](https://www.w3.org/ "The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the Web."))
  * Respect des critères SEO : inscription Google Search Console; titres avec les bons mots clés; meta-description attractive; respect de la hiérarchie des titres; un seul titre H1
  * Projet de site déposé sur git et déployé sur hébergeur / [netlify](https://www.netlify.com/ "the fastest way to build the fastest sites")
