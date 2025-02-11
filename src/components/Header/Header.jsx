import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

// Import Link from react-router-dom for routing
import { Link } from "react-router-dom";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  // Handle click outside to close menu
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  // Function to toggle the menu when the icon is clicked
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev); // Toggle the menu state
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>𝓛𝓸𝓿𝓮𝓵𝔂 𝓛𝓸𝓸𝓴𝓼</div>

        {/* Menu */}
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)} // Dynamically adjust the menu based on state
        >
          <li>
            <Link to="/">Home</Link> {/* Link to Home page */}
          </li>
          <li>
            <Link to="/service">Services</Link> {/* Link to Service page */}
          </li>
          <li>
            <Link to="/gallery">Gallery</Link> {/* Link to Gallery page */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Link to Contact page */}
          </li>
        </ul>

        {/* Menu Icon for small screens */}
        <div className={css.menuIcon} onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
