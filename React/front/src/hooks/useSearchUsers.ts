import { useCallback, useState } from 'react';
import { User } from '../types/user/User';
import { useMessage } from './useMessage';

import axios from 'axios';

type Props = {
  name: string;
  age: string;
};

export const useSearchUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<User[]>([]);

  const search = useCallback((params: Props) => {
    setLoading(true);
    const body = { name: params.name, age: params.age };

    axios
      .post<User[]>('http://localhost:8000/api/search/', body)
      .then((res) => {
        if (res.data.length === 0) {
          showMessage({ title: '条件に一致したユーザーはいません', status: 'warning' });
        }
        setSearchResult(res.data);
      })
      .catch(() => {
        showMessage({ title: 'ユーザー取得に失敗しました', status: 'error' });
      })
      .finally(() => setLoading(false));
  }, []);

  return { search, searchResult, loading };
};
