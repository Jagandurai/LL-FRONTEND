import React from 'react';
import styles from './ServiceList.module.scss';
import { useBookingContext } from "/src/components/Booking/BookingContext";

const ServiceList = () => {
  const timelineItems = [
    { 
      serviceName: 'Consultation', 
      title: 'Stage 1', 
      description: 'The consultation stage of bridal makeup is crucial because it gives the bride and the makeup artist a chance to discuss and arrange the ideal look for the wedding day. It offers an opportunity to learn about the brides preferences, consider several looks, and make sure that the makeup fits the wedding general concept and style.', 
      accentColor: '#41516C',
      image: '/Consultation.jpg'  
    },
    { 
      serviceName: 'Planning', 
      title: 'Stage 2', 
      description: 'Planning is an essential step in bridal makeup that entails organising and coordinating various elements to guarantee a seamless and practical makeup application on the wedding day. Planning beforehand can help create a unified and distinctive style that highlights the brides inherent beauty and complements the wedding theme.', 
      accentColor: '#FBCA3E',
      image: '/planning.jpg'  
    },
    { 
      serviceName: 'Pre bridal', 
      title: 'Stage 3', 
      description: 'Pre-bridal preparation is vital in achieving a flawless and radiant bridal makeup look. Before the wedding, a range of skincare and beauty regimens are included. The objective is to bring out the brides beauty, ensure her skin is in perfect condition, and add skincare that will stay all day.', 
      accentColor: '#E24A68',
      image: '/prebridal.jpg'  
    },
    { 
      serviceName: 'Trial session', 
      title: 'Stage 4', 
      description: 'An essential part of the wedding planning process is a bridal makeup trial. It enables the bride and makeup artist to work together to develop and perfect the ideal bridal look. The trial session offers a chance to try out several aesthetic looks, express your preferences, and ensure the final appearance is precisely what you had in mind.', 
      accentColor: '#1B5F8C',
      image: '/trail.jpg'  
    },
    { 
      serviceName: 'Actual day', 
      title: 'Stage 5', 
      description: 'The actual day of bridal makeup is an exciting and memorable time when the bride gets her makeup professionally done for her wedding day. To ensure a stress-free and joyful experience, planning ahead and setting aside enough time to apply makeup is crucial.', 
      accentColor: '#4CADAD',
      image: '/actualday.jpg' 
    },
    
  ];
const { toggleForm } = useBookingContext();
  return (
    <div className={styles.projectBody}>
      <h1 className={styles.title}>Journey Of Makeup</h1>
      <div className={styles.timelineContainer}>
        {/* Button in the center of the timeline */}

        <ul className={styles.timeline}>
          {timelineItems.map((item, index) => (
            <li key={index} style={{ '--accent-color': item.accentColor }} className={styles.timelineItem}>
              <div className={styles.serviceName}>{item.serviceName}</div>
              <div className={styles.descr}>{item.description}</div>
              <button onClick={toggleForm} className={styles.centerButton}>Book Now</button>
              <div className={`${styles.containerImageItems} ${index % 2 === 0 ? styles.rightImage : styles.leftImage}`}>
                <img src={item.image} alt={`Image for ${item.title}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceList;
