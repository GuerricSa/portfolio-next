import React from 'react';
import WorksClient from './Client';

const works = [
  {
    id: 1,
    columnNumber: 1,
    title: "Knauf Industries",
    subtitle: "",
    image: "/images/works_homepage/knauf.webp",
    link: "https://www.knauf-industries.com/",
    client: "Knauf Industries",
    technologies: ["Wordpress", "Elementor", "WooCommerce", "React", "PHP"],
    context: "En tant qu'intégrateur web, j’ai participé à la création d’un site vitrine WordPress pour Knauf Industries, filiale internationale du groupe Knauf. Le projet s’appuyait sur WooCommerce et Elementor, avec pour objectif de proposer une expérience moderne, cohérente avec les standards graphiques du groupe, tout en valorisant son expertise industrielle.",
    keyAchievements: [
      "<strong>Site multilingue et scalable</strong><br />Le site s’adresse à un public international, avec une structure pensée pour être facilement déclinable dans plusieurs langues. Elementor a été utilisé pour offrir une grande souplesse éditoriale, tout en garantissant une cohérence visuelle sur l’ensemble du site.",
      "<strong>Harmonisation design / identité de marque</strong><br />L’un des enjeux principaux a été d’adapter des maquettes modernes en respectant une charte graphique établie au niveau du groupe. Le résultat : un design sobre, professionnel et actuel, utilisant des images industrielles, une mise en page aérée et des animations discrètes.",
      "<strong>Parcours produit fluide via WooCommerce</strong><br />Même s’il ne s’agit pas d’un e-commerce traditionnel, WooCommerce a été utilisé pour structurer un catalogue produit clair et hiérarchisé. L’expérience de navigation a été pensée pour les utilisateurs B2B, avec un tunnel d’information lisible, structuré et orienté conversion.",
      "<strong>Stack technique maîtrisé</strong><ul><li>WordPress + Elementor pour la flexibilité et la simplicité de mise à jour.</li><li>WooCommerce pour l’architecture produit.</li><li>Intégration de Google Analytics.</li><li>Pas de surcharge technique : un code propre, rapide à charger, facile à maintenir.</li></ul>",
      "<strong>Optimisation des performances, du SEO et de l’accessibilité</strong><br />Le site a fait l’objet d’un travail de fond sur :<ul><li>la performance (optimisation des images, structure légère, navigation fluide),</li><li>le référencement (balises sémantiques, titres hiérarchisés, maillage interne),</li><li>l’accessibilité (contrastes, lisibilité, navigation claire).</li>"
    ],
    skills: [
      "Transformer des maquettes exigeantes en pages web performantes et conformes aux standards du web.",
      "M’adapter à une charte visuelle stricte tout en apportant une touche de modernité.",
      "Gérer un catalogue produit dans un contexte B2B avec WooCommerce.",
      "Travailler dans une logique de performance, de référencement naturel et d’accessibilité."
    ]
  },
  {
    id: 2,
    columnNumber: 1,
    title: "Piguet Galland",
    subtitle: "",
    image: "/images/works_homepage/piguetGalland.webp",
    link: "https://www.piguetgalland.ch/",
    client: "Piguet Galland",
    technologies: ["Hubspot", "JS", "chart.js", "Hubl"],
    context: "Dans le cadre du rebranding de la banque privée Piguet Galland, j’ai participé à l’intégration de leur nouveau site vitrine sur le CMS HubSpot. L’objectif : traduire une identité visuelle haut de gamme à travers un design immersif et moderne, tout en respectant des contraintes fortes en matière de SEO, de conformité et de performance. Ce projet marque également le début d’une collaboration continue sur la durée.",
    keyAchievements: [
      "<strong>Design haut de gamme et animations organiques</strong><br />Le site se distingue par un univers graphique très soigné : formes fluides en SVG, animations au scroll, transitions douces et micro‑interactions. L’intégration a nécessité un travail minutieux pour restituer fidèlement ce design sur tous les supports, en garantissant fluidité et performance.",
      "<strong>Structure modulaire avec HubSpot CMS</strong><br />L’architecture repose sur des modules sur mesure en Hubl, permettant à l’équipe marketing de gérer facilement les contenus. Des scripts JavaScript ont été intégrés pour enrichir l’expérience utilisateur (animations, composants dynamiques, interactivité).",
      "<strong>Affichage de données dynamiques</strong><br />Utilisation de chart.js pour visualiser les performances de portefeuilles ou les taux d’intérêt, avec une intégration optimisée pour rester cohérente avec le design global du site.",
      "<strong>Optimisation SEO et accessibilité</strong><br />Le site a été structuré avec soin pour respecter les standards du SEO : balises sémantiques bien hiérarchisées, contenu textuel riche, temps de chargement rapide et expérience mobile optimale. Les règles d’accessibilité (contrastes, navigation, lisibilité) ont également été prises en compte.",
      "<strong>Accompagnement continu</strong><br />Je continue aujourd’hui d’intervenir régulièrement sur le site pour intégrer de nouveaux contenus, apporter des ajustements techniques ou répondre à des besoins spécifiques du client."
    ],
    skills: [
      "Traduire un design premium et complexe en pages web fluides, responsives et performantes.",
      "Maîtriser le CMS HubSpot et son langage Hubl pour créer des modules personnalisés.",
      "Intégrer des composants interactifs avec JavaScript et chart.js dans un cadre corporate.",
      "Optimiser structure, SEO et accessibilité pour un site conforme aux standards du secteur bancaire.",
      "Assurer une relation de long terme avec un client exigeant via un suivi technique régulier."
    ]
  },
  {
    id: 3,
    columnNumber: 2,
    title: "Portfolio",
    subtitle: "",
    image: "/images/works_homepage/portfolio.webp",
    link: "/",
    client: "Portfolio",
    technologies: ["Next", "Tailwind", "node.js", "Atomic design"],
    context: "Ce portfolio a été conçu comme un véritable terrain d’expérimentation, mais aussi comme un outil professionnel pour présenter mes offres, mes réalisations et ma méthode de travail. Il s’appuie sur une architecture moderne avec Next.js, Tailwind CSS et des composants organisés en atomic design. L’objectif était double : garantir un code propre, évolutif, et proposer une expérience fluide, interactive et cohérente avec mes valeurs d’accompagnement sur-mesure.",
    keyAchievements: [
      "<strong>Architecture solide avec Next.js</strong><br />Le site repose sur Next.js, avec un découpage clair des pages, des routes dynamiques, une gestion d’API routes (formulaire de contact, envoi d’emails sécurisé avec reCAPTCHA V3) et un code backend déployé sur Vercel.",
      "<strong>Design responsive et composants modulaires</strong><br />J’ai structuré l’interface avec Tailwind CSS et une approche atomic design, pour garantir cohérence, maintenabilité et facilité d’évolution. Le site est 100% responsive, pensé mobile-first, et chaque section est animée de façon fluide via Framer Motion ou GSAP.",
      "<strong>Formulaire de contact intelligent</strong><br />Le formulaire est protégé par reCAPTCHA V3, utilise une API Node.js (via API Routes Next) pour l’envoi d’emails, et s’intègre dans une modal accessible. Il comprend également une estimation de devis dynamique en plusieurs étapes avec animations interactives.",
      "<strong>Expérience utilisateur pensée pour convaincre</strong><br />L’arborescence, le wording, les CTA et les pages “offres” ont été conçus pour cibler efficacement mes trois personas principaux (indépendants, dirigeants PME, responsables marketing), avec un ton à la fois professionnel, concret et rassurant.",
      "<strong>Performance, SEO et accessibilité</strong><br />Le site a été optimisé sur tous les aspects : chargement rapide, lazy loading, SEO on-page (balises, titres, structure HTML), et accessibilité (contrastes, navigation clavier, lisibilité sur tous les écrans)."
    ],
    skills: [
      "Développer un site Next.js structuré autour d’une architecture modulaire, scalable et professionnelle.",
      "Concevoir une interface cohérente en atomic design avec Tailwind CSS et animations (Framer Motion, GSAP).",
      "Mettre en place un back-end léger avec Node/API Routes pour la gestion sécurisée des formulaires.",
      "Structurer le contenu et le design en pensant au référencement, à l’expérience utilisateur et à la conversion.",
      "Porter un regard critique sur mes propres besoins pour créer un site aligné avec mon positionnement freelance."
    ]
  },
  {
    id: 4,
    columnNumber: 2,
    title: "Precision for Medicine",
    subtitle: "",
    image: "/images/works_homepage/PFM.webp",
    link: "https://www.precisionformedicine.com/",
    client: "Precision for Medicine",
    technologies: ["Hubspot", "Hubl", "JavaScript", "GSAP"],
    context: "Le projet Precision for Medicine consistait à refondre intégralement un site web d’envergure sur le CMS HubSpot, avec plusieurs centaines de pages à intégrer, et près d’un millier en incluant le blog recréé pour l’occasion. Nous étions une équipe de 3 à 5 développeurs mobilisés sur plusieurs mois pour mener à bien ce chantier ambitieux.",
    keyAchievements: [
      "<strong>Structuration rigoureuse pour un site à forte volumétrie</strong><br />Templates, modules personnalisés et architecture CMS pensée pour gérer efficacement un contenu dense tout en restant facile à maintenir. L’arborescence a été optimisée pour faciliter la navigation entre les nombreuses sections.",
      "<strong>Performance et accessibilité</strong><br />Chaque page a été intégrée avec attention pour garantir des temps de chargement rapides, une navigation fluide, et un respect des bonnes pratiques d’accessibilité.",
      "<strong>Optimisation SEO dans un contexte international</strong><br />Structuration sémantique, hiérarchie claire des titres, maillage interne pertinent… autant d’éléments pensés pour améliorer le positionnement du site sur les moteurs de recherche.",
      "<strong>Collaboration client fluide et continue</strong><br />Des échanges réguliers avec l’équipe marketing de Precision for Medicine ont permis de prioriser les tâches, valider les choix techniques, et ajuster rapidement les contenus et les modules selon les besoins.",
      "<strong>Intégration de modules avancés</strong><br />Certaines pages incluent des composants dynamiques ou interactifs (graphes, formulaires à logique conditionnelle, landing pages thématiques) développés sur mesure pour répondre à des besoins spécifiques."
    ],
    skills: [
      "Structurer un projet web ambitieux sur HubSpot CMS avec un gros volume de contenu.",
      "Gérer l’intégration d’un blog de plusieurs centaines d’articles sans perte de performance.",
      "Collaborer efficacement avec un client international et des équipes pluridisciplinaires.",
      "Optimiser la performance et le SEO dans un contexte de refonte complète.",
      "Développer des modules avancés en Hubl et JavaScript pour HubSpot."
    ]
  },
  {
    id: 5,
    columnNumber: 2,
    title: "Legalstart",
    subtitle: "Support, accompagnement & mini-sites",
    image: "/images/works_homepage/legalstart.webp",
    link: "https://www.legalstart.fr/",
    client: "Legalstart",
    technologies: ["Hubspot", "Hubl", "JavaScript", "GSAP", "Lottie"],
    context: "Dans le cadre du rebranding complet de Legalstart, j’ai co-développé en binôme leur nouveau site vitrine sur le CMS HubSpot. Le projet couvrait un périmètre fonctionnel étendu, avec de nombreux modules personnalisés et pages à livrer dans un délai serré.",
    keyAchievements: [
      "<strong>Gestion d’un périmètre fonctionnel large</strong><br />Création et intégration de modules sur mesure, sections variées, tout en respectant un planning très contraint.",
      "<strong>Optimisation SEO et performance</strong><br />Focus sur une structure sémantique solide, optimisation des temps de chargement, lazy loading des images et scripts asynchrones pour garantir rapidité et référencement naturel dans un contexte concurrentiel.",
      "<strong>Animations et expériences interactives</strong><br />Intégration d’animations avancées avec GSAP et Lottie, permettant d’enrichir l’expérience utilisateur sans compromettre la performance.",
      "<strong>Mini-sites satellites</strong><br />Développement et maintenance de plusieurs mini-sites autonomes autour de la marque Legalstart, témoignant d’une collaboration de confiance et d’une gestion technique agile.",
      "<strong>Collaboration en équipe</strong><br />Travail en binôme pour assurer qualité et respect des délais, avec une communication constante et des itérations régulières."
    ],
    skills: [
      "Gérer un projet complexe avec un large périmètre fonctionnel sur HubSpot CMS.",
      "Maintenir un équilibre entre animations riches et performance optimale.",
      "Mettre en œuvre une stratégie SEO technique robuste dans un secteur concurrentiel.",
      "Travailler en collaboration étroite en binôme et accompagner le client sur du long terme.",
      "Développer et maintenir des mini-sites satellites intégrés à l’écosystème principal."
    ]
  },
  {
    id: 6,
    columnNumber: 3,
    title: "Raison Home",
    subtitle: "Refonte partielle",
    image: "/images/works_homepage/raisonHome.webp",
    link: "https://www.raisonhome.com/fr/",
    client: "Raison Home",
    technologies: ["Hubspot", "JS", "Hubl"]
  },
  {
    id: 7,
    columnNumber: 3,
    title: "Batribox",
    subtitle: "",
    image: "/images/works_homepage/batribox.webp",
    link: "https://www.batribox.fr/",
    client: "Piguet Galland",
    technologies: ["Hubspot", "JS", "Hubl"]
  },
  {
    id: 8,
    columnNumber: 3,
    title: "Premium Contact",
    subtitle: "",
    image: "/images/works_homepage/premiumContact.webp",
    link: "https://premiumcontact.fr/",
    client: "Piguet Galland",
    technologies: ["Hubspot", "JS", "Hubl"]
  },
  {
    id: 9,
    columnNumber: 3,
    title: "Upply",
    subtitle: "Blog",
    image: "/images/works_homepage/upply.webp",
    link: "https://www.upply.com/fr/blog",
    client: "Upply",
    technologies: ["Hubspot", "Hubl", "JS"],
    context: "Pour Upply, j’ai été en charge du développement de leur blog sur le CMS HubSpot. L’objectif était de concevoir un template d’article flexible, personnalisable et rapide à déployer, répondant à des besoins éditoriaux variés dans un délai très serré.",
    keyAchievements: [
      "<strong>Template d’article modulaire et flexible</strong><br />Le template permet d’intégrer divers types de contenus : blocs de citation, médias, tableaux, encarts spécifiques, tout en conservant une cohérence visuelle forte.",
      "<strong>Facilité d’utilisation pour les équipes marketing</strong><br />La structure modulaire du template offre un équilibre entre personnalisation avancée et simplicité d’édition, facilitant la création de contenus sans complexité technique.",
      "<strong>Optimisation SEO et performance</strong><br />Le blog a été développé avec une attention particulière à la structure sémantique, à la rapidité de chargement et à la lisibilité, garantissant une bonne visibilité sur les moteurs de recherche.",
      "<strong>Livraison rapide</strong><br />Le projet a été mené en un temps record, démontrant une maîtrise technique et organisationnelle dans un contexte exigeant."
    ],
    skills: [
      "Concevoir des templates HubSpot modulaires et faciles à maintenir.",
      "Allier flexibilité éditoriale et performance technique.",
      "Optimiser le SEO et la structure sémantique des contenus.",
      "Travailler efficacement dans des délais courts en respectant la qualité."
    ]
  }

];

export default function Works(): React.ReactElement {
  return <WorksClient works={works} />
}
