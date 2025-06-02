import HeroTextNMedia from 'components/organisms/HeroTextNMedia/Server';
import ContactBanner from 'components/organisms/ContactBanner/Server';
import Skills from 'components/organisms/Skills/Server';
import Works from "components/organisms/Works/Server";
import React from 'react';

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
