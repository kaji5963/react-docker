import { FC, memo, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo(({ onClick, children }) => {
  return (
    <>
      <Button size="sm" colorScheme="linkedin" _hover={{ opacity: 0.8 }} onClick={onClick}>
        {children}
      </Button>
    </>
  );
});
