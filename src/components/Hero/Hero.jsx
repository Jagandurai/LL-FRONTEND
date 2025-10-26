// import React from "react";
// import { motion } from "framer-motion";
// import styles from "./Hero.module.scss"; // Ensure this file exists with appropriate styles

// const fadeIn = (direction = "up", type = "tween", delay = 0.3, duration = 1) => ({
//   initial: { opacity: 0, y: direction === "up" ? 20 : -20 },
//   animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
// });

// const slideIn = (direction = "up", type = "tween", delay = 0.3, duration = 1) => ({
//   initial: { opacity: 0, y: direction === "up" ? 30 : -30 },
//   animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
// });

// const Hero = () => {
//   return (
//     <div className={styles.container}>
//       {/* Four corner flower images */}
//       <img src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp" alt="Flower" className={styles.topLeft} />
//       <img src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp" alt="Flower" className={styles.topRight} />
//       <img src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp" alt="Flower" className={styles.bottomLeft} />
//       <img src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp" alt="Flower" className={styles.bottomRight} />

//       {/* Center content */}
//       <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={styles.person}>
//         <motion.img
//           variants={slideIn("up", "tween", 0.5, 1.3)}
//           src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/person_isbwyu.webp"
//           alt="Person"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default Hero;







import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

const fadeIn = (direction = "up", type = "tween", delay = 0.3, duration = 1) => ({
  initial: { opacity: 0, y: direction === "up" ? 20 : -20 },
  animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
});

const slideIn = (direction = "up", type = "tween", delay = 0.3, duration = 1) => ({
  initial: { opacity: 0, y: direction === "up" ? 30 : -30 },
  animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
});

const Hero = () => {
  // Cloudinary base and parameters
  const baseUrl = "https://res.cloudinary.com/dtiaycw2o/image/upload";
  const flowerBase = `${baseUrl}/f_auto,q_auto,w_320/v1756199688/homeheroflower_l0owlr`;
  const personBase = `${baseUrl}/f_auto,q_auto,c_fill,w_400/v1756199689/person_isbwyu`;

  return (
    <div className={styles.container}>
      {/* 🌸 Four corner flower images (responsive + lazy loaded) */}
      <img
        src={`${flowerBase}.webp`}
        srcSet={`
          ${baseUrl}/f_auto,q_auto,w_160/v1756199688/homeheroflower_l0owlr.webp 160w,
          ${baseUrl}/f_auto,q_auto,w_320/v1756199688/homeheroflower_l0owlr.webp 320w,
          ${baseUrl}/f_auto,q_auto,w_640/v1756199688/homeheroflower_l0owlr.webp 640w
        `}
        sizes="(max-width: 600px) 25vw, 320px"
        loading="lazy"
        alt="Flower"
        className={styles.topLeft}
      />

      <img
        src={`${flowerBase}.webp`}
        srcSet={`
          ${baseUrl}/f_auto,q_auto,w_160/v1756199688/homeheroflower_l0owlr.webp 160w,
          ${baseUrl}/f_auto,q_auto,w_320/v1756199688/homeheroflower_l0owlr.webp 320w,
          ${baseUrl}/f_auto,q_auto,w_640/v1756199688/homeheroflower_l0owlr.webp 640w
        `}
        sizes="(max-width: 600px) 25vw, 320px"
        loading="lazy"
        alt="Flower"
        className={styles.topRight}
      />

      <img
        src={`${flowerBase}.webp`}
        srcSet={`
          ${baseUrl}/f_auto,q_auto,w_160/v1756199688/homeheroflower_l0owlr.webp 160w,
          ${baseUrl}/f_auto,q_auto,w_320/v1756199688/homeheroflower_l0owlr.webp 320w,
          ${baseUrl}/f_auto,q_auto,w_640/v1756199688/homeheroflower_l0owlr.webp 640w
        `}
        sizes="(max-width: 600px) 25vw, 320px"
        loading="lazy"
        alt="Flower"
        className={styles.bottomLeft}
      />

      <img
        src={`${flowerBase}.webp`}
        srcSet={`
          ${baseUrl}/f_auto,q_auto,w_160/v1756199688/homeheroflower_l0owlr.webp 160w,
          ${baseUrl}/f_auto,q_auto,w_320/v1756199688/homeheroflower_l0owlr.webp 320w,
          ${baseUrl}/f_auto,q_auto,w_640/v1756199688/homeheroflower_l0owlr.webp 640w
        `}
        sizes="(max-width: 600px) 25vw, 320px"
        loading="lazy"
        alt="Flower"
        className={styles.bottomRight}
      />

      {/* 👤 Center content */}
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="initial"
        animate="animate"
        className={styles.person}
      >
        <motion.img
          variants={slideIn("up", "tween", 0.5, 1.3)}
          src={`${personBase}.webp`}
          srcSet={`
            ${baseUrl}/f_auto,q_auto,c_fill,w_200/v1756199689/person_isbwyu.webp 200w,
            ${baseUrl}/f_auto,q_auto,c_fill,w_400/v1756199689/person_isbwyu.webp 400w,
            ${baseUrl}/f_auto,q_auto,c_fill,w_800/v1756199689/person_isbwyu.webp 800w
          `}
          sizes="(max-width: 600px) 80vw, 400px"
          alt="Person"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </div>
  );
};

export default Hero;

