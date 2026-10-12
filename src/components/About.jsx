import React from 'react';
import { siteConfig } from '../data/siteConfig';
import SmartImage from './SmartImage';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const { about, brand } = siteConfig;

  return (
    <section id="about" className="py-20 lg:py-32 bg-ivory relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Showcase Long Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Decorative Brand Accent Frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-champagne/60 rounded-2xl hidden sm:block pointer-events-none" />

              {/* Single Long Photo Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-champagne/60 shadow-warm-xl bg-ivory p-1 sm:p-1.5">
                <SmartImage
                  src="/images/about/about-1.png"
                  alt="Teddy Eventz Event Decor Craftsmanship"
                  aspectRatio="aspect-[1/2]"
                  objectFit="object-contain"
                  className="w-full h-auto max-h-[640px] rounded-xl"
                  fallbackLabel="About Teddy Eventz"
                />
              </div>

              {/* Since 2024 Small Badge */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 z-20 bg-cream/95 backdrop-blur-sm border border-champagne px-4 py-2 rounded-lg shadow-warm-md">
                <span className="font-serif italic text-chocolate text-base block font-medium">Since 2024</span>
                <span className="text-[10px] tracking-widest uppercase text-teddy font-sans">Chennai, TN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-8 bg-teddy" />
                <span className="text-xs uppercase tracking-editorial font-medium text-teddy">
                  About Teddy Eventz
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-chocolate leading-tight">
                {about.title}
              </h2>
            </div>

            {/* Verbatim Brand Copy from client specification */}
            <div className="space-y-4 text-chocolate/85 font-sans leading-relaxed text-sm sm:text-base">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-justify sm:text-left">
                  {p}
                </p>
              ))}
            </div>

            {/* Tagline highlight */}
            <div className="p-4 bg-cream border-l-2 border-teddy rounded-r shadow-warm-sm">
              <p className="font-serif italic text-lg sm:text-xl text-chocolate font-medium">
                {about.closing}
              </p>
            </div>

            {/* Signature & Founder Line */}
            <div className="pt-4 border-t border-champagne/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="font-serif italic text-2xl sm:text-3xl text-chocolate block">
                  {about.signature}
                </span>
                <span className="text-xs uppercase tracking-editorial text-teddy font-sans">
                  {about.signatureTitle}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={brand.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-chocolate hover:bg-chocolate-light text-ivory text-xs uppercase tracking-editorial font-medium rounded transition-colors shadow-warm-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
