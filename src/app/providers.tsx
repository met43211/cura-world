import { LazyMotion } from 'motion/react';
import { PropsWithChildren } from 'react';

const loadFeatures = () => import('@/shared/model/dom-max').then((res) => res.domMax);

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <LazyMotion features={loadFeatures}>{children}</LazyMotion>
    </>
  );
};
