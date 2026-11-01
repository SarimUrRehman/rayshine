import React, { useState } from 'react';
import { BeforeAfterItem } from '../config';

interface BeforeAfterCardProps {
  item: BeforeAfterItem;
}

export const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ item }) => {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isInteracting, setIsInteracting] = useState(false);

  const hasRealImages = Boolean(item.beforeImageSrc && item.afterImageSrc);

  return (
    <div className="flex flex-col bg-[#0C1426] rounded-2xl border border-[#1B2A4A] overflow-hidden transition-all duration-300 hover:border-[#1E90FF]/60 hover:shadow-[0_10px_30px_rgba(30,144,255,0.15)] group">
      {/* Header Info */}
      <div className="p-4 sm:p-5 border-b border-[#1B2A4A]/70 flex items-start justify-between gap-3">
        <div>
          <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#36D6FF]">
            {item.category}
          </span>
          <h4 className="text-base sm:text-lg font-heading font-bold text-white mt-0.5">
            {item.title}
          </h4>
        </div>

        {/* View Toggle Pill */}
        <div className="flex items-center p-1 rounded-lg bg-[#060B16] border border-[#1B2A4A] shrink-0 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('before')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
              activeTab === 'before'
                ? 'bg-[#1E293B] text-white shadow-sm'
                : 'text-[#A9B7CC] hover:text-white'
            }`}
            aria-label={`View before state for ${item.title}`}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('after')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
              activeTab === 'after'
                ? 'bg-[#1E90FF] text-white shadow-sm'
                : 'text-[#A9B7CC] hover:text-white'
            }`}
            aria-label={`View after state for ${item.title}`}
          >
            After
          </button>
        </div>
      </div>

      {/* Visual Canvas Area (Aspect Ratio 16/10) */}
      <div className="relative w-full aspect-[16/10] bg-[#070D19] overflow-hidden select-none">
        {hasRealImages ? (
          /* Real photos rendering with fallback */
          <div className="relative w-full h-full">
            {activeTab === 'before' ? (
              <img
                src={item.beforeImageSrc!}
                alt={`Before: ${item.title}`}
                width="640"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              <img
                src={item.afterImageSrc!}
                alt={`After: ${item.title}`}
                width="640"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            )}
          </div>
        ) : (
          /* Styled SVG/CSS Placeholders as requested in prompt */
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
            {activeTab === 'before' ? (
              /* BEFORE STATE: Matte, road grime, swirl-mark simulation */
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1E29] to-[#0E121B] p-6">
                {/* SVG Swirl and Grime Pattern */}
                <svg
                  viewBox="0 0 320 200"
                  className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
                  preserveAspectRatio="none"
                >
                  <circle cx="100" cy="80" r="50" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="100" cy="80" r="70" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="220" cy="120" r="60" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="220" cy="120" r="80" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="5 5" />
                  {/* Dust specks */}
                  <circle cx="60" cy="40" r="2" fill="#94A3B8" />
                  <circle cx="160" cy="90" r="1.5" fill="#94A3B8" />
                  <circle cx="250" cy="50" r="2" fill="#94A3B8" />
                  <circle cx="180" cy="150" r="2.5" fill="#94A3B8" />
                  <circle cx="80" cy="140" r="1.5" fill="#94A3B8" />
                </svg>

                {/* Car Silhouette in matte grey */}
                <svg viewBox="0 0 120 40" className="w-24 h-10 text-slate-500 mb-2 opacity-50">
                  <path
                    d="M10 28 C15 20 28 10 50 10 C70 10 85 18 95 24 L108 26 C112 28 114 30 114 33 L105 33 C103 29 98 26 92 26 C86 26 81 29 79 33 L45 33 C43 29 38 26 32 26 C26 26 21 29 19 33 L6 33 C5 31 7 29 10 28 Z"
                    fill="currentColor"
                  />
                  <circle cx="32" cy="32" r="5" fill="#0A0E17" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="92" cy="32" r="5" fill="#0A0E17" stroke="#475569" strokeWidth="1.5" />
                </svg>

                {/* Label badge */}
                <div className="relative z-10 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-slate-300">
                    {item.beforeLabel}
                  </span>
                </div>
                <p className="relative z-10 text-[11px] text-slate-400 mt-2 max-w-xs">
                  (Dull finish, water spotting & light swirl marks)
                </p>
              </div>
            ) : (
              /* AFTER STATE: Radiant, glossy showroom finish, sparkles, water beading */
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#091833] via-[#060F22] to-[#040813] p-6">
                {/* Glossy Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#36D6FF]/15 to-transparent rotate-12 animate-shine-sweep pointer-events-none" />

                {/* SVG High-Gloss Sparkle Graphic */}
                <svg viewBox="0 0 120 40" className="w-24 h-10 text-[#36D6FF] mb-2 drop-shadow-[0_0_10px_#1E90FF]">
                  <path
                    d="M10 28 C15 20 28 10 50 10 C70 10 85 18 95 24 L108 26 C112 28 114 30 114 33 L105 33 C103 29 98 26 92 26 C86 26 81 29 79 33 L45 33 C43 29 38 26 32 26 C26 26 21 29 19 33 L6 33 C5 31 7 29 10 28 Z"
                    fill="url(#cardGlossGrad)"
                  />
                  <defs>
                    <linearGradient id="cardGlossGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#36D6FF" />
                      <stop offset="50%" stopColor="#1E90FF" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                  <circle cx="32" cy="32" r="5" fill="#060B16" stroke="#36D6FF" strokeWidth="1.5" />
                  <circle cx="92" cy="32" r="5" fill="#060B16" stroke="#36D6FF" strokeWidth="1.5" />
                </svg>

                {/* Floating Starburst */}
                <div className="absolute top-4 right-8 animate-twinkle-1 pointer-events-none">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 text-white">
                    <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute bottom-5 left-8 animate-twinkle-2 pointer-events-none">
                  <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#36D6FF]">
                    <path d="M10 0L12 8L20 10L12 12L10 20L8 12L0 10L8 8Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Label badge */}
                <div className="relative z-10 px-3.5 py-1.5 rounded-full bg-[#1E90FF]/25 border border-[#36D6FF]/60 shadow-[0_0_15px_rgba(54,214,255,0.3)] backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36D6FF] shadow-[0_0_6px_#36D6FF]" />
                    {item.afterLabel}
                  </span>
                </div>
                <p className="relative z-10 text-[11px] text-[#A9B7CC] mt-2 max-w-xs">
                  (Mirror gloss reflection & hydrophobic water beading)
                </p>
              </div>
            )}

            {/* State Indicator in top-left */}
            <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white">
              {activeTab === 'after' ? 'After Detailing' : 'Before Detailing'}
            </div>
          </div>
        )}
      </div>

      {/* Description Footer */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <p className="text-sm text-[#A9B7CC] leading-relaxed">
          {item.description}
        </p>

        {/* Small hint for owner */}
        <div className="mt-3 pt-3 border-t border-[#1B2A4A]/50 flex items-center justify-between text-[11px] text-[#A9B7CC]/70">
          <span>Click tabs to compare results</span>
          <span className="italic text-[#36D6FF]/80">Ready for photo swap</span>
        </div>
      </div>
    </div>
  );
};
