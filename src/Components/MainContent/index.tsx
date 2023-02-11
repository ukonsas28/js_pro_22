import { CounterComponent } from 'Components/Common/CounterComponent';
import { useToggle } from 'Helpers/Hooks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './MainContent.module.scss';

export const MainContent = () => {
  const navigate = useNavigate();
  const [label, setLabel] = useState('LABEL');

  const { flag, toggle, open, close } = useToggle(true);

  return (
    <main className={style.wrapper}>
      <h1>MAIN CONTENT</h1>

      <button type="button" onClick={toggle}>
        TOGGLE CONTENT
      </button>
      <button type="button" onClick={open}>
        OPEN CONTENT
      </button>
      <button type="button" onClick={close}>
        CLOSE CONTENT
      </button>

      {flag ? (
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
      ) : (
        <h1>CONTENT CLOSE</h1>
      )}
    </main>
  );
};
