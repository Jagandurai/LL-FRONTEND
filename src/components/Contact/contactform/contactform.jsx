import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import styles from './contactform.module.scss'; // Import your SCSS module
import { toast, ToastContainer } from 'react-toastify';  // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import styles for react-toastify

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (data) => {
    const { name, phone, subject, message } = data; // Extract phone instead of email
    try {
      setDisabled(true);

      const templateParams = {
        name,
        phone, // Include phone number instead of email
        subject,
        message,
      };

      // Send the email using EmailJS with provided credentials
      await emailjs.send(
        'service_zoumudh',  // Your Service ID
        'template_60i2wae',  // Your Template ID
        templateParams,      // Data object with form values
        '2oWDW3PThT-1qOPT4'  // Your Public Key
      );

      toast.success('Form submission was successful!');  // Show success toast
    } catch (e) {
      console.error(e);
      toast.error('Uh oh. Something went wrong.');  // Show error toast
    } finally {
      setDisabled(false);
      reset();  // Reset the form after successful submission
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2>Contact Us</h2>
          <p>We are here to help. Please get in touch with us using the form or contact info below.</p>
          <p><strong>Mobile:</strong> 908799220</p>
          <p><strong>Shop Opening Hours:</strong> 10:00 AM to 8:00 PM</p>
        </div>

        <div className={styles.contactForm}>
          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className={`${styles.formRow} row`}>
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  name="name"
                  {...register('name', {
                    required: { value: true, message: 'Please enter your name' },
                    maxLength: { value: 30, message: 'Name must be 30 characters or less' },
                  })}
                  className={`${styles.formControl} form-control`}
                  placeholder="Name"
                />
                {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
              </div>

              {/* Added margin bottom to create space between Name and Phone Number input fields */}
              <div className="col-12 col-md-6" style={{ marginTop: '15px' }}>
                <input
                  type="tel" // Changed to 'tel' for phone number input
                  name="phone"
                  {...register('phone', {
                    required: { value: true, message: 'Please enter your phone number' },
                    pattern: {
                      value: /^[0-9]{10}$/, // Simple pattern for 10-digit phone number (adjust as needed)
                      message: 'Please enter a valid 10-digit phone number',
                    },
                  })}
                  className={`${styles.formControl} form-control`}
                  placeholder="Phone Number"
                />
                {errors.phone && <span className={styles.errorMessage}>{errors.phone.message}</span>}
              </div>
            </div>

            <div className={`${styles.formRow} row`}>
              <div className="col-12">
                <input
                  type="text"
                  name="subject"
                  {...register('subject', {
                    required: { value: true, message: 'Please enter a subject' },
                    maxLength: { value: 75, message: 'Subject cannot exceed 75 characters' },
                  })}
                  className={`${styles.formControl} form-control`}
                  placeholder="Subject"
                />
                {errors.subject && <span className={styles.errorMessage}>{errors.subject.message}</span>}
              </div>
            </div>

            <div className={`${styles.formRow} row`}>
              <div className="col-12">
                <textarea
                  rows={3}
                  name="message"
                  {...register('message', { required: true })}
                  className={`${styles.formControl} form-control`}
                  placeholder="Message"
                />
                {errors.message && <span className={styles.errorMessage}>Please enter a message</span>}
              </div>
            </div>

            <button
              className={`${styles.submitBtn} btn btn-primary`}
              disabled={disabled}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* ToastContainer to display the toasts */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
