import React, { useState, useEffect, useRef } from "react";
import styles from "./Component1.module.scss";

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null); // To reference the container
  const cardsRef = useRef([]); // To reference all the card elements

  const cards = [
    { id: 1, image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/hairstyle1_k2mz5o.webp", title: "PONYTAIL" },
    { id: 2, image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/hairstyle2_q8qr8y.webp", title: "WATERFALL" },   
    { id: 3, image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/hairstyle3_iaebm5.webp", title: "CURLS" },
    { id: 4, image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/hairstyle4_bcorjl.webp", title: "RUBBER BAND" },
    { id: 5, image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/hairstyle5_uuitxi.webp", title: "MESSI" },
  ];

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left; 
    const percentage = mouseX / containerRect.width; 


    const index = Math.floor(percentage * cards.length);
    setActiveIndex(index); 
  };

  useEffect(() => {

    const container = containerRef.current;
    const activeCard = cardsRef.current[activeIndex];

    if (container && activeCard) {
      const cardWidth = activeCard.offsetWidth;
      const cardLeft = activeCard.offsetLeft;
      const containerWidth = container.offsetWidth;

      // Calculate the scroll position to center the card
      const scrollPosition =
        cardLeft - containerWidth / 2 + cardWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  }, [activeIndex]);

  return (
    <div
      className={styles.expandingCardsContainer}
      ref={containerRef} // Attach the container reference
      onMouseMove={handleMouseMove} // Handle mouse move to change active card
    >
      <div className={styles.cardsWrapper}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`${styles.card} ${
              activeIndex === index ? styles.active : ""
            }`}
            style={{
              backgroundImage: `url(${card.image})`,
            }}
            ref={(el) => (cardsRef.current[index] = el)} // Attach reference to each card
          >
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCards;
