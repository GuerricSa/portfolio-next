'use client'

import React from 'react';
import ContactButton from '../../atoms/ContactButton';
import CalendlyButton from '../../atoms/CalendlyButton/Server';
import Text from '../../atoms/Text';
import { useContactModal } from '../../../context/ContactModalContext';

interface ContactBannerClientProps {
  title: string;
  description: string;
}

const ContactBannerClient: React.FC<ContactBannerClientProps> = ({title, description}) => {
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
            {title}
          </Text>
          <Text variant="body" className="text-primary">
            {description}
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

export default ContactBannerClient;
