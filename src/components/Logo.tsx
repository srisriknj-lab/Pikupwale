import React from 'react';
import logoUrl from '../assets/logo.png';
import logoWhiteUrl from '../assets/logo-white.png';

export function Logo({ className = "h-8", variant = "dark" }: { className?: string, variant?: "dark" | "light" }) {
  const currentLogo = variant === "light" ? logoWhiteUrl : logoUrl;
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src={currentLogo} 
        alt="Pickupwale Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Fallback if the logo is not found
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          if (target.nextElementSibling) {
            target.nextElementSibling.classList.remove('hidden');
            target.nextElementSibling.classList.add('flex');
          }
        }}
      />
      <span className={`font-sans font-bold underline decoration-2 underline-offset-4 text-right text-[30px] tracking-tight hidden items-center gap-1.5 uppercase`}>
        <span>
          <span className={variant === "light" ? "text-white" : "text-[#1a2f8a]"}>Pickup</span>
          <span className="text-[#ff6a00]">wale</span>
        </span>
      </span>
    </div>
  );
}
