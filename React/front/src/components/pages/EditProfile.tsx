import { Box, Button, Stack } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { authUserAtom } from '../../global/atoms';
import { PrimaryInput } from '../Atoms/input/PrimaryInput';

export const EditProfile: FC = memo(() => {
  const [authUser, setAuthUser] = useRecoilState(authUserAtom);
  const navigate = useNavigate();

  return (
    <Box bg="white" w="800px" mx="auto" my={10} pb={14} borderRadius="10px" shadow="md">
      <Stack spacing={8} p={12}>
        <Button bg="blue.200" onClick={() => navigate('/myProfile')}>
          戻る
        </Button>
        <PrimaryInput bg="gray.100" value={authUser.name} onChange={() => {}} />
        <PrimaryInput bg="gray.100" value={authUser.address} onChange={() => {}} />
      </Stack>
    </Box>
  );
});
