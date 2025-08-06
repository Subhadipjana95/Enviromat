import React from "react";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer
    className="bg-black text-white relative overflow-hidden">
      {/* Background Text Overlay */}

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column - Logo and Navigation */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full flex items-center justify-center">
                <img src="/Logo2.png" alt="logo" className="w-full h-full" />
              </div>
              <span className="text-2xl font-medium text-white/70">Enviromat</span>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/70 hover:text-gray-300 transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-gray-300 transition-colors"
              >
                Product
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-gray-300 transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Second Column - Newsletter Subscription */}
          <div>
            <h4 className="text-gray-400 text-sm font-medium mb-4">
              Newsletter
            </h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to our newsletter for updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-400 text-sm text-white placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-purple-400 text-white rounded-r-lg hover:bg-purple-500 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4 ml-20">
              <h4 className="text-gray-400 text-sm font-medium mb-4">
                Social Media
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-gray-300 transition-colors text-sm"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-gray-300 transition-colors text-sm"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-gray-300 transition-colors text-sm"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-gray-300 transition-colors text-sm"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/70 hover:text-gray-300 transition-colors text-sm"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

          {/* Third Column - Contact Info, Address and Social Media */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div>
              <h4 className="text-gray-400 text-sm font-medium mb-4">
                Contact Info
              </h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-white/70 text-sm">+88032423423423523</span>
                </li>
                <li>
                  <span className="text-white/70 text-sm">hello@fibostudio.com</span>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-gray-400 text-sm font-medium mb-4">Address</h4>
              <p className="text-white/70 text-sm">
                336 East Shewrapara, Mirpur, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full flex items-center justify-center mt-8">
          <span 
            className="text-[140px] font-bold select-none leading-tight tracking-tighter opacity-20"
            style={{
              background: 'linear-gradient(180deg, #3BF799 30%, #24D152 50%, #000000 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: '#ffffff2a',
            }}
          >
            Waste Management
          </span>
        </div>

        {/* Bottom Section - Copyright and Policies */}
        <div className="border-t border-gray-800 mt-2 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500">
              © 2025 Tech Squad. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms of Services
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
