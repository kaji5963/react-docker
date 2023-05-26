import { useCallback, useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import { useMessage } from './useMessage';

export const useFileUpload = () => {
  const { showMessage } = useMessage();
  const [downloadFile, setDownloadFile] = useState<string>('');
  const fileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (!file) return;
    const storageRef = ref(storage, 'images/' + file.name);
    try {
      await uploadBytes(storageRef, file).then(() => {
        showMessage({ title: '画像をアップロードしました', status: 'info' });
      });
      await getDownloadURL(storageRef).then((url) => {
        showMessage({ title: '画像をダウンロードしました', status: 'info' });
        setDownloadFile(url);
      });
    } catch {
      showMessage({ title: '画像のアップロードに失敗しました', status: 'error' });
    }
  }, []);

  return { fileUpload, downloadFile };
};
