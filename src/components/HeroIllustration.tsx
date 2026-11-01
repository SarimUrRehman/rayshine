import React from 'react';

export const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center select-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#0C1527] via-[#060B16] to-[#040812] border border-[#1B2A4A] shadow-[0_20px_60px_rgba(30,144,255,0.15)]">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(30,144,255,0.22),transparent_70%)] pointer-events-none" />
      
      {/* Ambient Light Sweep Effect */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-[#36D6FF]/10 to-transparent rotate-12 animate-shine-sweep pointer-events-none" />

      {/* Floating Sparkles & Starbursts */}
      <div className="absolute top-[18%] left-[22%] animate-twinkle-1 pointer-events-none">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FFFFFF] drop-shadow-[0_0_8px_#36D6FF]">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute top-[32%] right-[18%] animate-twinkle-2 pointer-events-none">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#36D6FF] drop-shadow-[0_0_12px_#1E90FF]">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute bottom-[28%] left-[12%] animate-twinkle-3 pointer-events-none">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FFFFFF] drop-shadow-[0_0_6px_#36D6FF]">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="currentColor" />
        </svg>
      </div>

      {/* Floating Bubbles */}
      <div className="absolute bottom-[22%] left-[28%] animate-bubble-float pointer-events-none">
        <div className="w-4 h-4 rounded-full border border-[#36D6FF]/80 bg-[#36D6FF]/20 shadow-[0_0_8px_#36D6FF]" />
      </div>
      <div className="absolute bottom-[35%] right-[24%] animate-bubble-float [animation-delay:1.5s] pointer-events-none">
        <div className="w-3 h-3 rounded-full border border-white/80 bg-white/20 shadow-[0_0_6px_white]" />
      </div>
      <div className="absolute bottom-[18%] right-[14%] animate-bubble-float [animation-delay:0.8s] pointer-events-none">
        <div className="w-5 h-5 rounded-full border border-[#1E90FF]/80 bg-[#1E90FF]/25 shadow-[0_0_10px_#1E90FF]" />
      </div>

      {/* SVG Canvas for High-End Glossy Sports Car & Water Splash */}
      <svg
        viewBox="0 0 800 480"
        className="relative z-10 w-full h-full p-4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Glossy blue sports car with showroom reflection and water splash"
      >
        <defs>
          {/* Main Car Paint Gradient */}
          <linearGradient id="heroCarPaint" x1="50" y1="120" x2="750" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4DE0FF" />
            <stop offset="25%" stopColor="#1E90FF" />
            <stop offset="65%" stopColor="#0B4FA8" />
            <stop offset="100%" stopColor="#052758" />
          </linearGradient>

          {/* Roof & Hood Glossy Reflection */}
          <linearGradient id="glossHighlight" x1="200" y1="130" x2="600" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Dark Glass Tint */}
          <linearGradient id="glassTint" x1="260" y1="150" x2="520" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#040914" />
            <stop offset="70%" stopColor="#091833" />
            <stop offset="100%" stopColor="#142B55" />
          </linearGradient>

          {/* Glass Streak */}
          <linearGradient id="glassStreak" x1="300" y1="150" x2="480" y2="230" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#36D6FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Water Splash Gradient */}
          <linearGradient id="splashWave" x1="100" y1="360" x2="700" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#36D6FF" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#1E90FF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0E3D82" stopOpacity="0.3" />
          </linearGradient>

          {/* Wheel Rim Gradient */}
          <radialGradient id="rimMetal" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#36D6FF" />
            <stop offset="85%" stopColor="#0B1A35" />
            <stop offset="100%" stopColor="#030710" />
          </radialGradient>

          {/* Headlight Glow */}
          <radialGradient id="lightBeam" cx="95%" cy="50%" r="90%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#36D6FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1E90FF" stopOpacity="0" />
          </radialGradient>

          {/* Ground Mirror Reflection Scrim */}
          <linearGradient id="groundMirror" x1="400" y1="360" x2="400" y2="460" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#060B16" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ground Reflection Ripple */}
        <ellipse cx="400" cy="385" rx="340" ry="26" fill="url(#groundMirror)" />

        {/* Headlight Projector Flare Beam */}
        <path d="M685 272 L795 240 L795 350 L680 300 Z" fill="url(#lightBeam)" />

        {/* --- CAR BODY GROUP --- */}
        <g id="car-body">
          {/* Main Aerodynamic Silhouette */}
          <path
            d="M 120 280 
               C 135 245, 175 220, 240 212 
               C 285 206, 310 156, 370 142 
               C 440 126, 520 134, 570 185 
               C 610 205, 650 230, 685 260 
               C 705 278, 715 295, 700 315 
               C 690 325, 670 330, 650 330 
               L 590 330 
               C 585 285, 545 250, 495 250 
               C 445 250, 405 285, 400 330 
               L 270 330 
               C 265 285, 225 250, 175 250 
               C 135 250, 102 278, 95 320 
               L 85 320 
               C 75 320, 70 305, 80 295 
               C 92 286, 105 282, 120 280 Z"
            fill="url(#heroCarPaint)"
            stroke="#36D6FF"
            strokeWidth="2.5"
          />

          {/* Glossy Top Body Highlight Line */}
          <path
            d="M 230 215 
               C 280 208, 315 156, 375 144 
               C 435 132, 510 138, 560 185 
               C 595 204, 640 232, 675 260"
            stroke="url(#glossHighlight)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Aerodynamic Shoulder Crease */}
          <path
            d="M 140 265 C 240 248, 380 252, 670 280"
            stroke="#36D6FF"
            strokeWidth="2"
            strokeOpacity="0.75"
          />

          {/* Cockpit Greenhouse (Windows & Pillars) */}
          <path
            d="M 330 204 
               C 355 160, 395 148, 445 146 
               C 505 145, 545 170, 560 204 
               L 475 204 Z"
            fill="url(#glassTint)"
            stroke="#1E90FF"
            strokeWidth="2"
          />

          {/* Windshield Reflection Angle */}
          <path
            d="M 390 152 L 440 150 L 370 202 L 340 202 Z"
            fill="url(#glassStreak)"
          />

          {/* Rear Quarter Window */}
          <path
            d="M 485 202 L 550 202 C 540 180, 520 165, 495 158 Z"
            fill="#060E1E"
            stroke="#36D6FF"
            strokeWidth="1.2"
          />

          {/* Side Mirror */}
          <path
            d="M 360 208 C 362 198, 385 198, 390 205 C 390 212, 372 216, 362 214 Z"
            fill="#36D6FF"
          />

          {/* Headlamp Assembly */}
          <path
            d="M 660 268 C 675 268, 695 278, 695 288 C 685 292, 665 288, 655 280 Z"
            fill="#FFFFFF"
            filter="drop-shadow(0 0 8px #36D6FF)"
          />

          {/* Lower Aerodynamic Diffuser / Rocker Skirt */}
          <path
            d="M 270 334 L 400 334 L 400 342 L 270 342 Z"
            fill="#060B16"
            stroke="#1E90FF"
            strokeWidth="1.5"
          />

          {/* --- REAR WHEEL (Left) --- */}
          <g transform="translate(175, 330)">
            {/* Tyre */}
            <circle cx="0" cy="0" r="48" fill="#060B16" stroke="#121F38" strokeWidth="8" />
            {/* Rim Lip */}
            <circle cx="0" cy="0" r="38" fill="#0A1428" stroke="#36D6FF" strokeWidth="2.5" />
            {/* Multi-spoke Rim */}
            <circle cx="0" cy="0" r="28" fill="url(#rimMetal)" />
            <circle cx="0" cy="0" r="14" fill="#060B16" stroke="#1E90FF" strokeWidth="2" />
            <line x1="-28" y1="0" x2="28" y2="0" stroke="#36D6FF" strokeWidth="2.5" />
            <line x1="0" y1="-28" x2="0" y2="28" stroke="#36D6FF" strokeWidth="2.5" />
            <line x1="-20" y1="-20" x2="20" y2="20" stroke="#36D6FF" strokeWidth="2.5" />
            <line x1="-20" y1="20" x2="20" y2="-20" stroke="#36D6FF" strokeWidth="2.5" />
            {/* Center Cap */}
            <circle cx="0" cy="0" r="6" fill="#1E90FF" />
          </g>

          {/* --- FRONT WHEEL (Right) --- */}
          <g transform="translate(495, 330)">
            {/* Tyre */}
            <circle cx="0" cy="0" r="48" fill="#060B16" stroke="#121F38" strokeWidth="8" />
            {/* Rim Lip */}
            <circle cx="0" cy="0" r="38" fill="#0A1428" stroke="#36D6FF" strokeWidth="2.5" />
            {/* Multi-spoke Rim */}
            <circle cx="0" cy="0" r="28" fill="url(#rimMetal)" />
            <circle cx="0" cy="0" r="14" fill="#060B16" stroke="#1E90FF" strokeWidth="2" />
            <line x1="-28" y1="0" x2="28" y2="0" stroke="#36D6FF" strokeWidth="2.5" />
            <line x1="0" y1="-28" x2="0" y2="28" stroke="#36D6FF" strokeWidth="2.5" />
            <line x1="-20" y1="-20" x2="20" y2="20" stroke="#36D6FF" strokeWidth="2.5" />
            <line x1="-20" y1="20" x2="20" y2="-20" stroke="#36D6FF" strokeWidth="2.5" />
            {/* Center Cap */}
            <circle cx="0" cy="0" r="6" fill="#1E90FF" />
          </g>
        </g>

        {/* --- DYNAMIC WATER SPLASH & BUBBLES --- */}
        <g id="water-splash">
          {/* Main Splash Wave Ribbon */}
          <path
            d="M 60 410 
               C 110 370, 160 415, 230 385 
               C 290 360, 360 410, 440 380 
               C 520 350, 600 405, 690 375 
               C 740 360, 770 385, 780 415 
               C 710 425, 620 435, 490 435 
               C 340 435, 180 430, 60 410 Z"
            fill="url(#splashWave)"
          />

          {/* Curling Splash Crests */}
          <path
            d="M 120 380 C 135 340, 160 355, 175 375 C 160 370, 138 372, 120 380 Z"
            fill="#36D6FF"
          />
          <path
            d="M 430 375 C 445 335, 475 350, 485 370 C 470 366, 448 368, 430 375 Z"
            fill="#FFFFFF"
            fillOpacity="0.85"
          />
          <path
            d="M 630 370 C 650 330, 680 345, 690 368 C 675 362, 650 364, 630 370 Z"
            fill="#36D6FF"
          />

          {/* Water Droplets Scattered */}
          <circle cx="95" cy="360" r="4" fill="#36D6FF" />
          <circle cx="140" cy="335" r="3.5" fill="#FFFFFF" />
          <circle cx="190" cy="350" r="2.5" fill="#36D6FF" />
          <circle cx="270" cy="365" r="3" fill="#FFFFFF" />
          <circle cx="410" cy="345" r="4.5" fill="#FFFFFF" />
          <circle cx="460" cy="330" r="3" fill="#36D6FF" />
          <circle cx="580" cy="340" r="4" fill="#FFFFFF" />
          <circle cx="650" cy="325" r="3.5" fill="#36D6FF" />
          <circle cx="710" cy="345" r="5" fill="#FFFFFF" />
          <circle cx="745" cy="365" r="3" fill="#36D6FF" />
        </g>

        {/* --- BRILLIANT SHINE BURSTS --- */}
        <g id="sparkle-stars">
          {/* Main Roof Starburst */}
          <g transform="translate(420, 140)">
            <path d="M0 -18 L3 -4 L18 0 L3 4 L0 18 L-3 4 L-18 0 L-3 -4 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="4" fill="#36D6FF" />
          </g>
          {/* Hood Starburst */}
          <g transform="translate(620, 230)">
            <path d="M0 -14 L2.5 -3 L14 0 L2.5 3 L0 14 L-2.5 3 L-14 0 L-2.5 -3 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="3" fill="#36D6FF" />
          </g>
          {/* Rear Wing Starburst */}
          <g transform="translate(140, 240)">
            <path d="M0 -12 L2 -2.5 L12 0 L2 2.5 L0 12 L-2 2.5 L-12 0 L-2 -2.5 Z" fill="#FFFFFF" />
            <circle cx="0" cy="0" r="2.5" fill="#36D6FF" />
          </g>
        </g>
      </svg>

      {/* Floating Badge in Bottom Corner */}
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2 bg-[#060B16]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#1E90FF]/40 text-xs font-semibold text-white">
        <span className="w-2 h-2 rounded-full bg-[#36D6FF] shadow-[0_0_8px_#36D6FF]" />
        <span className="font-heading uppercase tracking-wider text-[11px] text-[#A9B7CC]">
          Showroom Finish · Dunedin
        </span>
      </div>
    </div>
  );
};
