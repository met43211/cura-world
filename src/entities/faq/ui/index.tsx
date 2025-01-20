'use client';

import { useState } from 'react';

import { Flex } from '@/shared/ui/flex';

import { faqData } from '../config';

import { FAQElement } from './faq-element';

export const FAQ = () => {
  const [openedId, setOpenedId] = useState<number | null>(null);

  return (
    <Flex col>
      {faqData.map((faq) => (
        <FAQElement key={faq.id} {...faq} openedId={openedId} setOpenedId={setOpenedId} />
      ))}
    </Flex>
  );
};
