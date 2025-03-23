'use client';

import { PropsWithChildren, useState } from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import { Flex } from '@/shared/ui/flex';

export const HeaderLayout = ({ children }: PropsWithChildren) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname === '/auth') return null;

  return (
    <>
      <div
        className={clsx(
          'w-full fixed md:h-24 h-20 transition-all duration-500 top-0 left-0 z-10 bg-gradient-to-b from-black/60 to-transparent',
          {
            'opacity-100': scrolled,
            'opacity-0': !scrolled,
          },
        )}
      />

      <Flex
        as='header'
        className={'sticky top-0 left-0 z-10 md:h-20 h-16 overflow-hidden'}
        justify='center'
      >
        <Flex align='center' className='max-w-[1440px] xl:px-20 md:px-12 px-4' justify='between'>
          {children}
        </Flex>
      </Flex>
    </>
  );
};
