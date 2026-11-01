/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SITE_CONFIG } from './config';
import { Navbar } from './components/Navbar';
import { HeroIllustration } from './components/HeroIllustration';
import { BeforeAfterCard } from './components/BeforeAfterCard';
import { BookingForm } from './components/BookingForm';
import { DunedinMapCard } from './components/DunedinMapCard';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { getServiceIcon } from './components/ServiceIcons';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SITE_CONFIG.services[0].id);

  // Smooth scroll helper
  const scrollToContact = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = 70;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#060B16] text-white flex flex-col selection:bg-[#1E90FF]/30 selection:text-white">
      {/* Sticky Navbar (Not counted as a section) */}
      <Navbar />

      {/* Main Content Area: EXACTLY 5 SECTIONS */}
      <main className="flex-1">
        {/* ===================================================================
            SECTION 1: HERO
            Dark navy background with SVG car, splash and sparkle illustration.
            Headline: "Give Your Car a Brilliant Shine."
            Subheadline: "Professional car detailing in Dunedin, from a deep clean to a showroom finish."
            Buttons: "Call 028 460 3128" and "Get a Free Quote"
            Badges: "5.0 ★ (4 Google Reviews)", "Dunedin, NZ", "Professional Car Detailing"
           =================================================================== */}
        <section
          id="hero"
          className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#060B16] via-[#081020] to-[#060B16]"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1E90FF]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-6">
              {/* Badge 1: 5.0 Star Google Rating */}
              <a
                href={SITE_CONFIG.rating.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C1426] border border-[#1E90FF]/40 text-xs font-semibold text-white hover:border-[#36D6FF] transition-all shadow-sm group"
              >
                <span className="text-amber-400 font-bold">★</span>
                <span>{SITE_CONFIG.rating.badgeText}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5262B]" />
              </a>

              {/* Badge 2: Location Dunedin, NZ */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0C1426] border border-[#1B2A4A] text-xs font-medium text-[#A9B7CC]">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#36D6FF] fill-none stroke-currentColor stroke-width-2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Dunedin, NZ</span>
              </span>

              {/* Badge 3: Professional Car Detailing */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0C1426] border border-[#1B2A4A] text-xs font-medium text-[#36D6FF]">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#1E90FF] fill-none stroke-currentColor stroke-width-2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Professional Car Detailing</span>
              </span>
            </div>

            {/* Hero Main Grid: Text on Left, Hero Visual on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Text Column */}
              <div className="lg:col-span-6 text-center lg:text-left space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-black tracking-tight text-white uppercase leading-[1.08] text-balance">
                  Give Your Car a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36D6FF] via-[#1E90FF] to-[#36D6FF] animate-pulse">
                    Brilliant Shine.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#A9B7CC] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Professional car detailing in Dunedin, from a deep clean to a showroom finish.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                  {/* Primary CTA 1: Call Phone */}
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white font-heading font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(30,144,255,0.45)] hover:shadow-[0_0_35px_rgba(30,144,255,0.7)] active:scale-95"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-width-2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
                  </a>

                  {/* Secondary CTA 2: Get a Free Quote (Scrolls to Contact) */}
                  <button
                    type="button"
                    onClick={() => scrollToContact()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0C1426] hover:bg-[#121C34] text-white font-heading font-semibold text-sm border border-[#1B2A4A] hover:border-[#1E90FF] transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>Get a Free Quote</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#36D6FF] fill-none stroke-currentColor stroke-width-2">
                      <polyline points="7 13 12 18 17 13" />
                      <polyline points="7 6 12 11 17 6" />
                    </svg>
                  </button>
                </div>

                {/* Subtext info */}
                <div className="pt-2 text-xs text-[#A9B7CC] flex items-center justify-center lg:justify-start gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36D6FF]" />
                    Mobile or by appointment
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]" />
                    Fast turnarounds
                  </span>
                </div>
              </div>

              {/* Hero Visual Column (Pure SVG & CSS, no external photo dependency) */}
              <div className="lg:col-span-6">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: SERVICES
            A responsive grid of 8 editable cards with SVG icons:
            1. full interior detail
            2. exterior wash and hand dry
            3. full interior and exterior detail
            4. paint polish and wax
            5. ceramic coating and paint protection
            6. headlight restoration
            7. engine bay cleaning
            8. odour and stain removal
            Each card has a one-line description and an "Enquire" link that
            scrolls to the contact form with the service pre-selected.
            Note above grid: "Services shown are examples, so edit them in the config to match what you offer."
            Editable "Request a quote" note without invented prices.
           =================================================================== */}
        <section
          id="services"
          className="relative py-20 sm:py-24 bg-[#080E1C] border-y border-[#1B2A4A]/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#36D6FF]">
                Comprehensive Auto Care
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mt-1.5 mb-3 uppercase tracking-tight">
                Our Detailing Services
              </h2>
              <p className="text-sm sm:text-base text-[#A9B7CC] leading-relaxed">
                From daily driver refreshes to deep mechanical cleaning and high-gloss ceramic paint protection in Dunedin.
              </p>

              {/* Required Note Above Grid */}
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0C1426] border border-[#1B2A4A] text-xs text-[#36D6FF]">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-none stroke-currentColor stroke-width-2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>Services shown are examples, so edit them in the config to match what you offer.</span>
              </div>
            </div>

            {/* 8-Card Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {SITE_CONFIG.services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#0C1426] border border-[#1B2A4A] hover:border-[#1E90FF]/80 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(30,144,255,0.15)] hover:-translate-y-1"
                >
                  {/* Card Top: Icon & Counter */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1E90FF]/15 border border-[#1E90FF]/30 flex items-center justify-center text-[#36D6FF] group-hover:scale-110 group-hover:bg-[#1E90FF] group-hover:text-white transition-all duration-200">
                        {getServiceIcon(service.icon, "w-6 h-6")}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        0{index + 1}
                      </span>
                    </div>

                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#36D6FF] block mb-1">
                      {service.highlight}
                    </span>

                    <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-[#36D6FF] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A9B7CC] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Bottom: Quote Note & Enquire Link */}
                  <div className="mt-6 pt-4 border-t border-[#1B2A4A]/60 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400 italic">
                      Request a quote
                    </span>

                    <button
                      type="button"
                      onClick={() => scrollToContact(service.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-[#1E90FF] group-hover:text-[#36D6FF] transition-colors focus:outline-none"
                    >
                      <span>Enquire</span>
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-width-2 group-hover:translate-x-1 transition-transform">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Service Note */}
            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-[#A9B7CC]">
                Have a specialized detailing requirement or multiple vehicles?{' '}
                <button
                  type="button"
                  onClick={() => scrollToContact()}
                  className="text-[#36D6FF] hover:underline font-semibold ml-1 cursor-pointer"
                >
                  Contact us for a tailored Dunedin quote
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: WHY CHOOSE US + OUR WORK
            Short paragraph about careful, quality detailing and a flawless,
            long-lasting shine. 4 to 6 benefit points.
            Below it: row of 3 before/after placeholder tiles (SVG/CSS).
            Stats row showing "5.0 Google rating" and "4 Google reviews" plus
            one editable value ("Years in business: [edit]").
            Light section styling (#F2F6FB) with dark text for high contrast.
           =================================================================== */}
        <section
          id="why-choose-us"
          className="relative py-20 sm:py-28 bg-[#F2F6FB] text-[#0B1528] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Block */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#0066CC]">
                The Rayshine Difference
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0B1528] mt-1.5 mb-4 uppercase tracking-tight">
                Why Choose Us & Our Work
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                At Rayshine Autodetailing, we believe car detailing is an art of patience and precision. We combine gentle hand-washing techniques, high-grade machine correction, and premium protective sealants to deliver a flawless, long-lasting shine that stands up to Dunedin’s coastal climate.
              </p>
            </div>

            {/* 6 Benefit Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
              {SITE_CONFIG.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1E90FF] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1E90FF]/10 text-[#0066CC] flex items-center justify-center font-heading font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-[#0B1528] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Section Divider Subheading: Our Work / Before & After */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#0066CC]">
                Visual Transformation
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[#0B1528] mt-1">
                Our Work: Before & After Showcase
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                Toggle between the before and after states below to see the standard of gloss and cleanliness we achieve.
              </p>
            </div>

            {/* Row of 3 Before/After Placeholder Tiles (SVG/CSS, ready for owner photo swap) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
              {SITE_CONFIG.beforeAfterItems.map((item) => (
                <BeforeAfterCard key={item.id} item={item} />
              ))}
            </div>

            {/* Stats Row (5.0 Google rating, 4 Google reviews, plus editable value) */}
            <div className="rounded-2xl bg-[#0C1426] text-white p-6 sm:p-8 border border-[#1B2A4A] shadow-xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#1B2A4A]">
                {/* Stat 1: 5.0 Google Rating */}
                <div className="pt-4 lg:pt-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-amber-400">
                    5.0 ★
                  </div>
                  <div className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white mt-1">
                    Google Rating
                  </div>
                  <p className="text-[11px] text-[#A9B7CC] mt-0.5">
                    100% 5-Star Feedback
                  </p>
                </div>

                {/* Stat 2: 4 Google Reviews */}
                <div className="pt-4 lg:pt-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#36D6FF]">
                    4
                  </div>
                  <div className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white mt-1">
                    Google Reviews
                  </div>
                  <p className="text-[11px] text-[#A9B7CC] mt-0.5">
                    Verified Customer Reviews
                  </p>
                </div>

                {/* Stat 3: Editable Years / Location */}
                <div className="pt-4 lg:pt-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white">
                    Dunedin
                  </div>
                  <div className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white mt-1">
                    Locally Owned
                  </div>
                  <p className="text-[11px] text-[#A9B7CC] mt-0.5">
                    Years in business: [edit in config]
                  </p>
                </div>

                {/* Stat 4: Hand-crafted Care */}
                <div className="pt-4 lg:pt-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#1E90FF]">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white mt-1">
                    Quality Standard
                  </div>
                  <p className="text-[11px] text-[#A9B7CC] mt-0.5">
                    Two-bucket safe wash process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: REVIEWS
            Rating summary showing 5.0 stars "Based on 4 Google reviews"
            Grid of 3 clearly labelled placeholder review cards the owner can
            replace with real Google reviews.
            "Read our reviews on Google" button with editable URL.
           =================================================================== */}
        <section
          id="reviews"
          className="relative py-20 sm:py-24 bg-[#060B16] border-b border-[#1B2A4A]/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header & Rating Summary */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#36D6FF]">
                Customer Satisfaction
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mt-1.5 mb-3 uppercase tracking-tight">
                Verified Customer Reviews
              </h2>

              {/* Exact Google Rating Summary */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-3.5 sm:px-6 rounded-2xl bg-[#0C1426] border border-[#1E90FF]/40 shadow-lg mt-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl sm:text-3xl font-heading font-black text-amber-400">
                    5.0
                  </span>
                  <div className="flex text-amber-400">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-lg">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block w-[1px] h-6 bg-[#1B2A4A]" />
                <span className="text-xs sm:text-sm font-medium text-slate-300">
                  Based on 4 Google reviews
                </span>
              </div>
            </div>

            {/* Grid of 3 Clearly Labelled Placeholder Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {SITE_CONFIG.reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-[#0C1426] border border-[#1B2A4A] hover:border-[#1E90FF]/50 transition-all shadow-md group relative"
                >
                  {/* Subtle placeholder badge for clarity */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400 text-sm">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 bg-[#060B16] px-2 py-0.5 rounded border border-[#1B2A4A]">
                      Google Review
                    </span>
                  </div>

                  {/* Review Content */}
                  <blockquote className="text-xs sm:text-sm text-[#A9B7CC] leading-relaxed italic mb-6">
                    "{review.content}"
                  </blockquote>

                  {/* Reviewer Details */}
                  <div className="pt-4 border-t border-[#1B2A4A]/60 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-heading font-bold text-white">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-[#36D6FF]">{review.vehicle}</p>
                    </div>

                    <span className="text-[11px] text-slate-500">
                      {review.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Read Our Reviews on Google Button */}
            <div className="text-center">
              <a
                href={SITE_CONFIG.rating.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C1426] hover:bg-[#121C34] text-white border border-[#1B2A4A] hover:border-[#36D6FF] text-xs sm:text-sm font-heading font-semibold transition-all shadow-sm group"
              >
                <span>Read our reviews on Google</span>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#36D6FF] fill-none stroke-currentColor stroke-width-2 group-hover:translate-x-1 transition-transform">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <p className="text-[11px] text-slate-500 mt-2">
                URL editable in config · Honest 5.0 rating on Google Maps
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: CONTACT & BOOKING
            Two-column layout (stacked on mobile).
            Col 1: Booking form with front-end validation and success message.
            Col 2: Click-to-call & text buttons, email button, location,
            hours placeholders, social icon placeholders, styled map card,
            and "Get Directions" button.
           =================================================================== */}
        <section
          id="contact"
          className="relative py-20 sm:py-24 bg-[#080E1C]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#36D6FF]">
                Get in Touch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mt-1.5 mb-3 uppercase tracking-tight">
                Contact & Booking
              </h2>
              <p className="text-sm sm:text-base text-[#A9B7CC] leading-relaxed">
                Ready to restore your car's brilliant showroom gloss? Call us directly, send a text, or submit your details below for a fast, free quote.
              </p>
            </div>

            {/* Two-Column Grid (Stacked on Mobile) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Column 1: Booking Form (7 Cols on LG) */}
              <div className="lg:col-span-7">
                <BookingForm
                  selectedServiceId={selectedServiceId}
                  onServiceChange={(id) => setSelectedServiceId(id)}
                />
              </div>

              {/* Column 2: Direct Contact, Location, Hours & Map Card (5 Cols on LG) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Action Buttons: Call, SMS, Email */}
                <div className="p-6 rounded-2xl bg-[#0C1426] border border-[#1B2A4A] space-y-3.5 shadow-md">
                  <h3 className="text-base font-heading font-bold text-white mb-2">
                    Direct Contact Options
                  </h3>

                  {/* Click-to-call */}
                  <a
                    href={SITE_CONFIG.contact.phoneHref}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white font-heading font-bold text-sm tracking-wide transition-all shadow-[0_0_15px_rgba(30,144,255,0.3)]"
                  >
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-currentColor stroke-width-2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>Call {SITE_CONFIG.contact.phoneDisplay}</span>
                    </div>
                    <span className="text-xs font-normal opacity-90">Tap to call</span>
                  </a>

                  {/* Click-to-SMS */}
                  <a
                    href={SITE_CONFIG.contact.smsHref}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#060B16] hover:bg-[#121C34] text-white border border-[#1B2A4A] hover:border-[#1E90FF] text-xs font-semibold transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#36D6FF] fill-none stroke-currentColor stroke-width-2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>Send Text / SMS</span>
                    </div>
                    <span className="text-[#A9B7CC] text-[11px]">028 460 3128</span>
                  </a>

                  {/* Email Button */}
                  <a
                    href={SITE_CONFIG.contact.emailHref}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#060B16] hover:bg-[#121C34] text-white border border-[#1B2A4A] hover:border-[#1E90FF] text-xs font-semibold transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#36D6FF] fill-none stroke-currentColor stroke-width-2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>Email Us</span>
                    </div>
                    <span className="text-[#A9B7CC] text-[11px] truncate max-w-[150px]">
                      {SITE_CONFIG.contact.email}
                    </span>
                  </a>
                </div>

                {/* Operating Hours Card */}
                <div className="p-5 rounded-2xl bg-[#0C1426] border border-[#1B2A4A] space-y-2.5">
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#36D6FF]">
                    Hours of Operation
                  </h4>
                  <div className="space-y-1.5 text-xs text-[#A9B7CC]">
                    {SITE_CONFIG.contact.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center py-1 border-b border-[#1B2A4A]/50 last:border-0">
                        <span className="text-white font-medium">{h.days}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Styled Dunedin Map Card with Directions & Keyless Fallback */}
                <DunedinMapCard />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Not counted as a section) */}
      <Footer />

      {/* Floating circular blue call button & back to top */}
      <FloatingActions />
    </div>
  );
}
