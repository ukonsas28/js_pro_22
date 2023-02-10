import { CounterComponent } from 'Components/Common/CounterComponent';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './MainContent.module.scss';

type MainContentPropsType = {
  flag: boolean;
  toggle: () => void;
};
export const MainContent = ({ flag, toggle }: MainContentPropsType) => {
  const navigate = useNavigate();
  const [label, setLabel] = useState('LABEL');

  const handler = () => {
    console.log('Main');
  };

  useEffect(() => {
    window.addEventListener('click', handler);

    return () => window.removeEventListener('click', handler);
  }, []);

  return (
    <main className={style.wrapper}>
      <h1>MAIN CONTENT</h1>

      <button type="button" onClick={toggle}>
        TOGGLE CONTENT
      </button>
      {flag && (
        <>
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
        </>
      )}
    </main>
  );
};
