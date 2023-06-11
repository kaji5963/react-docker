import { FC, memo, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  onClick: () => void;
  children: ReactNode;
  colorScheme?: string;
  w?: string;
  mr?: number;
  ml?: number;
};

export const PrimaryButton: FC<Props> = memo(
  ({ onClick, children, colorScheme = '', w, mr, ml }) => {
    return (
      <>
        <Button
          size="sm"
          colorScheme={colorScheme === '' ? 'linkedin' : colorScheme}
          w={w}
          mr={mr}
          ml={ml}
          _hover={{ opacity: 0.8 }}
          onClick={onClick}
        >
          {children}
        </Button>
      </>
    );
  }
);
