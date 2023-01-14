import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <span className={style.wrapper_logo}>LOGO</span>
      <ul>
        <li>
          <Link to={routes.main}>ГЛАВНАЯ</Link>
        </li>
        <li>
          <Link to={routes.posts}>ПОСТЫ</Link>
        </li>
        <li>
          <Link to={'/about'}>О НАС</Link>
        </li>
      </ul>
      <span className={style.wrapper_title}>APP_NAME</span>
    </header>
  );
};
