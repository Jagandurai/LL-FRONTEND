import React, { useState, useEffect, useRef } from "react";
import { useBookingContext } from "./BookingContext";
import styles from "./Booking.module.scss";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";  
import 'react-toastify/dist/ReactToastify.css';  

const Booking = () => {
  const { showForm, toggleForm } = useBookingContext();
  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    date: "",
    message: "",
    serviceName: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const bookingWrapperRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.serviceName) newErrors.serviceName = "Service Name is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");  
      return;
    }

    console.log("Form Submitted", formData);

    emailjs
      .sendForm(
        "service_zoumudh",
        "template_v7rlyi9",
        formRef.current,
        "2oWDW3PThT-1qOPT4"
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
          setIsSubmitted(true);
          toast.success("Your booking has been submitted successfully!");  
          setFormData({
            firstName: "",
            phoneNumber: "",
            date: "",
            message: "",
            serviceName: "",
          });

          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log("Error sending email", error.text);
          toast.error("There was an error while submitting your booking. Please try again.");  
        }
      );

    toggleForm();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bookingWrapperRef.current && !bookingWrapperRef.current.contains(e.target)) {
        toggleForm();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleForm]);

  return (
    <>
      {showForm && (
        <div ref={bookingWrapperRef} className={styles.bookingWrapper} onClick={toggleForm}>
          <div className={styles.bookingForm} onClick={(e) => e.stopPropagation()}>
            <div className={styles.formContainer}>
              <div className={styles.imageContainer}>
                <img
                  src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/bookingform3_blcgfb.jpg"
                  alt="Booking form"
                  className={styles.image}
                />
              </div>

              <div className={styles.formContent}>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <h1 className="bookingheading">CONTACT US</h1>
                  
                  <div className={styles.nameField}>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                    {errors.firstName && <p className={styles.errorMessage}>{errors.firstName}</p>}
                  </div>

                  <div className={styles.contactField}>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                    />
                    {errors.phoneNumber && <p className={styles.errorMessage}>{errors.phoneNumber}</p>}
                  </div>

                  <div className={styles.dateField}>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleDateChange}
                      min="2025-01-05"
                      required
                    />
                    {errors.date && <p className={styles.errorMessage}>{errors.date}</p>}
                  </div>

                  <div className={styles.serviceNameField}>
                    <input
                      type="text"
                      name="serviceName"
                      value={formData.serviceName}
                      onChange={handleChange}
                      placeholder="Service Name"
                      required
                    />
                    {errors.serviceName && <p className={styles.errorMessage}>{errors.serviceName}</p>}
                  </div>

                  <div className={styles.messageField}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="3"
                    />
                  </div>

                  {/* ✅ Button Group */}
                  <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.bookButton}>
                      Book Now
                    </button>
                    <button
                      type="button"
                      className={styles.closeButton}
                      onClick={toggleForm}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Booking;
