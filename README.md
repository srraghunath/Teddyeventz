# Teddy Eventz — Premium Event Planning Website

> **Life is an Event, Make it Memorable 🧸**

A beautiful, production-ready marketing website for Teddy Eventz, a Chennai-based event planning and decoration company. Built with Vite + React + Tailwind CSS.

---

## 🖼️ How to Add Your Photos

This is the **most important step** after cloning. The site uses elegant placeholders until you drop in your real event photography.

### Folder Structure

```
public/images/
├── logo.png                          ← Your brand logo (already provided)
├── hero/
│   ├── hero-1.jpg                    ← Hero slideshow image 1
│   ├── hero-2.jpg                    ← Hero slideshow image 2
│   └── hero-3.jpg                    ← Hero slideshow image 3
├── about/
│   ├── about-1.jpg                   ← About section primary photo
│   └── about-2.jpg                   ← About section secondary (overlapping) photo
├── services/
│   ├── wedding-planning.jpg
│   ├── reception.jpg
│   ├── engagement.jpg
│   ├── haldi-sangeet.jpg
│   ├── birthday-parties.jpg
│   ├── baby-shower.jpg
│   ├── corporate-events.jpg
│   ├── anniversary.jpg
│   ├── stage-decoration.jpg
│   ├── dj-entertainment.jpg
│   ├── cartoon-character.jpg
│   ├── surprise-parties.jpg
│   └── a-to-z-event-planner.jpg
└── gallery/
    ├── wedding-reception/
    │   ├── 01.jpg, 02.jpg, 03.jpg
    ├── engagement-haldi-sangeet/
    │   ├── 01.jpg, 02.jpg, 03.jpg
    ├── birthday/
    │   ├── 01.jpg, 02.jpg, 03.jpg, 04.jpg
    ├── baby-shower/
    │   ├── 01.jpg, 02.jpg, 03.jpg
    ├── surprise-party/
    │   ├── 01.jpg, 02.jpg, 03.jpg
    ├── cartoon-theme/
    │   ├── 01.jpg, 02.jpg, 03.jpg
    ├── stage-decoration/
    │   ├── 01.jpg, 02.jpg, 03.jpg
    └── corporate-anniversary/
        ├── 01.jpg, 02.jpg, 03.jpg
```

### Recommended Image Sizes

| Location | Width | Format | Max File Size |
|----------|-------|--------|---------------|
| Hero images | 2000 px wide | JPG or WebP | 300 KB each |
| About photos | 1200 px wide | JPG or WebP | 250 KB each |
| Service cards | 1200 px wide | JPG or WebP | 200 KB each |
| Gallery photos | 1200 px wide | JPG or WebP | 300 KB each |
| Logo | Any (PNG transparency) | PNG | 100 KB |

### Adding a New Gallery Image

1. Drop the photo file into the matching folder, e.g. `public/images/gallery/birthday/05.jpg`
2. Open `src/data/gallery.js`
3. Add a new entry to the `galleryItems` array:
   ```js
   {
     id: "bd-05",
     src: "/images/gallery/birthday/05.jpg",
     category: "birthday",
     title: "Rainbow Unicorn Birthday Setup",
     alt: "Colourful unicorn themed birthday party decoration"
   },
   ```
4. Save and refresh. The image will appear in the gallery with the correct category filter.

---

## 📝 How to Edit Content

All business content lives in **one file**: `src/data/siteConfig.js`

- **Business info**: name, tagline, address, phone, WhatsApp, Instagram
- **Services**: title, description, image path, WhatsApp enquiry message
- **Reviews**: author, source, quote text
- **Navigation**: labels and anchor links
- **Stats**: credibility strip numbers
- **About copy**: paragraphs, signature, founder name

### Turning Reviews On/Off

In `src/data/siteConfig.js`, find:

```js
showReviews: true,
```

Change to `false` to hide the entire reviews section:

```js
showReviews: false,
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+

### Install & Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**
6. (Optional) Add your custom domain in Project Settings → Domains

### Option 2: Netlify

1. Push your project to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **Deploy site**
6. (Optional) Add custom domain in Site Settings → Domain Management

---

## 🏗️ Tech Stack

- **Vite** — Lightning-fast build tool
- **React 18** — Component-based UI
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Clean icon library
- **Google Fonts** — Cormorant Garamond (headings) + DM Sans (body)

---

## 📁 Project Structure

```
teddy-eventz/
├── index.html                    ← HTML shell with SEO, JSON-LD, Open Graph
├── public/
│   ├── images/                   ← All photos (see above)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.jsx                  ← React entry point
│   ├── App.jsx                   ← Main app (assembles all sections)
│   ├── index.css                 ← Global styles, CSS variables, Tailwind
│   ├── data/
│   │   ├── siteConfig.js         ← All business content (edit this!)
│   │   └── gallery.js            ← Gallery photo entries (edit this!)
│   └── components/
│       ├── Navbar.jsx            ← Sticky nav with mobile drawer
│       ├── Hero.jsx              ← Full-viewport hero with slideshow
│       ├── CredibilityStrip.jsx  ← Stats bar (2000+, Since 2024, TN)
│       ├── About.jsx             ← Two-column editorial with overlapping photos
│       ├── Services.jsx          ← Service cards grid with WhatsApp enquiry
│       ├── WhyUs.jsx             ← 4 numbered editorial differentiators
│       ├── Process.jsx           ← 4-step process flow
│       ├── Gallery.jsx           ← Masonry grid, filters, lightbox
│       ├── Reviews.jsx           ← Google Reviews 3-column layout
│       ├── ServiceArea.jsx       ← Tamil Nadu service coverage
│       ├── Contact.jsx           ← Contact info, map, WhatsApp enquiry form
│       ├── Footer.jsx            ← Chocolate footer with links
│       ├── FloatingActions.jsx   ← Floating WhatsApp + Call buttons
│       └── SmartImage.jsx        ← Reusable image with graceful fallback
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 📋 License

© 2024–2026 Teddy Eventz. All rights reserved.
