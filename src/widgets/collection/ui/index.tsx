import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import { Flex } from '@/shared/ui/flex';
import { AdaptiveLayout } from '@/shared/ui/layouts/adaptive-layout';
import { TypingText } from '@/shared/ui/typing-text';
import { BlocksLinks } from '@/shared/model/blocks-links';

import { collection } from '../config';

export const Collection = () => {
  return (
    <Flex
      col
      align='center'
      className='py-12 md:py-24'
      gap={0}
      id={BlocksLinks.COLLECTION}
      justify='center'
    >
      <AdaptiveLayout>
        <TypingText speed={80} text='Genesis Collection' />
      </AdaptiveLayout>
      <Marquee gradient={false} speed={50}>
        {collection.map(({ alt, src }) => (
          <Image
            key={alt}
            alt={alt}
            className='mr-4 rounded-pixel-xl w-[200px] sm:w-[300px] md:w-[410px] aspect-square'
            src={src}
          />
        ))}
      </Marquee>
    </Flex>
  );
};
