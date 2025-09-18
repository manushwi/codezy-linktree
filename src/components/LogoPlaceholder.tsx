import React from 'react';
import { GraduationCap, Users } from 'lucide-react';

interface LogoPlaceholderProps {
  type: 'university' | 'club';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ 
  type, 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32'
  };

  const iconSize = {
    sm: 24,
    md: 40,
    lg: 60
  };

  return (
    <div className={`
      ${sizeClasses[size]} 
      rounded-2xl
      bg-gradient-to-br from-blue-500 to-purple-600
      flex items-center justify-center
      shadow-lg shadow-blue-500/25
      border-2 border-white/20
      ${className}
    `}>
      {type === 'university' ? (
        <GraduationCap 
          size={iconSize[size]} 
          className="text-white drop-shadow-lg" 
        />
      ) : (
        <Users 
          size={iconSize[size]} 
          className="text-white drop-shadow-lg" 
        />
      )}
    </div>
  );
};