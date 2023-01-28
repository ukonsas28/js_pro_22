import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserSelectors } from 'Store';
import style from './Header.module.scss';

export const Header = () => {
  const userEmail = useSelector(UserSelectors.getUserEmail);

  return (
    <header className={style.wrapper}>
      <img className={style.wrapper_logo} src="/logo.png" />
      <nav className={style.wrapper_nav}>
        <ul>
          <li>
            <Link to={routes.main}>ГЛАВНАЯ</Link>
          </li>
          <li>
            <Link to={routes.posts}>ПОСТЫ</Link>
          </li>
          <li>
            <Link to={routes.about}>О НАС</Link>
          </li>
        </ul>
      </nav>

      {userEmail ? (
        <span className={style.name}>{userEmail}</span>
      ) : (
        <Link to={routes.auth}>AUTH</Link>
      )}
    </header>
  );
};
