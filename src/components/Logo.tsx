
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="relative w-8 h-8 mr-2 z-10 overflow-visible">
      {/* Glow layers */}
      <div className="absolute -inset-1 bg-white rounded-full blur-lg opacity-70 animate-pulse-slow"></div>
      <div className="absolute -inset-0.75 bg-white rounded-full blur-md opacity-90 animate-pulse"></div>
      <div className="absolute -inset-0.5 bg-white rounded-full blur-sm opacity-80"></div>
      
      {/* Core and border */}
      <div className="absolute inset-0 bg-black rounded-full"></div>
      <div className="absolute inset-0 rounded-full border border-white opacity-60"></div>
      
      {/* Dynamic inner glow */}
      <div className="absolute inset-[0.15rem] rounded-full bg-white/5 animate-pulse-slow"></div>
    </div>
  );
};

export default Logo;
