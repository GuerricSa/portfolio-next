import ClientNavbar from "@/components/organisms/ClientNavbar";
import ContactBanner from "@/components/organisms/ContactBanner";
import HeroTextNMedia from "@/components/organisms/HeroTextNMedia";
import Skills from "@/components/organisms/Skills";
import { ContactModalProvider } from '@/context/ContactModalContext';


export default function Home() {
  return (
    <>
      <ContactModalProvider>
        <ClientNavbar />
        <HeroTextNMedia />
        <Skills />
        <ContactBanner />
      </ContactModalProvider>
    </>
  )}
