import React from 'react';
import SliderLogosClient from './Client';

const clients = [
  {
    src: '/images/clients_logos/fondation_louis_vuitton.svg',
    alt: 'Logo Fondation Louis Vuitton',
    width: 168,
    height: 9
  },
  {
    src: '/images/clients_logos/raison_home.svg',
    alt: 'Logo Raison Home',
    width: 168,
    height: 36
  },
  {
    src: '/images/clients_logos/la_poste_groupe.svg',
    alt: 'Logo La Poste Groupe',
    width: 71,
    height: 44
  },
  {
    src: '/images/clients_logos/precision_for_medicine.svg',
    alt: 'Logo Precision for Medicine',
    width: 168,
    height: 37
  },
  {
    src: '/images/clients_logos/legalstart.svg',
    alt: 'Logo Legalstart',
    width: 168,
    height: 38
  },
  {
    src: '/images/clients_logos/knauf_industries.webp',
    alt: 'Logo Knauf Industries',
    width: 115,
    height: 20
  },
  {
    src: '/images/clients_logos/piguet_galland.svg',
    alt: 'Logo Piguet Galland',
    width: 168,
    height: 12
  },
  {
    src: '/images/clients_logos/batribox.webp',
    alt: 'Logo Batribox',
    width: 100,
    height: 20
  },
  {
    src: '/images/clients_logos/premium_contact.svg',
    alt: 'Logo Premium Contact',
    width: 168,
    height: 20
  }
];

export default function SliderLogos(): React.ReactElement {
  return < SliderLogosClient title="Ils m'ont fait confiance" clients={clients} />
}
