import Image from 'next/image';

import { Flex } from '@/shared/ui/flex';
import BG from '@/shared/assets/hero.png';

export const Hero = () => {
  return (
    <>
      <Flex align='center' className='absolute h-[600px] top-0' id='hero' justify='center'>
        <h3>Hero Block</h3>
        <Image alt={'bg'} className='absolute top-0 left-0 pointer-events-none' src={BG} />
      </Flex>
      <div className='h-[540px]' />
    </>
  );
};
