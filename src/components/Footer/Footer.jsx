import React from "react";
import css from "./Footer.module.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <footer className={css.footer}>
      <div className={css.footerTop}>
        <div className={css.container}>
          <div className={css.footerBrand}>
            <span className={css.footerLogo}>𝓛𝓸𝓿𝓮𝓵𝓎 𝓛𝓸𝓸𝓴𝓼</span>
            <p className={css.footerText}>
              At LOVELY LOOKS, we are passionate about helping you look your best with high-quality beauty and styling services.
            </p>

            <ul className={css.socialList}>
              <li>
                <a href="https://facebook.com" className={css.socialLink}>
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/facebook.png"
                    alt="Facebook"
                    className={css.socialIcon}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className={css.socialLink}>
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                    alt="Twitter"
                    className={css.socialIcon}
                  />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className={css.socialLink}>
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
                    alt="Instagram"
                    className={css.socialIcon}
                  />
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" className={css.socialLink}>
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/pinterest.png"
                    alt="Pinterest"
                    className={css.socialIcon}
                  />
                </a>
              </li>
            </ul>
          </div>

          <ul className={css.footerList}>
            <li>
              <a className={css.footerListTitle}>ADDRESS</a>
            </li>
            <li className={css.footerListItem}>
              <div className={css.addressContent}>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/address.png"
                  alt="Address Icon"
                  className={css.addressIcon}
                />
                <p>36/1, Bairaki madam street,<br /> Near Congress Building,<br /> Sholingur-631102, Tamil Nadu-India</p>
              </div>
            </li>
            <li className={css.footerListItem}>
              <div className={css.addressContent}>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/phone.png"
                  alt="Phone Icon"
                  className={css.addressIcon}
                />
                <p>+91-9087992990</p>
              </div>
            </li>
            <li className={css.footerListItem}>
              <div className={css.addressContent}>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/email.png"
                  alt="Email Icon"
                  className={css.addressIcon}
                />
                <p>lovelylooksv@gmail.com</p>
              </div>
            </li>
          </ul>

          <ul className={css.footerList}>
            <li>
              <a className={css.footerListTitle}>QUICK LINKS</a>
            </li>
            <li>
              <Link to="/" className={css.footerListItem}>Home</Link> {/* Link to Home page */}
            </li>
            <li>
              <Link to="/service" className={css.footerListItem}>Service</Link> {/* Link to About Us page */}
            </li>
            <li>
              <Link to="/gallery" className={css.footerListItem}>Gallery</Link> {/* Link to Service page */}
            </li>
            <li>
              <Link to="/contact" className={css.footerListItem}>Contact Us</Link> {/* Link to Contact Us page */}
            </li>
          </ul>

          <ul className={css.footerList}>
            <li>
              <a className={css.footerListTitle}>Condition</a>
            </li>
            <li>
              <a href="" className={css.footerListItem}>Terms and Conditions</a>
            </li>
            <li>
              <a href="" className={css.footerListItem}>Privacy Policy</a>
            </li>
            <li>
              <a href="" className={css.footerListItem}>Cancellation Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.footerBottom}>
        <div className={css.container}>
          <p className={css.copyrightText}>
            <span className={css.copyrightLink}>Copyright {currentYear} 𝓛𝓸𝓿𝓮𝓵𝔂 𝓛𝓸𝓸𝓴𝓼.</span>©All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
