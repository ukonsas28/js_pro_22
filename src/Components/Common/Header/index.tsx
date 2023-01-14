import React from 'react';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <span className={style.wrapper_logo}>LOGO</span>
      <span className={style.wrapper_title}>APP_NAME</span>
    </header>
  );
};
