import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { authUserAtom } from '../global/atoms';

//簡易的なログアウト機能なので修正必要
export const useLogout = () => {
  const setAuthUser = useSetRecoilState(authUserAtom);

  const navigate = useNavigate();

  const logout = useCallback(() => {
    setAuthUser({
      id: null,
      name: '',
      age: '',
      imageUrl: '',
      email: '',
      is_admin: false,
      token: '',
      created_at: '',
      updated_at: '',
    });
    navigate('/register');
  }, []);

  return { logout };
};
