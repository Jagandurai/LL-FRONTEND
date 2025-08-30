import React, { useState, useEffect } from 'react';
import { projectExperience, WhatDoIHelp } from '../../utils/data';
import css from './Experties.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion.js';

const Experties = () => {
  const [makeupCompleted, setMakeupCompleted] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  const targetMakeups = 1100;
  const targetClients = 1500;

  useEffect(() => {
    const makeupInterval = setInterval(() => {
      setMakeupCompleted((prevCount) => {
        if (prevCount < targetMakeups) {
          return prevCount + 1;
        } else {
          clearInterval(makeupInterval);
          return prevCount;
        }
      });
    }, 5);

    const clientInterval = setInterval(() => {
      setHappyClients((prevCount) => {
        if (prevCount < targetClients) {
          return prevCount + 1;
        } else {
          clearInterval(clientInterval);
          return prevCount;
        }
      });
    }, 4);

    return () => {
      clearInterval(makeupInterval);
      clearInterval(clientInterval);
    };
  }, []);

  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* Left Side - Project Experience */}
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => (
            <motion.div
              variants={fadeIn("right", "tween", (i + 1) * 0.05, 0.3)}
              className={css.exp}
              key={i}
            >
              <div style={{ background: exp.bg }} className="flexCenter">
                <img
                  src={exp.icon}
                  alt={exp.name}
                  style={{ width: '45px', height: '45px' }}
                />
              </div>
              <div>
                <span>{exp.name}</span>
                <span className="secondaryText">{exp.projects} Reviews</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Unique Services */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">What makes our beauty services unique?</span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {paragraph}
            </span>
          ))}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">{makeupCompleted}+</span>
              <span className="secondaryText">Makeup Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">{happyClients}+</span>
              <span className="secondaryText">Happy Clients </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;
