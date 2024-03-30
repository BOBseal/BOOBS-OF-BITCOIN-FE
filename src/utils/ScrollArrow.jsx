// components/ScrollArrow.js
'use client'
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) { // Adjust the value according to your needs
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`fixed bottom-4 right-4 bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </div>
  );
};

export default ScrollArrow;
