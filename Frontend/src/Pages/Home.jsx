import HeroSection from "../components/core/Home/HeroSection";
import LegacySection from "../components/core/Home/LegacySection";
import ServicesCard from "../components/core/Home/ServicesCard";
import TestimonialSection from "../components/core/Home/TestimonialSection";
import Footer from "../components/common/Footer";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const cardsData = [
    {
      tag: "Our Service",
      heading: "Waste Collection & Waste Management",
      description: "Advanced waste processing and recycling technologies.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center",
      progressLabel: "Collection Rate",
      progressValue: 95,
      progressColor: "#10B981",
      exploreText: "Learn More"
    },
    {
      tag: "Our Service",
      heading: "Eco-Friendly Material Development",
      description: "Creating innovative, sustainable, and environmentally-conscious materials for various industries.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center",
      progressLabel: "Recyclibility Rate",
      progressValue: 75,
      progressColor: "#C27BFF",
      exploreText: "Learn More"
    },
    {
      tag: "Our Service",
      heading: "User Value Creation",
      description: "Creating innovative, sustainable, and environmentally-conscious materials for various industries.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center",
      progressLabel: "Return Value",
      progressValue: 88,
      progressColor: "#C27BFF",
      exploreText: "Learn More"
    }
  ];

  useEffect(() => {
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean);
    
    if (cards.length === 0) return;

    // Set initial positions
    cards.forEach((card, index) => {
      gsap.set(card, {
        y: window.innerHeight + (index * 200),
        scale: 0.8,
        zIndex: index - cards.length
      });
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${cards.length * window.innerHeight}`,
        scrub: 1,
        pin: true,
      }
    });

    // Animate cards
    cards.forEach((card, index) => {
      tl.to(card, {
        y: index * 40,
        scale: 1 - (index * 0.02),
        duration: 1,
        ease: 'power2.out',
      }, index * 0.3);
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  

  return (
    <div>
      <HeroSection />
      <LegacySection />

      <div 
        ref={containerRef} 
        className="relative overflow-hidden h-[60vh] "
        style={{ height: '100vh' }}
      >
        <div className="sticky top-0 flex items-center justify-center">
          {/* Card 1 */}
          <div ref={card1Ref} className="absolute flex items-center justify-center w-full h-full">
            <ServicesCard {...cardsData[0]} className="h-full w-full" />
          </div>
          
          {/* Card 2 */}
          <div ref={card2Ref} className="absolute flex items-center justify-center w-full h-full">
            <ServicesCard {...cardsData[1]} className="h-full w-full" />
          </div>
          
          {/* Card 3 */}
          <div ref={card3Ref} className="absolute flex items-center justify-center w-full h-full">
            <ServicesCard {...cardsData[2]} className="h-full w-full" />
          </div>
        </div>
      </div>
      
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;
