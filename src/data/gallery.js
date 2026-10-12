/**
 * Gallery Data for Teddy Eventz
 * 
 * Each item has:
 * - id: unique identifier
 * - src: path inside public/images/gallery/<category>/<filename>
 * - category: matches category filter keys
 * - title: brief descriptive title
 * - alt: accessible image description
 * 
 * REPLACE with real photos in public/images/gallery/<category>/...
 */

export const galleryCategories = [
  { id: "all", label: "All Works" },
  { id: "wedding-reception", label: "Wedding & Reception" },
  { id: "engagement-haldi-sangeet", label: "Engagement & Haldi" },
  { id: "birthday", label: "Birthdays" },
  { id: "baby-shower", label: "Baby Shower" },
  { id: "surprise-party", label: "Surprise Parties" },
  { id: "cartoon-theme", label: "Cartoon & Mascot" },
  { id: "stage-decoration", label: "Stage Decoration" },
  { id: "corporate-anniversary", label: "Corporate & Anniversary" },
];

export const galleryItems = [
  // 1. Wedding & Reception (REPLACE with real photos)
  {
    id: "wr-01",
    src: "/images/gallery/wedding-reception/01.jpg",
    category: "wedding-reception",
    title: "Grand Floral Mandap & Stage",
    alt: "Grand wedding mandap decorated with fresh flowers and warm illumination"
  },
  {
    id: "wr-02",
    src: "/images/gallery/wedding-reception/02.jpg",
    category: "wedding-reception",
    title: "Evening Reception Stage Setup",
    alt: "Evening reception stage with crystal chandeliers and luxury drapery"
  },
  {
    id: "wr-03",
    src: "/images/gallery/wedding-reception/03.jpg",
    category: "wedding-reception",
    title: "Aisle Pathway & Floral Pillars",
    alt: "Elegantly decorated wedding entrance pathway with glowing lanterns"
  },

  // 2. Engagement & Haldi / Sangeet (REPLACE with real photos)
  {
    id: "eh-01",
    src: "/images/gallery/engagement-haldi-sangeet/01.jpg",
    category: "engagement-haldi-sangeet",
    title: "Traditional Haldi Yellow Floral Canopy",
    alt: "Haldi ceremony background setup with yellow marigolds and urli bowl"
  },
  {
    id: "eh-02",
    src: "/images/gallery/engagement-haldi-sangeet/02.jpg",
    category: "engagement-haldi-sangeet",
    title: "Pastel Engagement Backdrop",
    alt: "Romantic engagement stage featuring blush florals and custom monogram"
  },
  {
    id: "eh-03",
    src: "/images/gallery/engagement-haldi-sangeet/03.jpg",
    category: "engagement-haldi-sangeet",
    title: "Vibrant Sangeet Dance Stage",
    alt: "Sangeet stage with dynamic moving lights and celebratory backdrop"
  },

  // 3. Birthday Parties (REPLACE with real photos)
  {
    id: "bd-01",
    src: "/images/gallery/birthday/01.jpg",
    category: "birthday",
    title: "1st Birthday Princess Castle Theme",
    alt: "First birthday celebration with pastel castle props and balloon arch"
  },
  {
    id: "bd-02",
    src: "/images/gallery/birthday/02.jpg",
    category: "birthday",
    title: "Jungle Safari Birthday Setup",
    alt: "Safari themed birthday party with organic green balloons and animal cutouts"
  },
  {
    id: "bd-03",
    src: "/images/gallery/birthday/03.jpg",
    category: "birthday",
    title: "Pastel Balloon Arch & Name Lights",
    alt: "Luxury balloon garland with illuminated acrylic letters and cake pedestals"
  },
  {
    id: "bd-04",
    src: "/images/gallery/birthday/04.jpg",
    category: "birthday",
    title: "Space Adventure Birthday Theme",
    alt: "Celestial and astronaut themed birthday backdrop with glowing star lights"
  },

  // 4. Baby Shower (REPLACE with real photos)
  {
    id: "bs-01",
    src: "/images/gallery/baby-shower/01.jpg",
    category: "baby-shower",
    title: "Blush & Ivory Baby Shower Cradle",
    alt: "Floral adorned cradle and soft pastel balloon ring for baby shower"
  },
  {
    id: "bs-02",
    src: "/images/gallery/baby-shower/02.jpg",
    category: "baby-shower",
    title: "Teddy Bear Theme Baby Shower",
    alt: "Adorable teddy bear mascot themed baby shower backdrop with clouds"
  },
  {
    id: "bs-03",
    src: "/images/gallery/baby-shower/03.jpg",
    category: "baby-shower",
    title: "Traditional Seemantham Floral Backdrop",
    alt: "Traditional South Indian flower garland background with brass lamps"
  },

  // 5. Surprise Party (REPLACE with real photos)
  {
    id: "sp-01",
    src: "/images/gallery/surprise-party/01.jpg",
    category: "surprise-party",
    title: "Candlelight Room Surprise Decor",
    alt: "Romantic room surprise with helium balloons, fairy lights, and rose petals"
  },
  {
    id: "sp-02",
    src: "/images/gallery/surprise-party/02.jpg",
    category: "surprise-party",
    title: "Rooftop Midnight Birthday Surprise",
    alt: "Rooftop cabana setup with warm neon lighting and dinner table"
  },
  {
    id: "sp-03",
    src: "/images/gallery/surprise-party/03.jpg",
    category: "surprise-party",
    title: "Car Trunk Proposal Surprise Setup",
    alt: "Surprise car boot decor with marigold fairy lights and custom lettering"
  },

  // 6. Cartoon Character & Mascot Themes (REPLACE with real photos)
  {
    id: "ct-01",
    src: "/images/gallery/cartoon-theme/01.jpg",
    category: "cartoon-theme",
    title: "Life-Sized Teddy Mascot Welcome",
    alt: "Beloved life-sized teddy mascot greeting young party guests warmly"
  },
  {
    id: "ct-02",
    src: "/images/gallery/cartoon-theme/02.jpg",
    category: "cartoon-theme",
    title: "Mickey & Friends Themed Stage",
    alt: "Cartoon character stage with thematic cutouts and colourful balloon pillars"
  },
  {
    id: "ct-03",
    src: "/images/gallery/cartoon-theme/03.jpg",
    category: "cartoon-theme",
    title: "Superhero Mascot Interactive Show",
    alt: "Mascot entertainment and interactive photo booth for kids party"
  },

  // 7. Stage Decoration (REPLACE with real photos)
  {
    id: "sd-01",
    src: "/images/gallery/stage-decoration/01.jpg",
    category: "stage-decoration",
    title: "Geometric Arch & Floral Wall",
    alt: "Contemporary geometric arch backdrop with dense white hydrangeas and roses"
  },
  {
    id: "sd-02",
    src: "/images/gallery/stage-decoration/02.jpg",
    category: "stage-decoration",
    title: "Traditional South Indian Temple Stage",
    alt: "Authentic temple mandapam replica stage with brass urulis and jasmine"
  },
  {
    id: "sd-03",
    src: "/images/gallery/stage-decoration/03.jpg",
    category: "stage-decoration",
    title: "Minimalist Ring Backdrop with Warm Glow",
    alt: "Sleek circular golden frame with asymmetric floral clusters and warm spotlights"
  },

  // 8. Corporate & Anniversary (REPLACE with real photos)
  {
    id: "ca-01",
    src: "/images/gallery/corporate-anniversary/01.jpg",
    category: "corporate-anniversary",
    title: "Annual Corporate Gala Stage",
    alt: "Executive stage with custom LED backdrop and professional podium"
  },
  {
    id: "ca-02",
    src: "/images/gallery/corporate-anniversary/02.jpg",
    category: "corporate-anniversary",
    title: "Silver Jubilee 25th Anniversary Setup",
    alt: "Silver and champagne themed anniversary celebration setting with candlelight"
  },
  {
    id: "ca-03",
    src: "/images/gallery/corporate-anniversary/03.jpg",
    category: "corporate-anniversary",
    title: "Product Launch Experience Pavilion",
    alt: "Modern product launch backdrop with brand colors and lighting"
  }
];
