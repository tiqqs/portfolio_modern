
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AnimationContextProps {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextProps>({
  animationsEnabled: true,
  toggleAnimations: () => {},
});

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    // Check for saved preference or prefers-reduced-motion
    const savedPreference = localStorage.getItem('animationsEnabled');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (savedPreference !== null) {
      setAnimationsEnabled(savedPreference === 'true');
    } else if (prefersReducedMotion) {
      setAnimationsEnabled(false);
    }
  }, []);

  const toggleAnimations = () => {
    const newValue = !animationsEnabled;
    setAnimationsEnabled(newValue);
    localStorage.setItem('animationsEnabled', newValue.toString());
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationContext() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationContext must be used within an AnimationProvider');
  }
  return context;
}
