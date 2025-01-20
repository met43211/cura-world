import Link from 'next/link';

import { BlocksLinks } from '@/shared/model/blocks-links';
import { Flex } from '@/shared/ui/flex';
import { TypingText } from '@/shared/ui/typing-text';

import { socialMedia } from '../config';

export const Contacts = () => {
  return (
    <Flex col align='center' className='py-32' id={BlocksLinks.CONTACTS} justify='center'>
      <TypingText speed={80} text='Don’t forget to follow us' />
      <Flex className='mt-8' gap={16} width='fit'>
        {socialMedia.map(({ href, icon }) => (
          <Link key={href} href={href} target='_blank'>
            {icon}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
