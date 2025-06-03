import HowItWorks from "components/organisms/HowItWorks/Server";
import ContactBanner from "../components/organisms/ContactBanner/Server";
import HeroSimple from "../components/organisms/HeroSimple";
import SliderLogos from "../components/organisms/SliderLogos/Server";
import HorizontalAccordion from "components/organisms/HorizontalAccordion/Server";

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
