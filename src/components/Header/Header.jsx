import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { Link } from "react-router-dom";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  // Helper: close menu if on mobile view
  const handleMenuItemClick = () => {
    if (window.innerWidth <= 640) {
      setMenuOpened(false);
    }
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
        {/* Make the LOVELY LOOKS text clickable */}
        <Link
          to="/"
          className={css.logo}
          onClick={handleMenuItemClick}
          style={{ textDecoration: "none" }}  // Remove underline here
        >
          <div
            style={{
              fontSize: "32px",
              fontFamily: "serif",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            LOVELY LOOKS
          </div>
        </Link>

        {/* Menu */}
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <Link
              to="/"
              onClick={handleMenuItemClick}
              style={{ textDecoration: "none" }}  // Remove underline here
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              onClick={handleMenuItemClick}
              style={{ textDecoration: "none" }}  // Remove underline here
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={handleMenuItemClick}
              style={{ textDecoration: "none" }}  // Remove underline here
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleMenuItemClick}
              style={{ textDecoration: "none" }}  // Remove underline here
            >
              Contact
            </Link>
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
