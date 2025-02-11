import React from "react";
import styles from "./content4.module.scss";
import videoSrc from "./content2.mp4";

const Content4 = () => {
  return (
    <div className={styles.container}>
      {/* Left content: Text */}
      <div className={styles.leftContent}>
        <h1>Transfer-Proof Makeup</h1>
        <p>

           Transfer-proof makeup ensures your look stays flawless without smudging or rubbing off onto clothes, masks, or skin. Ideal for long-lasting wear, it’s perfect for physical activities, hot weather, or maintaining a professional appearance.
           To achieve transfer-proof results, use a primer, set with powder, choose cream-to-powder formulas, and finish with a setting spray for added protection.
        </p>
      </div>

      {/* Right content: Video */}
      <div className={styles.rightContent}>
        <video
          className={styles.video}
          src={videoSrc}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Content4;
