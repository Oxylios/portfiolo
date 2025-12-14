import React from 'react';
import { PROFILE_DATA } from './constants';
import { Avatar } from './components/Avatar';
import { SocialIcon } from './components/SocialIcon';

export default function App() {
  return (
    // Conteneur principal plein écran pour simuler l'écran d'un device
    <div className="h-screen w-full flex flex-col items-center justify-between py-6 safe-area-inset-bottom relative overflow-hidden">
      
      {/* Formes d'arrière-plan flottantes (Blobs) pour accentuer l'effet de verre */}
      <div className="absolute top-10 left-[-10%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-20 right-[-10%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Espaceur du haut pour centrer verticalement le contenu principal */}
      <div className="flex-1 flex flex-col items-center justify-center w-full px-4 z-10">
        
        {/* --- CARTE "LIQUID GLASS" --- */}
        <div className="
          w-full max-w-sm 
          bg-white/40 backdrop-blur-[50px] 
          border border-white/60 
          rounded-[3rem] 
          shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
          p-10 pb-20 
          flex flex-col items-center text-center 
          relative overflow-hidden
          transition-all duration-700 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
        ">
          
          {/* Reflet brillant sur le haut de la carte (effet premium) */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-50" />

          {/* Avatar avec animation fluide */}
          <div className="mb-8 transform transition hover:scale-105 duration-500">
            <Avatar src={PROFILE_DATA.avatarUrl} alt={PROFILE_DATA.name} />
          </div>

          {/* Nom avec typographie moderne */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
            {PROFILE_DATA.name}
          </h1>

          {/* Badge Style iOS Pill */}
          <div className="
            inline-flex items-center 
            bg-white/50 border border-white/50 backdrop-blur-md 
            px-4 py-1.5 rounded-full mb-8 shadow-sm
          ">
            <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              {PROFILE_DATA.role}
            </span>
          </div>

          {/* Biographie fluide */}
          <p className="text-gray-600 text-sm leading-relaxed max-w-[260px] font-medium opacity-90">
            {PROFILE_DATA.bio}
          </p>
        </div>

        {/* --- DOCK SOCIAL FLOTTANT --- */}
        <div className="
          relative -mt-14 z-20 
          flex items-center gap-4 p-4
          bg-white/30 backdrop-blur-[40px] border border-white/40
          rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]
          hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ">
          {PROFILE_DATA.socials.map((social) => (
            <SocialIcon
              key={social.id}
              name={social.name}
              url={social.url}
              icon={social.icon}
              bgColor={social.bgColor}
            />
          ))}
        </div>
      </div>

      {/* --- BARRE IOS (HOME INDICATOR) --- */}
      {/* Remplace le footer texte par l'indicateur caractéristique */}
      <div className="w-full flex justify-center pb-2 z-50">
        <div className="
          w-[130px] h-[5px] 
          bg-gray-800/20 backdrop-blur-md 
          rounded-full 
          hover:bg-gray-800/40 transition-colors duration-300 cursor-grab active:cursor-grabbing
        " />
      </div>

    </div>
  );
}