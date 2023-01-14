import React from 'react';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.header_logo}>LOGO</span>
      <span className={style.header_title}>APP_NAME</span>
    </header>
  );
};
