import Image from 'next/image';

import { Flex } from '@/shared/ui/flex';
import BG from '@/shared/assets/hero.png';

export const Hero = () => {
  return (
    <>
      <Flex
        align='center'
        className='absolute h-[800px] top-0 overflow-hidden'
        id='hero'
        justify='center'
      >
        <h3>Hero Block</h3>
        <Image
          alt={'bg'}
          className='absolute bottom-0 left-0 pointer-events-none h-full'
          src={BG}
        />
      </Flex>
      <div className='h-[760px]' />
    </>
  );
};
