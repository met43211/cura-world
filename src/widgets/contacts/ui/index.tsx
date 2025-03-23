import Link from 'next/link';

import { BlocksLinks } from '@/shared/model/blocks-links';
import { Flex } from '@/shared/ui/flex';
import { TypingText } from '@/shared/ui/typing-text';

import { socialMedia } from '../config';

export const Contacts = () => {
  return (
    <Flex
      col
      align='center'
      as='section'
      className='py-24'
      id={BlocksLinks.CONTACTS}
      justify='center'
    >
      <TypingText speed={70} text='Don’t forget to follow us' />
      <div className='flex md:mt-8 gap-4 md:gap-16'>
        {socialMedia.map(({ href, icon }) => (
          <Link key={href} href={href} target='_blank'>
            {icon}
          </Link>
        ))}
      </div>
    </Flex>
  );
};
