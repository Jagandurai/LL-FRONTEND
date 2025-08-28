import React from "react";
import styles from "./content9.module.scss";

const Content9 = () => {
  return (
    <div className={styles.container}>
      {/* Left content: Video */}
      <div className={styles.leftContent}>
        <video
          className={styles.video}
          src="https://res.cloudinary.com/dtiaycw2o/video/upload/v1756199932/babyshower_n574dx.webm"
          loop
          autoPlay
          muted
        ></video>
      </div>

      {/* Right content: Text */}
      <div className={styles.rightContent}>
        <h1>Baby Shower Makeup</h1>
        <p>
          Baby shower makeup enhances the mother-to-be's natural beauty, making her feel special and confident on this significant day. 
          It ensures she looks radiant and photo-ready, celebrating the upcoming arrival of the baby. 
          The goal is a fresh, natural look that highlights the "pregnancy glow," boosting confidence while keeping the focus on the joy of the occasion.
        </p>
      </div>
    </div>
  );
};

export default Content9;
