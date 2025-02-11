import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

const People = () => {
  const updatedSliderSettings = {
    ...sliderSettings,        // Keep any existing settings from sliderSettings
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 3000,      // Change to 3 seconds
    pauseOnHover: true, 
    infinite:true,      // Pause autoplay when hovered over
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="people"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}>

        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">People talk about us</span>
          <p style={{ marginTop: "2rem" }}>
            Our clients rave about Lovely Looks Beauty Salon for exceptional services, from makeup and facials to manicures, pedicures, and haircuts.
          </p>
          <p>We provide personalized care and outstanding results, leaving you feeling beautiful and confident.</p>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to include css in index.html head */}
          <Slider {...updatedSliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                    <div className={css.stars}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className={index < comment.rating ? css.filledStar : css.emptyStar}>&#9733;</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

      </motion.div>

    </motion.section>
  );
};

export default People;
