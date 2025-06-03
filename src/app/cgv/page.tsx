import AnchorNText from "components/organisms/AnchorNText/Server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGV | Guerric SANT - Développeur Web Freelance",
  description: "Consultez les conditions générales de vente pour les services de développement web. Informations sur les délais, paiements et garanties.",
  openGraph: {
    title: "CGV | Guerric SANT - Développeur Web Freelance",
    description: "Consultez les conditions générales de vente pour les services de développement web.",
    url: "https://guerric-sant.com/cgv",
    siteName: "Guerric SANT",
    images: [
      {
        url: "https://guerric-sant.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CGV - Guerric SANT - Développeur Web Freelance",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CGV | Guerric SANT - Développeur Web Freelance",
    description: "Consultez les conditions générales de vente pour les services de développement web.",
    images: ["https://guerric-sant.com/og-image.webp"],
  },
};

export default function Estimate() {
  return (
      <AnchorNText />
  )
}
