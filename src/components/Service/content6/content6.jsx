import React from "react";
import styles from "./content6.module.scss";

const Content6 = () => {
  return (
    <div className={styles.container}>
      {/* Left content: Text */}
      <div className={styles.leftContent}>
        <h1>Pre Wedding Makeup</h1>
        <p>
           Pre-wedding makeup is essential for achieving a flawless look on your big day. It allows you to prepare your skin, ensuring a glowing complexion.
           A trial session with your makeup artist helps communicate your vision and try different styles. 
           It also ensures you're ready for touch-ups, enhances your features, and ensures you look stunning in photos and videos.
        </p>
      </div>

      {/* Right content: Video */}
      <div className={styles.rightContent}>
        <video
          className={styles.video}
          src="https://res.cloudinary.com/dtiaycw2o/video/upload/v1756199857/content2_rz2t85.webm"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Content6;
