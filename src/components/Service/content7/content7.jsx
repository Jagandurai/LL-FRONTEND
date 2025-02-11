import React from "react";
import styles from "./content7.module.scss";
import videoSrc from "./bridevideo.mp4";

const Content7 = () => {
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
        <h1>Bridesmaids Makeup</h1>
        <p>
          Bridesmaids wear makeup to achieve a cohesive and polished appearance, complementing the bride while enhancing their own beauty.
          It creates visual consistency in group photos and aligns with the wedding theme. Professional makeup boosts confidence and ensures the bridesmaids look coordinated without overshadowing the bride.
          It helps achieve a beautiful, unified look that complements the wedding’s overall style.
        </p>
      </div>
    </div>
  );
};

export default Content7;
