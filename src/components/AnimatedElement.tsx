
import React, { forwardRef, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { cn } from '../lib/utils';
import { useAnimationContext } from '../context/AnimationContext';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  once?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(
  ({ 
    children, 
    className = '', 
    animation = 'fade-up', 
    delay = 0, 
    threshold = 0.1, 
    once = true, 
    tag: Tag = 'div' 
  }, forwardedRef) => {
    const localRef = useRef<HTMLDivElement>(null);
    const ref = (forwardedRef || localRef) as React.RefObject<HTMLDivElement>;
    const isVisible = useScrollAnimation(ref, { threshold, once });
    const { animationsEnabled } = useAnimationContext();

    // If animations are disabled, just render the children directly
    if (!animationsEnabled) {
      return React.createElement(Tag, { ref, className }, children);
    }

    const getAnimationClass = () => {
      if (!isVisible) return '';
      
      switch (animation) {
        case 'fade-up':
          return 'animate-fade-up';
        case 'fade-in':
          return 'animate-fade-in';
        case 'slide-in-left':
          return 'animate-slide-in-left';
        case 'slide-in-right':
          return 'animate-slide-in-right';
        case 'scale-in':
          return 'animate-scale-in';
        default:
          return 'animate-fade-up';
      }
    };

    const opacityClass = isVisible ? 'opacity-100' : 'opacity-0';

    return React.createElement(
      Tag,
      {
        ref,
        className: cn(
          'transition-opacity duration-700',
          getAnimationClass(),
          opacityClass,
          className
        ),
        style: { transitionDelay: `${delay}ms` }
      },
      children
    );
  }
);

AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement;
