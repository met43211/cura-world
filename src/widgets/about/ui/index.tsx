'use client';

import Image from 'next/image';

import { Flex } from '@/shared/ui/flex';
import { TypingText } from '@/shared/ui/typing-text';
import AboutGIF from '@/shared/assets/about.gif';

export const About = () => {
  return (
    <Flex align='center' className='mt-80'>
      <Image alt='about gif' className='rounded-pixel-xl aspect-2/3' src={AboutGIF} />
      <Flex col className='ml-10'>
        <TypingText text='About' />
        <p>
          Cura is a 1/1 community, designed to evolve and create value for its holders. Each
          inscription is handcrafted and animated, giving the collection its uniqueness and
          recognisability. An additional utillity is our game, in which you will be able to mine
          various prizes (whitelists, airdrops and ordinals of other projects)
        </p>
      </Flex>
    </Flex>
  );
};
