import React from 'react';
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/common/Navbar';
import Home from './Pages/Home';
import SignupForm from './components/core/Auth/SignupForm';
import LoginForm from './components/core/Auth/LoginForm';
import { Routes } from 'react-router-dom';
import { Route } from 'lucide-react';


// Lenis Code --->>>

// // Initialize Lenis
// const lenis = new Lenis({
//   autoRaf: true,
// });

// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// // Add a requestAnimationFrame loop to handle the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);



function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<LegacySection />} />
        <Route path="/login" element={<ServicesCard />} />
      </Routes>
    </div>
  );
}

export default App;
