import React from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";



// import OpenRoute from "./components/core/Auth/OpenRoute";
// import PrivateRoute from "./components/core/Auth/PrivateRoute";


import Navbar from './components/common/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SIgnUp';
import Error from './Pages/Error';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import UpdatePassword from './Pages/UpdatePassword';
import VerifyEmail from './Pages/VerifyEmail';
import ForgotPassword from './Pages/ForgotPassword';
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
        <Route
          path="update-password/:id"
          element={
              <UpdatePassword />
          }
        />
        <Route
          path="verify-email"
          element={
              <VerifyEmail />
          }
        />
        <Route
          path="forgot-password"
          element={
              <ForgotPassword />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
