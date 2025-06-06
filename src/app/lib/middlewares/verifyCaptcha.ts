export const verifyCaptcha = async (token: string): Promise<boolean> => {
  // En développement, on bypass la vérification
  if (process.env.NODE_ENV === 'development') {
    console.log('Mode développement : bypass de la vérification reCAPTCHA');
    return true;
  }

  if (!token) {
    console.error('Token reCAPTCHA manquant');
    return false;
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY non définie');
    return false;
  }

  if (!siteKey) {
    console.error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY non définie');
    return false;
  }

  // Vérification que les clés sont différentes
  if (secret === siteKey) {
    console.error('ERREUR: Les clés reCAPTCHA sont identiques. Veuillez utiliser des clés différentes pour la clé de site et la clé secrète.');
    return false;
  }

  try {
    console.log('Tentative de vérification reCAPTCHA...');
    console.log('Site Key:', siteKey.substring(0, 5) + '...');
    console.log('Token:', token.substring(0, 10) + '...');

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await response.json();
    console.log('Réponse reCAPTCHA complète:', data);

    if (!data.success) {
      console.error('Erreurs reCAPTCHA:', data['error-codes']);
      if (data['error-codes']?.includes('invalid-input-secret')) {
        console.error('La clé secrète reCAPTCHA est invalide');
      }
      if (data['error-codes']?.includes('invalid-input-response')) {
        console.error('Le token reCAPTCHA est invalide');
      }
    }

    return data.success;
  } catch (error) {
    console.error('Erreur vérification Captcha :', error);
    return false;
  }
};
