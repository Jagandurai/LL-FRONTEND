import React from "react";
import styles from "./content8.module.scss";
import videoSrc from "./maternity.mp4";

const Content8 = () => {
  return (
    <div className={styles.container}>
      {/* Left content: Text */}
      <div className={styles.leftContent}>
        <h1>Maternity Makeup</h1>
        <p>
           Maternity makeup enhances your natural beauty, providing a smooth, glowing look for photoshoots. It highlights your features, celebrates your body, and captures the love between you and your partner.
            A maternity session creates lasting memories to cherish. Choosing a matte or creamy finish ensures minimal touch-ups, while mineral makeup offers a safe option during pregnancy, making you feel radiant.
            ensuring you feel confident, relaxed, and stunning for every pre-wedding moment.
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

export default Content8;
