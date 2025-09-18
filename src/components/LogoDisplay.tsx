import React from 'react';

interface LogoDisplayProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LogoDisplay: React.FC<LogoDisplayProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`
      ${sizeClasses[size]} 
      rounded-2xl
      flex items-center justify-center
      shadow-lg shadow-black/25
      overflow-hidden
      ${className}
    `}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-contain p-2"
      />
    </div>
  );
};

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
  const logoSrc = type === 'university' ? '/rkgitm new.png' : '/codezy logo.jpg';
  const logoAlt = type === 'university' ? 'RKGITM University Logo' : 'Codezy Club Logo';

  return (
    <LogoDisplay 
      src={logoSrc}
      alt={logoAlt}
      size={size}
      className={className}
    />
  );
};