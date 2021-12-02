import React from 'react';
import styles from './Card.scss';
import icon from '../../img/iconTest.png';

const Card = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img src={icon} />
        <div className={styles.content}>
          <div>
            NEO <span>|NEO</span>
          </div>
          <div>100.43$</div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.dayInfo}>
          24h:<span>-2.62%</span>{' '}
        </div>
        <div className={styles.weekInfo}>
          7d:<span>-10.62% </span>{' '}
        </div>
      </div>
    </div>
  );
};

export default Card;
