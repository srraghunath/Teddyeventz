import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';

const heroBaseNames = ['hero-1', 'hero-2', 'hero-3'];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroBaseNames.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Slideshow & Warm Overlay */}
      <div className="absolute inset-0 z-0">
        {heroBaseNames.map((name, idx) => (
          <div
            key={name}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={`/images/hero/${name}.png`}
              alt="Teddy Eventz Celebration"
              className="w-full h-full object-cover transform scale-105 transition-transform duration-10000"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.triedJpg) {
                  target.dataset.triedJpg = 'true';
                  target.src = `/images/hero/${name}.jpg`;
                } else if (!target.dataset.triedJpeg) {
                  target.dataset.triedJpeg = 'true';
                  target.src = `/images/hero/${name}.jpeg`;
                } else {
                  // If hero photo not yet present, hide and show elegant patterned warm background
                  target.style.display = 'none';
                }
              }}
            />
          </div>
        ))}

        {/* Soft Warm Chocolate Tinted Overlay & Texture Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/85 to-ivory" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-champagne/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 sm:mt-4">
        {/* Overline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream border border-champagne/60 shadow-warm-sm mb-6 sm:mb-8 animate-fadeIn">
          <span className="w-1.5 h-1.5 rounded-full bg-teddy animate-ping" />
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-editorial text-chocolate">
            Event Planners & Decorators · Tamil Nadu
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-chocolate leading-[1.08] tracking-tight mb-6 text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          Life is an Event.{' '}
          <span className="italic font-normal text-teddy underline decoration-champagne/50 decoration-1 underline-offset-8">
            Make it Memorable.
          </span>
        </h1>

        {/* Editorial Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-chocolate/80 leading-relaxed font-normal mb-8 sm:mb-10 font-sans">
          Bespoke stage styling, breathtaking floral atmospheres, DJ entertainment, and full-service event management tailored for your most precious milestones.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12 sm:mb-16">
          <a
            href={siteConfig.brand.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-chocolate hover:bg-chocolate-light text-ivory text-xs uppercase tracking-editorial font-medium rounded transition-all duration-300 shadow-warm-md hover:shadow-warm-hover transform hover:-translate-y-0.5"
          >
            <span>Plan my event</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#gallery"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cream/80 hover:bg-cream border border-champagne text-chocolate text-xs uppercase tracking-editorial font-medium rounded transition-all duration-300 hover:border-teddy"
          >
            <span>View our work</span>
          </a>
        </div>

        {/* Highlights Pill Strip */}
        <div className="pt-4 border-t border-champagne/40 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-y-2 gap-x-6 sm:gap-x-10 text-xs text-teddy font-sans">
          <span className="flex items-center gap-1.5">
            <span className="text-champagne-dark">✦</span> 2,000+ Celebrations
          </span>
          <span className="hidden sm:inline text-champagne/60">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-champagne-dark">✦</span> Since 2024
          </span>
          <span className="hidden sm:inline text-champagne/60">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-champagne-dark">✦</span> Chennai & All Over Tamil Nadu
          </span>
        </div>
      </div>

      {/* Discreet Scroll Cue */}
      <a
        href="#stats"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-chocolate/50 hover:text-chocolate transition-colors"
        aria-label="Scroll to Credibility Strip"
      >
        <span className="text-[10px] uppercase tracking-widest font-sans">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
