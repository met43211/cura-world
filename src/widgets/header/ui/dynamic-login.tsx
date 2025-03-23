'use client';

import dynamic from 'next/dynamic';

const Login = dynamic(() => import('@/features/login').then((mod) => mod.Login), {
  ssr: false,
  loading: () => <div className='w-40' />,
});

export const DynamicLogin = () => {
  return <Login />;
};
