import { FC, memo } from 'react';
import { User } from '../../../types/user/User';
import { Box, Center, Flex, Image, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';
import { useFormatDate } from '../../../hooks/useFormatDate';

type Props = {
  users: User[];
};

export const UserProfileCard: FC<Props> = memo(({ users }: Props) => {
  const { newDate } = useFormatDate();

  //一旦user.id === 1のuserをレンダリング、後にloginUserで条件分岐
  return (
    <>
      {users.map((user) => {
        if (user.id === 1) {
          return (
            <Box
              bg="white"
              w="650px"
              h="700px"
              mx="auto"
              mt={10}
              borderRadius="10px"
              shadow="md"
              key={user.id}
            >
              <Center>
                <Image
                  my={6}
                  boxSize="160px"
                  borderRadius="full"
                  src={user.imageUrl}
                  alt={user.name}
                />
              </Center>
              <Flex justify="center" h="100vh">
                <TableContainer>
                  <Table variant="simple" colorScheme="blue" size="lg">
                    <Tbody>
                      <Tr>
                        <Td>ユーザーID</Td>
                        <Td>{user.id}</Td>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Td>ユーザー名</Td>
                        <Td>{user.name}</Td>
                        <Td fontSize="sm" fontWeight="bold" color="red.500">
                          公開
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>年齢</Td>
                        <Td>{`${user.age}歳`}</Td>
                        <Td fontSize="sm" fontWeight="bold">
                          非公開
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>Email</Td>
                        <Td>{user.email}</Td>
                        <Td fontSize="sm" fontWeight="bold">
                          非公開
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>作成日時</Td>
                        <Td>{newDate(user.created_at)}</Td>
                        <Td></Td>
                      </Tr>
                      <Tr>
                        <Td>更新日時</Td>
                        <Td>{newDate(user.updated_at)}</Td>
                        <Td></Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Flex>
            </Box>
          );
        }
      })}
    </>
  );
});
