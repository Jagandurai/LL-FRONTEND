import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.03 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Our Latest Blogs</span>
            <p style={{marginTop: "10px"}}>What about Beautician Courses?</p>
          </div>
          <span className="secondaryText">Explore More Courses</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/showCase1_x8bgyk.webp" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/showCase2_rswno4.webp" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/showCase3_sg0ylw.webp" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
