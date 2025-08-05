import React from 'react';
import { User, Search, Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-transparent fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className='flex justify-between items-center w-[50%]'>
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <img src="/Logo.png" alt="Logo" className="w-4 h-4" />
              </div>
              <span className="text-[18px] font-[500] tracking-tight text-gray-900">
                EnviroMat
              </span>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              <button className="bg-[#F9FAFB] px-2 gap-1 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors font-[500] text-[#4a5565]">
                {/* <Search className="w-4 h-4 text-gray-600" /> */}
                300
                <img src="/Coin.png" alt="coin" className="w-7 h-7 text-gray-600" />
              </button>
              <button className="bg-[#F9FAFB] w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <button className="bg-[#BCD59A] text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#eef0e9] hover:text-[#82a850] border border-[#BCD59A] transition-all duration-[300ms]">
              Services
            </button>
            <button className="bg-[#F9FAFB] text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-[300ms] hover:bg-[#eff8d8]">
              Shop
            </button>
            <button className="bg-[#F9FAFB] text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-[300ms] hover:bg-[#eff8d8]">
              Community
            </button>
            <button className="bg-[#F9FAFB] text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-[300ms]  hover:bg-[#eff8d8]">
              About
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
