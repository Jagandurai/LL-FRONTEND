import React, { useState } from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true); // Mark the video as loaded
  };

  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <video
          className={`${styles.heroVideo} ${videoLoaded ? "loaded" : ""}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto" // Ensure the video is preloaded
          onCanPlay={handleVideoLoad} // Trigger when video is ready to play
        >
          <source src="https://res.cloudinary.com/dtiaycw2o/video/upload/v1756199958/servicevideo_tmmdcb.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.heroContent}>
        <h1>Welcome to Our Services</h1>
        <p>Discover our wide range of services tailored for you.</p>
        <button className={styles.heroButton}>Variety of Makeup</button>
      </div>
    </section>
  );
};

export default Hero;
