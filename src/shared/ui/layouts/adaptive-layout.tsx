import { PropsWithChildren } from 'react';

import { Flex } from '../flex';

export const AdaptiveLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex align='center' justify='center'>
      <Flex col className='max-w-[1440px] xl:px-20 p-8 md:px-12'>
        {children}
      </Flex>
    </Flex>
  );
};
