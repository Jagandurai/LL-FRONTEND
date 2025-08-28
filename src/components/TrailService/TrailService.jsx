import React from "react";
import styles from "./TrailService.module.scss";
import { useBookingContext } from "/src/components/Booking/BookingContext";

const TrailService = () => {
  const { toggleForm } = useBookingContext(); 

  return (
    <div className={styles.trailServiceContainer}>
      <div className={styles.content}>
        <h1>Free Trial Makeup Sessions</h1>
        <p>
          We offer professional free trial makeup sessions to help you find the perfect look 
          for your special day. Work with our experienced artists to enhance your natural beauty.
        </p>
        <button onClick={() => toggleForm("Trial Session")} className={styles.bookButton}>Book Now</button>

      </div>
      <div className={styles.imageContainer}>
        <div className={styles.backgroundImage}></div>
        <img src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/home-trail_tqf8fz.webp" alt="Trial Makeup" />
      </div>
    </div>
  );
};

export default TrailService;
