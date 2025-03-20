'use client';

import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';

import { BlocksLinks } from '@/shared/model/blocks-links';
import { Flex } from '@/shared/ui/flex';
import { TypingText } from '@/shared/ui/typing-text';

import { DesktopMap } from './desktop-map';
import { TabletMap } from './tablet-map';
import { PhoneMap } from './phone-map';

export const RoadMap = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 870px) and (max-width: 1399px)' });
  const isPhone = useMediaQuery({ query: '(max-width: 870px)' });

  const wrapperClass = clsx('relative w-full max-w-[768px] items-center', {
    'max-w-[1400px]': isDesktop,
    'max-w-[768px]': isTablet,
    'max-w-[300px]': isPhone,
  });

  return (
    <Flex
      col
      align='center'
      className='py-12 md:py-24 md:gap-16 gap-8 mb-16'
      id={BlocksLinks.ROADMAP}
    >
      <TypingText text='RoadMap' />
      <Flex col className={wrapperClass}>
        {isDesktop && <DesktopMap />}
        {isTablet && <TabletMap />}
        {isPhone && <PhoneMap />}
      </Flex>
    </Flex>
  );
};
