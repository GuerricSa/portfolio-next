// lib/middlewares/verifyCaptcha.ts
export const verifyCaptcha = async (token: string): Promise<boolean> => {
  if (!token) return false;

  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY!;
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
