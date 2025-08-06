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


// import OpenRoute from "./components/core/Auth/OpenRoute";
// import PrivateRoute from "./components/core/Auth/PrivateRoute";


import Navbar from './components/common/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';


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
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';
  return (
    <div className="min-h-screen bg-gray-50">

      {!hideNavbar && (
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="login"
          element={
            <Login />
          }
        />
        <Route
          path="signup"
          element={
            <SignUp />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
