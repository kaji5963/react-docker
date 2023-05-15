//DBから取得した作成日時及び更新日時をフォーマットする
import { useCallback } from 'react';
export const useFormatDate = () => {
  const newDate = useCallback((data: string) => {
    const date = new Date(data);
    if (date.getMinutes() < 10) {
      const formatDate =
        date.getFullYear() +
        '年' +
        ((date.getMonth() % 12) + 1) +
        '月' +
        date.getDate() +
        '日' +
        ' ' +
        date.getHours() +
        ':0' +
        date.getMinutes();
      return formatDate;
    } else {
      const formatDate =
        date.getFullYear() +
        '年' +
        ((date.getMonth() % 12) + 1) +
        '月' +
        date.getDate() +
        '日' +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes();
      return formatDate;
    }
  }, []);

  return { newDate };
};
