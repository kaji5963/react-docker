import { useCallback } from 'react';
import { apiUrl } from '../api/apiUrl';
import { useMessage } from './useMessage';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useDeleteUser = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const deleteUser = useCallback((id: number | null) => {
    axios
      .delete(`${apiUrl}/myProfile/delete/${id}`)
      .then(() => {
        showMessage({ title: 'ユーザーを削除しました', status: 'success' });
        navigate('/');
      })
      .catch(() => {
        showMessage({ title: 'ユーザー削除に失敗しました', status: 'error' });
      });
  }, []);

  return { deleteUser };
};
