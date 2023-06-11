import { FC, memo, useState } from 'react';
import { Box, Flex, Heading, Image, Input, Stack, Textarea } from '@chakra-ui/react';
import { noImageUrl } from '../../data/noImageUrl';
import { useFileUpload } from '../../hooks/useFileUpload';
import { EditUser } from '../../types/user/EditUser';
import { PrimaryButton } from '../Atoms/button/PrimaryButton';
import { PrimaryInput } from '../Atoms/input/PrimaryInput';
import { AgeSelect } from '../Atoms/select/AgeSelect';
import { useEditProfile } from '../../hooks/useEditProfile';

import { useLocation, useNavigate } from 'react-router-dom';

export const EditProfile: FC = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const { editProfile } = useEditProfile();
  const { fileUpload, downloadFile, setDownloadFile } = useFileUpload();

  const { id, address, blood_type, hobby, imageUrl, introduction, name, age, sex, business } =
    location.state;

  const [newAuthUser, setNewAuthUser] = useState<EditUser>({
    id,
    address,
    blood_type,
    hobby,
    imageUrl,
    introduction,
    name,
    age,
    sex,
    business,
  });

  return (
    <Box bg="white" w="800px" mx="auto" my={10} pb={14} borderRadius="10px" shadow="md">
      <Flex justify="center" pt={6}>
        <Box>
          <Image
            mt={2}
            boxSize="160px"
            borderRadius="full"
            src={
              newAuthUser.imageUrl ? newAuthUser.imageUrl : downloadFile ? downloadFile : noImageUrl
            }
          />
        </Box>
      </Flex>
      <Flex alignItems="center" flexDirection="column" pt={6}>
        <Input
          w="145px"
          mr={4}
          mb={2}
          border="none"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
            await fileUpload(e);
            setNewAuthUser({ ...newAuthUser, imageUrl: '' });
          }}
        />
        <PrimaryButton
          onClick={() => {
            setNewAuthUser({ ...newAuthUser, imageUrl: '' });
            setDownloadFile('');
          }}
          colorScheme="teal"
        >
          リセット
        </PrimaryButton>
      </Flex>

      <Stack spacing={4} p={12}>
        <Heading as="h5" size="sm">
          [名前]
        </Heading>
        <PrimaryInput
          bg="gray.100"
          value={newAuthUser.name}
          onChange={(e) => setNewAuthUser({ ...newAuthUser, name: e.target.value })}
        />
        <Heading as="h5" size="sm">
          [年齢]
        </Heading>
        <AgeSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setNewAuthUser({ ...newAuthUser, age: e.target.value })
          }
        />
        <Heading as="h5" size="sm">
          [性別]
        </Heading>
        <PrimaryInput
          bg="gray.100"
          value={newAuthUser.sex}
          onChange={(e) => setNewAuthUser({ ...newAuthUser, sex: e.target.value })}
        />
        <Heading as="h5" size="sm">
          [血液型]
        </Heading>
        <PrimaryInput
          bg="gray.100"
          value={newAuthUser.blood_type}
          onChange={(e) => setNewAuthUser({ ...newAuthUser, blood_type: e.target.value })}
        />
        <Heading as="h5" size="sm">
          [出身地]
        </Heading>
        <PrimaryInput
          bg="gray.100"
          value={newAuthUser.address}
          onChange={(e) => setNewAuthUser({ ...newAuthUser, address: e.target.value })}
        />
        <Heading as="h5" size="sm">
          [仕事]
        </Heading>
        <PrimaryInput
          bg="gray.100"
          value={newAuthUser.business}
          onChange={(e) => setNewAuthUser({ ...newAuthUser, business: e.target.value })}
        />
        <Heading as="h5" size="sm">
          [趣味]
        </Heading>
        <PrimaryInput
          bg="gray.100"
          value={newAuthUser.hobby}
          onChange={(e) => setNewAuthUser({ ...newAuthUser, hobby: e.target.value })}
        />

        <Heading as="h5" size="sm">
          [自己紹介]
        </Heading>

        <Textarea
          fontSize="sm"
          p={2}
          textOverflow="ellipsis"
          borderRadius="md"
          shadow="md"
          bg="gray.100"
          defaultValue={newAuthUser.introduction}
          onChange={(e) => setNewAuthUser({ ...newAuthUser, introduction: e.target.value })}
        />
      </Stack>
      <Flex justify="center">
        <Box>
          <PrimaryButton
            onClick={() =>
              editProfile({
                location: location.search,
                newAuthUser: newAuthUser,
                downloadFile: downloadFile,
              })
            }
            colorScheme="orange"
            w="100px"
            mr={8}
          >
            保存
          </PrimaryButton>
        </Box>
        <Box>
          <PrimaryButton
            onClick={() => navigate(`/myProfile${location.search}`)}
            colorScheme="gray"
            w="100px"
            ml={8}
          >
            戻る
          </PrimaryButton>
        </Box>
      </Flex>
    </Box>
  );
});
