import Link from 'next/link';

import { Play } from '@/shared/assets/icons/play';
import { Button } from '@/shared/ui/button';

export const Login = () => {
  const url = process.env.AUTH_URL;
  const clientId = process.env.CLIENT_ID;
  const redirectUrl = process.env.REDIRECT_URL;

  const authUrl = `${url}?client_id=${clientId}&scope=profile&response_type=code&redirect_uri=${redirectUrl}&code_challenge=q1512316q&code_challenge_method=S256&state=x1561axa165`;

  return (
    <Button as={Link} classNames={{ wrapper: 'h-fit' }} href={authUrl} startContent={<Play />}>
      Cura World
    </Button>
  );
};
