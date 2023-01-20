import { CounterComponent } from 'Components/Common/CounterComponent';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './MainContent.module.scss';

export const MainContent = () => {
  const navigate = useNavigate();

  const [state, setState] = useState('Apple');

  return (
    <main className={style.wrapper}>
      <h1>MAIN CONTENT</h1>
      {state}
      <button type="button" onClick={() => setState((prev) => prev + '1')}>
        update state
      </button>

      <div className={style.content}>
        <CounterComponent title={state} />
        {/* <CounterComponent title="Orange" /> */}
      </div>

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
