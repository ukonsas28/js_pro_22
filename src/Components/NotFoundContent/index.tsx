import { routes } from 'Helpers/Constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './NotFoundContent.module.scss';

export const NotFoundContent = () => {
  return (
    <div className={style.wrapper}>
      <h1>404</h1>
      <Link to={routes.main}>Вернуться на Главную</Link>
    </div>
  );
};
