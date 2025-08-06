import React, { useEffect, useRef } from 'react';
import { User, Search, Leaf } from 'lucide-react';
import { motion } from "motion/react";
import gsap from 'gsap';

const Navbar = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const iconButtonsRef = useRef([]);
  const navButtonsRef = useRef([]);

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
      <div className="max-w-full mx-auto px-9 lg:px-9">
        <div className="flex justify-between items-center h-20">
          <div className='flex justify-between items-center w-[50%]'>
            {/* Logo */}
            <div 
              ref={logoRef}
              className="flex items-center space-x-2 bg-[#f9fafb4f] backdrop-blur-xl rounded-full px-2 py-[6px] transform-gpu"
            >
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <img src="/Logo.png" alt="Logo" className="w-4 h-4" />
              </div>
              <span className="text-[18px] font-[500] tracking-tight text-gray-900">
                EnviroMat
              </span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              <motion.button 
                ref={(el) => addToIconButtonsRefs(el, 0)}
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-[#f9fafb4f] backdrop-blur-xl px-2 gap-1 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors font-[500] text-[#4a5565] transform-gpu"
              >
                300
                <img src="/Coin.png" alt="coins" className="w-7 h-7 text-gray-600" />
              </motion.button>
              
              <motion.button 
                ref={(el) => addToIconButtonsRefs(el, 1)}
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-[#f9fafb4f] backdrop-blur-xl w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors transform-gpu"
              >
                <User className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            <motion.button 
              ref={(el) => addToNavButtonsRefs(el, 0)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.90 }}
              className="bg-[#0ae979] text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eff8d8] hover:text-gray-600 border border-[#08DF73] transform-gpu transition-colors duration-300"
            >
              About
            </motion.button>
            
            <motion.button 
              ref={(el) => addToNavButtonsRefs(el, 1)}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-[#F9FAFB] text-gray-600 hover:text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eff8d8] border-gray-300 border hover:border-[#08DF73] transform-gpu transition-colors duration-300"
            >
              Shop
            </motion.button>
            
            <motion.button 
              ref={(el) => addToNavButtonsRefs(el, 2)}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-[#F9FAFB] text-gray-600 hover:text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eff8d8] border-gray-300 border hover:border-[#08DF73] transform-gpu transition-colors duration-300"
            >
              Services
            </motion.button>
            
            <motion.button 
              ref={(el) => addToNavButtonsRefs(el, 3)}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-[#F9FAFB] text-gray-600 hover:text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eff8d8] border-gray-300 border hover:border-[#08DF73] transform-gpu transition-colors duration-300"
            >
              Community
            </motion.button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
