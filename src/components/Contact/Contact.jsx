import React from 'react';
import FAQ from './faq/Faq';
import ContactForm from './contactform/contactform';
import Map from './Map/map';
import Hero from './Hero/hero';

const Contact = () => {
  return (
    <div>
      <Hero/>
      <ContactForm/>
      <FAQ/>
      <Map/>

    </div>
  );
};

export default Contact;
