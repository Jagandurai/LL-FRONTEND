import React from "react";
import styles from "./content5.module.scss";
import videoSrc from "./bridevideo.mp4";

const Content5 = () => {
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
        <h1>Glossy Skin Makeup</h1>
        <p>
          Glossy skin makeup is a popular choice for those seeking a natural, healthy, and youthful appearance.
          It mimics the look of well-hydrated skin, often associated with vitality. This makeup style focuses on a dewy finish rather than matte coverage, creating a plump, glowing complexion.
          Key elements include hydration, skincare with ingredients like hyaluronic acid, and a subtle, effortless aesthetic.
        </p>
      </div>
    </div>
  );
};

export default Content5;
