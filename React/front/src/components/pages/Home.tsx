import { FC, memo, useEffect } from 'react';
import { useGetAllUsers } from '../../hooks/useGetAllUsers';
import { LoadingSpinner } from '../molecules/LoadingSpinner';
import { WrapUserList } from '../Organisms/user/WrapUserList';

export const Home: FC = memo(() => {
  const { getUsers, users, loading } = useGetAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return <>{loading ? <LoadingSpinner /> : <WrapUserList users={users} />}</>;
});
