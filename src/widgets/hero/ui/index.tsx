import Image from 'next/image';

import { Flex } from '@/shared/ui/flex';
import HERO from '@/shared/assets/hero.gif';

export const Hero = () => {
  return (
    <>
      <Flex align='center' id='hero' justify='center'>
        <Image
          alt={'hero'}
          className='absolute top-0 left-0 pointer-events-none w-full rounded-pixel-hero'
          src={HERO}
        />
      </Flex>
      <div className='h-[550px]' />
    </>
  );
};
