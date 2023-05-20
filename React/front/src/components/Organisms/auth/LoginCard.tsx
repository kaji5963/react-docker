import { useState } from 'react';
import { Box, Divider, Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { useLogin } from '../../../hooks/useLogin';
import { PrimaryButton } from '../../Atoms/button/PrimaryButton';

export const LoginCard = () => {
  const { login } = useLogin();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          Mating App
        </Heading>
        <Divider my={2} />
        <Stack spacing={4} px={8} py={4}>
          <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimaryButton onClick={() => login({ email: email, password: password })}>
            login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
};
