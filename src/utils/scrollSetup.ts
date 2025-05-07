
import { handleSmoothScroll } from './scrollService';

/**
 * Sets up event listeners for smooth scrolling on all anchor links
 */
export const setupScrollButtons = () => {
  // Wait for DOM to be fully loaded before attaching events
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupAnchorListeners();
    });
  } else {
    // If DOM is already loaded, set up listeners immediately
    try {
      setupAnchorListeners();
    } catch (error) {
      console.error('Error during initial scroll setup:', error);
    }
  }
};

/**
 * Adds click event listeners to all anchor links that point to IDs
 */
function setupAnchorListeners() {
  try {
    // Find all anchor links that point to IDs
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          const targetId = href.substring(1);
          
          const element = document.getElementById(targetId);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset for navbar
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  } catch (error) {
    console.error('Error setting up anchor links:', error);
  }
}
