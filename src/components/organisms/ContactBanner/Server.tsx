import React from 'react';
import ContactBannerClient from "./Client";

export default function ContactBanner(): React.ReactElement {
  return (
    <ContactBannerClient
      title="Un projet en tête ?"
      description="Discutons-en ! Je suis disponible par mail ou sur rendez-vous Calendly :"
    />
  );
}
