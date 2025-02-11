import React from 'react';
import styles from './Component2.module.scss'; // Import the SCSS module
import blogVideo from './mehandi.mp4'; 
import { useBookingContext } from '/src/components/Booking/BookingContext';  // Adjust the path to your actual BookingContext file

const Component2 = () => {
  const { toggleForm } = useBookingContext();  // Correctly call the hook inside the component
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src={blogVideo}
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
