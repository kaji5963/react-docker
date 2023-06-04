import { useCallback } from 'react';
import { User } from '../types/user/User';
import { Register } from '../types/auth/Register';
import { useMessage } from './useMessage';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../api/apiUrl';

import axios from 'axios';

type Props = {
  registerUser: Register;
  downloadFile: string;
  selectSex: string;
};

export const useRegister = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const register = useCallback(({ registerUser, downloadFile, selectSex }: Props) => {
    const body = {
      name: registerUser.name,
      age: registerUser.age,
      sex: selectSex,
      imageUrl: downloadFile,
      email: registerUser.email,
      password: registerUser.password,
    };

    axios
      .post<User>(`${apiUrl}/register/`, body)
      .then((res) => {
        showMessage({ title: '新規登録に成功しました', status: 'success' });
        navigate(`/match?api_token=${res.data.api_token}`);
      })
      .catch(() => {
        showMessage({ title: '新規登録できませんでした', status: 'error' });
      });
  }, []);

  return { register };
};
