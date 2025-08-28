import React, { useState } from 'react';
import styles from './Faq.module.scss';

const faqs = [
  {
    question: "How much does the keratin treatment cost?",
    answer: "At Lovely Looks, our keratin treatments start from ₹3,999 and are conducted by expert stylists using premium products. Transform your hair with our professional care, ensuring smooth, shiny, and frizz-free results.",
  },
  {
    question: "What is the cost for pedicure?",
    answer: "At Lovely Looks, pedicure services start at just ₹500. Enjoy the expertise of our professionals who provide top-quality care to keep your feet looking and feeling their best. Visit us for a relaxing and rejuvenating pedicure experience.",
  },
  {
    question: "What are the bridal makeup packages available?",
    answer: "At Lovely Looks, the Bridal Package starts at ₹5000. Let our experts pamper you with top-tier beauty treatments to make you look stunning on your special day. Experience a comprehensive bridal makeover tailored to enhance your natural beauty.",
  },
  {
    question: "What is cost Skin lightening?",
    answer: "At Lovely Looks, skin lightening treatments start at ₹2400. Experience the benefits of our specialized care with the expertise of our skin professionals. Visit us for a premium treatment that enhances your skin's radiance and glow.",
  },
  {
    question: "How much for hair wash and blow dry for women?",
    answer: "At Lovely Looks, a hair wash and blow-dry for women starts at ₹300. Enjoy the expertise of our professional stylists for a refreshing and stylish look. Visit us for a premium hair care experience tailored to your style.",
  },
  {
    question: "How much does waxing cost?",
    answer: "At Lovely Looks, waxing services start at just ₹250. Experience smooth and flawless skin with the expertise of our professionals. Visit us for a premium waxing experience tailored to your needs.",
  },
  {
    question: "Pricing for hair spa Treatment?",
    answer: "At Lovely Looks, our hair spa treatments start at ₹1000. Experience the expertise of our hairstylists and the benefits of premium quality products. Indulge in a luxurious session that revitalizes and nourishes your hair.",
  },
  {
    question: "How much you will charge for deep U cut for women?",
    answer: "At Lovely Looks, the cost of a deep U-cut for women starts at just ₹150. Let our expert hairstylists transform your hair with precision and style. Experience the perfect blend of creativity and skill to achieve a look that's uniquely yours. Visit us today for a premium haircut experience.",
  },
  {
    question: "What is the starting price for women's haircut?",
    answer: "At Lovely Looks, women's haircuts start at just ₹250. Experience the expertise of our professional hairstylists who are dedicated to giving you a look that suits your style. Visit us for a top-notch grooming experience tailored specifically for women.",
  },
  {
    question: "What are the opening hours of Lovely Looks?",
    answer: "Mon to Fri 10.00 am to 9.00 pm / Sat & Sun 8.00 am to 9.00 pm",
  },
  {
    question: "What is the price for scalp treatment?",
    answer: "At Lovely Looks, our scalp treatments, starting from ₹1,950, are performed by expert stylists using premium products. Restore and nourish your scalp with our professional care, ensuring optimal health and rejuvenation for your hair.",
  },
  {
    question: "How much does it cost for hair colouring?",
    answer: "At Lovely Looks, expert stylists use premium products for our hair coloring services, which start from ₹600. Achieve vibrant and personalized color with the assurance of professional expertise and top-quality products.",
  },
  {
    question: "What is the membership card price?",
    answer: "At Lovely Looks, the membership card is available for just ₹100, offering exclusive benefits and discounts on our range of premium salon services.",
  },
  {
    question: "What about the price for layer cut?",
    answer: "At Lovely Looks, a stylish and expertly crafted layer cut starts at just ₹500. Our professional stylists ensure you get the perfect look tailored to your unique style.",
  },
  {
    question: "How much does it cost for facial?",
    answer: "At Lovely Looks, the cost for a facial starts at just ₹300. We use high-quality premium products and our services are provided by experienced experts.",
  },
  {
    question: "Is a prior booking appointment required?",
    answer: "No, prior booking appointment required at Lovely Looks.",
  },
  {
    question: "What is the cost of hair straightening and smoothing at Lovely Looks?",
    answer: "At Lovely Looks, hair straightening and smoothing services start at just ₹4,999, offering you sleek, frizz-free hair at an affordable price.",
  },
];

const FAQ = () => {
  return (
    <div className={styles.faqWrapper}>
      <h2 className={styles.heading}>Frequently Asked Questions (FAQS)</h2>
      <div className={styles.faqGroup}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.faqTitle}>
              <h5 className={styles.faqSubHeading}>
                <span className={styles.faqText}>{faq.question}</span>
                <strong className={styles.faqIcon}></strong>
              </h5>
            </div>
            <div className={styles.faqBody}>
              <ul>
                <li>{faq.answer}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;