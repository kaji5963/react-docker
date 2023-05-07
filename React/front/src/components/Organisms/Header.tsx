import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = memo(() => {
  return (
    <div style={{ height: '50px', backgroundColor: 'orange' }}>
      <Link to="/">HOME</Link>
    </div>
  );
});
