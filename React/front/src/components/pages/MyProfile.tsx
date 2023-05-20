import { FC, memo, useEffect } from 'react';
import { useGetAllUsers } from '../../hooks/useGetAllUsers';
import { LoadingSpinner } from '../molecules/LoadingSpinner';
import { UserProfileCard } from '../Organisms/user/UserProfileCard';

export const MyProfile: FC = memo(() => {
  const { loading } = useGetAllUsers();

  return <>{loading ? <LoadingSpinner /> : <UserProfileCard />}</>;
});
