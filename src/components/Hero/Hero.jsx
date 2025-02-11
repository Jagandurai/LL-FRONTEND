import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss"; // Ensure this file exists with appropriate styles

const fadeIn = (direction = "up", type = "tween", delay = 0.3, duration = 1) => ({
  initial: { opacity: 0, y: direction === "up" ? 20 : -20 },
  animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
});

const slideIn = (direction = "up", type = "tween", delay = 0.3, duration = 1) => ({
  initial: { opacity: 0, y: direction === "up" ? 30 : -30 },
  animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
});

const Hero = () => {
  return (
    <div className={styles.container}>
      {/* Four corner flower images */}
      <img src="/homeheroflower.png" alt="Flower" className={styles.topLeft} />
      <img src="/homeheroflower.png" alt="Flower" className={styles.topRight} />
      <img src="/homeheroflower.png" alt="Flower" className={styles.bottomLeft} />
      <img src="/homeheroflower.png" alt="Flower" className={styles.bottomRight} />

      {/* Center content */}
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={styles.person}>
        <motion.img
          variants={slideIn("up", "tween", 0.5, 1.3)}
          src="/person.png"
          alt="Person"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
