import { domMax, LazyMotion } from 'motion/react';
import { PropsWithChildren } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <LazyMotion features={domMax}>{children}</LazyMotion>
    </>
  );
};
