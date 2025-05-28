import HowItWorks from "components/organisms/HowItWorks/Client";
import ClientNavbar from "../components/organisms/ClientNavbar";
import ContactBanner from "../components/organisms/ContactBanner";
import HeroSimple from "../components/organisms/HeroSimple";
import Offers from "../components/organisms/Offers";
import Skills from "../components/organisms/Skills";
import SliderLogos from "../components/organisms/SliderLogos";
import Works from "../components/organisms/Works";
import { ContactModalProvider } from '../context/ContactModalContext';

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
  }
];


export default function Home() {
  return (
    <>
      <ContactModalProvider>
        <ClientNavbar />
        <HeroSimple calendlyUrl="https://calendly.com/guerric-sant" calendlyStyle="tertiary" />
        <SliderLogos logos={clients} title="Ils m'ont fait confiance"/>
        <Skills />
        <Offers />
        <HowItWorks />
        <Works />
        <ContactBanner />
      </ContactModalProvider>
    </>
  )}
