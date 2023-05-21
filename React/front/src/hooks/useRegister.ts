import { useCallback } from 'react';
import { User } from '../types/user/User';
import { Register } from '../types/auth/Register';
import { useMessage } from './useMessage';
import { useNavigate } from 'react-router-dom';
import { authUserAtom } from '../global/atoms';

import axios from 'axios';
import { useSetRecoilState } from 'recoil';

export const useRegister = () => {
  const setAuthUser = useSetRecoilState(authUserAtom);
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const register = useCallback((registerUser: Register) => {
    const body = {
      name: registerUser.name,
      age: registerUser.age,
      email: registerUser.email,
      password: registerUser.password,
    };

    axios
      .post<User>('http://localhost:8000/api/register/', body)
      .then((res) => {
        showMessage({ title: '新規登録に成功しました', status: 'success' });
        setAuthUser(res.data);
        navigate('/');
      })
      .catch(() => {
        showMessage({ title: '新規登録できませんでした', status: 'error' });
      });
  }, []);

  return { register };
};
