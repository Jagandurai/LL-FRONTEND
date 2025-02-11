import React, { createContext, useState, useContext } from "react";

// Create the context for booking form visibility
const BookingContext = createContext();

// Custom hook to access the Booking context
export const useBookingContext = () => {
  return useContext(BookingContext);
};

// Booking context provider
export const BookingProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  // Function to toggle the visibility of the booking form
  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <BookingContext.Provider value={{ showForm, toggleForm }}>
      {children}
    </BookingContext.Provider>
  );
};
