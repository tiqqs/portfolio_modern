
import React from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { siDiscord } from "simple-icons";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Links */}
          <div className="flex space-x-6">
            <Link
              to="/datenschutz"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              Datenschutzerklärung
            </Link>
            <Link
              to="/impressum"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={handleLinkClick}
            >
              Impressum
            </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://instagram.com/tiqqs.wqz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://discord.gg/fZcw3JtME2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <title>Discord</title>
                <path d={siDiscord.path} />
              </svg>
            </a>
          </div>
          
          {/* Copyright */}
          <div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} tiqqs - Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
