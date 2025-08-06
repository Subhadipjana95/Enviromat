import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from "motion/react";

const TestimonialSection = () => {
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
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Main Heading */}
          <h2 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            What Our 
            <span className="text-purple-400"> Clients</span><br /> Say 
            <span className="text-green-400">About </span>Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-gray-100 rounded-3xl p-6 border border-gray-300"
            >
              {/* Quote Icon */}
              <div className="mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-green-600" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-500 leading-snug mb-4 text-sm">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-green-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-purple-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 