import React from "react";
import styles from "./WhatsApp.module.scss"; // Import the SCSS module

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    // Open WhatsApp with the provided number
    window.open("https://wa.me/9087992990", "_blank");
  };

  return (
    <div className={styles.whatsappButton} onClick={handleWhatsAppClick}>
      <img
        src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
        alt="WhatsApp"
      />
    </div>
  );
};

export default WhatsApp;
