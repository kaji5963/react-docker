import { FC, memo, useState } from 'react';
import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { PrimaryInput } from '../../Atoms/input/PrimaryInput';
import { PrimaryButton } from '../../Atoms/button/PrimaryButton';
import { AgeSelect } from '../../Atoms/select/AgeSelect';
import { useRegister } from '../../../hooks/useRegister';
import { Register } from '../../../types/auth/Register';

export const RegisterCard: FC = memo(() => {
  const { register } = useRegister();
  const [registerUser, setRegisterUser] = useState<Register>({
    name: '',
    age: '',
    email: '',
    password: '',
  });

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          Register
        </Heading>
        <Divider my={2} />
        <Stack spacing={6} px={8} py={4}>
          <PrimaryInput
            bg="gray.100"
            placeholder="name"
            value={registerUser.name}
            onChange={(e) => setRegisterUser({ ...registerUser, name: e.target.value })}
          />

          <AgeSelect onChange={(e) => setRegisterUser({ ...registerUser, age: e.target.value })} />

          <PrimaryInput
            bg="gray.100"
            placeholder="email"
            value={registerUser.email}
            onChange={(e) => setRegisterUser({ ...registerUser, email: e.target.value })}
          />

          <PrimaryInput
            bg="gray.100"
            placeholder="password"
            value={registerUser.password}
            onChange={(e) => setRegisterUser({ ...registerUser, password: e.target.value })}
          />

          <PrimaryButton onClick={() => register(registerUser)}>register</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
