
import React from 'react';
import HeroBackground from './HeroBackground';
import '../styles/hero-animations.css';
import { handleSmoothScroll } from '@/utils/scrollService';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <HeroBackground>
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-up">
            <span className="hero-title">Amir Slaimani</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10 animate-fade-up animation-delay-300">
            Aus Ideen werden digitale Erlebnisse gestaltet, 
            <br />
            die Funktionalität und Design vereinen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
            <a 
              href="#projects" 
              className="bg-white text-black px-8 py-3 rounded-[3px] font-medium hover:bg-gray-200 transition-colors"
              onClick={handleSmoothScroll}
            >
              Projekte ansehen
            </a>
            <a 
              href="#contact" 
              className="group bg-transparent border border-white text-white px-8 py-3 rounded-[3px] font-medium hover:bg-white/10 transition-colors flex items-center justify-center"
              onClick={handleSmoothScroll}
            >
              <span>Kontaktieren</span> 
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </HeroBackground>
    </section>
  );
};

export default Hero;
