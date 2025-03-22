'use client';

import Link from 'next/link';
import pkceChallenge from 'pkce-challenge';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { Play } from '@/shared/assets/icons/play';
import { Button } from '@/shared/ui/button';

export const Login = () => {
  const [authUrl, setAuthUrl] = useState('');

  const initAuthUrl = async () => {
    const { code_challenge, code_verifier } = await pkceChallenge();

    Cookies.set('code_verifier', code_verifier);

    const url = process.env.NEXT_PUBLIC_AUTH_URL;
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL;

    setAuthUrl(
      `${url}?client_id=${clientId}&scope=profile nfts socials.discord socials.twitter wallets&response_type=code&redirect_uri=${redirectUrl}&code_challenge=${code_challenge}&code_challenge_method=S256&state=x1561axa165`,
    );
  };

  useEffect(() => {
    initAuthUrl();
  }, []);

  return (
    <Button as={Link} classNames={{ wrapper: 'h-fit' }} href={authUrl} startContent={<Play />}>
      Cura World
    </Button>
  );
};
