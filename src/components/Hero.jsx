import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10 p-12">
          <h1 className="text-5xl font-bold mb-4">Welcome to Quinta Diamante</h1>
          <p className="text-lg mb-8">A luxurious villa perfect for your next event or celebration.</p>
          <a href="#contact" className="bg-primary px-6 py-3 rounded-lg text-xl font-semibold hover:bg-primary-dark transition duration-300">
            Book Your Event
          </a>
        </div>
      </section>
    );
};

export default Hero; 