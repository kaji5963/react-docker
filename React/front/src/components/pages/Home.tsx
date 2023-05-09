import { FC, memo } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { UserCard } from '../Organisms/user/UserCard';

export const Home: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 6 }} spacing={5} justify="center">
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/user/pacificofficeinteriors"
          userName="kajiwara"
          age={36}
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/user/pacificofficeinteriors"
          userName="sato"
          age={40}
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/user/pacificofficeinteriors"
          userName="suzuki"
          age={20}
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/user/pacificofficeinteriors"
          userName="takahashi"
          age={18}
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/user/pacificofficeinteriors"
          userName="yamashita"
          age={50}
        />
      </WrapItem>
      <WrapItem mx="auto">
        <UserCard
          imageUrl="https://source.unsplash.com/user/pacificofficeinteriors"
          userName="goto"
          age={32}
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/user/pacificofficeinteriors"
          userName="kudo"
          age={45}
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/user/pacificofficeinteriors"
          userName="kudo"
          age={45}
        />
      </WrapItem>
    </Wrap>
  );
});
