import { FC, memo } from 'react';
import {
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Divider,
} from '@chakra-ui/react';
import { User } from '../../types/user/User';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User;
};

export const ProfileModal: FC<Props> = memo(({ isOpen, onClose, user }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack spacing={4} mx={8}>
              <Text>ユーザー名：{user.name}</Text>
              <Divider />
              <Text>年齢：{user.age}</Text>
              <Divider />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Message
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
