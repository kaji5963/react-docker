import { useCallback } from 'react';
import { apiUrl } from '../api/apiUrl';
import { noImageUrl } from '../data/noImageUrl';
import { EditUser } from '../types/user/EditUser';
import { useMessage } from './useMessage';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Props = {
  location: string;
  newAuthUser: EditUser;
  downloadFile: string;
};

export const useEditProfile = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const editProfile = useCallback(({ location, newAuthUser, downloadFile }: Props) => {
    axios
      .post<EditUser>(`${apiUrl}/myProfile/edit/`, {
        ...newAuthUser,
        imageUrl: newAuthUser.imageUrl
          ? newAuthUser.imageUrl
          : downloadFile
          ? downloadFile
          : noImageUrl,
      })
      .then(() => {
        showMessage({ title: 'プロフィールを編集しました', status: 'success' });
        navigate(`/myProfile${location}`);
      })
      .catch(() => {
        showMessage({ title: '編集に失敗しました', status: 'error' });
      });
  }, []);

  return { editProfile };
};
