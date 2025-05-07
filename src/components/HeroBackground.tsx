
import React, { useEffect, useRef } from 'react';
import '../styles/hero-background.css';

const HeroBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;
    
    const starsContainer = starsRef.current;
    const starCount = 100;
    
    // Clear any existing stars
    starsContainer.innerHTML = '';
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random positioning
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 2;
      
      // Random animation properties
      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * 5;
      const opacity = 0.2 + Math.random() * 0.8;
      
      // Apply styles
      star.style.left = `${xPos}%`;
      star.style.top = `${yPos}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--twinkle-duration', `${duration}s`);
      star.style.setProperty('--twinkle-delay', `${delay}s`);
      star.style.setProperty('--star-opacity', `${opacity}`);
      
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="hero-background">
      <div ref={starsRef} className="stars"></div>
      {children}
    </div>
  );
};

export default HeroBackground;
