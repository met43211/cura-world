'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const auth = async (code: string, code_verifier: string) => {
    try {
      const { access_token, refresh_token } = await fetch(
        `${process.env.NEXT_PUBLIC_SELF_URL}api/auth`,
        {
          method: 'POST',
          body: JSON.stringify({ code, code_verifier }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).then((res) => res.json());

      if (access_token && refresh_token) {
        const searchParams = new URLSearchParams({ access_token, refresh_token });

        router.replace(`${process.env.NEXT_PUBLIC_GAME_TOKENS_URL}?${searchParams.toString()}`);
      } else {
        throw new Error();
      }
    } catch (error) {
      alert('Server error, please try again');
      console.log(error);
      router.replace('/');
    }
  };

  useEffect(() => {
    const code_verifier = Cookies.get('code_verifier');
    const code = searchParams.get('code');

    if (code && code_verifier) {
      auth(code, code_verifier);
    }
  }, []);

  return <div className='absolute left-1/2 -translate-x-1/2 top-24'>Loading... Please wait</div>;
};
