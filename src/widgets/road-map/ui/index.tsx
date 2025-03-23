'use client';

import clsx from 'clsx';

import { BlocksLinks } from '@/shared/model/blocks-links';
import { Flex } from '@/shared/ui/flex';
import { TypingText } from '@/shared/ui/typing-text';
import { useSafeMediaQuery } from '@/shared/lib/hooks/useSeafeMediaQuery';

import { DesktopMap } from './desktop-map';
import { TabletMap } from './tablet-map';
import { PhoneMap } from './phone-map';

export const RoadMap = () => {
  const isDesktop = useSafeMediaQuery('(min-width: 1400px)');
  const isTablet = useSafeMediaQuery('(min-width: 768px) and (max-width: 1399px)');
  const isPhone = useSafeMediaQuery('(max-width: 767px)');

  const wrapperClass = clsx('relative w-full max-w-[768px] items-center', {
    'max-w-[1400px]': isDesktop,
    'max-w-[768px]': isTablet,
    'max-w-[300px]': isPhone,
  });

  return (
    <Flex
      col
      align='center'
      as='section'
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
