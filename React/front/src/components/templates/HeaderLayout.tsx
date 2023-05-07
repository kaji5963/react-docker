import React, { FC, ReactNode, memo } from 'react';
import { Header } from '../Organisms/Header';

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
});
