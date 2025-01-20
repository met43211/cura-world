import clsx from 'clsx';
import { motion } from 'motion/react';

import { Button } from '@/shared/ui/button';
import { Chevron } from '@/shared/assets/icons/chevron';

import { FAQData } from '../config';

interface Props extends FAQData {
  setOpenedId: (id: number | null) => void;
  openedId: number | null;
}

export const FAQElement = ({ id, question, answer, setOpenedId, openedId }: Props) => {
  const chevronClass = clsx('transition-all duration-[0.3s]', {
    'rotate-180': openedId != id,
  });

  return (
    <motion.div layout>
      <motion.div layout>
        <Button
          className={clsx('w-full justify-between', {
            '-mr-1 ml-1 -mb-[3px] mt-[3px]': openedId === id,
          })}
          classNames={{ wrapper: 'w-full' }}
          onClick={() => {
            if (openedId === id) setOpenedId(null);
            else setOpenedId(id);
          }}
        >
          {question}
          <Chevron className={chevronClass} />
        </Button>
      </motion.div>
      {openedId === id && <p className='ml-4 my-4'>{answer}</p>}
    </motion.div>
  );
};
