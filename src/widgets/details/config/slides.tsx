import Image from 'next/image';

import { Flex } from '@/shared/ui/flex';
import Boss from '@/shared/assets/details/boss.png';
import Chest from '@/shared/assets/details/chest.png';

const DetailsSlidesData = [
  {
    title: 'Boss',
    img: Boss,
    text: (
      <p className='text-center'>
        After passing the dungeon you will be waiting for the main boss, who is guarding the
        treasure. <br />
        Try to fight him to get the coveted chest!
      </p>
    ),
  },
  {
    title: 'In-game currency',
    img: Chest,
    text: (
      <p className='text-center'>
        You will be able to accumulate coins that will be useful to you for purchases in our shop.
        In the future they will be converted into a rune/token.
      </p>
    ),
  },
  {
    title: 'Chest',
    img: Chest,
    text: (
      <p className='text-center'>
        This is a prize that you will receive after successfully passing the dungeons. The chest
        contains various prizes such as: сoins, whitelists/airdrops for our next gen, ordinals from
        other projects, items and weapons for the character.
      </p>
    ),
  },
  {
    title: 'Arena',
    img: Boss,
    text: (
      <p className='text-center'>
        The Arena is a public location in the game where you will have to fight mobs and set your
        personal record. The best players will get whitelisted for our next gen. This location will
        be available later.
      </p>
    ),
  },
  {
    title: 'Shop',
    img: Chest,
    text: (
      <p className='text-center px-3'>
        Here you will be able to spend coins on various items that will help you in the dungeon.
        There will also be a limited number of whitelists and airdrops available in the shop. This
        location will be available later.
      </p>
    ),
  },
];

export const DetailsSlides = DetailsSlidesData.map((slide, index) => (
  <Flex key={index} col align='center' gap={0} justify='center'>
    <Flex align='center' className='relative h-[240px]' gap={0} justify='center'>
      <Image alt={slide.title} src={slide.img} />
    </Flex>
    <Flex col align='center' className='p-4 h-[200px]' justify='start'>
      <h3 className='leading-4'>{slide.title}</h3>
      {slide.text}
    </Flex>
  </Flex>
));
