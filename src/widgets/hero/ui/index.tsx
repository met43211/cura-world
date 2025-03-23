import Image from 'next/image';

import { Flex } from '@/shared/ui/flex';
import HERO from '@/shared/assets/hero.gif';
import CuraWorld from '@/shared/assets/cura-world.gif';

export const Hero = () => {
  return (
    <div className='relative'>
      <Image
        unoptimized
        alt={'hero'}
        className='pointer-events-none w-full object-cover min-h-[600px] md:object-right md:brightness-100 brightness-75'
        id='hero'
        src={HERO}
      />
      <Flex className='absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 max-w-[1440px] w-full md:justify-end justify-center'>
        <Image unoptimized alt='cura-world' src={CuraWorld} />
      </Flex>
      <div className='absolute bottom-0 z-10 w-full h-10 bg-gradient-to-t from-background to-transparent transition-opacity' />
    </div>
  );
};
