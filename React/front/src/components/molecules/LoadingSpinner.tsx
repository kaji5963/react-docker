import { memo } from 'react';
import { Center, Spinner } from '@chakra-ui/react';

export const LoadingSpinner = memo(() => {
  return (
    <Center h="100vh">
      <Spinner />
    </Center>
  );
});
