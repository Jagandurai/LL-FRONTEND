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
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.container}>
      {/* Preload hero image for faster LCP */}
      <link
        rel="preload"
        as="image"
        href="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/person_isbwyu.webp"
      />

      {/* Single flower image (used via CSS pseudo-elements for mirroring) */}
      <img
        src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp"
        alt="Decorative Flower"
        className={styles.mainFlower}
        loading="lazy"
        decoding="async"
      />

      {/* Center content */}
      <div className={styles.person}>
        <img
          src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/person_isbwyu.webp"
          alt="Smiling person with background design"
          loading="eager"
          decoding="async"
          width="368"
          height="368"
        />
      </div>
    </section>
  );
};

export default Hero;
