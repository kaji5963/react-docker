import { useCallback, useState } from 'react';
import { User } from '../types/user/User';
import { apiUrl } from '../api/apiUrl';
import { useRecoilState } from 'recoil';
import { authUserAtom } from '../global/atoms';

import axios from 'axios';
import { useMessage } from './useMessage';

export const useGetAuthUser = () => {
  const { showMessage } = useMessage();
  const [authUser, setAuthUser] = useRecoilState(authUserAtom);
  const [loading, setLoading] = useState<boolean>(false);
  const token = authUser.api_token;

  const getAuthUser = useCallback(() => {
    setLoading(true);
    axios
      .get<User>(`${apiUrl}/myProfile/?api_token=${token}`)
      .then((res) => {
        setAuthUser(res.data);
      })
      .catch(() => {
        showMessage({ title: 'ログインユーザー取得に失敗しました', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getAuthUser, loading };
};
