import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Exclusively.module.scss';

const Exclusive = () => {
  return (
    <div className={styles.exclusiveContainer}>
      <div className={styles.content}>
        <h1>Exclusively For Bridal Makeup</h1>
        <p>
          Make your wedding day unforgettable with our luxurious bridal services. 
          At Lovely Looks, we rely on premium products and uphold the highest hygiene standards 
          to ensure a flawless, radiant look. Trust our expert team to provide you with 
          exceptional care and beauty on your special day.
        </p>
        <Link to="/service" className={styles.bookButton}>Explore Now</Link>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.backgroundImage}></div>
        <img src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/Exclusive_zsak4r.webp" alt="Exclusively Bridal" />
      </div>
    </div>
  );
};

export default Exclusive;
