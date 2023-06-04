import { useCallback, useState } from 'react';
import { User } from '../types/user/User';
import { useMessage } from './useMessage';

import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { authUserAtom } from '../global/atoms';
import { apiUrl } from '../api/apiUrl';

//DBから全ユーザーを取得する
export const useGetAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showMessage } = useMessage();
  const authUser = useRecoilValue(authUserAtom);
  const params = authUser.api_token;

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>(`${apiUrl}/users/?api_token=${params}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: 'データ取得に失敗しました', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, users, loading };
};
