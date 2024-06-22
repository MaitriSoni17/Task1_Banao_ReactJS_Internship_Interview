import React from 'react';
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import Navbar from './Components/Navbar';
import HomeScreen from './Components/HomeScreen';
import Feature from './Components/Feature';
import AddTestimonial from './Components/AddTestimonial';
import Testimonials from './Components/Testimonials';
import End from './Components/End';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <ScrollToTop smooth color="#939CA3" className=" rounded-circle" svgPath="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" viewBox="0 0 448 512" />
      <Navbar />
      <HomeScreen />
      <Feature />
      <AddTestimonial />
      <Testimonials />
      <End />
      <Footer />
    </>
  );
}

export default App;
