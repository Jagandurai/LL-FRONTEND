import React, { useState, useEffect, useRef } from "react";
import { useBookingContext } from "./BookingContext";
import styles from "./Booking.module.scss";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";  // Importing toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Importing styles for react-toastify

const Booking = () => {
  const { showForm, toggleForm } = useBookingContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    date: "",
    time: "",
    message: "",
    serviceName: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const bookingWrapperRef = useRef(null); // Added ref for outside click detection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e.target.value });
  };

  const handleTimeChange = (e) => {
    setFormData({ ...formData, time: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.serviceName) newErrors.serviceName = "Service Name is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;  // If no errors, return true
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");  // Show error toast if form validation fails
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
          toast.success("Your booking has been submitted successfully!");  // Show success toast
          setFormData({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            date: "",
            time: "",
            message: "",
            serviceName: "",
          });

          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log("Error sending email", error.text);
          toast.error("There was an error while submitting your booking. Please try again.");  // Show error toast on failure
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
                  src="/bookingform.jpg"
                  alt="Your image description"
                  className={styles.image}
                />
              </div>

              <div className={styles.formContent}>
                <form ref={formRef} onSubmit={handleSubmit}>
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
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                    {errors.lastName && <p className={styles.errorMessage}>{errors.lastName}</p>}
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

                  <div className={styles.dateTimeField}>
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
                    <div className={styles.timeField}>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleTimeChange}
                        required
                      >
                        <option value="">Select Time</option>
                        {Array.from({ length: 11 }, (_, i) => {
                          const hour = 10 + i;
                          const ampm = hour >= 12 ? "PM" : "AM";
                          const displayHour = hour > 12 ? hour - 12 : hour;
                          const timeValue = `${displayHour}:00 ${ampm}`;
                          return (
                            <option key={i} value={timeValue}>
                              {timeValue}
                            </option>
                          );
                        })}
                      </select>
                      {errors.time && <p className={styles.errorMessage}>{errors.time}</p>}
                    </div>
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

                  <button type="submit" className={styles.bookButton}>
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ToastContainer to display the toasts */}
      <ToastContainer />
    </>
  );
};

export default Booking;
