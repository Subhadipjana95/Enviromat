import React from "react";
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

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup'|| location.pathname === '/verify-email'|| location.pathname === '/forgot-password'||location.pathname.startsWith('/update-password/');
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
