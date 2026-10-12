/**
 * Teddy Eventz - Primary Site Configuration
 * 
 * All business information, navigation links, services, reviews, and company details.
 * Everything is editable here; UI components consume this configuration directly.
 */

export const siteConfig = {
  brand: {
    name: "Teddy Eventz",
    tagline: "Life is an Event, Make it Memorable 🧸",
    founder: "Deepak Kumar",
    foundedYear: 2024,
    eventsCompleted: "2000+",
    specialitiesList: "DJ · Decoration · Cartoon Character · Surprise Party · A to Z Event Planner",
    serviceArea: "All over Tamil Nadu",
    homeBase: "Chennai",
    address: {
      line1: "No: 266, Kamarajar Salai",
      line2: "Periyar Nagar, Alwartirunagar",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600087",
      full: "No: 266, Kamarajar Salai, Periyar Nagar, Alwartirunagar, Chennai, Tamil Nadu 600087"
    },
    contact: {
      email: "teddyeventz04@gmail.com",
      phone: "9003095602",
      phoneFormatted: "+91 90030 95602",
      phoneTel: "tel:+919003095602",
      whatsappNumber: "919003095602",
      whatsappLink: "https://wa.me/919003095602",
      instagram: "https://www.instagram.com/teddy_eventz",
      instagramHandle: "@teddy_eventz",
      googleMaps: "https://maps.app.goo.gl/ktVs5GWbN1nadYRv9",
      // Maps embed for the Alwartirunagar, Chennai location
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8375837424684!2d80.1772658!3d13.0459804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266cb71110001%3A0x6b29d918349479e4!2sKamarajar%20Salai%2C%20Alwarthirunagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
    }
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  stats: [
    {
      value: "2000+",
      label: "Events Completed",
      subtext: "Celebrations crafted across Tamil Nadu"
    },
    {
      value: "Since 2024",
      label: "Trusted Excellence",
      subtext: "Dedicated event planning & decor"
    },
    {
      value: "All Over",
      highlight: "Tamil Nadu",
      label: "Complete State Coverage",
      subtext: "Based in Chennai, traveling statewide"
    }
  ],

  about: {
    title: "Crafting Memorable Celebrations Across Tamil Nadu",
    subtitle: "A story of passion, creativity, and thoughtful hospitality.",
    paragraphs: [
      "Hi! We are TEDDYEVENTZ, a creative event management and decoration company based in Chennai. We specialize in making every celebration beautiful, memorable, and unique.",
      "Our services include birthday decorations, wedding decorations, baby showers, DJ and music, photography, entertainment, special entries, games and activities, photobooths, and corporate events.",
      "We bring your ideas to life with creative designs, customized themes, quality service, and attention to every detail. From small celebrations to grand events, we make your special moments truly unforgettable."
    ],
    closing: "TEDDYEVENTZ – Your Special Moments, Our Creative Touch! ❤️",
    signature: "Deepak Kumar",
    signatureTitle: "Founder, Teddy Eventz"
  },

  services: [
    {
      id: "wedding-planning",
      title: "Wedding Planning",
      slug: "wedding-planning",
      isSpeciality: false,
      tag: "Signature Celebration",
      description: "Comprehensive wedding coordination curating timeless aesthetics, floral artistry, and seamless occasion flow.",
      image: "/images/services/wedding-planning.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your Wedding Planning services."
    },
    {
      id: "reception",
      title: "Reception",
      slug: "reception",
      isSpeciality: false,
      tag: "Grand Evening",
      description: "Magnificent stage atmospheres, warm ambient lighting, and bespoke backdrop designs for your special evening.",
      image: "/images/services/reception.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your Reception decoration and planning services."
    },
    {
      id: "engagement",
      title: "Engagement",
      slug: "engagement",
      isSpeciality: false,
      tag: "Romantic Milestones",
      description: "Intimate and charming decor setups crafted with fresh floral accents and romantic detailing.",
      image: "/images/services/engagement.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your Engagement planning and decor services."
    },
    {
      id: "haldi-sangeet",
      title: "Haldi & Sangeet",
      slug: "haldi-sangeet",
      isSpeciality: false,
      tag: "Vibrant Tradition",
      description: "Sun-drenched marigold aesthetics, dynamic seating concepts, and lively celebratory stages.",
      image: "/images/services/haldi-sangeet.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your Haldi & Sangeet arrangements."
    },
    {
      id: "birthday-parties",
      title: "Birthday Parties",
      slug: "birthday-parties",
      isSpeciality: false,
      tag: "Joyful Moments",
      description: "Custom balloon arches, enchanting backdrop themes, and delightful setups tailored for all ages.",
      image: "/images/services/birthday-parties.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your Birthday Party decor and planning."
    },
    {
      id: "baby-shower",
      title: "Baby Shower",
      slug: "baby-shower",
      isSpeciality: false,
      tag: "Precious Beginnings",
      description: "Soft pastel palettes, floral cradles, and gentle thematic touches to welcome new beginnings.",
      image: "/images/services/baby-shower.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your Baby Shower decoration services."
    },
    {
      id: "corporate-events",
      title: "Corporate Events",
      slug: "corporate-events",
      isSpeciality: false,
      tag: "Professional Polish",
      description: "Refined stage staging, crisp audio-visual support, and polished aesthetics for executive gatherings.",
      image: "/images/services/corporate-events.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about Corporate Event management."
    },
    {
      id: "anniversary",
      title: "Anniversary",
      slug: "anniversary",
      isSpeciality: false,
      tag: "Love Renewed",
      description: "Sophisticated candlelit settings and bespoke design concepts celebrating cherished milestones.",
      image: "/images/services/anniversary.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about Anniversary celebration arrangements."
    },
    {
      id: "stage-decoration",
      title: "Stage Decoration",
      slug: "stage-decoration",
      isSpeciality: false,
      tag: "Visual Centerpiece",
      description: "Spectacular backdrop structures, artistic drapery, and architectural lighting crafted for your main stage.",
      image: "/images/services/stage-decoration.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your Stage Decoration services."
    },
    // Specialities
    {
      id: "dj-entertainment",
      title: "DJ Entertainment",
      slug: "dj-entertainment",
      isSpeciality: true,
      tag: "Speciality Experience",
      description: "Professional sound systems, ambient party illumination, and curated musical sets to energise your crowd.",
      image: "/images/services/dj-entertainment.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your DJ Entertainment services."
    },
    {
      id: "cartoon-character",
      title: "Cartoon Character & Teddy Mascot Themes",
      slug: "cartoon-character",
      isSpeciality: true,
      tag: "Signature Mascot",
      description: "Engaging walk-around mascot appearances, lovable teddy characters, and interactive child entertainment.",
      image: "/images/services/cartoon-character.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your Cartoon Character & Teddy Mascot themes."
    },
    {
      id: "surprise-parties",
      title: "Surprise Parties",
      slug: "surprise-parties",
      isSpeciality: true,
      tag: "Bespoke Surprises",
      description: "Secret coordination, dramatic grand reveals, customized props, and discreet execution from start to finish.",
      image: "/images/services/surprise-parties.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about planning a Surprise Party."
    },
    {
      id: "a-to-z-event-planner",
      title: "A-to-Z Event Planning",
      slug: "a-to-z-event-planner",
      isSpeciality: true,
      tag: "Complete Turnkey",
      description: "End-to-end turnkey planning encompassing vendor coordination, schedules, thematic design, and hospitality.",
      image: "/images/services/a-to-z-event-planner.png",
      whatsappMessage: "Hello Teddy Eventz, I would like to enquire about your complete A-to-Z Event Planning service."
    }
  ],

  whyUs: [
    {
      number: "01",
      title: "Complete A-to-Z Turnkey Planning",
      description: "From concept ideation to post-event wrap up, every single operational and visual detail is managed under one unified, accountable team."
    },
    {
      number: "02",
      title: "Creative, Personalised Themes & Decor",
      description: "Custom balloon installations, bespoke floral backdrops, and signature lighting tailored strictly to your individual aesthetic preference."
    },
    {
      number: "03",
      title: "High-Energy Entertainment & Mascots",
      description: "Full in-house entertainment solutions including professional DJ sound setups and beloved walk-around cartoon and teddy mascot appearances."
    },
    {
      number: "04",
      title: "Professional, Punctual & Warm Hospitality",
      description: "Genuinely respectful service and prompt timelines, trusted across more than 2,000 successful family and corporate celebrations."
    }
  ],

  process: [
    {
      step: "01",
      title: "Share Your Idea",
      description: "Connect with us on WhatsApp or call to discuss your celebration vision, venue, and guest preferences."
    },
    {
      step: "02",
      title: "We Plan & Design",
      description: "We tailor a bespoke design concept, stage layout, and entertainment plan customized exclusively for your event."
    },
    {
      step: "03",
      title: "We Set Up",
      description: "Our dedicated on-site crew arrives promptly to craft the decor, sound, and lighting to flawless standards."
    },
    {
      step: "04",
      title: "You Celebrate",
      description: "Immerse yourself in your momentous day with complete peace of mind while our team oversees smooth execution."
    }
  ],

  // Controlled by showReviews flag as requested
  showReviews: true,

  reviews: [
    {
      id: "rev-1",
      author: "Shankar",
      source: "Google Review",
      quote: "We were truly impressed with the stunning decoration setup for Adhya and Ahana's 1st birthday! The theme was beautifully executed — from the elegant balloon arrangements to the tree centerpiece. The soft pastel colors, floral elements, and personalized name lights, everything was well setup. The little princess cutouts, the castle props are super good. Every guest was in awe, and the decor made for some unforgettable photos and memories. Thank you for making our little flowers' day extra special!"
    },
    {
      id: "rev-2",
      author: "Nandhu Muthukumar",
      source: "Google Review",
      quote: "Beautiful arrangements.. lovely response by the owners.. they are truly into hospitality.. my requirement was not a bomb.. but they served yet the best.. very happy and would 💯 recommend."
    },
    {
      id: "rev-3",
      author: "Ramkumar",
      source: "Google Review",
      quote: "I booked them for our event, and the decorations were absolutely stunning! Every detail was thoughtfully done, and the entire setup created such a beautiful and welcoming atmosphere. The team was very professional, punctual, and easy to work with. They understood exactly what we wanted and brought it to life beyond our expectations. Truly made the occasion extra special. Highly recommend their services for anyone looking to add elegance and charm to their events!"
    }
  ],

  serviceArea: {
    title: "Serving Celebrations All Over Tamil Nadu",
    description: "From our home base in Chennai, we travel across Tamil Nadu to bring world-class decoration, entertainment, and event planning to your chosen venue.",
    note: "Chennai · All Over Tamil Nadu"
  }
};
