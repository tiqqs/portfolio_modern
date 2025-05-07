
import React from 'react';
import AnimatedElement from '../components/AnimatedElement';

// Hilfsfunktion zum Animieren vorhandener Komponenten
export function withAnimation(Component: React.ComponentType<any>, animationProps: any = {}) {
  return React.forwardRef((props: any, ref) => {
    return (
      <AnimatedElement {...animationProps}>
        <Component {...props} ref={ref} />
      </AnimatedElement>
    );
  });
}

// Hilfsfunktion zum Animieren von Gruppen von Elementen
export function createAnimatedGroup(elements: React.ReactNode[], containerClassName = '') {
  return (
    <div className={`animated-group ${containerClassName}`}>
      {elements.map((element, index) => (
        <AnimatedElement key={index} delay={index * 100} animation="fade-up">
          {element}
        </AnimatedElement>
      ))}
    </div>
  );
}
