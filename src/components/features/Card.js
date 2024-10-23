import React, { useEffect, useRef, useState } from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the card is visible

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative w-full h-80 p-6 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 group hover:shadow-xl transition-transform duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
      style={{ transition: 'transform 0.5s ease, opacity 0.5s ease' }}
    >
      <div className="h-full flex flex-col justify-between items-start">
        {/* Icon */}
        <div className="text-5xl text-designColor mb-4">
          {icon ? icon : <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>}
        </div>
        
        {/* Title */}
        <h1 className="text-xl font-bold text-white mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-400">
          {des}
        </p>

        {/* Arrow Icon */}
        <div className="absolute bottom-6 right-6 text-2xl text-designColor transition-transform transform translate-x-4 group-hover:translate-x-0 duration-300">
          <HiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
