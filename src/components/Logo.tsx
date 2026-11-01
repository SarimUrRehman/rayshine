import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'shield-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  // Dimensions mapping
  const heightMap = {
    sm: 44,
    md: 54,
    lg: 68,
    xl: 88,
  };

  const currentHeight = heightMap[size];

  if (variant === 'shield-only') {
    return (
      <svg
        viewBox="0 0 160 160"
        height={currentHeight}
        width={currentHeight}
        className={`inline-block shrink-0 ${className}`}
        aria-label="Rayshine Autodetailing Emblem"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B1528" />
            <stop offset="50%" stopColor="#060B16" />
            <stop offset="100%" stopColor="#040710" />
          </linearGradient>
          <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#36D6FF" />
            <stop offset="40%" stopColor="#1E90FF" />
            <stop offset="100%" stopColor="#0B4B9C" />
          </linearGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#36D6FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1E90FF" stopOpacity="0.4" />
          </linearGradient>
          <filter id="shieldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#1E90FF" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Outer Shield Border */}
        <path
          d="M80 8 L144 32 C144 94 112 138 80 152 C48 138 16 94 16 32 Z"
          fill="url(#shieldGrad)"
          stroke="#1E90FF"
          strokeWidth="3.5"
          filter="url(#shieldGlow)"
        />
        {/* Inner Shield Accent Line */}
        <path
          d="M80 16 L136 38 C136 90 108 130 80 142 C52 130 24 90 24 38 Z"
          fill="none"
          stroke="#36D6FF"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {/* Glossy Car Silhouette (Top) */}
        <g transform="translate(25, 36) scale(0.68)">
          {/* Car Roof & Body */}
          <path
            d="M20 50 C26 42 42 22 72 20 C105 18 125 34 135 48 L150 56 C155 58 158 64 156 70 L152 74 C150 76 146 76 142 76 L130 76 C128 66 118 58 108 58 C98 58 88 66 86 76 L54 76 C52 66 42 58 32 58 C22 58 12 66 10 76 L6 76 C2 76 0 72 0 68 L4 60 C8 54 14 51 20 50 Z"
            fill="url(#carBodyGrad)"
          />
          {/* Windshield & Windows */}
          <path
            d="M44 48 C50 34 64 26 80 25 C96 24 112 32 118 48 Z"
            fill="#060B16"
            stroke="#36D6FF"
            strokeWidth="1.5"
          />
          {/* Glass Reflection Highlight */}
          <path
            d="M58 44 C66 32 76 28 88 28 L94 28 C86 34 80 40 76 44 Z"
            fill="#FFFFFF"
            fillOpacity="0.75"
          />
          {/* Wheels */}
          <circle cx="32" cy="74" r="13" fill="#060B16" stroke="#36D6FF" strokeWidth="2.5" />
          <circle cx="32" cy="74" r="6" fill="#1E90FF" />
          <circle cx="108" cy="74" r="13" fill="#060B16" stroke="#36D6FF" strokeWidth="2.5" />
          <circle cx="108" cy="74" r="6" fill="#1E90FF" />
          {/* Headlight beam */}
          <polygon points="152,62 165,60 162,68 150,68" fill="#FFFFFF" fillOpacity="0.9" />
        </g>

        {/* Water Splash & Bubbles (Bottom) */}
        <g>
          {/* Splash Waves */}
          <path
            d="M30 115 C45 105 55 125 80 112 C105 99 115 120 130 114 C120 128 102 136 80 142 C58 136 40 128 30 115 Z"
            fill="url(#waterGrad)"
          />
          {/* Bubbles */}
          <circle cx="48" cy="110" r="3" fill="#FFFFFF" fillOpacity="0.8" />
          <circle cx="62" cy="120" r="2" fill="#36D6FF" />
          <circle cx="82" cy="106" r="3.5" fill="#FFFFFF" fillOpacity="0.9" />
          <circle cx="98" cy="118" r="2.5" fill="#36D6FF" />
          <circle cx="112" cy="108" r="2" fill="#FFFFFF" fillOpacity="0.7" />
        </g>

        {/* Twinkling Sparkles */}
        <path
          d="M118 36 L121 42 L127 45 L121 48 L118 54 L115 48 L109 45 L115 42 Z"
          fill="#FFFFFF"
        />
        <circle cx="118" cy="45" r="1.5" fill="#36D6FF" />
        <path
          d="M38 48 L39.5 52 L44 54 L39.5 56 L38 60 L36.5 56 L32 54 L36.5 52 Z"
          fill="#36D6FF"
        />
      </svg>
    );
  }

  // Full Brand Lockup with Shield, "RAYSHINE", and "DETAILING DUNEDIN"
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Shield Badge */}
      <div className="relative shrink-0">
        <svg
          viewBox="0 0 160 160"
          style={{ height: currentHeight, width: (currentHeight * 150) / 160 }}
          className="shrink-0 drop-shadow-[0_0_12px_rgba(30,144,255,0.4)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="fullShieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0E1A33" />
              <stop offset="50%" stopColor="#060B16" />
              <stop offset="100%" stopColor="#03070F" />
            </linearGradient>
            <linearGradient id="fullCarGrad" x1="0%" y1="0%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#36D6FF" />
              <stop offset="40%" stopColor="#1E90FF" />
              <stop offset="100%" stopColor="#0A4693" />
            </linearGradient>
            <linearGradient id="fullWaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#36D6FF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#1E90FF" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Shield Outline */}
          <path
            d="M80 8 L144 32 C144 94 112 138 80 152 C48 138 16 94 16 32 Z"
            fill="url(#fullShieldGrad)"
            stroke="#1E90FF"
            strokeWidth="4"
          />
          <path
            d="M80 16 L136 38 C136 90 108 130 80 142 C52 130 24 90 24 38 Z"
            fill="none"
            stroke="#36D6FF"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />

          {/* Glossy Car Graphic */}
          <g transform="translate(25, 36) scale(0.68)">
            <path
              d="M20 50 C26 42 42 22 72 20 C105 18 125 34 135 48 L150 56 C155 58 158 64 156 70 L152 74 C150 76 146 76 142 76 L130 76 C128 66 118 58 108 58 C98 58 88 66 86 76 L54 76 C52 66 42 58 32 58 C22 58 12 66 10 76 L6 76 C2 76 0 72 0 68 L4 60 C8 54 14 51 20 50 Z"
              fill="url(#fullCarGrad)"
            />
            <path
              d="M44 48 C50 34 64 26 80 25 C96 24 112 32 118 48 Z"
              fill="#060B16"
              stroke="#36D6FF"
              strokeWidth="1.5"
            />
            <path
              d="M58 44 C66 32 76 28 88 28 L94 28 C86 34 80 40 76 44 Z"
              fill="#FFFFFF"
              fillOpacity="0.8"
            />
            <circle cx="32" cy="74" r="13" fill="#060B16" stroke="#36D6FF" strokeWidth="2.5" />
            <circle cx="32" cy="74" r="6" fill="#1E90FF" />
            <circle cx="108" cy="74" r="13" fill="#060B16" stroke="#36D6FF" strokeWidth="2.5" />
            <circle cx="108" cy="74" r="6" fill="#1E90FF" />
            <polygon points="152,62 165,60 162,68 150,68" fill="#FFFFFF" fillOpacity="0.9" />
          </g>

          {/* Water Splash & Drops */}
          <path
            d="M30 115 C45 105 55 125 80 112 C105 99 115 120 130 114 C120 128 102 136 80 142 C58 136 40 128 30 115 Z"
            fill="url(#fullWaterGrad)"
          />
          <circle cx="48" cy="112" r="3" fill="#FFFFFF" fillOpacity="0.8" />
          <circle cx="64" cy="122" r="2.2" fill="#36D6FF" />
          <circle cx="82" cy="108" r="3.5" fill="#FFFFFF" fillOpacity="0.95" />
          <circle cx="98" cy="120" r="2.5" fill="#36D6FF" />

          {/* Twinkle Sparkles */}
          <path
            d="M120 36 L123 42 L129 45 L123 48 L120 54 L117 48 L111 45 L117 42 Z"
            fill="#FFFFFF"
          />
          <path
            d="M38 48 L39.5 52 L44 54 L39.5 56 L38 60 L36.5 56 L32 54 L36.5 52 Z"
            fill="#36D6FF"
          />
        </svg>
      </div>

      {/* Brand Typography Lockup */}
      <div className="flex flex-col justify-center">
        {/* Main Wordmark: "RAY" in Red, "SHINE" in White */}
        <div className="flex items-baseline tracking-tight font-black italic uppercase font-heading leading-none">
          <span className="text-[#E5262B] drop-shadow-[0_0_8px_rgba(229,38,43,0.4)] text-[1.4rem] sm:text-[1.65rem] lg:text-[1.85rem]">
            RAY
          </span>
          <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] text-[1.4rem] sm:text-[1.65rem] lg:text-[1.85rem]">
            SHINE
          </span>
        </div>

        {/* Sub-label banner: "DETAILING DUNEDIN" */}
        <div className="flex items-center gap-1.5 mt-1">
          <div className="h-[1px] w-2.5 bg-gradient-to-r from-transparent to-[#1E90FF]" />
          <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.22em] font-bold uppercase text-[#36D6FF] font-heading whitespace-nowrap">
            DETAILING DUNEDIN
          </span>
          <div className="h-[1px] w-2.5 bg-gradient-to-l from-transparent to-[#1E90FF]" />
        </div>
      </div>
    </div>
  );
};
