import axios from 'axios';
import { useCallback, useState } from 'react';
import { apiUrl } from '../api/apiUrl';
import { User } from '../types/user/User';
import { useMessage } from './useMessage';

export const useGetOtherUserProfile = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [otherUser, setOtherUser] = useState<User>({
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
    api_token: '',
    created_at: '',
    updated_at: '',
  });
  const { showMessage } = useMessage();
  const otherUserProfile = useCallback((id: number | null) => {
    setLoading(true);
    axios
      .get<User>(`${apiUrl}/otherProfile/${id}`)
      .then((res) => {
        console.log(res.data);

        setOtherUser(res.data);
      })
      .catch(() => {
        showMessage({ title: 'ユーザー情報取得に失敗しました', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { otherUserProfile };
};
