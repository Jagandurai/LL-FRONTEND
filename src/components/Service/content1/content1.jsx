import React from "react";
import styles from "./content1.module.scss";

const Content1 = () => {
  return (
    <div className={styles.container}>
      {/* Left content: Video */}
      <div className={styles.leftContent}>
        <video
          className={styles.video}
          src="https://res.cloudinary.com/dtiaycw2o/video/upload/v1756199746/bridevideo_xxqxkq.webm"
          loop
          autoPlay
          muted
        ></video>
      </div>

      {/* Right content: Text */}
      <div className={styles.rightContent}>
        <h1>Bridal Makeup Look</h1>
        <p>
          At Lovely Looks Beauty Salon, we create stunning bridal makeup looks tailored to your style, ensuring you feel 
          radiant and confident on your special day. Our expert artists use top-quality products for a flawless, long-lasting finish. 
          From personalized trials to on-location services, we offer a luxurious, stress-free experience to make your wedding day unforgettable.
        </p>
      </div>
    </div>
  );
};

export default Content1;
