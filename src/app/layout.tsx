import type { Metadata } from "next";
import "./globals.css";
import { ContactModalProvider } from '../context/ContactModalContext';
import ClientNavbar from "../components/organisms/Navbar/Server";
import Footer from "components/organisms/Footer/Server";

export const metadata: Metadata = {
  title: "Création de site internet – Guerric SANT, développeur web freelance",
  description: "Développeur web freelance à Chambéry, j'aide les entreprises à créer des sites internet performants et sur-mesure avec WordPress, HubSpot CMS et React. Spécialisé en création de sites vitrines, pages de vente et refontes. Disponible en télétravail dans toute la France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="preload"
          href="/fonts/WorkSans-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/AtkinsonHyperlegible-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`antialiased`}
      >
        <ContactModalProvider>
          <ClientNavbar />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
