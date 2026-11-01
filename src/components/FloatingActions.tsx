import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back-To-Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="pointer-events-auto p-3 rounded-full bg-[#0C1426]/90 hover:bg-[#121C34] text-[#A9B7CC] hover:text-white border border-[#1B2A4A] shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-currentColor stroke-width-2">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}

      {/* Floating Circular Blue Call Button (Mobile Only / Responsive) */}
      <a
        href={SITE_CONFIG.contact.phoneHref}
        aria-label={`Call Rayshine Autodetailing on ${SITE_CONFIG.contact.phoneDisplay}`}
        className="pointer-events-auto sm:hidden w-14 h-14 rounded-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white flex items-center justify-center shadow-[0_4px_25px_rgba(30,144,255,0.6)] active:scale-95 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-currentColor stroke-width-2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
};
