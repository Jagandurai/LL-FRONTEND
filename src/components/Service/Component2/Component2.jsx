import React from 'react';
import styles from './Component2.module.scss'; 
import { useBookingContext } from '/src/components/Booking/BookingContext';  

const Component2 = () => {
  const { toggleForm } = useBookingContext();  
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0]; 
  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src="https://res.cloudinary.com/dtiaycw2o/video/upload/v1756203443/mehandi_hqzhst.webm"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.textOverlay}>
          <h3 className={styles.title}>Mehandi Design</h3>
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <button onClick={toggleForm} className={styles.bookNow}>Book a Mehandi Now</button>
      </div>
    </div>
  );
};

export default Component2;
