/**
 * ============================================================================
 * RAYSHINE AUTODETAILING - CENTRAL SITE CONFIGURATION & CONTENT
 * ============================================================================
 * 
 * HOW TO EDIT THIS FILE:
 * - Update business contact details, hours, and placeholders below.
 * - To replace before/after placeholders with real photos:
 *   1. Place your image files in the public directory (e.g., /public/images/)
 *   2. Update the image paths in the `beforeAfterItems` array below.
 * 
 * RECOMMENDED ASSET SIZES FOR OWNER UPLOADS:
 * - Before/After photos: 1200 x 800 px (3:2 ratio) or 800 x 600 px (4:3 ratio), WebP or JPG format.
 * - Filename recommendations:
 *   - ./images/before-1.webp & ./images/after-1.webp (Paint Correction)
 *   - ./images/before-2.webp & ./images/after-2.webp (Interior Restoration)
 *   - ./images/before-3.webp & ./images/after-3.webp (Ceramic Coating / Exterior Detail)
 * ============================================================================
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  icon: 'interior' | 'wash' | 'full' | 'polish' | 'ceramic' | 'headlight' | 'engine' | 'odour';
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  // Set to relative local path when real photos are added (e.g., './images/before-1.webp')
  beforeImageSrc: string | null;
  afterImageSrc: string | null;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  vehicle: string;
  content: string;
  isVerifiedPlaceholder: boolean;
}

export const SITE_CONFIG = {
  // Business Core Identity
  businessName: "Rayshine Autodetailing",
  shortName: "Rayshine",
  tagline: "Where Every Car Gets a Brilliant Shine.",
  category: "Car detailing service",
  established: "Dunedin Local Business",

  // Verified Google Review Metrics
  rating: {
    score: "5.0",
    maxScore: "5",
    reviewCount: 4,
    badgeText: "5.0 ★ (4 Google Reviews)",
    googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Rayshine+Autodetailing+Dunedin+New+Zealand", // Editable link
  },

  // Contact Information
  contact: {
    phoneDisplay: "028 460 3128",
    phoneTel: "+64284603128",
    phoneHref: "tel:+64284603128",
    smsHref: "sms:+64284603128",
    email: "info@yourdomain.com", // [Editable Placeholder]
    emailHref: "mailto:info@yourdomain.com",
    
    // Physical Location & Service Area
    location: {
      streetAddress: "[Street address], Dunedin", // [Editable Placeholder]
      city: "Dunedin",
      region: "Otago",
      country: "New Zealand",
      serviceNote: "Mobile service across Dunedin or by appointment",
      directionsUrl: "https://maps.google.com/?q=Dunedin,+New+Zealand",
      // Set to true if a specific physical workshop address is provided
      hasSpecificStreetAddress: false,
      googleMapsEmbedUrl: "https://www.google.com/maps?q=Dunedin+New+Zealand&output=embed",
    },

    // Hours of Operation [Editable Placeholder]
    hours: [
      { days: "Monday – Friday", time: "8:00 AM – 5:30 PM" },
      { days: "Saturday", time: "8:30 AM – 4:00 PM" },
      { days: "Sunday", time: "By Appointment Only" },
    ],

    // Social Media [Editable Placeholders]
    socials: {
      instagram: {
        handle: "@yourinstagram",
        url: "https://instagram.com",
      },
      facebook: {
        handle: "Rayshine Autodetailing Dunedin",
        url: "https://facebook.com",
      },
      whatsapp: {
        url: "https://wa.me/64284603128",
      }
    }
  },

  // Brand Color Tokens
  colors: {
    primaryBg: "#060B16",       // Deep navy-black
    cardBg: "#0C1426",          // Dark navy
    cardBgHover: "#121C34",     // Slightly elevated dark navy
    cardBorder: "#1B2A4A",      // Subtle border
    accentBlue: "#1E90FF",      // Electric blue
    accentCyan: "#36D6FF",      // Bright cyan highlight
    accentRed: "#E5262B",       // "RAY" red accent
    textMuted: "#A9B7CC",       // Soft grey-blue
    textLight: "#FFFFFF",       // Crisp white
    lightSectionBg: "#F2F6FB",  // Light contrast section
    lightSectionText: "#0B1528",// Dark text for light section
  },

  // Services: Exactly the 8 requested services
  services: [
    {
      id: "interior-detail",
      title: "Full Interior Detail",
      description: "Deep steam cleaning, vacuuming, fabric shampoo, and leather conditioning for a fresh cabin.",
      highlight: "Deep clean & sanitation",
      icon: "interior" as const,
    },
    {
      id: "exterior-wash",
      title: "Exterior Wash & Hand Dry",
      description: "Snow foam pre-soak, gentle two-bucket hand wash, plush towel dry, and tyre dressing.",
      highlight: "Scratch-free hand wash",
      icon: "wash" as const,
    },
    {
      id: "full-package",
      title: "Full Interior & Exterior Detail",
      description: "Our comprehensive package combining meticulous interior restoration and radiant exterior shine.",
      highlight: "Showroom transformation",
      icon: "full" as const,
    },
    {
      id: "paint-polish",
      title: "Paint Polish & Wax",
      description: "Machine polish to eliminate light swirl marks followed by premium carnauba protective wax.",
      highlight: "High-gloss mirror finish",
      icon: "polish" as const,
    },
    {
      id: "ceramic-coating",
      title: "Ceramic Coating & Paint Protection",
      description: "Durable hydrophobic nano-ceramic shielding against road grit, salt air, UV rays, and grime.",
      highlight: "Long-lasting protection",
      icon: "ceramic" as const,
    },
    {
      id: "headlight-restoration",
      title: "Headlight Restoration",
      description: "Multi-stage wet sanding and UV sealant clear coat to eliminate yellowing and restore night vision.",
      highlight: "Clarity & road safety",
      icon: "headlight" as const,
    },
    {
      id: "engine-bay",
      title: "Engine Bay Cleaning",
      description: "Careful degreasing, steam cleaning, and satin dressing of plastic and rubber components.",
      highlight: "Clean mechanical look",
      icon: "engine" as const,
    },
    {
      id: "odour-stain",
      title: "Odour & Stain Removal",
      description: "Targeted hot-water extraction and ozone treatment to eradicate stubborn spills and pet odours.",
      highlight: "Allergen & odour neutralizer",
      icon: "odour" as const,
    },
  ],

  // Why Choose Us Benefits
  benefits: [
    {
      title: "Meticulous Attention to Detail",
      description: "We treat every vehicle as our own, reaching every vent, stitch, and emblem with obsessive care.",
    },
    {
      title: "Premium Products & Equipment",
      description: "Using only pH-neutral shampoos, safe microfibre towels, and professional-grade machine polishers.",
    },
    {
      title: "Friendly Local Dunedin Service",
      description: "Proudly serving local car owners, families, and enthusiasts across Dunedin with honest kiwi care.",
    },
    {
      title: "Clear, Upfront Quotes",
      description: "No surprise charges or hidden fees. We inspect your vehicle and provide honest, transparent recommendations.",
    },
    {
      title: "Flexible Booking Options",
      description: "Convenient scheduling to fit your workday, with mobile appointments available across the greater Dunedin area.",
    },
    {
      title: "100% Satisfaction Focused",
      description: "We don't hand back your keys until your vehicle has achieved that brilliant, flawless showroom shine.",
    },
  ],

  // Business stats
  stats: [
    {
      value: "5.0 ★",
      label: "Google Rating",
      subtext: "Perfect 5-star customer score",
    },
    {
      value: "4",
      label: "Google Reviews",
      subtext: "100% 5-star verified feedback",
    },
    {
      value: "Dunedin",
      label: "Locally Owned",
      subtext: "Serving greater Otago & Dunedin",
    },
    {
      value: "100%",
      label: "Hand-Crafted Care",
      subtext: "Careful two-bucket detailing",
    },
  ],

  // Before / After Showcase
  beforeAfterItems: [
    {
      id: "showcase-1",
      title: "Paint Correction & Swirl Removal",
      category: "Paint Enhancement",
      description: "Restoring dull paintwork to a mirror-like reflection with high-gloss depth and slick feel.",
      beforeLabel: "Before photo coming soon",
      afterLabel: "After photo coming soon",
      beforeImageSrc: null,
      afterImageSrc: null,
    },
    {
      id: "showcase-2",
      title: "Deep Interior Steam Extraction",
      category: "Interior Restoration",
      description: "Extracting embedded sand, pet hair, and drink spills from carpets, seats, and console trim.",
      beforeLabel: "Before photo coming soon",
      afterLabel: "After photo coming soon",
      beforeImageSrc: null,
      afterImageSrc: null,
    },
    {
      id: "showcase-3",
      title: "Full Ceramic Shield & Showroom Finish",
      category: "Ceramic Protection",
      description: "Hydrophobic water-beading layer protecting exterior panels against Dunedin coastal weather.",
      beforeLabel: "Before photo coming soon",
      afterLabel: "After photo coming soon",
      beforeImageSrc: null,
      afterImageSrc: null,
    },
  ],

  // Reviews: 3 clearly labelled placeholders that the owner can easily edit with real Google reviews
  reviews: [
    {
      id: "review-1",
      author: "Verified Customer",
      rating: 5,
      date: "Recent Google Review",
      vehicle: "Sedan Detail",
      content: "Exceptional attention to detail! My car hasn't looked this good since it rolled out of the dealership. Every nook and cranny was spotless, and the exterior shine is unbelievable.",
      isVerifiedPlaceholder: true,
    },
    {
      id: "review-2",
      author: "Local Dunedin Driver",
      rating: 5,
      date: "Recent Google Review",
      vehicle: "SUV Interior Clean",
      content: "Incredible interior deep clean. With kids and a dog, the seats were in rough shape, but Rayshine made them look and smell brand new. Professional, polite, and great communication.",
      isVerifiedPlaceholder: true,
    },
    {
      id: "review-3",
      author: "Dunedin Vehicle Owner",
      rating: 5,
      date: "Recent Google Review",
      vehicle: "Full Detail & Polish",
      content: "Top tier service in Dunedin. Honest quotes, punctual, and delivered a showroom finish. Highly recommend Rayshine Autodetailing to anyone who takes pride in their car.",
      isVerifiedPlaceholder: true,
    },
  ],
};
