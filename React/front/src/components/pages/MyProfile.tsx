import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { useMessage } from '../../hooks/useMessage';

export const MyProfile: FC = memo(() => {
  const { showMessage } = useMessage();
  return (
    <div>
      <p>MyProfile</p>
      <button onClick={() => showMessage({ title: 'test', status: 'success' })}>button</button>
      {/* <Link to="/">HOMEへ戻る</Link> */}
    </div>
  );
});
