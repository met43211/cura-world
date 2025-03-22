import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { code_verifier, code } = await req.json();

    if (code && code_verifier) {
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code as string,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL as string,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
        code_verifier: code_verifier,
      });

      const { access_token, refresh_token } = await fetch('https://api.matrica.io/oauth2/token', {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then((res) => res.json());

      return NextResponse.json({ access_token, refresh_token }, { status: 200 });
    }
  } catch (error) {
    console.error('Error during POST request:', error);

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
