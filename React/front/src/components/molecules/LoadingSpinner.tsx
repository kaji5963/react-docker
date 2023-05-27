import { memo } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

type Props = {
  h?: string;
};

export const LoadingSpinner = memo(({ h }: Props) => {
  return (
    <Center h={h}>
      <Spinner />
    </Center>
  );
});
