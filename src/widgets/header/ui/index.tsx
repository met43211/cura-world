import Image from 'next/image';
import Link from 'next/link';

import { Flex } from '@/shared/ui/flex';
import { AdaptiveLayout } from '@/shared/ui/layouts/adaptive-layout';
import Logo from '@/shared/assets/logo.png';
import { Button } from '@/shared/ui/button';
import { Play } from '@/shared/assets/icons/play';

import { navLinks } from '../config/nav-links';

export const Header = () => {
  const authUrl = process.env.AUTH_URL as string;

  return (
    <Flex className='fixed top-0 left-0'>
      <AdaptiveLayout>
        <Flex align='center' justify='between'>
          <Link href={'#hero'}>
            <Image alt='logo' src={Logo} width={108} />
          </Link>
          <Flex className='justify-self-center' gap={6} width='fit'>
            {navLinks.map(({ href, title }) => (
              <Link key={href} className='hover:opacity-50 transition-opacity' href={href}>
                {title}
              </Link>
            ))}
          </Flex>
          <Button as={Link} href={authUrl} startContent={<Play />}>
            Cura World
          </Button>
        </Flex>
      </AdaptiveLayout>
    </Flex>
  );
};
