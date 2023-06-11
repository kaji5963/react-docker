import { FC, memo } from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { useFormatDate } from '../../../hooks/useFormatDate';
import { PrimaryButton } from '../../Atoms/button/PrimaryButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { noImageUrl } from '../../../data/noImageUrl';
import { User } from '../../../types/user/User';
import { useDeleteUser } from '../../../hooks/useDeleteUser';

type Props = {
  authUser: User;
};

export const UserProfileCard: FC<Props> = memo(({ authUser }) => {
  const { newDate } = useFormatDate();
  const { deleteUser } = useDeleteUser();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Box bg="white" w="800px" mx="auto" my={10} pb={14} borderRadius="10px" shadow="md">
        <Flex pt={8}>
          <Box ml={24}>
            <Image
              mb={4}
              mt={2}
              boxSize="160px"
              borderRadius="full"
              src={authUser.imageUrl === '' ? noImageUrl : authUser.imageUrl}
              alt={authUser.name}
            />
          </Box>

          <Flex w="430px" ml={8} flexDirection="column">
            <Box mb={2}>
              <Heading as="h5" size="sm">
                自己紹介
              </Heading>
            </Box>
            <Box
              h="140px"
              fontSize="sm"
              p={2}
              textOverflow="ellipsis"
              borderRadius="md"
              shadow="md"
              bg="gray.100"
            >
              <Text>{authUser.introduction === '' ? 'データなし' : authUser.introduction}</Text>
            </Box>
          </Flex>
        </Flex>

        <Box textAlign="end" my={6} mr={20}>
          <PrimaryButton
            onClick={() => navigate(`/myProfile/edit${location.search}`, { state: authUser })}
          >
            プロフィール編集
          </PrimaryButton>
        </Box>

        <Flex justify="center" alignItems="center">
          <TableContainer borderRadius="md" shadow="md" bg="yellow" mx="auto">
            <Table variant="unstyled" size="md" bg="gray.100">
              <Tbody>
                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    ID
                  </Td>
                  <Td>{authUser.id === null ? null : authUser.id}</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    名前
                  </Td>
                  <Td>{authUser.name === '' ? '' : authUser.name}</Td>
                  {/* <Td fontSize="sm" fontWeight="bold" color="red.500">
                    公開
                  </Td> */}
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    Email
                  </Td>
                  {/* <Td>
                    あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                  </Td> */}
                  <Td>{authUser.email === '' ? '' : authUser.email}</Td>
                  {/* <Td fontSize="sm" fontWeight="bold">
                    非公開
                  </Td> */}
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    年齢
                  </Td>
                  <Td>{authUser.age === '' ? '' : authUser.age}</Td>
                  {/* <Td fontSize="sm" fontWeight="bold">
                    非公開
                  </Td> */}
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    性別
                  </Td>
                  <Td>{authUser.sex === '' ? '' : authUser.sex}</Td>
                  {/* <Td fontSize="sm" fontWeight="bold">
                    非公開
                  </Td> */}
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    血液型
                  </Td>
                  <Td>{authUser.blood_type === '' ? '' : authUser.blood_type}</Td>
                  {/* <Td fontSize="sm" fontWeight="bold">
                    非公開
                  </Td> */}
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    居住地
                  </Td>
                  <Td>{authUser.address === '' ? '' : authUser.address}</Td>
                  {/* <Td fontSize="sm" fontWeight="bold">
                    非公開
                  </Td> */}
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    仕事
                  </Td>
                  <Td>{authUser.business === '' ? '' : authUser.business}</Td>
                  {/* <Td fontSize="sm" fontWeight="bold">
                    非公開
                  </Td> */}
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    趣味
                  </Td>
                  <Td>{authUser.hobby === '' ? '' : authUser.hobby}</Td>
                  {/* <Td fontSize="sm" fontWeight="bold">
                    非公開
                  </Td> */}
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    作成日時
                  </Td>
                  <Td>{authUser.created_at === '' ? '' : newDate(authUser.created_at)}</Td>
                  <Td></Td>
                </Tr>

                <Tr>
                  <Td textAlign="center" bg="gray.200">
                    更新日時
                  </Td>
                  <Td>{authUser.updated_at === '' ? '' : newDate(authUser.updated_at)}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>

        <Center mt={12}>
          <PrimaryButton onClick={() => deleteUser(authUser.id)} colorScheme="red" w="100px" mr={8}>
            ユーザー削除
          </PrimaryButton>
        </Center>
      </Box>
    </>
  );
});
