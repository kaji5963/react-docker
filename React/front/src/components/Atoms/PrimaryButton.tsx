import React, { FC, memo, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  onClick?: () => void;
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo(({ onClick, children }) => {
  return (
    <>
      <Button size="sm" colorScheme="linkedin" onClick={onClick}>
        {children}
      </Button>
    </>
  );
});
