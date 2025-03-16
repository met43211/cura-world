import { EmblaOptionsType } from 'embla-carousel';

import Carousel from '@/shared/ui/carousel';
import { Flex } from '@/shared/ui/flex';
import { TypingText } from '@/shared/ui/typing-text';
import { BlocksLinks } from '@/shared/model/blocks-links';

import { DetailsSlides } from '../config/slides';

const OPTIONS: EmblaOptionsType = { loop: true };

export const Details = () => {
  return (
    <Flex col className='py-24' id={BlocksLinks.DETAILS}>
      <TypingText
        classNames={{ wrapper: 'md:-mb-14 -mb-16' }}
        speed={80}
        text='Key details of the game'
      />
      <Carousel options={OPTIONS} slides={DetailsSlides} />
    </Flex>
  );
};
