import { memo } from 'react';
import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { PrimaryButton } from '../Atoms/button/PrimaryButton';
import { useNavigate } from 'react-router-dom';

export const WelcomeCard = memo(() => {
  const navigate = useNavigate();
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={12} borderRadius="md" shadow="md">
        <Heading as="h1" size="md" textAlign="center">
          Welcome to Matching App
        </Heading>
        <Divider my={2} />
        <Stack spacing={6} px={8} py={4}>
          <PrimaryButton onClick={() => navigate('/register')}>新規登録はこちら</PrimaryButton>
          <PrimaryButton onClick={() => navigate('/login')}>ログインはこちら</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
