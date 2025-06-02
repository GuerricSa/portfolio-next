import React from 'react';
import ContactBannerClient from "./Client";

export default function ContactBanner(): React.ReactElement {
  return (
    <ContactBannerClient
      title="Un projet, une question ?"
      description="Discutons-en ensemble ! Je suis disponible pour échanger par mail ou lors d'un rendez-vous."
    />
  );
}
