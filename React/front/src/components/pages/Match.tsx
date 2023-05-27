import { FC, memo, useEffect } from 'react';
import { useGetAllUsers } from '../../hooks/useGetAllUsers';
import { LoadingSpinner } from '../molecules/LoadingSpinner';
import { WrapUserList } from '../Organisms/user/WrapUserList';

export const Match: FC = memo(() => {
  const { getUsers, users, loading } = useGetAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return <>{loading ? <LoadingSpinner h="100vh" /> : <WrapUserList users={users} />}</>;
});
