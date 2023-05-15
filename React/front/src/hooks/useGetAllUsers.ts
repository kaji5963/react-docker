import { useCallback, useState } from 'react';
import { User } from '../types/user/User';
import { useMessage } from './useMessage';

import axios from 'axios';

//DBから全ユーザーを取得する
export const useGetAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>('http://localhost:8000/api/users/')
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
