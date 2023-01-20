import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './MainContent.module.scss';

export const MainContent = () => {
  const navigate = useNavigate();

  return (
    <main className={style.content}>
      <h1>MAIN CONTENT</h1>

      <div className={style.btn_group}>
        <button type="button" onClick={() => navigate(-1)}>
          go back
        </button>
        <button type="button" onClick={() => navigate(1)}>
          go next
        </button>
      </div>
    </main>
  );
};
