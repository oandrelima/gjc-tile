import fs from 'fs';

const feed = JSON.parse(fs.readFileSync('parsed_blog_feed.json', 'utf-8'));

const fullData = {
  business: {
    name: "GJC Tile Inc.",
    owner: "Geraldo Silva",
    phone: "(352) 942-4834",
    phoneClean: "+13529424834",
    email: "gjctileincfl@gmail.com",
    address: "211 10620 Parkers Landing Dr, Tampa, FL 33615",
    areaServed: [
      "Tampa",
      "St. Petersburg",
      "Clearwater",
      "Brandon",
      "Riverview",
      "Westchase",
      "Carrollwood",
      "Wesley Chapel",
      "South Tampa",
      "Palm Harbor",
      "Lutz",
      "All Greater Tampa Bay Area"
    ],
    operatingHours: {
      weekdays: "Monday — Saturday: 9:00 AM — 5:00 PM",
      sunday: "Closed",
      emergencyEstimates: "Available upon request"
    },
    credentials: [
      "Licensed & Fully Insured in Florida",
      "15+ Years of Dedicated Tile Mastery",
      "350+ Completed Custom Projects",
      "100% Commitment to Flawless Quality",
      "5.0 Star Rated Craftsmanship",
      "Schluter & Hydro-Ban Waterproofing Certified Practices"
    ]
  },
  metrics: [
    { value: "350+", label: "Projects Completed", description: "Bespoke bathrooms, luxury kitchens, and fine stone floors." },
    { value: "15+", label: "Years of Mastery", description: "Deep artisanal experience and precision engineering." },
    { value: "100%", label: "Commitment to Quality", description: "Zero compromises on waterproofing, leveling, and finish." },
    { value: "5.0 ★", label: "Client Satisfaction", description: "Consistent 5-star reviews from Tampa Bay homeowners." }
  ],
  services: [
    {
      id: "bathroom-remodeling",
      title: "Luxury Bathroom Remodeling",
      subtitle: "Sanctuaries of Elegance & Rejuvenation",
      description: "Complete bathroom transformations designed around your lifestyle. From curbless walk-in showers and bespoke floating vanities to freestanding soaking tubs and architectural niche lighting.",
      features: [
        "Curbless zero-entry shower pans",
        "Linear drain integration & hydro-ban waterproofing",
        "Custom shampoo niches & floating benches",
        "Freestanding bathtub accent backdrops"
      ],
      image: "images/eccf2d_07b6546b66ec49f1832a786b4cc3ecc2~mv2.jpg",
      tag: "Master Baths"
    },
    {
      id: "custom-showers",
      title: "Custom Walk-In Showers",
      subtitle: "Artisanal Mosaics & Flawless Waterproofing",
      description: "Elegant walk-in showers engineered for enduring longevity. We implement hospital-grade moisture barriers, precision slope calculations, and artisanal tile alignment.",
      features: [
        "100% leak-proof waterproofing systems",
        "Large-format porcelain slabs & book-matched walls",
        "Frameless glass prep & flush threshold transitions",
        "Steam shower enclosures & specialized vapor barriers"
      ],
      image: "images/eccf2d_5e84611fa88e4aa6badad1df2e3ac4e0~mv2.jpg",
      tag: "Showers"
    },
    {
      id: "kitchen-backsplash",
      title: "Designer Kitchen Backsplashes",
      subtitle: "The Aesthetic Heart of Your Home",
      description: "Turn your culinary space into an architectural showpiece. We execute intricate herringbone, chevron, geometric subway, zellige, and seamless quartz waterfall backsplashes.",
      features: [
        "Precision laser-level alignment across cabinetry",
        "Seamless outlet cutouts & electrical plate matching",
        "Stain-resistant epoxy & stain-proof grouting",
        "Natural marble, handcrafted ceramic, & metallic accents"
      ],
      image: "images/eccf2d_28ee818683314fa0af0048e092a4e4c2~mv2.jpg",
      tag: "Kitchens"
    },
    {
      id: "tile-flooring",
      title: "Large-Format Tile & Stone Flooring",
      subtitle: "Seamless Expanses & Leveling Perfection",
      description: "Porcelain, ceramic, marble, and natural stone flooring installed with mathematical precision. We guarantee flat, uncoupling-protected floors that withstand Florida's humidity.",
      features: [
        "Subfloor grinding, self-leveling & deflection checks",
        "Uncoupling membrane installation (Schluter-DITRA)",
        "Minimum 1/16\" ultra-tight grout joints",
        "Heated flooring (Schluter-DITRA-HEAT) compatibility"
      ],
      image: "images/eccf2d_6076702b34b04e45b830e8d8f04b99a2~mv2.jpg",
      tag: "Flooring"
    },
    {
      id: "marble-installation",
      title: "Marble & Natural Stone Installation",
      subtitle: "Timeless Prestige & Artisanal Care",
      description: "Sourced from the world's finest quarries, our marble and natural stone installations deliver unmatched prestige. Each slab is treated like fine art.",
      features: [
        "Carrara, Calacatta, Statuario & Travertine mastery",
        "Book-matching & continuous vein flow alignment",
        "Diamond-pad surface honing, polishing & impregnating sealers",
        "Neutral-cure adhesive systems to prevent stone shadowing"
      ],
      image: "images/eccf2d_216c2b3823c742aba80d17f7d4071f25~mv2.jpg",
      tag: "Marble & Stone"
    },
    {
      id: "commercial-tile",
      title: "Commercial Tile & Retail Spaces",
      subtitle: "High-Traffic Durability & On-Time Turnarounds",
      description: "Professional tile solutions for boutique storefronts, upscale restaurants, corporate offices, and hospitality developments throughout the Tampa Bay metro.",
      features: [
        "Slip-resistant commercial grade vitrified porcelain",
        "Heavy impact epoxy grout systems",
        "Off-hours & accelerated schedule capabilities",
        "Full compliance with ADA & commercial building codes"
      ],
      image: "images/eccf2d_08ee7bf5b3154b72b8c3efc6df7cfb58~mv2.jpg",
      tag: "Commercial"
    },
    {
      id: "tile-restoration",
      title: "Tile Restoration & Precision Repair",
      subtitle: "Revitalize & Protect Your Existing Investment",
      description: "Expert restoration of cracked tiles, failing grout lines, moldy caulking, and damaged subfloors without requiring unnecessary full tear-outs.",
      features: [
        "Isolated tile replacement without damaging neighbors",
        "Complete grout color sealing & epoxy regrouting",
        "Deep stone stain extraction & diamond resurfacing",
        "Water intrusion diagnosis & subfloor reinforcement"
      ],
      image: "images/eccf2d_eef56b07d99b4727974ff8a43cfe6129~mv2.jpg",
      tag: "Restoration"
    }
  ],
  gallery: [
    {
      id: 1,
      title: "Calacatta Gold Walk-In Master Shower",
      category: "bathrooms",
      categoryLabel: "Luxury Bathrooms",
      image: "images/eccf2d_07b6546b66ec49f1832a786b4cc3ecc2~mv2.jpg",
      description: "Floor-to-ceiling porcelain book-match with brushed brass hardware and recessed led niche."
    },
    {
      id: 2,
      title: "Modern Gourmet Kitchen Backsplash",
      category: "kitchens",
      categoryLabel: "Kitchen Backsplashes",
      image: "images/eccf2d_28ee818683314fa0af0048e092a4e4c2~mv2.jpg",
      description: "Artisanal glazed chevron backsplash integrated flawlessly with natural quartz countertops."
    },
    {
      id: 3,
      title: "Spa Oasis with Freestanding Soaking Tub",
      category: "bathrooms",
      categoryLabel: "Luxury Bathrooms",
      image: "images/eccf2d_5e84611fa88e4aa6badad1df2e3ac4e0~mv2.jpg",
      description: "Custom geometric feature wall, freestanding oval tub, and seamless drain transitions."
    },
    {
      id: 4,
      title: "Expansive Large-Format Living Room Flooring",
      category: "flooring",
      categoryLabel: "Tile & Stone Flooring",
      image: "images/eccf2d_6076702b34b04e45b830e8d8f04b99a2~mv2.jpg",
      description: "48\"x48\" rectified porcelain tile with precision self-leveling underlayment."
    },
    {
      id: 5,
      title: "High-End Boutique Commercial Showroom",
      category: "commercial",
      categoryLabel: "Commercial Tile",
      image: "images/eccf2d_08ee7bf5b3154b72b8c3efc6df7cfb58~mv2.jpg",
      description: "Heavy-traffic vitrified stone floor installation with epoxy grout system."
    },
    {
      id: 6,
      title: "Artisanal Stone & Mosaic Restoration",
      category: "restoration",
      categoryLabel: "Restoration",
      image: "images/eccf2d_eef56b07d99b4727974ff8a43cfe6129~mv2.jpg",
      description: "Delicate repair and diamond honing of historical stone surfaces in South Tampa."
    },
    {
      id: 7,
      title: "Contemporary Minimalist Wet Room",
      category: "bathrooms",
      categoryLabel: "Luxury Bathrooms",
      image: "images/eccf2d_888baf6979e5483aa7d54c4cdec337ae~mv2.png",
      description: "Curbless design with large porcelain panels and hidden zero-threshold drain."
    },
    {
      id: 8,
      title: "European Subway Tile Shower Suite",
      category: "showers",
      categoryLabel: "Custom Showers",
      image: "images/eccf2d_2df001a913ff427e8989b67be878ce78~mv2.png",
      description: "Clean vertical stacked subway tile with matte black fixtures and built-in bench."
    },
    {
      id: 9,
      title: "Artisan Herringbone Feature Backsplash",
      category: "kitchens",
      categoryLabel: "Kitchen Backsplashes",
      image: "images/eccf2d_e8825221ae694b84be986ce81a8a839b~mv2.png",
      description: "Handcrafted ceramic tiles placed in dynamic 45-degree herringbone pattern."
    },
    {
      id: 10,
      title: "Double Niche Walk-In Rain Shower",
      category: "showers",
      categoryLabel: "Custom Showers",
      image: "images/eccf2d_d2445ee387a147c1bef6c95c24d2c397~mv2.jpeg",
      description: "Custom illuminated twin niches with porcelain slab wrap and frameless glass."
    },
    {
      id: 11,
      title: "Frameless Glass Spa Shower",
      category: "showers",
      categoryLabel: "Custom Showers",
      image: "images/eccf2d_2b7b6f4aa6d6468a9a60a697640c374f~mv2.jpeg",
      description: "Seamless glass enclosure with micro-beveled porcelain wall tile."
    },
    {
      id: 12,
      title: "Open Concept Porcelain Living & Dining",
      category: "flooring",
      categoryLabel: "Tile & Stone Flooring",
      image: "images/eccf2d_f5cec3eb54bc4ebba8899f79254022f8~mv2.jpeg",
      description: "Continuous flooring across open-concept floor plan with seamless flush thresholds."
    },
    {
      id: 13,
      title: "Architectural Vertical Wall Installation",
      category: "bathrooms",
      categoryLabel: "Luxury Bathrooms",
      image: "images/eccf2d_e55415dbcca940668c3cba23597ae633~mv2.jpeg",
      description: "Vertical stacking to visually enhance ceiling height in a luxury powder room."
    },
    {
      id: 14,
      title: "Textured White Subway Guest Bath",
      category: "bathrooms",
      categoryLabel: "Luxury Bathrooms",
      image: "images/eccf2d_c5cb041ebc5a4600b84be0b9bec8ca76~mv2.jpeg",
      description: "Crisp white subway tiles with charcoal grout accents and contrast chrome trim."
    },
    {
      id: 15,
      title: "Italian Statuario Marble Master Suite",
      category: "bathrooms",
      categoryLabel: "Luxury Bathrooms",
      image: "images/eccf2d_a1b0ae4b67554a4a93789b32ce957646~mv2.png",
      description: "Polished Italian Statuario marble slabs bookmatched around freestanding tub."
    },
    {
      id: 16,
      title: "Custom Quartz Waterfall & Tile Integration",
      category: "kitchens",
      categoryLabel: "Kitchen Backsplashes",
      image: "images/eccf2d_c932f04292774dc8874b4f66684ee6cf~mv2.png",
      description: "Seamless mitered edges and hand-laid backsplashes."
    }
  ],
  reviews: [
    {
      id: 1,
      name: "Marcus Vance",
      location: "Tampa Bay, FL",
      rating: 5,
      date: "October 2026",
      text: "Geraldo and the GJC Tile crew transformed our dated master bath into a high-end luxury spa. Their precision on the 24x48 porcelain tiles was flawless, not a single lippage issue, and the Schluter waterproofing gave us complete confidence.",
      service: "Master Bathroom & Walk-in Shower",
      imageBadge: "images/eccf2d_bd1d41cab5e94c3284b98624a15c16d3~mv2.png"
    },
    {
      id: 2,
      name: "Elena Rostova",
      location: "St. Petersburg, FL",
      rating: 5,
      date: "September 2026",
      text: "Outstanding craftsmanship! From initial quote to final cleanup, they treated our home with the highest level of care and respect. Geraldo's attention to detail on our kitchen herringbone backsplash was remarkable.",
      service: "Kitchen Herringbone Backsplash",
      imageBadge: "images/eccf2d_c116817e19044ba78f4cd5208d3c7627~mv2.png"
    },
    {
      id: 3,
      name: "David & Sarah Miller",
      location: "Clearwater Beach, FL",
      rating: 5,
      date: "September 2026",
      text: "We hired GJC Tile for over 2,400 sq.ft. of large-format porcelain throughout our entire first floor. They arrived on time every single day, kept the dust sealed, and finished on schedule. The floor is as flat as glass.",
      service: "Whole-Home Porcelain Flooring",
      imageBadge: "images/eccf2d_6be931d54915475d98ae9e623a1ffeb1~mv2.png"
    },
    {
      id: 4,
      name: "Robert Kenner",
      location: "South Tampa, FL",
      rating: 5,
      date: "August 2026",
      text: "Honest pricing, no surprises, and world-class work. Geraldo personally walked through the finished shower with me to verify every corner. Highly recommend GJC Tile to anyone wanting true artisan quality.",
      service: "Custom Curbless Shower",
      imageBadge: "images/eccf2d_106f5fbb5b904b848e0d4d8f4081adc9~mv2.png"
    }
  ],
  reviewImages: [
    "images/eccf2d_bd1d41cab5e94c3284b98624a15c16d3~mv2.png",
    "images/eccf2d_c116817e19044ba78f4cd5208d3c7627~mv2.png",
    "images/eccf2d_6be931d54915475d98ae9e623a1ffeb1~mv2.png",
    "images/eccf2d_106f5fbb5b904b848e0d4d8f4081adc9~mv2.png",
    "images/eccf2d_f21f6a8520f542f99bd89c856d185ffb~mv2.png",
    "images/eccf2d_5a9317522dc24d2288954d394a9394a1~mv2.png",
    "images/eccf2d_aef572cf76da4eaa95e5c066c5bff6c6~mv2.png",
    "images/eccf2d_2cee8e7625084d27ad3fe3d847d4c03e~mv2.png"
  ],
  process: [
    {
      step: "01",
      title: "In-Home Consultation & Detailed Scope",
      description: "We meet at your property to examine the space, evaluate subfloors and plumbing, discuss design aspirations, and provide a clear, itemized proposal with zero hidden fees."
    },
    {
      step: "02",
      title: "Material Selection & Architectural Planning",
      description: "We guide you on slab selection, tile densities, water absorption rates, trim profiles, and grout chemistries (epoxy vs high-performance cement) tailored to Tampa's humidity."
    },
    {
      step: "03",
      title: "Master Installation & Waterproofing",
      description: "Our certified tile craftsmen execute the installation utilizing laser leveling, anti-fracture membranes, and certified waterproof barriers, keeping your home clean and protected throughout."
    },
    {
      step: "04",
      title: "Final Walkthrough & Quality Certification",
      description: "We inspect every joint, seam, and silicone bead together with you. We don't consider the project complete until you are 100% delighted, backed by our warranty."
    }
  ],
  faqs: [
    {
      question: "How long does a typical tile installation take?",
      answer: "Most residential bathroom or flooring installations take between 2 to 5 days, depending on square footage, subfloor preparation, curing times, and design complexity. We provide a guaranteed start date and realistic schedule before work begins."
    },
    {
      question: "What materials do you work with?",
      answer: "We specialize in all premium surfaces: large-format porcelain slabs, natural marble (Carrara, Calacatta), ceramic, travertine, quartzite, slate, glass mosaics, and luxury vinyl plank (LVP). Our team uses specialized wet saws, diamond blades, and leveling systems suited for each distinct material."
    },
    {
      question: "Do you offer tile repair and regrouting services?",
      answer: "Yes! We provide expert tile repair, replacement of hollow or cracked tiles, and epoxy regrouting for residential and commercial spaces across Tampa Bay without requiring a full renovation if your sub-structure is sound."
    },
    {
      question: "How do you protect my home during remodeling?",
      answer: "We treat your property with utmost respect. We lay heavy-duty Ram Board surface protection along traffic paths, set up zip-wall dust containment barriers, utilize HEPA-filtered dust extraction, and leave the jobsite vacuumed and spotless every day."
    },
    {
      question: "What is your waterproofing standard for showers?",
      answer: "Waterproofing is the foundation of our work. We implement certified continuous membrane systems (such as Schluter-KERDI, Hydro-Ban, or Laticrete) with flood-testing prior to tile setting, ensuring 100% leak protection behind walls and beneath curbs."
    },
    {
      question: "Do you provide warranties on your workmanship?",
      answer: "Absolutely. We stand behind every installation with a comprehensive warranty covering installation craftsmanship and bond integrity, giving you total peace of mind for years to come."
    }
  ],
  blogArticles: feed.slice(0, 8).map((item, idx) => ({
    id: idx + 1,
    title: item.title,
    excerpt: item.desc,
    date: item.pubDate,
    author: "Geraldo Silva",
    readTime: "5 min read",
    tag: idx % 3 === 0 ? "Bathrooms" : idx % 3 === 1 ? "Flooring" : "Installation Guide",
    link: item.link
  }))
};

fs.writeFileSync('gjc_extracted_data.json', JSON.stringify(fullData, null, 2));
console.log('Complete dataset compiled in gjc_extracted_data.json');
