import React from 'react';
import styles from './Component3.module.scss'; // Import the SCSS module
import blogImage from '/public/work-bg.jpg'; // Replace with your image path

const Component3 = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <h2 className={styles.heading}>Read Our Blogs</h2>
        <img src={blogImage} alt="Hairstyles for Brides" className={styles.image} />
        <div className={styles.textOverlay}>
          <h3 className={styles.title}>Hairstyles for Brides</h3>
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <button className={styles.bookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default Component3;
