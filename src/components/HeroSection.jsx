import React from 'react';
import { Leaf, Globe, Droplets } from 'lucide-react';
import ProTeamCard from './ProTeamCard';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      <div className="max-w-full mx-auto sm:px-5 lg:pl-8 py-2 lg:py-2">
        <div className="grid lg:grid-cols-2 gap-30 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-gray-600 text-lg">
                Sculpting the Future with Green Materials
              </p>
              
              <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tighter">
                Leading the Way<br />
                in <span className="text-[#c5dda4]">Sustainable</span><br />
                Materials
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 border-2 border-gray-300 rounded-full text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 rounded-full text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all">
                Work with Us
              </button>
            </div>

            {/* Bottom Icons */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Droplets className="w-6 h-6 text-green-600" />
              </div>
            </div>

            {/* Product Showcases */}
            <div className="flex space-x-4 pt-8">
              <div className="w-20 h-20 bg-gray-300 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&crop=center" 
                  alt="Sustainable product 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 bg-green-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop&crop=center" 
                  alt="Sustainable product 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Green Leaf Background */}
          <div className="relative">
            <div className="relative -translate-y-[4.1%] rounded-3xl p-2 lg:py-10 lg:px-0 min-h-[600px] h-[800px]">
              {/* Large leaf background image */}
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=800&h=1000&fit=crop&crop=center" 
                  alt="Green leaves background" 
                  className="w-full h-[80%] object-cover opacity-60"
                />
              </div>
              
              {/* Pro Team Card */}
              <div className="absolute bottom-8 right-8">
                <ProTeamCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-green-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-green-200 rounded-full opacity-30 blur-lg"></div>
    </section>
  );
};

export default HeroSection;
