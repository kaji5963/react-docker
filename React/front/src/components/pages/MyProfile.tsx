import { FC, memo, useEffect } from 'react';
import { useGetAuthUser } from '../../hooks/useGetAuthUser';
import { LoadingSpinner } from '../molecules/LoadingSpinner';
import { UserProfileCard } from '../Organisms/user/UserProfileCard';

export const MyProfile: FC = memo(() => {
  const { getAuthUser, loading } = useGetAuthUser();

  useEffect(() => {
    getAuthUser();
  }, []);

  return <>{loading ? <LoadingSpinner h="100vh" /> : <UserProfileCard />}</>;
});
