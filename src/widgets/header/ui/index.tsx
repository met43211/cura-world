import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/shared/assets/logo.png';
import { Button } from '@/shared/ui/button';
import { Play } from '@/shared/assets/icons/play';

import { navLinks } from '../config/nav-links';

import { HeaderLayout } from './header-layout';

export const Header = () => {
  const authUrl = process.env.AUTH_URL || '';

  return (
    <HeaderLayout>
      <Link href={'#hero'}>
        <Image alt='logo' src={Logo} width={108} />
      </Link>
      <div className='md:flex justify-self-center hidden gap-6'>
        {navLinks.map(({ href, title }) => (
          <Link key={href} className='hover:opacity-50 transition-opacity' href={`#${href}`}>
            {title}
          </Link>
        ))}
      </div>
      <Button as={Link} classNames={{ wrapper: 'h-fit' }} href={authUrl} startContent={<Play />}>
        Cura World
      </Button>
    </HeaderLayout>
  );
};
