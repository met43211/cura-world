'use client';

import { LayoutGroup, motion } from 'motion/react';

import { FAQ } from '@/entities/faq/ui';
import { Question } from '@/shared/assets/icons/question';
import { BlocksLinks } from '@/shared/model/blocks-links';
import { Flex } from '@/shared/ui/flex';
import { TypingText } from '@/shared/ui/typing-text';

export const FAQBlock = () => {
  return (
    <Flex align='center' className='py-12 md:py-24' id={BlocksLinks.FAQ}>
      <Question className='hidden lg:block' size='40%' />
      <Flex col>
        <LayoutGroup>
          <motion.div layout>
            <TypingText speed={70} text='Frequently Asked Questions' />
            <p className='mb-4 mt-1 text-sm sm:text-base'>
              You can ask a question in our{' '}
              <a
                className='font-default underline text-sm sm:text-base'
                href={`#${BlocksLinks.CONTACTS}`}
              >
                social media
              </a>
            </p>
          </motion.div>
          <FAQ />
        </LayoutGroup>
      </Flex>
    </Flex>
  );
};
