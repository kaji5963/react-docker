import { useCallback } from 'react';
import { User } from '../types/user/User';
import { Login } from '../types/auth/Login';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';
import { authUserAtom } from '../global/atoms';

import axios from 'axios';
import { useSetRecoilState } from 'recoil';

export const useLogin = () => {
  const setAuthUser = useSetRecoilState(authUserAtom);
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const login = useCallback((loginUser: Login) => {
    const body = { email: loginUser.email, password: loginUser.password };

    axios
      .post<User>('http://localhost:8000/api/login/', body)
      .then((res) => {
        showMessage({ title: 'ログインに成功しました', status: 'success' });
        setAuthUser(res.data);
        navigate('/match');
      })
      .catch(() => {
        showMessage({ title: 'ログインできませんでした', status: 'error' });
      });
  }, []);

  return { login };
};
