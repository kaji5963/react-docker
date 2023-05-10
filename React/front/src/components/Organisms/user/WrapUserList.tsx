import { FC, memo } from 'react';
import { UserCard } from './UserCard';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { User } from '../../../types/user/User';

type Props = {
  users: User[];
};

export const WrapUserList: FC<Props> = memo(({ users }) => {
  return (
    <Wrap p={{ base: 4, md: 6 }} spacing={5} justify="center">
      {users.map((user) => {
        return (
          <WrapItem key={user.id}>
            <UserCard imageUrl={user.imageUrl} userName={user.name} age={user.age} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
});
