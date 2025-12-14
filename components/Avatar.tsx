import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <div className="relative group">
      {/* Halo lumineux "Liquid" derrière */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/30 to-purple-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Anneau extérieur translucide */}
      <div className="absolute -inset-1 bg-white/40 rounded-full backdrop-blur-sm" />
      
      {/* L'image */}
      <img
        src={src}
        alt={alt}
        className="relative w-28 h-28 rounded-full object-cover border-[3px] border-white/80 shadow-lg"
      />
      
      {/* Indicateur de présence (point vert) style Apple */}
      <div className="absolute bottom-2 right-2 p-[3px] bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
        <div className="w-3 h-3 bg-[#34C759] rounded-full shadow-[0_0_8px_rgba(52,199,89,0.6)]" />
      </div>
    </div>
  );
};