import HowItWorks from "components/organisms/HowItWorks/Server";
import ContactBanner from "../components/organisms/ContactBanner/Server";
import HeroSimple from "../components/organisms/HeroSimple";
import SliderLogos from "../components/organisms/SliderLogos/Server";
import HorizontalAccordion from "components/organisms/HorizontalAccordion/Server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil | Guerric SANT - Développeur Web Freelance",
  description: "Développeur web freelance à Chambéry, spécialisé dans la création de sites internet performants et sur-mesure. Expert en WordPress, HubSpot CMS et React.",
  openGraph: {
    title: "Guerric SANT - Développeur Web Freelance",
    description: "Développeur web freelance à Chambéry, spécialisé dans la création de sites internet performants et sur-mesure.",
    url: "https://guerric-sant.com",
    siteName: "Guerric SANT",
    images: [
      {
        url: "https://guerric-sant.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Guerric SANT - Développeur Web Freelance",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guerric SANT - Développeur Web Freelance",
    description: "Développeur web freelance à Chambéry, spécialisé dans la création de sites internet performants et sur-mesure.",
    images: ["https://guerric-sant.com/og-image.webp"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSimple calendlyUrl="https://calendly.com/guerric-sant" calendlyStyle="tertiary" />
      <SliderLogos/>
      <HowItWorks />
      <HorizontalAccordion />
      <ContactBanner />
    </>
  )}
