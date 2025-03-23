'use client';

import Image from 'next/image';

import { Flex } from '@/shared/ui/flex';
import { TypingText } from '@/shared/ui/typing-text';
import AboutGIF from '@/shared/assets/about.gif';
import { BlocksLinks } from '@/shared/model/blocks-links';

export const About = () => {
  return (
    <Flex align='center' className='py-24' id={BlocksLinks.ABOUT}>
      <Image
        unoptimized
        alt='about gif'
        className='rounded-pixel-xl aspect-2/3 w-1/2 hidden lg:block'
        src={AboutGIF}
      />
      <Flex
        col
        className='ml-0 lg:ml-10 items-center lg:items-start text-center lg:text-start md:gap-4 gap-2'
      >
        <TypingText text='About' />
        <p className='text-xs sm:text-base'>
          Cura is a 1/1 community, designed to evolve and create value for its holders. Each
          inscription is handcrafted and animated, giving the collection its uniqueness and
          recognisability. An additional utillity is our game, in which you will be able to mine
          various prizes (whitelists, airdrops and ordinals of other projects)
        </p>
      </Flex>
    </Flex>
  );
};
