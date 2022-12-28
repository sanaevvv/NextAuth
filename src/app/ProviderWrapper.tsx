'use client';

// import { trpc } from '../utils/trpc';
import { SessionProvider } from 'next-auth/react';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const ProviderWrapper: FC<Props> = ({children}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

// export default trpc.withTRPC(ProviderWrapper);
