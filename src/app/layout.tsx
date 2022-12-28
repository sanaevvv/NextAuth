import '../styles/globals.css';
import type { NextPage } from 'next';
import type { ReactNode } from 'react';
import { ProviderWrapper } from './ProviderWrapper';

type Props = {
  children: ReactNode;
};

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <head />
      <body>
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
