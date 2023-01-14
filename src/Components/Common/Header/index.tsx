import React from 'react';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.logo}>LOGO</span>
      <span className={style.title}>APP_NAME</span>
    </header>
  );
};
