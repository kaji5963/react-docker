import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const Home: FC = memo(() => {
  return (
    <div>
      <p>HOME</p>
      <ul>
        <li>
          <Link to="/search">SEARCH</Link>
        </li>
        <li>
          <Link to="/myProfile">MYPROFILE</Link>
        </li>
        <li>
          <Link to="*">NOTFOUND</Link>
        </li>
      </ul>
    </div>
  );
});
