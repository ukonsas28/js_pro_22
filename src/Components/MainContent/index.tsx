import { CounterComponent } from 'Components/Common/CounterComponent';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './MainContent.module.scss';

export const MainContent = () => {
  const navigate = useNavigate();
  const [label, setLabel] = useState('LABEL');

  console.log('MainContent');

  useEffect(() => {
    console.log('MainContent UPDATE');
  }, [label]);

  return (
    <main className={style.wrapper}>
      <h1>MAIN CONTENT</h1>

      <p>{label}</p>

      <button type="button" onClick={() => setLabel((prev) => prev + '_UP')}>
        SET LABEL
      </button>

      <div className={style.content}>
        <CounterComponent title={label} />
        <CounterComponent title={'Orange'} />
      </div>

      <div className={style.btn_group}>
        <button type="button" onClick={() => navigate(-1)}>
          go back
        </button>
        <button type="button" onClick={() => navigate(1)}>
          go next
        </button>
        <button type="button" onClick={() => navigate('/abracadabra')}>
          abracadabra
        </button>
      </div>
    </main>
  );
};
