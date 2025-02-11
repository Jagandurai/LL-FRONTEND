import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import default toast styles
import styles from './Notification.module.scss'; // Custom styles for the toast

// Array of notifications with messages and types
const notifications = [
  {
    message: "✨ Grab Your First Booking Deal! ✨ Enjoy a special discount on your first beauty service. Book now and let us pamper you!",
    type: 'info',
  },
  {
    message: "⏰ Hurry! Limited Time Offer! ⏰ Book your beauty service now and get a 15% discount. Hurry, offer ends soon!",
    type: 'info',
  },
  {
    message: "💅 Unlock Our Exclusive Beauty Packages! 💅 Treat yourself to a complete makeover with our all-in-one packages. Book now and get pampered with makeup, skincare, and more!",
    type: 'info',
  },
];

const Notification = () => {
  useEffect(() => {
    // Function to display notifications
    const displayNotification = (index) => {
      toast(notifications[index].message, {
        position: "bottom-left",  // Position at the bottom-left
        autoClose: 25000, // Show each message for 25 seconds
        hideProgressBar: true, // Hide the progress bar
        closeButton: false, // Hide close button
        type: notifications[index].type, // Directly use the string type ('info')
        className: styles.toastCustom, // Apply custom styles from your SCSS file
      });
    };

    // Show the first message after 20 seconds
    const firstMessageTimeout = setTimeout(() => {
      displayNotification(0);
    }, 20000); // Initial delay of 20 seconds

    // Show the second message 1 minute after the first message disappears
    const secondMessageTimeout = setTimeout(() => {
      displayNotification(1);
    }, 45000); // 1 minute after the first message disappears (20s + 25s + 60s)

    // Show the third message 2 minutes after the second message disappears
    const thirdMessageTimeout = setTimeout(() => {
      displayNotification(2);
    }, 135000); // 2 minutes after the second message disappears (20s + 25s + 60s + 25s + 120s)

    // Start the cycle over after 5 minutes (300 seconds) from the third message disappears
    const cycleTimeout = setTimeout(() => {
      displayNotification(0); // Restart the cycle by showing the first message again
    }, 300000); // 5 minutes after the third message disappears (20s + 25s + 60s + 25s + 120s + 300s)

    // Cleanup timers when the component is unmounted
    return () => {
      clearTimeout(firstMessageTimeout);
      clearTimeout(secondMessageTimeout);
      clearTimeout(thirdMessageTimeout);
      clearTimeout(cycleTimeout);
    };
  }, []);

  return (
    <div>
      <ToastContainer />  {/* Toast container to display the toasts */}
    </div>
  );
};

export default Notification;
