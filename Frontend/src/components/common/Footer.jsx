import React, { useEffect, useRef } from "react";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const newsletterRef = useRef(null);
  const socialLinksRef = useRef([]);
  const contactRef = useRef(null);
  const bigTextRef = useRef(null);
  const copyrightRef = useRef(null);

  // Add elements to refs arrays
  const addToNavLinksRefs = (el, index) => {
    if (el && !navLinksRef.current.includes(el)) {
      navLinksRef.current[index] = el;
    }
  };

  const addToSocialLinksRefs = (el, index) => {
    if (el && !socialLinksRef.current.includes(el)) {
      socialLinksRef.current[index] = el;
    }
  };

  useEffect(() => {
    const footer = footerRef.current;
    const logo = logoRef.current;
    const navLinks = navLinksRef.current.filter(Boolean);
    const newsletter = newsletterRef.current;
    const socialLinks = socialLinksRef.current.filter(Boolean);
    const contact = contactRef.current;
    const bigText = bigTextRef.current;
    const copyright = copyrightRef.current;

    // Set initial states
    gsap.set([logo, newsletter, contact], {
      y: 50,
      opacity: 0,
    });

    gsap.set(navLinks, {
      x: -30,
      opacity: 0,
    });

    gsap.set(socialLinks, {
      x: 30,
      opacity: 0,
    });

    gsap.set(bigText, {
      y: 100,
      opacity: 0,
      scale: 0.8,
    });

    gsap.set(copyright, {
      y: 30,
      opacity: 0,
    });

    // Create timeline for footer animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top 90%',
        end: 'bottom 10%',
        scrub: 1,
        toggleActions: 'play none none reverse',
      }
    });

    // Animate elements in sequence
    tl.to(logo, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
    })
    .to(navLinks, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
    }, '-=0.4')
    .to([newsletter, contact], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    }, '-=0.5')
    .to(socialLinks, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
    }, '-=0.6')
    .to(bigText, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'back.out(1.7)',
    }, '-=0.4')
    .to(copyright, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3');

    // REMOVED: Big text floating animation
    // gsap.to(bigText, {
    //   y: -10,
    //   duration: 4,
    //   ease: 'power1.inOut',
    //   yoyo: true,
    //   repeat: -1,
    // });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-black relative">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Column - Logo and Navigation */}
          <div className="space-y-6">
            {/* Logo with animation */}
            <motion.div 
              ref={logoRef}
              className="flex items-center space-x-3"
              whileHover={{}}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-14 h-14 rounded-full flex items-center justify-center"
                whileHover={{}}
                transition={{ duration: 0.3 }}
              >
                <img src="/Logo2.png" alt="logo" className="w-full h-full" />
              </motion.div>
              <span className="text-2xl font-medium text-white/70">
                Enviromat
              </span>
            </motion.div>

            {/* Navigation Links with stagger animation */}
            <div className="flex space-x-6">
              <motion.a
                ref={(el) => addToNavLinksRefs(el, 0)}
                href="#"
                className="text-white/70 hover:text-gray-300 transition-colors relative"
                whileHover={{ color: '#10B981' }}
                transition={{ duration: 0.2 }}
              >
                About Us
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-green-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                ref={(el) => addToNavLinksRefs(el, 1)}
                href="#"
                className="text-white/70 hover:text-gray-300 transition-colors relative"
                whileHover={{ color: '#10B981' }}
                transition={{ duration: 0.2 }}
              >
                Product
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-purple-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.a
                ref={(el) => addToNavLinksRefs(el, 2)}
                href="#"
                className="text-white/70 hover:text-gray-300 transition-colors relative"
                whileHover={{ color: '#10B981' }}
                transition={{ duration: 0.2 }}
              >
                FAQ
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-green-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </div>

          {/* Second Column - Newsletter Subscription */}
          <motion.div ref={newsletterRef}>
            <motion.h4 
              className="text-gray-400 text-sm font-medium mb-4"
              whileHover={{ color: '#10B981' }}
              transition={{ duration: 0.2 }}
            >
              Newsletter
            </motion.h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to our newsletter for updates
            </p>
            <div className="flex">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-400 text-sm text-white placeholder-gray-400 transition-all duration-300"
                whileFocus={{ 
                  borderColor: '#C084FC',
                  boxShadow: '0 0 0 2px rgba(192, 132, 252, 0.2)'
                }}
              />
              <motion.button 
                className="px-4 py-2 bg-purple-400 text-white rounded-r-lg hover:bg-purple-500 transition-colors text-sm font-medium"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#9333ea'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

          {/* Social Media */}
          <div className="space-y-4 ml-20">
            <motion.h4 
              className="text-gray-400 text-sm font-medium mb-4"
              whileHover={{}}
              transition={{ duration: 0.2 }}
            >
              Social Media
            </motion.h4>
            <ul className="space-y-2">
              {['Linkedin', 'Facebook', 'Instagram', 'Twitter', 'Youtube'].map((social, index) => (
                <motion.li key={social}>
                  <motion.a
                    ref={(el) => addToSocialLinksRefs(el, index)}
                    href="#"
                    className="text-white/70 hover:text-gray-300 transition-colors text-sm relative inline-block"
                    whileHover={{ 
                      color: '#10B981'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {social}
                    <motion.span
                      className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-green-400 rounded-full"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Fourth Column - Contact Info and Address */}
          <div ref={contactRef} className="space-y-6">
            {/* Contact Info */}
            <div>
              <motion.h4 
                className="text-gray-400 text-sm font-medium mb-4"
                whileHover={{ }}
                transition={{ duration: 0.2 }}
              >
                Contact Info
              </motion.h4>
              <ul className="space-y-2">
                <motion.li whileHover={{ color: '#10B981' }} transition={{ duration: 0.2 }}>
                  <span className="text-white/70 text-sm">
                    +88 0324234234
                  </span>
                </motion.li>
                <motion.li whileHover={{ color: '#10B981' }} transition={{ duration: 0.2 }}>
                  <span className="text-white/70 text-sm">
                    hello@fibostudio.com
                  </span>
                </motion.li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <motion.h4 
                className="text-gray-400 text-sm font-medium mb-4"
                whileHover={{}}
                transition={{ duration: 0.2 }}
              >
                Address
              </motion.h4>
              <motion.p 
                className="text-white/70 text-sm"
                whileHover={{color: '#10B981'}}
                transition={{ duration: 0.2 }}
              >
                336 East Shewrapara, Mirpur, Dhaka, Bangladesh
              </motion.p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-30">
          <motion.span
            ref={bigTextRef}
            className="text-[140px] lg:text-[160px] font-bold select-none leading-tight tracking-tighter opacity-20 cursor-pointer scale-[1.02]"
            style={{
              background:
                "linear-gradient(180deg, #3BF799 30%, #24D152 50%, #000000 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "#ffffff2a",
            }}
            whileHover={{
              textShadow: "0 0 20px rgba(59, 247, 153, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            Waste Management
          </motion.span>
        </div>

        {/* Bottom Section - Copyright and Policies */}
        <motion.div 
          ref={copyrightRef}
          className="border-t border-gray-800 mt-2 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="text-sm text-gray-500"
              whileHover={{ color: '#9CA3AF' }}
              transition={{ duration: 0.2 }}
            >
              © 2025 Tech Squad. All rights reserved.
            </motion.div>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Services', 'Accessibility'].map((policy, index) => (
                <motion.a
                  key={policy}
                  href="#"
                  className="text-gray-500 hover:text-gray-300 transition-colors relative"
                  whileHover={{
                    color: '#10B981'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {policy}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-green-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
