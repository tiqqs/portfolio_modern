
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { handleSmoothScroll } from "@/utils/scrollService";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is currently in viewport
      const sections = ["about", "projects", "skills", "testimonials", "contact"];
      
      // If we're at the top of the page, don't highlight any section
      if (window.scrollY < window.innerHeight / 2) {
        setActiveSection("");
        return;
      }

      // Otherwise, find which section we're currently viewing
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if a section is active
  const isActive = (section: string) => activeSection === section;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-black" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between py-6">
          <div className="flex lg:flex-1 items-center">
            <a className="flex items-center pl-2 lg:pl-0" href="/">
              <span className="text-2xl font-bold tracking-wider">tiqqs.xyz</span>
            </a>
          </div>
          
          <div className="flex lg:hidden">
            <button 
              type="button" 
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Menü umschalten</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
            <a 
              href="#about" 
              className={`text-sm font-medium transition-colors duration-300 ${isActive("about") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
              onClick={handleSmoothScroll}
            >
              Über mich
            </a>
            <a 
              href="#projects" 
              className={`text-sm font-medium transition-colors duration-300 ${isActive("projects") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
              onClick={handleSmoothScroll}
            >
              Projekte
            </a>
            <a 
              href="#skills" 
              className={`text-sm font-medium transition-colors duration-300 ${isActive("skills") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
              onClick={handleSmoothScroll}
            >
              Leistungen
            </a>
            <a 
              href="#testimonials" 
              className={`text-sm font-medium transition-colors duration-300 ${isActive("testimonials") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
              onClick={handleSmoothScroll}
            >
              Bewertungen
            </a>
            <a 
              href="#contact" 
              className={`text-sm font-medium transition-colors duration-300 ${isActive("contact") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
              onClick={handleSmoothScroll}
            >
              Kontakt
            </a>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4 pb-4">
              <a 
                href="#about" 
                className={`text-base font-medium transition-colors duration-300 ${isActive("about") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                onClick={handleSmoothScroll}
              >
                Über mich
              </a>
              <a 
                href="#projects" 
                className={`text-base font-medium transition-colors duration-300 ${isActive("projects") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                onClick={handleSmoothScroll}
              >
                Projekte
              </a>
              <a 
                href="#skills" 
                className={`text-base font-medium transition-colors duration-300 ${isActive("skills") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                onClick={handleSmoothScroll}
              >
                Leistungen
              </a>
              <a 
                href="#testimonials" 
                className={`text-base font-medium transition-colors duration-300 ${isActive("testimonials") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                onClick={handleSmoothScroll}
              >
                Bewertungen
              </a>
              <a 
                href="#contact" 
                className={`text-base font-medium transition-colors duration-300 ${isActive("contact") ? "text-white" : "text-gray-400 hover:text-gray-200"}`}
                onClick={handleSmoothScroll}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
