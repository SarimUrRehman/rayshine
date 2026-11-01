import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '../config';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { contact } = SITE_CONFIG;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060B16]/95 backdrop-blur-md border-b border-[#1B2A4A] shadow-[0_4px_25px_rgba(0,0,0,0.5)] py-2.5 sm:py-3'
          : 'bg-[#060B16]/80 backdrop-blur-sm border-b border-white/5 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo on Left */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E90FF] rounded-lg"
            aria-label="Rayshine Autodetailing Home"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#A9B7CC]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-white transition-colors duration-150 py-1 relative group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#1E90FF] to-[#36D6FF] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Call Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white font-heading font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-[0_0_20px_rgba(30,144,255,0.35)] hover:shadow-[0_0_25px_rgba(30,144,255,0.6)] whitespace-nowrap active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-currentColor stroke-width-2"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call {contact.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={contact.phoneHref}
              className="sm:hidden p-2 rounded-lg bg-[#1E90FF] text-white hover:bg-[#1E90FF]/90 transition-colors"
              aria-label={`Call ${contact.phoneDisplay}`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-width-2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0C1426] border border-[#1B2A4A] text-[#A9B7CC] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-currentColor stroke-width-2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-currentColor stroke-width-2">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060B16] border-b border-[#1B2A4A] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#A9B7CC] hover:text-white hover:bg-[#0C1426] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#1B2A4A] flex flex-col gap-2">
            <a
              href={contact.phoneHref}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1E90FF] text-white font-heading font-bold text-sm tracking-wide shadow-md"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-width-2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call {contact.phoneDisplay}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0C1426] border border-[#1B2A4A] text-[#36D6FF] font-medium text-xs text-center"
            >
              Book an Appointment / Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
