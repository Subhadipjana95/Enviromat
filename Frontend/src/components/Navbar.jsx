import React from 'react';
import { User, Search, Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-transparent fixed top-[10px] left-0 right-0 w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-7">
        <div className="flex justify-between items-center h-20">
          <div className='flex justify-between items-center w-[50%]'>
            {/* Logo */}
            <div className="flex items-center space-x-2 bg-[#f9fafb4f] backdrop-blur-xl rounded-full px-2 py-[6px]">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <img src="/Logo.png" alt="Logo" className="w-4 h-4" />
              </div>
              <span className="text-[18px] font-[500] tracking-tight text-gray-900">
                EnviroMat
              </span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              <button className="bg-[#f9fafb4f] backdrop-blur-xl px-2 gap-1 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors font-[500] text-[#4a5565]">
                {/* <Search className="w-4 h-4 text-gray-600" /> */}
                300
                <img src="/Coin.png" alt="coins" className="w-7 h-7 text-gray-600" />
              </button>
              <button className="bg-[#f9fafb4f] backdrop-blur-xl w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                {/* <Login /> */}
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            <button className="bg-[#BCD59A] text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eff8d8] hover:text-gray-600 border border-[#BCD59A] transition-all duration-[300ms]">
              Services
            </button>
            <button className="bg-[#F9FAFB] text-gray-600 hover:text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-[300ms] hover:bg-[#eff8d8] border-gray-300 border hover:border-gray-400 ">
              Shop
            </button>
            <button className="bg-[#F9FAFB] text-gray-600 hover:text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-[300ms] hover:bg-[#eff8d8] border-gray-300 border hover:border-gray-400">
              Community
            </button>
            <button className="bg-[#F9FAFB] text-gray-600 hover:text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-[300ms] hover:bg-[#eff8d8] border-gray-300 border hover:border-gray-400">
              About
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
