import React from 'react';

export const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/bg.jpg)',
          filter: 'grayscale(100%) contrast(1.2)'
        }}
      />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-gray-500/10 to-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      <div className="absolute top-10 right-20 w-32 h-32 border border-white/20 rotate-45 rounded-lg animate-spin-slow" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-white/15 rotate-12 rounded-lg animate-bounce-slow" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/25 -rotate-12 rounded-lg animate-pulse" />
      
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent animate-slide"
            style={{
              top: `${20 + i * 20}%`,
              left: '-100%',
              width: '200%',
              animationDelay: `${i * 2}s`,
              animationDuration: '8s'
            }}
          />
        ))}
      </div>
      
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
          <path
            d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="animate-draw"
          />
          <circle cx="50" cy="50" r="3" fill="white" className="animate-ping" />
        </svg>
      </div>
      
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes draw {
          0% { stroke-dasharray: 0 200; }
          100% { stroke-dasharray: 200 0; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-slide {
          animation: slide 8s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-draw {
          animation: draw 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};