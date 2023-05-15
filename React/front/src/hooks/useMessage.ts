import { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

type Props = {
  title: string;
  status: 'success' | 'error' | 'info' | 'warning';
};

//アクションの際にtoastMessageを表示する
export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(({ title, status }: Props) => {
    toast({
      title,
      status,
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
  }, []);

  return { showMessage };
};
