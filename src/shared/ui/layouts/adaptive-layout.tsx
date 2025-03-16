import { PropsWithChildren } from 'react';

import { Flex } from '../flex';

export const AdaptiveLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex align='center' className='overflow-hidden' justify='center'>
      <Flex col className='max-w-[1440px] xl:px-20 px-4 md:px-12'>
        {children}
      </Flex>
    </Flex>
  );
};
