import React from 'react';
import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.welcomeSection}>
      <header className={styles.header}>
        <p>Welcome to Lovely Looks!!!</p>
        <h1>
          Where Beauty <span>Meets Indulgence</span> !!
        </h1>
        <p className={styles.description}>
          Lovely Looks brings a fresh perspective to the beauty parlour experience by offering personalized services for Hair, Skin,
          Nail, Body, and Face.
        </p>
      </header>
      <div className={styles.cardsContainer}>
        <div className={styles.card1}>
          <button  className={styles.readMoreButton}>Read More</button>
        </div>
        <div className={styles.card2}>
          <button className={styles.readMoreButton}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
