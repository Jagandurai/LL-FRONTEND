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
  // Base Cloudinary URL for flower images
  const flowerBaseURL = "https://res.cloudinary.com/dtiaycw2o/image/upload/w_200,h_200,dpr_auto,f_webp/v1756199688/homeheroflower_l0owlr.webp";
  // Base Cloudinary URL for person image
  const personURL = "https://res.cloudinary.com/dtiaycw2o/image/upload/w_400,h_400,dpr_auto,f_webp/v1756199689/person_isbwyu.webp";

  return (
    <div className={styles.container}>
      {/* Four corner flower images (lazy-loaded) */}
      <img src={flowerBaseURL} alt="Flower" className={styles.topLeft} loading="lazy" />
      <img src={flowerBaseURL} alt="Flower" className={styles.topRight} loading="lazy" />
      <img src={flowerBaseURL} alt="Flower" className={styles.bottomLeft} loading="lazy" />
      <img src={flowerBaseURL} alt="Flower" className={styles.bottomRight} loading="lazy" />

      {/* Center content */}
      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className={styles.person}>
        <motion.img
          variants={slideIn("up", "tween", 0.5, 1.3)}
          src={personURL}
          alt="Person"
          loading="eager" // center image should load immediately
        />
      </motion.div>
    </div>
  );
};

export default Hero;



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



