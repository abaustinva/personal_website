import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div
      className={`
      relative 
      group
      overflow-hidden
      bg-white/5 
      hover:bg-white/10
      transition-colors duration-500
      backdrop-blur-xl 
      border border-white/10 
      shadow-2xl 
      rounded-3xl 
      ${className}
    `}
    >
      {/* Delicate inner glow/gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
