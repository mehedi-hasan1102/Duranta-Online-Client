'use client';

import { useAuth } from '@/src/context/AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const usePrivateRoute = (redirectPath: string = '/login') => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(redirectPath);
    }
  }, [loading, user]);

  return { user, loading };
};

export default usePrivateRoute;
