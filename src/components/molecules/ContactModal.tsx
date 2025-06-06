'use client'

import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';
import Text from '../atoms/Text';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMsg, setResponseMsg] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableRef.current) {
            e.preventDefault();
            lastFocusableRef.current?.focus();
          }
        } else {
          if (document.activeElement === lastFocusableRef.current) {
            e.preventDefault();
            firstFocusableRef.current?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstFocusableRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setResponseMsg('Veuillez valider le reCAPTCHA.');
      return;
    }

    try {
      const apiUrl = process.env.NODE_ENV === 'development'
        ? '/api/contact'
        : (process.env.NEXT_PUBLIC_BACK_URL || '/api/contact');

      console.log('Envoi de la requête à:', apiUrl);
      console.log('Token reCAPTCHA:', token.substring(0, 10) + '...');

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ ...formData, token }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erreur serveur:', errorData);
        throw new Error(errorData.error || 'Une erreur est survenue');
      }

      const data = await response.json();
      setResponseMsg(data.success || 'Message envoyé avec succès !');
      recaptchaRef.current?.reset();
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        onClose()
      }, 700);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setResponseMsg(error instanceof Error ? error.message : 'Une erreur est survenue.');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      ref={modalRef}
    >
      <div
        className="bg-white p-6 rounded-xl w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
          aria-label="Fermer le formulaire de contact"
          ref={firstFocusableRef}
        >
          ✕
        </button>
        <Text variant="h2" id="contact-modal-title" className="mb-4">
          Me contacter
        </Text>
        <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            label="Votre nom"
            placeholder="Votre nom"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Votre email"
            placeholder="Votre email"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <Textarea
            id="message"
            name="message"
            label="Votre message"
            placeholder="Votre message"
            required
            onChange={handleChange}
            value={formData.message}
          />
          <div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
              ref={recaptchaRef}
              aria-label="Vérification reCAPTCHA"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:text-primary hover:bg-tertiary transition cursor-pointer"
            ref={lastFocusableRef}
          >
            Envoyer
          </button>
          {responseMsg && (
            <p role="status" aria-live="polite" className="mt-2">
              {responseMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
