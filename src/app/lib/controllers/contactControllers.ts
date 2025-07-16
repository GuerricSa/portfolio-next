import { sendEmail } from '../utils/mailer';
import { NextResponse } from 'next/server';
import { ContactFormData } from '../../types/contact';

export const handleContactForm = async (body: ContactFormData) => {
  const { name, email, message, answers, description } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
  }

  try {
    await sendEmail({ name, email, message, answers, description });
    return NextResponse.json({ success: 'Message bien reçu !' }, { status: 200 });
  } catch (error) {
    console.error('Erreur d’envoi :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
};
