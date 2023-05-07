import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Search: FC = memo(() => {
  return (
    <div>
      <p>Search</p>
      <Link to="/">HOMEへ戻る</Link>
    </div>
  );
});
