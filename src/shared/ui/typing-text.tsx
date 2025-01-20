'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

import { Flex } from './flex';

interface Props {
  text: string;
  speed?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
}

export const TypingText = ({ text, speed = 120, tag }: Props) => {
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
    <Flex ref={ref} align='start' width='fit'>
      <Tag className='inline whitespace-pre leading-10'>{displayedText}</Tag>
      <span className='inline-block bg-primary w-8 h-12 -mt-1 -ml-2 animate-blink' />
    </Flex>
  );
};
