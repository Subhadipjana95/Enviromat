import React from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LegacySection from "./components/LegacySection";
import ServicesCard from "./components/ServicesCard";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

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
      <HeroSection />
      <LegacySection />
      <div className="realtive mt-10">
        <ServicesCard />
        <ServicesCard />
      </div>
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
