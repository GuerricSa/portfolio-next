import Calculator from "components/organisms/Calculator/Server";
import ContactBanner from "components/organisms/ContactBanner/Server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devis | Guerric SANT - Développeur Web Freelance",
  description: "Obtenez un devis personnalisé pour votre projet web. Création de site internet, refonte, développement sur-mesure. Réponse sous 24h.",
  openGraph: {
    title: "Devis | Guerric SANT - Développeur Web Freelance",
    description: "Obtenez un devis personnalisé pour votre projet web. Création de site internet, refonte, développement sur-mesure.",
    url: "https://guerric-sant.com/estimate",
    siteName: "Guerric SANT",
    images: [
      {
        url: "https://guerric-sant.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Devis - Guerric SANT - Développeur Web Freelance",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devis | Guerric SANT - Développeur Web Freelance",
    description: "Obtenez un devis personnalisé pour votre projet web. Création de site internet, refonte, développement sur-mesure.",
    images: ["https://guerric-sant.com/og-image.webp"],
  },
};

export default function Estimate() {
  return (
    <>
      <Calculator />
      <ContactBanner />
    </>
  )
}
