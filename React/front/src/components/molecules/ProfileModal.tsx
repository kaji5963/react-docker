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
  Divider,
  Heading,
} from '@chakra-ui/react';
import { User } from '../../types/user/User';
import { PrimaryButton } from '../Atoms/button/PrimaryButton';
import { useGetOtherUserProfile } from '../../hooks/useGetOtherUserProfile';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User;
};

export const ProfileModal: FC<Props> = memo(({ isOpen, onClose, user }) => {
  const { otherUserProfile } = useGetOtherUserProfile();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">基本情報</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack spacing={4} mx={8}>
              <Heading size="sm">名前</Heading>
              <Text>{user.name}</Text>
              <Divider />
              <Heading size="sm">性別</Heading>
              <Text>{user.sex}</Text>
              <Divider />
              <Heading size="sm">年齢</Heading>
              <Text>{user.age}</Text>
              <Divider />
              <Heading size="sm">出身地</Heading>
              <Text>{user.address}</Text>
              <Divider />
              <Heading size="sm">自己紹介</Heading>
              <Text>{user.introduction}</Text>
              <Divider />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <PrimaryButton colorScheme="teal" mr={6} onClick={() => otherUserProfile(user.id)}>
              Profile
            </PrimaryButton>
            <PrimaryButton colorScheme="blue" mr={6} onClick={() => {}}>
              Message
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
