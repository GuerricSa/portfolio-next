'use client'

import React from 'react';
import ContactButton from '../atoms/ContactButton';
import CalendlyButton from '../atoms/CalendlyButton';
import Text from '../atoms/Text';
import { useContactModal } from '../../context/ContactModalContext';

const ContactBanner: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <section
      className="contact-banner py-12 bg-tertiary"
      id='contactBanner'
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Text variant="h2" id="contact-title" className="mb-2">
            Un projet, une question ?
          </Text>
          <Text variant="body" className="text-primary">
            Discutons-en ensemble ! Je suis disponible pour échanger par mail ou lors d&apos;un rendez-vous.
          </Text>
        </div>
        <div
          className="flex gap-4 flex-wrap items-center justify-center mt-4 md:mt-0 flex-row md:flex-col lg:flex-nowrap lg:flex-row"
          role="group"
          aria-label="Options de contact"
        >
          <ContactButton
            onClick={openModal}
            ariaLabel="Ouvrir le formulaire de contact"
          >
            Me contacter
          </ContactButton>
          <CalendlyButton url="https://calendly.com/guerric-sant" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
