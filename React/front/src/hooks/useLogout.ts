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
      sex: '',
      blood_type: '',
      address: '',
      business: '',
      hobby: '',
      introduction: '',
      imageUrl: '',
      email: '',
      is_admin: false,
      release: false,
      api_token: '',
      created_at: '',
      updated_at: '',
    });
    navigate('/');
  }, []);

  return { logout };
};
