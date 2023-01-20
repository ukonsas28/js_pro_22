import React from 'react';
import style from './AboutContent.module.scss';

export const AboutContent = () => {
  return (
    <main className={style.content}>
      <h1>ABOUT PAGE</h1>
      <div className={style.about_block}>
        <div className={style.about_block_item}>
          <h3>Some title #1</h3>
          <p>Some info about #1</p>
        </div>
        <div className={style.about_block_item}>
          <h3>Some title #2</h3>
          <p>Some info about #3</p>
        </div>
      </div>
    </main>
  );
};
