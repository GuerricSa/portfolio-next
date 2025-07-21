import type { Metadata } from "next";
//import Script from "next/script";
import "./globals.css";
import { ContactModalProvider } from 'context/ContactModalContext';
import ClientNavbar from "components/organisms/Navbar/Server";
import Footer from "components/organisms/Footer/Server";
import ScrollToHash from "components/molecules/ScrollToHash";
import ScrollAnimation from "components/molecules/ScrollAnimation";
import PageTransitionWrapper from "components/molecules/PageTransitionWrapper"
import { GoogleTagManager } from '@next/third-parties/google'

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
        {/* <Script id="axeptio-config" strategy="beforeInteractive">
          {`
            window.axeptioSettings = {
              clientId: "687dfe4d02291e882b490289",
              cookiesVersion: "portfolio-fr-EU",
              googleConsentMode: {
                default: {
                  analytics_storage: "granted",
                  ad_storage: "granted",
                  ad_user_data: "granted",
                  ad_personalization: "granted",
                  wait_for_update: 500
                }
              }
            };
          `}
        </Script>
        <Script id="axeptio-sdk" src="//static.axept.io/sdk.js" strategy="beforeInteractive" async /> */}
        <ScrollAnimation />
        <ScrollToHash />
        <ContactModalProvider>
          <ClientNavbar />
          <PageTransitionWrapper>
            {children}
            </PageTransitionWrapper>
          <Footer />
        </ContactModalProvider>
      </body>
      <GoogleTagManager gtmId="GTM-P2FCSLBR" />
    </html>
  );
}
