import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LegacySection from './components/LegacySection';
import ServicesCard from './components/ServicesCard';



function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <HeroSection />
      <LegacySection />
      <ServicesCard />
    </div>
  );
}

export default App;
