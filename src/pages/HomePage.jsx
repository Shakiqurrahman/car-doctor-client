import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ContactBanner from '../components/ContactBanner';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ContactBanner />
      <Features />
    </>
  );
};

export default HomePage;