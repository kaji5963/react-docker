import { useCallback, useState } from 'react';
import { User } from '../types/user/User';
import { apiUrl } from '../api/apiUrl';
import { useMessage } from './useMessage';

import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const useGetAuthUser = () => {
  const location = useLocation();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [authUser, setAuthUser] = useState<User>({
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

  const getAuthUser = useCallback(() => {
    setLoading(true);
    axios
      .get<User>(`${apiUrl}/myProfile${location.search}`)
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

  return { getAuthUser, loading, authUser };
};
