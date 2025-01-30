'use client';

import { PropsWithChildren, useState } from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';

import { Flex } from '@/shared/ui/flex';

export const HeaderLayout = ({ children }: PropsWithChildren) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={clsx(
          'w-full fixed h-24 transition-all duration-500 top-0 left-0 z-10 bg-gradient-to-b from-black/60 to-transparent',
          {
            'opacity-100': scrolled,
            'opacity-0': !scrolled,
          },
        )}
      />

      <Flex className={clsx('sticky top-0 left-0 z-10 h-20 overflow-hidden')} justify='center'>
        <Flex align='center' className='max-w-[1440px] xl:px-20 md:px-12' justify='between'>
          {children}
        </Flex>
      </Flex>
    </>
  );
};
