import { FC, memo, useEffect } from 'react';
import { useGetAllUsers } from '../../hooks/useGetAllUsers';
import { LoadingSpinner } from '../molecules/LoadingSpinner';
import { UserProfileCard } from '../Organisms/user/UserProfileCard';

export const MyProfile: FC = memo(() => {
  const { getUsers, users, loading } = useGetAllUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return <>{loading ? <LoadingSpinner /> : <UserProfileCard users={users} />}</>;
});
