import React, { useState, useEffect, useRef } from "react";
import styles from "./Component1.module.scss";

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null); // To reference the container
  const cardsRef = useRef([]); // To reference all the card elements

  const cards = [
    { id: 1, image: "/h1.jpg", title: "Card 1" },
    { id: 2, image: "/h2.jpg", title: "Card 2" },
    { id: 3, image: "/h3.jpg", title: "Card 3" },
    { id: 4, image: "/h4.jpg", title: "Card 4" },
    { id: 5, image: "/h5-rubberband.jpg", title: "Card 5" },
  ];

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left; // Mouse position within the container
    const percentage = mouseX / containerRect.width; // Calculate percentage of mouse position

    // Get the index of the card based on the mouse position
    const index = Math.floor(percentage * cards.length);
    setActiveIndex(index); // Set the active card based on mouse position
  };

  useEffect(() => {
    // Scroll the container to center the active card
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
