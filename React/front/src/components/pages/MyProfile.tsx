import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const MyProfile: FC = memo(() => {
  return (
    <div>
      <p>MyProfile</p>
      <Link to="/">HOMEへ戻る</Link>
    </div>
  );
});
