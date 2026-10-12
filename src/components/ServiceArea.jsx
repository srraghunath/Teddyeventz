import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  const { serviceArea, brand } = siteConfig;

  return (
    <section className="py-16 lg:py-20 bg-ivory relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Icon */}
        <div className="w-14 h-14 mx-auto mb-5 rounded-full border border-champagne bg-cream flex items-center justify-center shadow-warm-sm">
          <MapPin className="w-6 h-6 text-teddy" strokeWidth={1.5} />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-chocolate mb-4">
          {serviceArea.title}
        </h2>

        <p className="font-sans text-sm sm:text-base text-chocolate/80 leading-relaxed max-w-2xl mx-auto mb-4">
          {serviceArea.description}
        </p>

        <div className="inline-flex items-center gap-2 px-5 py-2 bg-cream border border-champagne/50 rounded-full shadow-warm-sm">
          <MapPin className="w-3.5 h-3.5 text-teddy" />
          <span className="text-xs font-sans uppercase tracking-editorial text-chocolate font-medium">
            {serviceArea.note}
          </span>
        </div>
      </div>
    </section>
  );
}
