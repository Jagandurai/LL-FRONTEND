import React, { useState } from "react";
import styles from "./Hero.module.scss";
import servicevideo from "./servicevideo.mp4"; // Import the video

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
          <source src={servicevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.heroContent}>
        <h1>Welcome to Our Services</h1>
        <p>Discover our wide range of services tailored for you.</p>
        <button className={styles.heroButton}>Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
