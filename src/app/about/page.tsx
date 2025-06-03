import HeroTextNMedia from 'components/organisms/HeroTextNMedia/Server';
import ContactBanner from 'components/organisms/ContactBanner/Server';
import Skills from 'components/organisms/Skills/Server';
import Works from "components/organisms/Works/Server";
import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Guerric SANT - Développeur Web Freelance",
  description: "Découvrez mon parcours, mes compétences et mes réalisations en tant que développeur web freelance à Chambéry. Expert en création de sites internet sur-mesure.",
  openGraph: {
    title: "À propos | Guerric SANT - Développeur Web Freelance",
    description: "Découvrez mon parcours, mes compétences et mes réalisations en tant que développeur web freelance à Chambéry.",
    url: "https://guerric-sant.com/about",
    siteName: "Guerric SANT",
    images: [
      {
        url: "https://guerric-sant.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "À propos de Guerric SANT - Développeur Web Freelance",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos | Guerric SANT - Développeur Web Freelance",
    description: "Découvrez mon parcours, mes compétences et mes réalisations en tant que développeur web freelance à Chambéry.",
    images: ["https://guerric-sant.com/og-image.webp"],
  },
};

export default function APropos() {
  return (
    <>
      <HeroTextNMedia />
      <Skills />
      <Works />
      <ContactBanner />
    </>
  );
}
