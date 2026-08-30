export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  client: string;
  year: string;
  role: string;
  liveUrl: string;
  detailRoute: string;
  featured: boolean;
  heroImage: string;
  galleryImages: string[];
  features: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  accentColor: string;
  theme: 'dark' | 'light' | 'gold' | 'emerald' | 'amber' | 'rose';
  stats: {
    label: string;
    value: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: "aurora-grand-hotel",
    number: "01",
    title: "Aurora Grand Hotel",
    category: "Luxury Hospitality & Hotel Experience",
    tagline: "Where Timeless European Elegance Meets 5-Star Luxury",
    description: "A high-end 5-star hotel web platform featuring room booking flows, dynamic luxury suite showcases, concierge services, and bespoke hospitality design.",
    overview: "Aurora Grand Hotel is a premier five-star luxury destination in Kyiv, Ukraine. The website was engineered to deliver an opulent guest journey from the moment the page loads—combining warm golden lighting, immersive suite explorations, wellness amenities, and streamlined room reservations.",
    client: "Aurora Grand Hospitality Group",
    year: "2024",
    role: "Lead UI/UX & Web Development",
    liveUrl: "https://demoo-hotel.netlify.app/",
    detailRoute: "/work/aurora-grand-hotel",
    featured: true,
    heroImage: "/projects/aurora.png",
    galleryImages: [
      "/projects/aurora.png",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      {
        title: "Dynamic Room Booking Engine",
        description: "Interactive calendar selection, real-time rate calculation, and luxury suite amenity comparisons."
      },
      {
        title: "Immersive 360° Suite Viewers",
        description: "High-resolution architectural photography with smooth panoramic room previews."
      },
      {
        title: "Michelin Dining & Spa Reservations",
        description: "Seamless table bookings and private wellness treatment scheduling."
      },
      {
        title: "Multilingual Guest Concierge",
        description: "Tailored experience for international guests with localization and currency conversions."
      }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Lucide Icons"],
    accentColor: "#d4af37",
    theme: "gold",
    stats: [
      { label: "Performance Score", value: "98/100" },
      { label: "Booking Conversion", value: "+42%" },
      { label: "Page Load Time", value: "0.8s" }
    ]
  },
  {
    id: "kashmir-escape",
    number: "02",
    title: "Kashmir Escape",
    category: "Luxury Travel & Tour Expeditions",
    tagline: "Discover The Untouched Beauty of Kashmir",
    description: "An immersive travel booking portal providing luxury tour packages, Shikara ride bookings, snow treks in Gulmarg, and serene houseboat stays.",
    overview: "Kashmir Escape is a curated travel brand dedicated to showing the magic of paradise on earth. Designed with cinematic mountain vistas, custom itinerary planners, real-time weather integration, and verified local guide booking.",
    client: "Kashmir Escape Travel Ltd",
    year: "2024",
    role: "Concept, UI/UX & Web Development",
    liveUrl: "https://kashmir-website.netlify.app/",
    detailRoute: "/work/kashmir-escape",
    featured: true,
    heroImage: "/projects/kashmir.png",
    galleryImages: [
      "/projects/kashmir.png",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      {
        title: "Curated Tour Itineraries",
        description: "Day-by-day expedition plans covering Srinagar, Gulmarg, Pahalgam, and Sonamarg."
      },
      {
        title: "Instant Package Quote Calculator",
        description: "Dynamic pricing based on passenger count, hotel tier, and season."
      },
      {
        title: "Live Dal Lake Houseboat Booking",
        description: "Direct reservation system for traditional cedar houseboats with verified reviews."
      },
      {
        title: "Traveler Safety & Gear Guide",
        description: "Comprehensive weather insights, packing recommendations, and 24/7 hotline support."
      }
    ],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite", "SEO Optimization"],
    accentColor: "#38bdf8",
    theme: "dark",
    stats: [
      { label: "Tour Bookings", value: "+65%" },
      { label: "User Engagement", value: "4m 20s" },
      { label: "SEO Ranking", value: "Top 3" }
    ]
  },
  {
    id: "artistry-by-marium",
    number: "03",
    title: "Artistry by Marium",
    category: "Handcrafted Art & Gift Bouquets",
    tagline: "Handcrafted Art That Tells Your Story",
    description: "An artisanal e-commerce experience showcasing bespoke canvas paintings, aesthetic calligraphy bookmarks, and custom gift bouquets.",
    overview: "Artistry by Marium is a creative studio producing custom hand-painted art, resin crafts, luxury calligraphy bookmarks, and personalized gift bouquets. The website highlights the delicate craft, texture of hand-drawn strokes, custom order requests, and customer reviews.",
    client: "Marium Studio",
    year: "2024",
    role: "Full-Stack Design & Development",
    liveUrl: "https://artistrybymarium.netlify.app/",
    detailRoute: "/work/artistry-by-marium",
    featured: true,
    heroImage: "/projects/marium.png",
    galleryImages: [
      "/projects/marium.png",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      {
        title: "Bespoke Art Catalog",
        description: "Categorized showcases of original canvases, textured oils, and calligraphy."
      },
      {
        title: "Custom Gift Builder",
        description: "Interactive selection for custom ribbon colors, message cards, and floral arrangements."
      },
      {
        title: "Direct WhatsApp Checkout",
        description: "Frictionless direct-to-artisan ordering with automated cart summary messages."
      },
      {
        title: "Visual Gallery Zoom",
        description: "Ultra-fine detail viewer to examine hand-painted strokes and resin finishes."
      }
    ],
    techStack: ["React 18", "Tailwind CSS", "Vite", "WhatsApp API", "Lucide React"],
    accentColor: "#f472b6",
    theme: "rose",
    stats: [
      { label: "Customer Inquiries", value: "3.5x" },
      { label: "Mobile Traffic", value: "85%" },
      { label: "Customer Satisfaction", value: "100%" }
    ]
  },
  {
    id: "hussain-foods",
    number: "04",
    title: "Hussain Foods",
    category: "Culinary & Fast Food Brand",
    tagline: "The Authentic Taste of Karachi Flame BBQ & Biryani",
    description: "A modern culinary web experience featuring sizzling flame-grilled BBQ, signature Karachi Biryani, crispy broast, and fast online food ordering.",
    overview: "Hussain Foods is a legendary culinary destination known for authentic smoky seekh kababs, aromatic Dum Biryani, and crispy fried chicken. The website offers rich food photography, an interactive digital menu, party catering bookings, and direct branch location finding.",
    client: "Hussain Foods Karachi",
    year: "2024",
    role: "Branding, UI/UX & Web Development",
    liveUrl: "https://hussain-foods-project.netlify.app/",
    detailRoute: "/work/hussain-foods",
    featured: true,
    heroImage: "/projects/hussain.png",
    galleryImages: [
      "/projects/hussain.png",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      {
        title: "Interactive Digital Menu",
        description: "Organized categories with spicy levels, ingredient filters, and combo deals."
      },
      {
        title: "Rapid WhatsApp Order Dispatch",
        description: "Instant order checkout directly routed to the nearest branch kitchen."
      },
      {
        title: "Bulk Catering & Daawat Planner",
        description: "Custom party size estimator for weddings, family gatherings, and corporate events."
      },
      {
        title: "Branch GPS Locator & Timings",
        description: "Google Maps integration with live opening hours and dine-in capacity."
      }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide React"],
    accentColor: "#f97316",
    theme: "amber",
    stats: [
      { label: "Daily Online Orders", value: "300+" },
      { label: "Order Velocity", value: "< 45s" },
      { label: "Repeat Customers", value: "78%" }
    ]
  },
  {
    id: "ibad-qawwal",
    number: "05",
    title: "Master Ibad Ali Qawwal",
    category: "Sufi Music & Cultural Heritage",
    tagline: "Echoes of Devotion & World-Famous Qawwali Heritage",
    description: "A prestigious cultural website showcasing classical Sufi music, international concert tours, sound archives, and private event booking.",
    overview: "Master Ibad Ali Qawwal is an internationally acclaimed Sufi musical troupe upholding centuries of devotional poetry, classical raags, and vibrant Mehfil-e-Sama performances. The platform hosts audio previews, concert tour calendars, video highlights, and booking inquiries.",
    client: "Ibad Ali Qawwal Ensemble",
    year: "2024",
    role: "Visual Identity & Web Development",
    liveUrl: "https://ibad-qawwal.netlify.app/",
    detailRoute: "/work/ibad-qawwal",
    featured: false,
    heroImage: "/projects/ibad.png",
    galleryImages: [
      "/projects/ibad.png",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      {
        title: "Curated Audio & Video Archives",
        description: "Embedded classical qawwali tracks, kalam lyrics translations, and live concert footage."
      },
      {
        title: "International Concert Schedule",
        description: "Upcoming tour dates with ticket links and venue directions."
      },
      {
        title: "Private Mehfil & Wedding Booking",
        description: "Formal event booking request form with date availability checker."
      },
      {
        title: "Sufi Lineage & Biography",
        description: "Rich documentary storytelling covering the Ustad's musical gharana and legacy."
      }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Audio Player API", "Vite"],
    accentColor: "#10b981",
    theme: "emerald",
    stats: [
      { label: "Global Concert Bookings", value: "24+" },
      { label: "Audio Streams", value: "50k+" },
      { label: "Audience Reach", value: "12 Countries" }
    ]
  },
  {
    id: "ssj-skin",
    number: "06",
    title: "SSJ Skin Clinic",
    category: "Medical Aesthetics & Dermatology",
    tagline: "Reveal Your Natural, Radiant Glow with Clinical Precision",
    description: "A clean, clinical aesthetic dermatology website featuring treatment catalogs, patient transformations, skin type consultations, and appointment booking.",
    overview: "SSJ Skin is a modern cosmetic dermatology and aesthetic skincare clinic. The website offers an elegant, trust-building experience highlighting clinical laser treatments, acne therapies, anti-aging regimens, and doctor consultations.",
    client: "SSJ Skin & Aesthetics",
    year: "2024",
    role: "UI/UX & Web Development",
    liveUrl: "https://ssj-skin-project.netlify.app/",
    detailRoute: "/work/ssj-skin",
    featured: false,
    heroImage: "/projects/ssj.png",
    galleryImages: [
      "/projects/ssj.png",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
    ],
    features: [
      {
        title: "Clinical Treatment Explorer",
        description: "Detailed breakdowns for HydraFacial, laser rejuvenation, chemical peels, and acne therapies."
      },
      {
        title: "Online Doctor Appointment Booking",
        description: "Real-time specialist calendar booking with automated SMS/email reminders."
      },
      {
        title: "Verified Before & After Transformations",
        description: "Interactive slider comparing clinical patient results across multiple treatment sessions."
      },
      {
        title: "Personalized Skin Quiz",
        description: "Interactive diagnostic tool helping patients identify suitable treatments for their skin profile."
      }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide React"],
    accentColor: "#2dd4bf",
    theme: "emerald",
    stats: [
      { label: "Monthly Patient Consults", value: "450+" },
      { label: "Booking Conversion", value: "+38%" },
      { label: "Patient Rating", value: "4.9/5" }
    ]
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured);
export const ALL_PROJECTS = PROJECTS;
