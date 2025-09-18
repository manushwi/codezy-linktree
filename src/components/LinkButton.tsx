import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ 
  href, 
  children, 
  icon, 
  className = '' 
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative w-full max-w-md mx-auto block
        bg-white/5 hover:bg-white/10
        backdrop-blur-lg border border-white/20 hover:border-white/40
        rounded-2xl px-8 py-4
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-lg hover:shadow-white/10
        transform active:scale-95
        ${className}
      `}
    >
      <div className="flex items-center justify-between text-white font-medium text-lg">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          )}
          <span className="group-hover:text-gray-100 transition-colors duration-300">
            {children}
          </span>
        </div>
        <ExternalLink 
          size={20} 
          className="text-white/60 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" 
        />
      </div>
      
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/10 group-hover:to-white/5 transition-all duration-300" />
      
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm" />
    </a>
  );
};