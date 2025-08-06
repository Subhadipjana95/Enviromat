import React from "react";

// import OpenRoute from "./components/core/Auth/OpenRoute";
// import PrivateRoute from "./components/core/Auth/PrivateRoute";

import Navbar from './components/common/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';



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
