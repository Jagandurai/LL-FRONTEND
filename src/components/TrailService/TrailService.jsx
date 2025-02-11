import React from "react";
import styles from "./TrailService.module.scss"; // Import the SCSS module

const TrailService = () => {
  return (
    <div className={styles.trailServiceContainer}>
      <div className={styles.content}>
        <h1>Trial Makeup Sessions</h1>
        <p>
          We offer professional trial makeup sessions to help you find the perfect look 
          for your special day. Work with our experienced artists to enhance your natural beauty.
        </p>
        <button className={styles.bookButton}>Book Now</button>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.backgroundImage}></div>
        <img src="/home-trail.jpg" alt="Trial Makeup" />
      </div>
    </div>
  );
};

export default TrailService;
