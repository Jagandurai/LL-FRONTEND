import React from 'react';
import { Link } from 'react-router-dom'; // Add this line
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
          <img 
            src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/card2_t5asqq.webp" 
            alt="Card 1" 
            loading="lazy" 
            className={styles.cardImage} 
          />
          <Link
            to="/service"
            className={styles.readMoreButton}
            style={{ textDecoration: 'none' }}
          >
            Explore Now
          </Link>
        </div>
        
        <div className={styles.card2}>
          <img 
            src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/card1_h3carw.webp" 
            alt="Card 2" 
            loading="lazy" 
            className={styles.cardImage} 
          />
          <Link
            to="/service"
            className={styles.readMoreButton}
            style={{ textDecoration: 'none' }}
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
