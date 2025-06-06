export const verifyCaptcha = async (token: string): Promise<boolean> => {
  // En développement, on bypass la vérification
  if (process.env.NODE_ENV === 'development') {
    console.log('Mode développement : bypass de la vérification reCAPTCHA');
    return true;
  }

  if (!token) return false;
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY non définie');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Erreur vérification Captcha :', error);
    return false;
  }
};
