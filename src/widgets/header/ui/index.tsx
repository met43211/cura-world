import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/shared/assets/logo.png';
import { Login } from '@/features/login';

import { navLinks } from '../config/nav-links';

import { HeaderLayout } from './header-layout';

export const Header = () => {
  return (
    <HeaderLayout>
      <Link href={'#hero'}>
        <Image alt='logo' src={Logo} width={108} />
      </Link>
      <nav className='md:flex justify-self-center hidden gap-6'>
        {navLinks.map(({ href, title }) => (
          <Link key={href} className='hover:opacity-50 transition-opacity' href={`#${href}`}>
            {title}
          </Link>
        ))}
      </nav>
      <Login />
    </HeaderLayout>
  );
};
