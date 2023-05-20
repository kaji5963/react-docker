import { FC, memo } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { LoginCard } from '../Organisms/auth/LoginCard';
import { LoadingSpinner } from '../molecules/LoadingSpinner';

export const Login: FC = memo(() => {
  const { loading } = useLogin();

  return <>{loading ? <LoadingSpinner /> : <LoginCard />}</>;
});
