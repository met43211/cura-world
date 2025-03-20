import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useSafeMediaQuery = (query: string) => {
  const [isClient, setIsClient] = useState(false);
  const matches = useMediaQuery({ query });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? matches : false;
};
