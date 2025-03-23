'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import { Play } from '@/shared/assets/icons/play';
import { Button } from '@/shared/ui/button';
import { generatePKCE } from '@/shared/lib/generate-PKCE ';

export const Login = () => {
  const router = useRouter();

  const handleClick = async () => {
    const { code_challenge, code_verifier } = await generatePKCE();

    Cookies.set('code_verifier', code_verifier);

    const url = process.env.NEXT_PUBLIC_AUTH_URL;
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const redirectUrl = process.env.NEXT_PUBLIC_REDIRECT_URL;

    const authUrl = `${url}?client_id=${clientId}&scope=profile nfts socials.discord socials.twitter wallets&response_type=code&redirect_uri=${redirectUrl}&code_challenge=${code_challenge}&code_challenge_method=S256&state=x1561axa165`;

    router.push(authUrl);
  };

  return (
    <Button classNames={{ wrapper: 'h-fit' }} startContent={<Play />} onClick={handleClick}>
      Cura World
    </Button>
  );
};
