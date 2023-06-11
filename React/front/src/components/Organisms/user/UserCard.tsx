import { FC, memo } from 'react';
import { Box, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { User } from '../../../types/user/User';
import { ProfileModal } from '../../molecules/ProfileModal';
import { noImageUrl } from '../../../data/noImageUrl';
type Props = {
  user: User;
};

export const UserCard: FC<Props> = memo(({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        w="260px"
        h="260px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        _hover={{ cursor: 'pointer', opacity: 0.8 }}
        onClick={onOpen}
      >
        <Stack textAlign="center">
          <Image
            boxSize="160px"
            borderRadius="full"
            src={user.imageUrl === '' ? noImageUrl : user.imageUrl}
            alt={user.name}
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {user.name}
          </Text>
          <Text fontSize="sm" color="gray">
            {user.age}
          </Text>
        </Stack>
      </Box>

      <ProfileModal isOpen={isOpen} onClose={onClose} user={user} />
    </>
  );
});
