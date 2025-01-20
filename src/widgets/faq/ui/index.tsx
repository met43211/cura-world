'use client';

import { LayoutGroup, motion } from 'motion/react';

import { FAQ } from '@/entities/faq/ui';
import { Question } from '@/shared/assets/icons/question';
import { BlocksLinks } from '@/shared/model/blocks-links';
import { Flex } from '@/shared/ui/flex';
import { TypingText } from '@/shared/ui/typing-text';

export const FAQBlock = () => {
  return (
    <Flex align='center' className='my-40'>
      <Question size='40%' />
      <Flex col>
        <LayoutGroup>
          <motion.div layout>
            <TypingText speed={80} text='Frequently Asked Questions' />
            <p className='mb-4 mt-1'>
              You can ask a question in our{' '}
              <a className='text-[16px] font-default underline' href={BlocksLinks.CONTACTS}>
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
