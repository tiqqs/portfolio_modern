
/**
 * Scrollt zu einem bestimmten Element auf der Seite, identifiziert durch seine ID
 * @param elementId - Die ID des Elements, zu dem gescrollt werden soll
 * @param offset - Optional: Ein Offset in Pixeln, der bei der Scroll-Position berücksichtigt wird (Standard: 0)
 */
export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.warn(`Element mit ID "${elementId}" wurde nicht gefunden.`);
  }
};

/**
 * Event-Handler für Anker-Links, der das Standard-Verhalten verhindert und die animierte Scroll-Funktion nutzt
 * @param event - Das Click-Event
 */
export const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
  const href = event.currentTarget.getAttribute('href');
  
  if (href?.startsWith('#')) {
    event.preventDefault();
    
    const targetId = href.substring(1);
    scrollToElement(targetId, 80); // 80px Offset für die Navbar-Höhe
  }
};
