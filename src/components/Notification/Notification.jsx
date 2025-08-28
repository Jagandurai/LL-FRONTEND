// // ModalNewsletter.jsx

// import React, { useEffect, useState } from 'react';
// import styles from './ModalNewsletter.module.scss'; // Your SCSS file

// const ModalNewsletter = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 5000); // Open after 5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className={styles.modal} data-modal>
//           <div className={styles.modalCloseOverlay} data-modal-overlay onClick={closeModal}></div>

//           <div className={styles.modalContent}>
//             <button className={styles.modalCloseBtn} data-modal-close onClick={closeModal}>
//               ×
//             </button>

//             <div className={styles.newsletterImg}>
//               <img src="/assets/images/newsletter.png" alt="subscribe newsletter" width="400" height="400" />
//             </div>

//             <div className={styles.newsletter}>
//               <form action="#">
//                 <div className={styles.newsletterHeader}>
//                   <h3 className={styles.newsletterTitle}>Subscribe Newsletter.</h3>
//                   <p className={styles.newsletterDesc}>
//                     Subscribe the <b>LOVELY LOOKS</b> to get latest products and discount update.
//                   </p>
//                 </div>

//                 <input
//                   type="email"
//                   name="email"
//                   className={styles.emailField}
//                   placeholder="Email Address"
//                   required
//                 />

//                 <button type="submit" className={styles.btnNewsletter}>
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ModalNewsletter;
