import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';

export const DunedinMapCard: React.FC = () => {
  const { location } = SITE_CONFIG.contact;
  const [showLiveEmbed, setShowLiveEmbed] = useState(location.hasSpecificStreetAddress);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#1B2A4A] bg-[#0C1426] shadow-xl">
      {/* Map Header */}
      <div className="px-4 py-3 bg-[#080E1C] border-b border-[#1B2A4A] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1E90FF] shadow-[0_0_8px_#1E90FF]" />
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-white">
            Serving Dunedin & Otago
          </span>
        </div>

        {/* Toggle between Styled Map and Google Maps Embed */}
        <button
          type="button"
          onClick={() => setShowLiveEmbed(!showLiveEmbed)}
          className="text-[11px] text-[#36D6FF] hover:text-white transition-colors underline underline-offset-2"
        >
          {showLiveEmbed ? 'Show Stylised Map' : 'Show Interactive Map'}
        </button>
      </div>

      {/* Map Display Container */}
      <div className="relative w-full aspect-[16/9] min-h-[220px] bg-[#070D1A] overflow-hidden">
        {showLiveEmbed ? (
          <iframe
            title="Dunedin Location Map"
            src={location.googleMapsEmbedUrl}
            className="w-full h-full border-0 grayscale-[20%] contrast-[110%] invert-[90%] hue-rotate-[180deg]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          /* Styled Vector Map representing Dunedin Harbour and Otago Coastline */
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Ambient Grid Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1E90FF" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapGrid)" />
            </svg>

            {/* Stylised Otago Coast & Dunedin Harbour Curves */}
            <svg
              viewBox="0 0 400 240"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Otago Harbour Water Body */}
              <path
                d="M 280 20 C 260 70, 220 120, 190 140 C 170 152, 130 160, 90 180 C 60 195, 20 220, 0 240 L 400 240 L 400 20 Z"
                fill="#0A1830"
              />
              {/* Otago Peninsula land strip */}
              <path
                d="M 330 60 C 290 100, 260 135, 220 150 C 200 158, 225 180, 260 160 C 310 130, 360 80, 380 40 Z"
                fill="#0E2242"
                stroke="#1E90FF"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
              {/* Coastline highlight */}
              <path
                d="M 280 20 C 260 70, 220 120, 190 140 C 170 152, 130 160, 90 180 C 60 195, 20 220, 0 240"
                stroke="#36D6FF"
                strokeWidth="2"
                strokeOpacity="0.6"
              />
              {/* Hills Contour Lines */}
              <path d="M 40 80 Q 80 50 140 70" stroke="#1E90FF" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
              <path d="M 20 120 Q 70 100 120 125" stroke="#1E90FF" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />

              {/* Dunedin Central Location Marker */}
              <g transform="translate(160, 135)">
                {/* Pulse ring */}
                <circle cx="0" cy="0" r="16" fill="#1E90FF" fillOpacity="0.25" className="animate-ping" />
                <circle cx="0" cy="0" r="8" fill="#1E90FF" fillOpacity="0.6" />
                <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
              </g>

              {/* Text label for Dunedin */}
              <text x="175" y="130" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="Montserrat">
                DUNEDIN
              </text>
              <text x="175" y="145" fill="#36D6FF" fontSize="9" letterSpacing="1" fontFamily="Montserrat">
                OTAGO, NZ
              </text>
            </svg>

            {/* Floating Info Overlay */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto z-10 p-3 rounded-xl bg-[#060B16]/90 backdrop-blur-md border border-[#1E90FF]/40 shadow-lg max-w-xs">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#1E90FF]/20 text-[#36D6FF] shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-width-2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-xs font-bold font-heading text-white">
                    {location.streetAddress}
                  </h5>
                  <p className="text-[11px] text-[#A9B7CC] mt-0.5">
                    {location.serviceNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Map Action Footer */}
      <div className="p-3 sm:p-4 bg-[#080E1C] flex flex-col sm:flex-row items-center justify-between gap-2.5">
        <p className="text-xs text-[#A9B7CC] text-center sm:text-left">
          Serving all Dunedin suburbs · Mobile or by appointment
        </p>

        <a
          href={location.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white font-medium text-xs transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(30,144,255,0.4)] whitespace-nowrap"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-width-2">
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          Get Directions
        </a>
      </div>
    </div>
  );
};
