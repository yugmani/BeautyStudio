import React from 'react';
import Header from "./Components/Header";
import Amenities from "./Components/Amenities";
import Testimonials from "./Components/Testimonials";
import Contact from './Components/Contact';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Amenities />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
