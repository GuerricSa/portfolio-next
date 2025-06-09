import type { Metadata } from "next";
import "./globals.css";
import { ContactModalProvider } from 'context/ContactModalContext';
import ClientNavbar from "components/organisms/Navbar/Server";
import Footer from "components/organisms/Footer/Server";
import ScrollToHash from "components/molecules/ScrollToHash";
import ScrollAnimation from "components/molecules/ScrollAnimation";

export const metadata: Metadata = {
  title: "Création de site internet – Guerric SANT, développeur web freelance",
  description: "Développeur web freelance à Chambéry, j'aide les entreprises à créer des sites internet performants et sur-mesure avec WordPress, HubSpot CMS et React. Spécialisé en création de sites vitrines, pages de vente et refontes. Disponible en télétravail dans toute la France.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  other: {
    'google-site-verification': 'your-verification-code', // Remplacez par votre code de vérification Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ScrollAnimation />
        <ScrollToHash />
        <ContactModalProvider>
          <ClientNavbar />
            {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
