import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MessageCircle, Palette, HardHat, PartyPopper } from 'lucide-react';

const stepIcons = [MessageCircle, Palette, HardHat, PartyPopper];

export default function Process() {
  const { process } = siteConfig;

  return (
    <section className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Faint decorative circle */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-teddy" />
            <span className="text-xs uppercase tracking-editorial font-medium text-teddy">
              How It Works
            </span>
            <span className="h-[1px] w-8 bg-teddy" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-chocolate">
            Our Simple <span className="italic font-normal text-teddy">Process</span>
          </h2>
        </div>

        {/* 4-Step Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {process.map((item, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div key={item.step} className="relative text-center group">
                {/* Step Circle & Icon */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-champagne bg-ivory flex items-center justify-center shadow-warm-sm group-hover:shadow-warm-md transition-shadow duration-300">
                  <Icon className="w-6 h-6 text-teddy" strokeWidth={1.5} />
                </div>

                {/* Connecting Line (desktop only, between items) */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[1px] bg-champagne/50" />
                )}

                {/* Step Number */}
                <span className="inline-block text-[11px] font-sans uppercase tracking-widest text-champagne-dark font-medium mb-2">
                  Step {item.step}
                </span>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-chocolate mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-chocolate/75 leading-relaxed max-w-[240px] mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
