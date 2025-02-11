  import React from 'react';
  import styles from './hero.module.scss'; // Import the SCSS module for styling
  
  const Hero = () => {
    return (
      <div className={styles.heroBanner}>
        <div className={styles.heroImage}></div>
      </div>
    );
  };
  
  export default Hero;
  