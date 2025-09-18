import React from 'react';
import { LogoPlaceholder } from './LogoDisplay';

interface ProfileCardProps {
  universityName: string;
  clubName: string;
  description: string;
  handle?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  universityName,
  clubName,
  description,
  handle
}) => {
  return (
    <div className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl shadow-black/50">
      {/* University and Club Logos */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <div className="text-center">
          <LogoPlaceholder type="university" size="lg" />
          <p className="text-white/80 text-sm mt-2 font-medium">{universityName}</p>
        </div>
        <div className="w-px h-20 bg-white/30" />
        <div className="text-center">
          <LogoPlaceholder type="club" size="lg" />
          <p className="text-white/80 text-sm mt-2 font-medium">{clubName}</p>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {clubName}
        </h1>
        <p className="text-gray-200 text-lg mb-4 leading-relaxed">
          {description}
        </p>
        {handle && (
          <p className="text-white/60 text-sm font-mono">
            {handle}
          </p>
        )}
      </div>

      <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 rounded-lg rotate-45" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border border-white/25 rounded-lg -rotate-12" />
      
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
    </div>
  );
};