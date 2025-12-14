import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  name: string;
  url: string;
  icon: LucideIcon;
  bgColor: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ name, url, icon: Icon, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center group">
      {/* Tooltip style iOS Glass */}
      <div 
        className={`
          absolute -top-12 px-3 py-1.5 
          bg-gray-900/80 backdrop-blur-xl text-white/90 font-medium text-[11px] tracking-wide rounded-lg
          transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          pointer-events-none z-50
          ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75'}
        `}
      >
        {name}
      </div>

      {/* Le bouton icône */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          ${bgColor}
          w-14 h-14 
          flex items-center justify-center 
          rounded-[1.2rem] /* Squircle shape */
          text-white shadow-lg shadow-black/5
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          hover:scale-125 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 hover:z-10
          active:scale-95
        `}
      >
        <Icon size={26} strokeWidth={2.5} className="transition-transform duration-500 group-hover:rotate-6" />
        
        {/* Reflet brillant (Glossy effect) */}
        <div className="absolute inset-0 rounded-[1.2rem] bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </a>
    </div>
  );
};