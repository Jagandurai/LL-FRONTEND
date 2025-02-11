import React from 'react';
import styles from './map.module.scss'; // Import the SCSS module

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7474093046753!2d79.41604617484404!3d13.11518168721352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52b31385d780df%3A0x557a910e615c097e!2sLovely%20Looks%20Beauty%20Salon!5e0!3m2!1sen!2sin!4v1736567508519!5m2!1sen!2sin"
        className={styles.mapIframe}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
