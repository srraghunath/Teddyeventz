import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import SmartImage from './SmartImage';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Services() {
  const [filter, setFilter] = useState('all'); // 'all' or 'specialities'
  const { services, brand } = siteConfig;

  const displayedServices = filter === 'specialities'
    ? services.filter(s => s.isSpeciality)
    : services;

  return (
    <section id="services" className="py-20 lg:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-teddy" />
            <span className="text-xs uppercase tracking-editorial font-medium text-teddy">
              Our Curated Offerings
            </span>
            <span className="h-[1px] w-8 bg-teddy" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-chocolate mb-4">
            Bespoke Event Experiences
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/80 leading-relaxed max-w-2xl mx-auto">
            From intimate family rituals to majestic wedding productions, our comprehensive event planning brings elegance, creativity, and joy to every stage.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 text-xs uppercase tracking-editorial font-medium rounded transition-all ${
                filter === 'all'
                  ? 'bg-chocolate text-ivory shadow-warm-sm'
                  : 'bg-ivory border border-champagne text-chocolate/80 hover:text-chocolate'
              }`}
            >
              All Services ({services.length})
            </button>
            <button
              onClick={() => setFilter('specialities')}
              className={`px-5 py-2 text-xs uppercase tracking-editorial font-medium rounded transition-all flex items-center gap-1.5 ${
                filter === 'specialities'
                  ? 'bg-chocolate text-ivory shadow-warm-sm'
                  : 'bg-ivory border border-champagne text-chocolate/80 hover:text-chocolate'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
              <span>Our Specialities</span>
            </button>
          </div>
        </div>

        {/* Services Grid (3 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedServices.map((service) => {
            const whatsappUrl = `https://wa.me/${brand.contact.whatsappNumber}?text=${encodeURIComponent(
              service.whatsappMessage
            )}`;

            return (
              <div
                key={service.id}
                className={`group flex flex-col bg-ivory rounded-lg overflow-hidden border transition-all duration-300 hover:shadow-warm-hover ${
                  service.isSpeciality
                    ? 'border-teddy/60 ring-1 ring-teddy/20'
                    : 'border-champagne/40'
                }`}
              >
                {/* Image Container with SmartImage */}
                <div className="relative overflow-hidden aspect-[16/9] bg-[#FAF7F2] border-b border-champagne/30 flex items-center justify-center p-1 sm:p-2">
                  <SmartImage
                    src={service.image}
                    alt={service.title}
                    aspectRatio="aspect-[16/9]"
                    objectFit="object-contain"
                    className="w-full h-full"
                    fallbackLabel={service.title}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-ivory">
                  <div>
                    {/* Badge moved above title so it never obscures any part of the image */}
                    <div className="mb-2.5">
                      <span
                        className={`inline-block text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded shadow-warm-sm ${
                          service.isSpeciality
                            ? 'bg-chocolate text-ivory font-medium'
                            : 'bg-cream text-teddy border border-champagne/60 font-medium'
                        }`}
                      >
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-chocolate mb-2 group-hover:text-teddy transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-chocolate/80 leading-relaxed line-clamp-3 mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-champagne/30 flex items-center justify-between">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-teddy font-medium">
                      Tailored Setup
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-editorial font-medium text-chocolate hover:text-teddy transition-colors group-hover:underline underline-offset-4"
                      aria-label={`Enquire about ${service.title} on WhatsApp`}
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for A to Z Event Planning */}
        <div className="mt-12 sm:mt-16 bg-ivory border border-champagne/50 p-6 sm:p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 shadow-warm-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-editorial text-teddy font-medium block">
              Signature Service
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-chocolate">
              Looking for Full Turnkey A-to-Z Event Management?
            </h4>
            <p className="text-xs sm:text-sm text-chocolate/80 max-w-xl">
              We handle sound, stage, florals, catering setup support, mascots, and logistics so you can be a relaxed host.
            </p>
          </div>
          <a
            href={`https://wa.me/${brand.contact.whatsappNumber}?text=${encodeURIComponent(
              "Hello Teddy Eventz, I would like to consult with you for complete A-to-Z Event Planning."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3 bg-chocolate hover:bg-chocolate-light text-ivory text-xs uppercase tracking-editorial font-medium rounded transition-colors shadow-warm-sm flex items-center gap-2"
          >
            <span>Consult on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
