import { useCallback, useState } from 'react';
import { User } from '../types/user/User';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';
import { useSetRecoilState } from 'recoil';
import { authUserAtom } from '../global/atoms';

import axios from 'axios';

type Props = {
  email: string;
  password: string;
};

export const useLogin = () => {
  const setAuthUser = useSetRecoilState(authUserAtom);
  const [loading, setLoading] = useState<boolean>();
  const { showMessage } = useMessage();
  const navigate = useNavigate();

  const login = useCallback(({ email, password }: Props) => {
    setLoading(true);
    const body = { email: email, password: password };

    axios
      .post<User>('http://localhost:8000/api/login/', body)
      .then((res) => {
        showMessage({ title: 'ログインに成功しました', status: 'success' });
        setAuthUser(res.data);
        navigate('/');
      })
      .catch(() => {
        showMessage({ title: 'ログインできませんでした', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { login, loading };
};
