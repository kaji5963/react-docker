import { FC, memo, useState } from 'react';
import { Box, Center, Divider, Flex, Heading, Image, Input, Stack } from '@chakra-ui/react';
import { PrimaryInput } from '../../Atoms/input/PrimaryInput';
import { PrimaryButton } from '../../Atoms/button/PrimaryButton';
import { AgeSelect } from '../../Atoms/select/AgeSelect';
import { useRegister } from '../../../hooks/useRegister';
import { Register } from '../../../types/auth/Register';
import { useFileUpload } from '../../../hooks/useFileUpload';
import { SexRadio } from '../../Atoms/radio/SexRadio';
import { noImageUrl } from '../../../data/noImageUrl';

export const RegisterCard: FC = memo(() => {
  const { register } = useRegister();
  const { fileUpload, downloadFile } = useFileUpload();
  const [selectSex, setSelectSex] = useState<string>('');
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

        <Stack spacing={6} px={4} py={4}>
          <Center>
            <Image
              boxSize="80px"
              borderRadius="full"
              src={downloadFile === '' ? noImageUrl : downloadFile}
            />
          </Center>
          <Input
            border="none"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => fileUpload(e)}
          />

          <PrimaryInput
            bg="gray.100"
            placeholder="name"
            value={registerUser.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRegisterUser({ ...registerUser, name: e.target.value })
            }
          />

          <AgeSelect
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setRegisterUser({ ...registerUser, age: e.target.value })
            }
          />

          <SexRadio onChange={setSelectSex} value={selectSex} />

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRegisterUser({ ...registerUser, password: e.target.value })
            }
          />

          <PrimaryButton onClick={() => register({ registerUser, downloadFile, selectSex })}>
            register
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
