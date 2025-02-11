import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Exclusively.module.scss';

const Exclusive = () => {
  return (
    <div className={styles.exclusiveContainer}>
      <div className={styles.content}>
        <h1>Exclusively Bridal</h1>
        <p>
          Make your wedding day unforgettable with our luxurious bridal services. 
          At Lovely Looks, we rely on premium products and uphold the highest hygiene standards 
          to ensure a flawless, radiant look. Trust our expert team to provide you with 
          exceptional care and beauty on your special day.
        </p>
        <Link to="/service" className={styles.bookButton}>Book Now</Link>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.backgroundImage}></div>
        <img src="/Exclusive.png" alt="Exclusively Bridal" />
      </div>
    </div>
  );
};

export default Exclusive;
