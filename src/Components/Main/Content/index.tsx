import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import style from './Content.module.scss';

export const Content = () => {
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location);

  return (
    <main className={style.content}>
      <h1>MAIN CONTENT</h1>
      <Link to={routes.posts}>go to posts</Link>
      <button type="button" onClick={() => navigate(-1)}>
        go back
      </button>
      <button type="button" onClick={() => navigate(1)}>
        go next
      </button>
    </main>
  );
};
