'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

import { Flex } from './flex';

interface Props {
  text: string;
  speed?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
  classNames?: { wrapper?: string };
}

export const TypingText = ({ text, speed = 120, tag, classNames }: Props) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px 0px' });

  useEffect(() => {
    if (isInView) {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
      }
    }
  }, [index, text, speed, isInView]);

  const Tag = tag || 'h2';

  return (
    <Flex ref={ref} align='start' className={classNames?.wrapper} width='fit'>
      <Tag className='inline whitespace-pre leading-10 text-[24px] sm:text-[52px]'>
        {displayedText}
      </Tag>
      <span className='inline-block bg-primary w-4 h-6 mt-2 sm:w-8 sm:h-12 sm:-mt-1 -ml-2 animate-blink' />
    </Flex>
  );
};
