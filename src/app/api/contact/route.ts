import { NextRequest, NextResponse } from 'next/server';
import { verifyCaptcha } from '../../lib/middlewares/verifyCaptcha';
import { handleContactForm } from '../../lib/controllers/contactControllers';

const allowedOrigins = [
  'http://localhost:3000',
  'https://guerric-sant.com',
  'https://www.guerric-sant.com',
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  if (origin && allowedOrigins.includes(origin)) {
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400',
    };
  }
  return {
    'Access-Control-Allow-Origin': 'null',
    'Access-Control-Allow-Methods': '',
    'Access-Control-Allow-Headers': '',
  };
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin');
  const headers = getCorsHeaders(origin);

  return new NextResponse(null, {
    status: 204,
    headers,
  });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  const headers = getCorsHeaders(origin);

  try {
    const body = await req.json();

    const captchaValid = await verifyCaptcha(body.token);
    if (!captchaValid) {
      return NextResponse.json(
        { error: 'Échec de la vérification Captcha' },
        {
          status: 403,
          headers: {
            ...headers,
            'Content-Type': 'application/json',
          }
        }
      );
    }

    const response = await handleContactForm(body);

    // Créer une nouvelle réponse avec les headers CORS
    return NextResponse.json(
      response,
      {
        status: 200,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        }
      }
    );
  } catch (error) {
    console.error('Erreur dans POST /api/contact:', error);
    return NextResponse.json(
      { error: 'Erreur serveur.' },
      {
        status: 500,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        }
      }
    );
  }
}
