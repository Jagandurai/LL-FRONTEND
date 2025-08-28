import React from 'react';
import styles from './Customized.module.scss';

const Customized = () => {
  const services = [
    {
      icon: 'topnotch.webp',
      title: '𝓣𝓸𝓹 𝓝𝓸𝓽𝓬𝓱 𝓠𝓾𝓪𝓵𝓲𝓽𝔂',
      description: 'Topnotch quality in bridal service is by exceptional expertise.',
    },
    {
      icon: 'makeover.webp',
      title: '𝓟𝓮𝓻𝓼𝓸𝓷𝓪𝓵𝓲𝓼𝓮𝓭 𝓜𝓪𝓴𝓮𝓾𝓹',
      description: 'A key component of superior quality in bridal services is customized makeup.',
    },
    {
      icon: 'adept.webp',
      title: '𝓔𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮𝓭 𝓢𝓽𝔂𝓵𝓲𝓼𝓽𝓼',
      description: 'A professional stylist is essential to get excellent bridal services.',
    },
    {
      icon: 'route.webp',
      title: '𝓐𝓵𝓵 𝓛𝓸𝓬𝓪𝓽𝓲𝓸𝓷𝓼',
      description: "Our bridal service in Tamil Nadu and Andhra thrives on personalized attention and care.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Services</h2>
      <h3 className={styles.subtitle}>Bridal Service Customized For You</h3>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>
              <img src={service.icon} alt={`${service.title} Icon`} />
            </div>
            <h4 className={styles.cardTitle}>{service.title}</h4>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customized;
