import { Transition } from 'motion';
import { Variants } from 'motion/react';

export const InViewAnimationVariants: Variants = {
  hidden: { filter: 'blur(5px)', opacity: 0, y: 30, scale: 1.02 },
  visible: { filter: 'blur(0px)', opacity: 1, y: 0, scale: 1 },
};

export const InViewMargin = '-300px 0px';

export const InViewTransition: Transition = { duration: 0.5 };
