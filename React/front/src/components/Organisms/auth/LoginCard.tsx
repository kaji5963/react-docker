import { memo, useState } from 'react';
import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { useLogin } from '../../../hooks/useLogin';
import { Login } from '../../../types/auth/Login';
import { PrimaryButton } from '../../Atoms/button/PrimaryButton';
import { PrimaryInput } from '../../Atoms/input/PrimaryInput';

export const LoginCard = memo(() => {
  const { login } = useLogin();
  const [loginUser, setLoginUser] = useState<Login>({
    email: '',
    password: '',
  });

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          Login
        </Heading>
        <Divider my={2} />
        <Stack spacing={6} px={8} py={4}>
          <PrimaryInput
            bg="gray.100"
            placeholder="email"
            value={loginUser.email}
            onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}
          />
          <PrimaryInput
            bg="gray.100"
            placeholder="password"
            value={loginUser.password}
            onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
          />
          <PrimaryButton onClick={() => login(loginUser)}>login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
