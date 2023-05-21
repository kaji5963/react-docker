import { FC, memo } from 'react';
import { Box, Center, Flex, Image, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react';
import { useFormatDate } from '../../../hooks/useFormatDate';
import { useRecoilValue } from 'recoil';
import { authUserAtom } from '../../../global/atoms';

export const UserProfileCard: FC = memo(() => {
  const { newDate } = useFormatDate();
  const authUser = useRecoilValue(authUserAtom);

  return (
    <>
      <Box bg="white" w="650px" h="700px" mx="auto" mt={10} borderRadius="10px" shadow="md">
        <Center>
          <Image
            my={8}
            boxSize="160px"
            borderRadius="full"
            src={
              authUser.imageUrl === ''
                ? 'https://1.bp.blogspot.com/-D2I7Z7-HLGU/Xlyf7OYUi8I/AAAAAAABXq4/jZ0035aDGiE5dP3WiYhlSqhhMgGy8p7zACNcBGAsYHQ/s1600/no_image_square.jpg'
                : authUser.imageUrl
            }
            alt={authUser.name}
          />
        </Center>
        <Flex justify="center" h="100vh">
          <TableContainer>
            <Table variant="simple" colorScheme="blue" size="lg">
              <Tbody>
                <Tr>
                  <Td>ユーザーID</Td>
                  <Td>{authUser.id}</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>ユーザー名</Td>
                  <Td>{authUser.name}</Td>
                  <Td fontSize="sm" fontWeight="bold" color="red.500">
                    公開
                  </Td>
                </Tr>
                <Tr>
                  <Td>年齢</Td>
                  <Td>{authUser.age}</Td>
                  <Td fontSize="sm" fontWeight="bold">
                    非公開
                  </Td>
                </Tr>
                <Tr>
                  <Td>Email</Td>
                  <Td>{authUser.email}</Td>
                  <Td fontSize="sm" fontWeight="bold">
                    非公開
                  </Td>
                </Tr>
                <Tr>
                  <Td>作成日時</Td>
                  <Td>{newDate(authUser.created_at)}</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>更新日時</Td>
                  <Td>{newDate(authUser.updated_at)}</Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
    </>
  );
});
