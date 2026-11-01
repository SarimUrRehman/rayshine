import React from 'react';

interface IconProps {
  className?: string;
}

export const InteriorIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Car Seat & Cabin Vacuum motif */}
    <path d="M7 3C5.5 3 4 4.5 4 6V14C4 16.5 6 18 8.5 18H15.5C18 18 20 16.5 20 14V6C20 4.5 18.5 3 17 3H7Z" />
    <path d="M8 7H16" />
    <path d="M8 11H16" />
    <path d="M5 21H19" />
    <path d="M9 18V21" />
    <path d="M15 18V21" />
  </svg>
);

export const WashIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Water drop, foam bubbles & sponge */}
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    <circle cx="12" cy="14" r="2.5" fill="currentColor" fillOpacity="0.2" />
    <path d="M7 11.5c.5-2.5 3-4 3-4" />
  </svg>
);

export const FullPackageIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Shield with car and shine star */}
    <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export const PolishIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Rotary buffer disc with shine rays */}
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 3v2" />
    <path d="M12 19v2" />
    <path d="M3 12h2" />
    <path d="M19 12h2" />
    <path d="M5.6 5.6l1.4 1.4" />
    <path d="M17 17l1.4 1.4" />
  </svg>
);

export const CeramicIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Diamond shield / nano ceramic molecular bond */}
    <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
    <path d="M2 9h20" />
    <path d="M10 3l-2 6 4 12" />
    <path d="M14 3l2 6-4 12" />
  </svg>
);

export const HeadlightIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Automotive projector headlight beam */}
    <path d="M3 8c4 0 6 2 6 4s-2 4-6 4V8z" />
    <path d="M13 7l8-2" />
    <path d="M14 12h7" />
    <path d="M13 17l8 2" />
    <circle cx="5" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const EngineIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Engine block silhouette */}
    <rect x="5" y="7" width="14" height="11" rx="2" />
    <path d="M2 10h3" />
    <path d="M2 14h3" />
    <path d="M19 10h3" />
    <path d="M19 14h3" />
    <path d="M9 4v3" />
    <path d="M15 4v3" />
    <path d="M9 11h6" />
  </svg>
);

export const OdourIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Clean ozone atom / vapor wave freshness */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" />
    <path d="M8 12c1.5-2 3-2 4.5 0s3 2 4.5 0" />
    <path d="M17 7l2-2" />
    <path d="M19 10h3" />
  </svg>
);

export const getServiceIcon = (type: string, className?: string) => {
  switch (type) {
    case 'interior':
      return <InteriorIcon className={className} />;
    case 'wash':
      return <WashIcon className={className} />;
    case 'full':
      return <FullPackageIcon className={className} />;
    case 'polish':
      return <PolishIcon className={className} />;
    case 'ceramic':
      return <CeramicIcon className={className} />;
    case 'headlight':
      return <HeadlightIcon className={className} />;
    case 'engine':
      return <EngineIcon className={className} />;
    case 'odour':
      return <OdourIcon className={className} />;
    default:
      return <WashIcon className={className} />;
  }
};
