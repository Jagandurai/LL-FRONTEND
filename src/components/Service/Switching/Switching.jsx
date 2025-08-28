import React, { useState, useMemo } from "react";
import styles from './Switching.module.scss';
import { useBookingContext } from "/src/components/Booking/BookingContext";

const Switching = () => {
  const { toggleForm } = useBookingContext();
  const [activeTab, setActiveTab] = useState("hair");
  const [activeOption, setActiveOption] = useState("haircuts");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "hair") {
      setActiveOption("haircuts");
    } else if (tab === "skin") {
      setActiveOption("skinCare");
    } else if (tab === "body") {
      setActiveOption("bodyMassage");
    } else if (tab === "bridal") {
      setActiveOption("bridalServices");
    }
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const tabContent = useMemo(() => ({
    hair: {
      haircuts: {
        title: "Haircuts & Styling",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/haircut_wht2tg.webp",
        description: "Whether you crave a trendy cut, a vibrant hue, or simply a style that flatters your unique features, our top hairstylists will guide you with their unparalleled knowledge and passion.",
      },
      hairColouring: {
        title: "Hair Colouring & Highlighting",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Haircolour_fppjdo.webp",
        description: "Craving a splash of colour that reflects your vibrant spirit? Look no further than Lovely Looks Beauty Salon, a Luxury Salon renowned for its artistry in hair colouring and highlighting.",
      },
      HairSpa: {
        title: "Hair Spa",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Hair-Spa_vvmujg.webp",
        description: "Give your hair the ultimate Luxury Salon getaway at Lovely Looks Beauty Salon, your premier Unisex Salon haven. Step beyond the everyday and into a world of deep nourishment and revitalization. Our Best Beauty Salon experts will curate a personalised Hair Spa experience tailored to your specific needs.",
      },
      HairStraightening: {
        title: "Hair Straightening",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/Hair-Straightening_yesxl9.webp",
        description: "Say goodbye to frizz and hello to smooth, manageable locks with Lovely Looks Beauty Salon, the Best Beauty Salon offering Permanent Hair Straightening. Step into our Luxury Salon and prepare to experience the transformation you've always dreamed of. Whether you seek sleek, poker-straight tresses or effortless, bouncy waves, our Permanent Hair Straightening techniques will achieve your long-lasting dream hair.",
      },
      KeratinTreatment: {
        title: "Keratin Treatment",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Keratin_Treatment_rnjms9.webp",
        description: "Say goodbye to dull, unmanageable hair and hello to a world of smooth, luminous locks with Lovely Looks Beauty Salon, offering transformative Keratin Treatments. Step into our Luxury Salon and experience the magic of keratin, a revolutionary treatment that infuses your hair with strength and shine.",
      },
    },
    skin: {
      skinCare: {
        title: "D-Tan",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/D-Tan_p0gep3.webp",
        description: "Let Lovely Looks Beauty Salon help you unveil your natural glow! Our De-Tan treatments gently and effectively remove unwanted tan lines, revealing an even, radiant complexion. Whether you've spent too much time basking in the sun or simply want a brighter start, our Luxury Salon offers the perfect solution.",
      },
      FaceMasks: {
        title: "Face Masks",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/latest-Face-Masks_ozjct2.webp",
        description: "Indulge in a personalised experience with Face Masks at Lovely Looks Beauty Salon. We have masks carefully chosen to address your specific skin concerns. Whether you seek hydration, rejuvenation, or targeted treatment, our experts will choose a mask just for you, leaving your skin nourished and pampered.",
      },
      FaceCleanUp: {
        title: "Face-Clean Up",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/Face-Clean-Up_jqzixv.webp",
        description: "Treat your skin to a meticulous Face-Clean Up at Lovely Looks Beauty Salon. Our experts utilise gentle yet effective techniques to remove impurities, dead skin cells, and excess oil, leaving your skin feeling refreshed, reborn, and ready to absorb the benefits of subsequent treatments.",
      },
      Facials: {
        title: "Facials",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/facial_p4d6jg.webp",
        description: "Embark on a personalised journey to radiant skin with a Facial at Lovely Looks Beauty Salon. Choose from a variety of options, each designed to address specific concerns like dryness, uneven skin tone, or visible signs of ageing. Our expert estheticians will tailor the facial to your unique needs, ensuring optimal results for a luminous complexion.",
      },
      HydraFacial: {
        title: "HydraFacial",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/hydrafacial_vlqrxp.webp",
        description: "Experience the transformative power of a HydraFacial at Lovely Looks Beauty Salon. This combines deep cleansing, exfoliation, and hydration in one seamless treatment. Say goodbye to impurities and hello to plump, glowing skin that radiates natural beauty. Discover the ultimate indulgence and Best Salon for Facials in Hyderabad at Naturals.",
      },
    },
    body: {
      bodyMassage: {
        title: "Manicure",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/manicure_o5q4cv.webp",
        description: "At Lovely Looks Beauty Salon, your hands don't just deserve nail care, they deserve a masterpiece. Our skilled technicians will transform your fingertips into works of art with luxurious manicures. Choose from classic polishes, trendy gels, or intricate nail art to express your unique style. Let your hands tell a story of self-care and sophistication.",
      },
      Pedicure: {
        title: "Pedicure",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/pedicure_o2njos.webp",
        description: "At Lovely Looks Beauty Salon, your hands don't just deserve nail care, they deserve a masterpiece. Our skilled technicians will transform your fingertips into works of art with luxurious manicures. Choose from classic polishes, trendy gels, or intricate nail art to express your unique style. Let your hands tell a story of self-care and sophistication.",
      },
      Reflexology: {
        title: "Reflexology",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/Reflexology_iaqczh.webp",
        description: "Embark on a journey of inner peace and balance with Reflexology at Lovely Looks Beauty Salon. Our skilled therapists apply gentle pressure to specific points on your feet, stimulating corresponding organs and promoting relaxation. Experience improved circulation, reduced stress, and a renewed sense of well-being.",
      },
      ThreadingWaxing: {
        title: "Threading & Waxing",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/threading_aatw3w.webp",
        description: "Achieve flawless brows and silky-smooth skin with Threading & Waxing at Lovely Looks Beauty Salon. Our expert technicians offer meticulous services tailored to your specific needs and preferences. Whether you desire defined brows or hair-free underarms, we ensure precision and comfort every step of the way.",
      },
      NailArt: {
        title: "Nail Art",
        imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Nail_Art_jmvkbh.webp",
        description: "Let your nails be your canvas at Lovely Looks Beauty Salon. Our talented technicians are artists in disguise, wielding their brushes to create intricate designs, playful patterns, or elegant accents. Express your individuality, celebrate special occasions, or simply indulge in the joy of artistic expression. Your nails are your story, let them tell it boldly and beautifully.",
      },
    },
    bridal: {
      bridalServices: {
        title: "Pre-Wedding & Bridal",
        imgSrc: "images/bridal-services.png",
        description: "Prepare for your special day with our bridal services, designed to enhance your beauty and confidence.",
      },
    },
  }), []);

  return (
    <div className={styles.switchingContainer}>
      <div className={styles.tabs}>
        <button onClick={() => handleTabClick("hair")} className={activeTab === "hair" ? styles.active : ""}>Hair</button>
        <button onClick={() => handleTabClick("skin")} className={activeTab === "skin" ? styles.active : ""}>Skin</button>
        <button onClick={() => handleTabClick("body")} className={activeTab === "body" ? styles.active : ""}>Body</button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.leftOptions}>
          {Object.keys(tabContent[activeTab]).map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={activeOption === option ? styles.active : ""}
            >
              {tabContent[activeTab][option].title}
            </button>
          ))}
        </div>
        <div className={styles.rightContent}>
          <div className={styles.tabImage}>
            <img
              src={tabContent[activeTab][activeOption].imgSrc}
              alt={activeOption}
              loading="lazy"
              className={styles.fixedImage}
            />
          </div>
          <div className={styles.tabDescription}>
            <h3>{tabContent[activeTab][activeOption].title}</h3>
            <p>{tabContent[activeTab][activeOption].description}</p>
            <button className={styles.enquiryBtn} onClick={toggleForm}>
              Book a Service Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switching;
