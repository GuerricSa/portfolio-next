import ClientNavbar from "@/components/organisms/ClientNavbar";
import ContactBanner from "@/components/organisms/ContactBanner";
import HeroTextNMedia from "@/components/organisms/HeroTextNMedia";
import Offers from "@/components/organisms/Offers";
import Skills from "@/components/organisms/Skills";
import Works from "@/components/organisms/Works";
import { ContactModalProvider } from '@/context/ContactModalContext';


export default function Home() {
  return (
    <>
      <ContactModalProvider>
        <ClientNavbar />
        <HeroTextNMedia />
        <Skills />
        <Offers />
        <Works />
        <ContactBanner />
      </ContactModalProvider>
    </>
  )}
