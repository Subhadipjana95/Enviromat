import React, { useEffect, useRef, useState } from 'react';
import { User, Search, Leaf } from 'lucide-react';
import { motion } from "motion/react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import gsap from 'gsap';

const Navbar = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const iconButtonsRef = useRef([]);
  const navButtonsRef = useRef([]);
  const dropdownRef = useRef(null);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get authentication state from Redux store
  const { token, user } = useSelector((state) => state.auth);
  const isAuthenticated = !!token;

  // Add elements to refs arrays
  const addToIconButtonsRefs = (el, index) => {
    if (el && !iconButtonsRef.current.includes(el)) {
      iconButtonsRef.current[index] = el;
    }
  };

  const addToNavButtonsRefs = (el, index) => {
    if (el && !navButtonsRef.current.includes(el)) {
      navButtonsRef.current[index] = el;
    }
  };

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Dispatch logout action - you'll need to import this from your auth slice
    // dispatch(logout());
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsDropdownOpen(false);
    navigate('/');
  };

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const logo = logoRef.current;
    const iconButtons = iconButtonsRef.current.filter(Boolean);
    const navButtons = navButtonsRef.current.filter(Boolean);
  
    // More dramatic initial states
    gsap.set(logo, {
      y: -80,
      opacity: 0,
      scale: 0.5,
      rotation: -15,
    });
  
    gsap.set(iconButtons, {
      y: -100,
      opacity: 0,
      scale: 0,
      rotation: -360,
    });
  
    gsap.set(navButtons, {
      y: -60,
      opacity: 0,
      scale: 0.5,
      rotationY: 45,
    });
  
    // Enhanced timeline with more dramatic effects
    const tl = gsap.timeline({ delay: 0.5 });
  
    tl.to(logo, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    })
    .to(iconButtons, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(2.5)',
    }, '-=0.6')
    .to(navButtons, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'back.out(1.7)',
    }, '-=0.4');
  
    return () => {
      tl.kill();
    };
  }, []);
  

  return (
    <header ref={navbarRef} className="bg-transparent fixed top-[10px] left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-7">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink 
            to="/"
            ref={logoRef}
            className="flex items-center space-x-2 bg-[#f9fafb4f] backdrop-blur-xl rounded-full px-2 py-[6px] transform-gpu hover:bg-[#f9fafb8f] transition-colors duration-200"
          >
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <img src="/Logo.png" alt="Logo" className="w-4 h-4" />
            </div>
            <span className="text-[18px] font-[500] tracking-tight text-gray-900">
              EnviroMat
            </span>
          </NavLink>

          {/* Navigation Bar */}
          <nav className="hidden md:flex items-center space-x-3">
            <motion.div
              ref={(el) => addToNavButtonsRefs(el, 0)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.90 }}
            >
              <NavLink 
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium border transform-gpu transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#0ae979] text-gray-600 border-[#08DF73] hover:bg-[#eff8d8]' 
                      : 'bg-[#F9FAFB] text-gray-600 hover:text-gray-700 border-gray-300 hover:bg-[#eff8d8] hover:border-[#08DF73]'
                  }`
                }
              >
                Home
              </NavLink>
            </motion.div>

            <motion.div
              ref={(el) => addToNavButtonsRefs(el, 1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.90 }}
            >
              <NavLink 
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium border transform-gpu transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#0ae979] text-gray-600 border-[#08DF73] hover:bg-[#eff8d8]' 
                      : 'bg-[#F9FAFB] text-gray-600 hover:text-gray-700 border-gray-300 hover:bg-[#eff8d8] hover:border-[#08DF73]'
                  }`
                }
              >
                About
              </NavLink>
            </motion.div>
            
            <motion.div
              ref={(el) => addToNavButtonsRefs(el, 2)}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/shop"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium border transform-gpu transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#0ae979] text-gray-600 border-[#08DF73] hover:bg-[#eff8d8]' 
                      : 'bg-[#F9FAFB] text-gray-600 hover:text-gray-700 border-gray-300 hover:bg-[#eff8d8] hover:border-[#08DF73]'
                  }`
                }
              >
                Shop
              </NavLink>
            </motion.div>
            
            <motion.div
              ref={(el) => addToNavButtonsRefs(el, 3)}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/services"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium border transform-gpu transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#0ae979] text-gray-600 border-[#08DF73] hover:bg-[#eff8d8]' 
                      : 'bg-[#F9FAFB] text-gray-600 hover:text-gray-700 border-gray-300 hover:bg-[#eff8d8] hover:border-[#08DF73]'
                  }`
                }
              >
                Services
              </NavLink>
            </motion.div>
            
            <motion.div
              ref={(el) => addToNavButtonsRefs(el, 4)}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <NavLink 
                to="/community"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium border transform-gpu transition-colors duration-300 ${
                    isActive 
                      ? 'bg-[#0ae979] text-gray-600 border-[#08DF73] hover:bg-[#eff8d8]' 
                      : 'bg-[#F9FAFB] text-gray-600 hover:text-gray-700 border-gray-300 hover:bg-[#eff8d8] hover:border-[#08DF73]'
                  }`
                }
              >
                Community
              </NavLink>
            </motion.div>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-2">
              <motion.button 
                ref={(el) => addToIconButtonsRefs(el, 0)}
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-[#F9FAFB] backdrop-blur-xl px-2 gap-1 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors font-[500] text-[#4a5565] transform-gpu"
              >
                300
                <img src="/Coin.png" alt="coins" className="w-7 h-7 text-gray-600" />
              </motion.button>
              
              {/* User Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <motion.button 
                  ref={(el) => addToIconButtonsRefs(el, 1)}
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-[#F9FAFB] backdrop-blur-xl w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors transform-gpu"
                >
                  <User className="w-5 h-5 text-gray-600" />
                </motion.button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 py-2 z-50"
                  >
                    {isAuthenticated ? (
                      // Authenticated user options
                      <>
                        <div className="px-4 py-2 border-b border-gray-200/50">
                          <p className="text-sm font-medium text-gray-800">
                            {user?.firstName || 'User'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {user?.email || 'user@example.com'}
                          </p>
                        </div>
                        <button
                          onClick={() => handleNavigation('/profile')}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          View Profile
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Logout
                        </button>
                      </>
                    ) : (
                      // Non-authenticated user options
                      <>
                        <button
                          onClick={() => handleNavigation('/signup')}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                          </svg>
                          Sign Up
                        </button>
                        <button
                          onClick={() => handleNavigation('/login')}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                          </svg>
                          Login
                        </button>
                      </>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
