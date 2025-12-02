import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F1113] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="animate-pulse"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A55A" />
              <stop offset="50%" stopColor="#D97742" />
              <stop offset="100%" stopColor="#C8A55A" />
            </linearGradient>
          </defs>
          <path
            d="M60 20 L70 35 Q75 40 80 45 L85 55 Q85 60 80 65 L70 75 Q65 78 60 80 Q55 78 50 75 L40 65 Q35 60 35 55 L40 45 Q45 40 50 35 Z"
            fill="url(#goldGradient)"
            opacity="0.9"
          />
          <circle cx="60" cy="60" r="8" fill="#C8A55A" />
          <path
            d="M60 60 L75 50 L80 55 L70 65 Z"
            fill="#D97742"
            opacity="0.7"
          />
        </svg>
      </div>
      <h1 className="mt-8 text-4xl font-bold tracking-wider text-[#C8A55A] animate-fade-in">
        DAYNIT
      </h1>
      <p className="mt-2 text-sm tracking-widest text-[#C8A55A] opacity-70">
        GLOBAL TRADE EXCELLENCE
      </p>
      <div className="mt-8 w-48 h-1 bg-[#1a1d20] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#C8A55A] via-[#D97742] to-[#C8A55A] animate-loading-bar"></div>
      </div>
    </div>
  );
}
