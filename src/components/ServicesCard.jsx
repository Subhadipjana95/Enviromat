import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Our Services Tag */}
              <div className="inline-block">
                <span className="px-6 py-2 bg-white/60 text-gray-700 rounded-full text-sm font-medium border border-gray-300">
                  Our Services
                </span>
              </div>

              {/* Decorative dots */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                <div className="w-3 h-3 bg-green-100 rounded-full"></div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Eco-Friendly<br />
                Material Development
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Creating innovative, sustainable, and environmentally-conscious materials for various industries.
              </p>
            </div>

            {/* Right Content */}
            <div className="relative">
              {/* Background Image */}
              <div className="relative rounded-3xl overflow-hidden h-80 lg:h-96">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center" 
                  alt="Green leaves and sustainable materials" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20"></div>

                {/* Recyclability Rate Card */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-center space-y-4">
                    <p className="text-gray-600 text-sm font-medium">Recyclability Rate</p>
                    
                    {/* Circular Progress */}
                    <div className="relative w-20 h-20 mx-auto">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        {/* Progress circle */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#a855f7"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.9)}`}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">90%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Link */}
                <div className="absolute bottom-8 left-8">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
                    <span className="text-sm font-medium">Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Explore More Button */}
                <div className="absolute bottom-8 right-8">
                  <button className="px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-white transition-colors shadow-lg">
                    Explore More
                  </button>
                </div>

                {/* Top Right Icon */}
                <div className="absolute top-8 right-8">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <FileText className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
