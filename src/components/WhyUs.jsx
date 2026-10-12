import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function WhyUs() {
  const { whyUs } = siteConfig;

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-ivory relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-teddy" />
            <span className="text-xs uppercase tracking-editorial font-medium text-teddy">
              Our Promise
            </span>
            <span className="h-[1px] w-8 bg-teddy" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-chocolate leading-tight">
            Why <span className="italic font-normal text-teddy">Teddy Eventz</span>
          </h2>
        </div>

        {/* Numbered Editorial Items */}
        <div className="space-y-0">
          {whyUs.map((item, idx) => (
            <div
              key={item.number}
              className={`flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 py-8 sm:py-10 ${
                idx !== whyUs.length - 1 ? 'border-b border-champagne/40' : ''
              } ${idx === 0 ? 'border-t border-champagne/40' : ''}`}
            >
              {/* Big Editorial Number */}
              <div className="flex-shrink-0 w-16">
                <span className="font-serif text-5xl sm:text-6xl font-light text-champagne leading-none">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2 pt-1">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-chocolate">
                  {item.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-chocolate/80 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
