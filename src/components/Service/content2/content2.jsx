import React from "react";
import styles from "./content2.module.scss";

const Content2 = () => {
  return (
    <div className={styles.container}>
      {/* Left content: Text */}
      <div className={styles.leftContent}>
        <h1>HD Makeup</h1>
        <p>
          HD makeup is a popular choice for its natural, flawless finish that looks stunning both in person and on camera. It conceals imperfections like blemishes and acne while providing buildable coverage without feeling heavy.
           Long-lasting and suitable for all skin types, HD makeup offers precise application for a customized look. It’s perfect for brides, models, and anyone seeking perfection!
        </p>
      </div>

      {/* Right content: Video */}
      <div className={styles.rightContent}>
        <video
          className={styles.video}
          src="https://res.cloudinary.com/dtiaycw2o/video/upload/v1756199815/content2_m8bnw5.webm"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Content2;
