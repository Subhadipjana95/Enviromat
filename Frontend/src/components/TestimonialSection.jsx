import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";

const TestimonialSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredStar, setHoveredStar] = useState({ cardId: null, starIndex: null });

  const testimonials = [
    {
      id: 1,
      name: "Adam Johnson",
      role: "Environmental Scientist",
      company: "GreenTech Solutions",
      content: "Revolutionary sustainable materials with 40% carbon reduction.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "EcoMaterials Inc.",
      content: "Eco-friendly, cost-effective, and durable solutions. Also had a great experience with the team.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Research Director",
      company: "Sustainable Futures Lab",
      content: "Game-changing environmental responsibility and cutting-edge solutions.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="mb-[10rem] bg-[#F9FAFB] relative overflow-hidden">
      {/* Subtle background animation */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            What Our 
            <motion.span 
              className="text-purple-400"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            > Clients</motion.span><br /> Say 
            <motion.span 
              className="text-green-400"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >About </motion.span>Us
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-gray-100 rounded-3xl p-6 border border-gray-300 relative group cursor-pointer"
              viewport={{ once: true }}
              layout
            >
              {/* Subtle glow effect on hover */}
              <AnimatePresence>
                {hoveredCard === testimonial.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-purple-100/50 rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10">
                {/* Quote Icon with interactive animation */}
                <motion.div 
                  className="mb-2"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Quote className="w-5 h-5 text-green-600" />
                  </motion.div>
                </motion.div>

                {/* Interactive Rating Stars */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 15,
                      }}
                      onHoverStart={() => setHoveredStar({ cardId: testimonial.id, starIndex: i })}
                      onHoverEnd={() => setHoveredStar({ cardId: null, starIndex: null })}
                      transition={{ duration: 0.2 }}
                      className="cursor-pointer"
                    >
                      <Star 
                        className={`w-4 h-4 text-yellow-400 fill-current transition-all duration-200 ${
                          hoveredStar.cardId === testimonial.id && hoveredStar.starIndex >= i 
                            ? 'drop-shadow-sm' 
                            : ''
                        }`} 
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Content with subtle animation */}
                <motion.p 
                  className="text-gray-500 leading-snug mb-4 text-sm"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Author section with hover effects */}
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-green-200 group-hover:border-green-300 transition-colors duration-300"
                      whileHover={{ rotate: 5 }}
                    />
                    {/* Subtle ring animation on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-green-400"
                    />
                  </motion.div>
                  
                  <div>
                    <motion.h4 
                      className="font-semibold text-gray-900 text-sm"
                      whileHover={{ }}
                      transition={{ duration: 0.2 }}
                    >
                      {testimonial.name}
                    </motion.h4>
                    <motion.p 
                      className="text-xs text-purple-400"
                      whileHover={{ color: "#9333ea" }}
                      transition={{ duration: 0.2 }}
                    >
                      {testimonial.role}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Subtle corner decoration */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-green-300 rounded-full opacity-0 group-hover:opacity-100"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating testimonial counter */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm"
            whileHover={{ scale: 1.03, y: -1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span 
              className="text-2xl font-bold text-green-600"
              animate={{ 
                scale: [0.8, 0.9, 0.8],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              5000+
            </motion.span>
            <span className="text-gray-600 font-medium">Happy Clients</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
