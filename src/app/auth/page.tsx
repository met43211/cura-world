import { Suspense } from 'react';

import { AuthPage } from '@/page/auth';

export default function Auth() {
  return (
    <Suspense>
      <AuthPage />
    </Suspense>
  );
}
