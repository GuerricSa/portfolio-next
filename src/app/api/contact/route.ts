import { NextRequest, NextResponse } from 'next/server';
import { verifyCaptcha } from '../../lib/middlewares/verifyCaptcha';
import { handleContactForm } from '../../lib/controllers/contactControllers';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const captchaValid = await verifyCaptcha(body.token);
  if (!captchaValid) {
    return NextResponse.json({ error: 'Échec de la vérification Captcha' }, { status: 403 });
  }

  return handleContactForm(body);
}
