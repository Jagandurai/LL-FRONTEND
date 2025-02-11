import React from "react";
import styles from "./content3.module.scss";
import videoSrc from "./bridevideo.mp4";

const Content3 = () => {
  return (
    <div className={styles.container}>
      {/* Left content: Video */}
      <div className={styles.leftContent}>
        <video
          className={styles.video}
          src={videoSrc}
          loop
          autoPlay
          muted
        ></video>
      </div>

      {/* Right content: Text */}
      <div className={styles.rightContent}>
        <h1>Waterproof Makeup</h1>
        <p>      
          Waterproof makeup is perfect for ensuring your look stays intact, even in sweat, rain, or intense physical activities. It resists moisture, preventing smudging and fading, ideal for humid climates or long days. Waterproof makeup offers durability and long-lasting results without constant touch-ups. 
          However, removal can be challenging, and some may experience irritation, so careful cleansing is advised.
        </p>
      </div>
    </div>
  );
};

export default Content3;
