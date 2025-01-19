'use client';

import { motion, useAnimation, useInView } from 'motion/react';
import { PropsWithChildren, useEffect, useRef } from 'react';

import { InViewAnimationVariants, InViewMargin, InViewTransition } from './animation-properties';

export const InViewAnimationLayout = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { margin: InViewMargin });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={InViewTransition}
      variants={InViewAnimationVariants}
    >
      {children}
    </motion.div>
  );
};
