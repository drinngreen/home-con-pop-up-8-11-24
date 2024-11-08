import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import ZoliBuild from './components/ZoliBuild';
import Marketplace from './components/Marketplace';
import Ecommerce from './components/Ecommerce';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-teal-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <ZoliBuild />
      <Marketplace />
      <Ecommerce />
      <Certifications />
    </div>
  );
}

export default App;