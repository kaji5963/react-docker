import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = memo(() => {
  return (
    <div>
      <p>NotFound</p>
      <Link to="/">HOMEへ戻る</Link>
    </div>
  );
});
