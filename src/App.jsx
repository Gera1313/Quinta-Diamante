import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-quinta-black">
        <Navbar />
        <main>
          <Hero />
          <Amenities />
          <Gallery />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BookingModal />
      </div>
    </Router>
  );
}

export default App;
