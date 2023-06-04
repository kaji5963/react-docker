import { useCallback, useState } from 'react';
import { User } from '../types/user/User';
import { useMessage } from './useMessage';
import { apiUrl } from '../api/apiUrl';

import axios from 'axios';
import { useLocation } from 'react-router-dom';

//DBから全ユーザーを取得する
export const useGetAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showMessage } = useMessage();
  const location = useLocation();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>(`${apiUrl}/users${location.search}`)
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
