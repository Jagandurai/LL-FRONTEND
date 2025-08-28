import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useBookingContext } from "/src/components/Booking/BookingContext";  // Import BookingContext

function AdModal({ show, onHide }) {
  const { toggleForm } = useBookingContext();  // Get toggleForm from context

  const modalHeaderStyle = {
    backgroundColor: '#ffe6f0',
    color: '#880e4f',
    fontWeight: 'bold',
    borderBottom: 'none',
    textAlign: 'center',
    padding: '1rem',
    borderRadius: '12px 12px 0 0',
  };

  const modalBodyStyle = {
    textAlign: 'center',
    padding: '1.5rem',
    color: '#333',
    fontSize: '1.2rem',
    lineHeight: '1.5',
  };

  const bookButtonStyle = {
    backgroundColor: '#6a1b9a',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 25px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const closeButtonStyle = {
    backgroundColor: '#bbb',
    color: 'black',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 25px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton style={modalHeaderStyle}>
        <Modal.Title>💖 Book a Free Trial Makeup Now!</Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalBodyStyle}>
        <p>
          ✨ <strong>Enjoy a FREE makeup trial</strong> with our top stylists and feel like a star! 💄  
          Limited time offer — book your session today and let us bring out your natural beauty! 🌟
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button 
          style={bookButtonStyle}
          onClick={() => {
            toggleForm();
            onHide();
          }}
        >
          Book Now
        </Button>
        <Button style={closeButtonStyle} variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Advertisement() {
  const location = useLocation();
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    if (location.pathname === '/service' || location.pathname === '/gallery') {
      // First ad after 1 minutes
      timeoutId = setTimeout(() => {
        setShowAd(true);

        // Then show ad every 5 minutes
        intervalId = setInterval(() => {
          setShowAd(true);
        }, 300000);
      }, 30000 ); // 1 minutes
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [location.pathname]);

  return <AdModal show={showAd} onHide={() => setShowAd(false)} />;
}
