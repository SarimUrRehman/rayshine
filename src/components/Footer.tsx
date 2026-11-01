import React from 'react';
import { Logo } from './Logo';
import { SITE_CONFIG } from '../config';

export const Footer: React.FC = () => {
  const { contact } = SITE_CONFIG;

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="relative bg-[#040812] border-t border-[#1B2A4A] text-[#A9B7CC] pt-14 pb-12 overflow-hidden">
      {/* Decorative top blue hairline glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E90FF]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} className="inline-block">
              <Logo size="md" />
            </a>
            <p className="text-xs sm:text-sm text-[#A9B7CC] leading-relaxed">
              Professional car detailing service based in Dunedin, New Zealand. Delivering meticulous interior cleaning, swirl-free paint correction, and showroom brilliance.
            </p>
            {/* Rating verification */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0C1426] border border-[#1B2A4A] text-xs">
              <span className="text-amber-400 font-bold">5.0 ★</span>
              <span className="text-white font-medium">(4 Google Reviews)</span>
              <span className="text-[#36D6FF] text-[10px]">· Dunedin, NZ</span>
            </div>
          </div>

          {/* Col 2: Quick Links (5 Sections) */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, '#hero')}
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                >
                  Home (Top)
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollTo(e, '#services')}
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                >
                  Detailing Services (8)
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => scrollTo(e, '#why-choose-us')}
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                >
                  Why Choose Us & Our Work
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => scrollTo(e, '#reviews')}
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                >
                  Google Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, '#contact')}
                  className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150"
                >
                  Contact & Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white mb-4">
              Contact & Hours
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1E90FF] shrink-0 mt-0.5 fill-none stroke-currentColor stroke-width-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={contact.phoneHref} className="text-white hover:text-[#36D6FF] transition-colors">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1E90FF] shrink-0 mt-0.5 fill-none stroke-currentColor stroke-width-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={contact.emailHref} className="text-[#A9B7CC] hover:text-white transition-colors break-all">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#1E90FF] shrink-0 mt-0.5 fill-none stroke-currentColor stroke-width-2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <span className="text-white">{contact.location.streetAddress}</span>
                  <p className="text-[11px] text-[#A9B7CC] mt-0.5">{contact.location.serviceNote}</p>
                </div>
              </li>
              <li className="pt-1 text-[11px] text-slate-400 space-y-0.5">
                <p className="font-semibold text-slate-300">Operating Hours:</p>
                {contact.hours.map((h, idx) => (
                  <p key={idx}>{h.days}: {h.time}</p>
                ))}
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Socials */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h4>
            <p className="text-xs sm:text-sm text-[#A9B7CC] mb-4">
              Follow our latest Dunedin detailing transformations and car care tips:
            </p>

            <div className="flex items-center gap-3 mb-5">
              {/* Instagram */}
              <a
                href={contact.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0C1426] border border-[#1B2A4A] flex items-center justify-center text-[#A9B7CC] hover:text-[#36D6FF] hover:border-[#1E90FF] transition-all"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-width-2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={contact.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0C1426] border border-[#1B2A4A] flex items-center justify-center text-[#A9B7CC] hover:text-[#36D6FF] hover:border-[#1E90FF] transition-all"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-width-2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={contact.socials.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0C1426] border border-[#1B2A4A] flex items-center justify-center text-[#A9B7CC] hover:text-[#36D6FF] hover:border-[#1E90FF] transition-all"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-width-2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>

            <div className="p-3 rounded-xl bg-[#0C1426] border border-[#1B2A4A]">
              <span className="text-[11px] font-semibold text-white block">
                Dunedin Mobile Detailing
              </span>
              <span className="text-[10px] text-[#A9B7CC] block mt-0.5">
                We can come to your home or office.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-[#1B2A4A]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 Rayshine Autodetailing. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Dunedin, New Zealand · Car Detailing Service
          </p>
        </div>
      </div>
    </footer>
  );
};
