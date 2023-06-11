import { useCallback } from 'react';
import { User } from '../types/user/User';
import { Login } from '../types/auth/Login';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';
import { apiUrl } from '../api/apiUrl';

import axios from 'axios';

export const useLogin = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const login = useCallback((loginUser: Login) => {
    const body = { email: loginUser.email, password: loginUser.password };
    axios
      .post<User>(`${apiUrl}/login/`, body)
      .then((res) => {
        showMessage({ title: 'ログインに成功しました', status: 'success' });
        navigate(`/match?api_token=${res.data.api_token}`);
      })
      .catch(() => {
        showMessage({ title: 'ログインできませんでした', status: 'error' });
      });
  }, []);

  return { login };
};
