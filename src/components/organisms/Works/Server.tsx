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
    technologies: ["Wordpress", "Elementor", "WooCommerce", "React", "PHP"]
  },
  {
    id: 2,
    columnNumber: 1,
    title: "Piguet Galland",
    subtitle: "",
    image: "/images/works_homepage/piguetGalland.webp",
    link: "https://www.piguetgalland.ch/",
    client: "Piguet Galland",
    technologies: ["Hubspot", "JS", "chart.js", "Hubl"]
  },
  {
    id: 3,
    columnNumber: 2,
    title: "Portfolio",
    subtitle: "",
    image: "/images/works_homepage/portfolio.webp",
    link: "/",
    client: "Portfolio",
    technologies: ["Next", "Tailwind", "node.js", "Atomic design"]
  },
  {
    id: 4,
    columnNumber: 2,
    title: "Precision for Medicine",
    subtitle: "",
    image: "/images/works_homepage/PFM.webp",
    link: "https://www.precisionformedicine.com/",
    client: "Precision for Medicine",
    technologies: ["Hubspot", "JS", "Hubl"]
  },
  {
    id: 5,
    columnNumber: 2,
    title: "Legalstart",
    subtitle: "Support + mini-sites",
    image: "/images/works_homepage/legalstart.webp",
    link: "https://www.legalstart.fr/",
    client: "Piguet Galland",
    technologies: ["Hubspot", "JS", "Hubl"]
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
    subtitle: "blog",
    image: "/images/works_homepage/upply.webp",
    link: "https://www.upply.com/fr/blog",
    client: "Piguet Galland",
    technologies: ["Hubspot", "JS", "Hubl"]
  }
];

export default function Works(): React.ReactElement {
  return <WorksClient works={works} />
}
