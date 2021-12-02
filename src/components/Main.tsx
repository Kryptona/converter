import React from 'react';
import styles from './Main.scss';
import Card from './Card/Card';

const Main = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        Cryptocurrency
      </div>
      <div className={styles.cards}>
        <Card />
      </div>
      <div className={styles.footer}></div>
      <div className={styles.empty}></div>
    </div>
  );
};

export default Main;
