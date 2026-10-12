import React from 'react';
import { siteConfig } from '../data/siteConfig';

export default function CredibilityStrip() {
  const { stats } = siteConfig;

  return (
    <section id="stats" className="relative bg-cream border-y border-champagne/40 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-champagne/40">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center px-4 ${
                idx === 0
                  ? 'pb-8 md:pb-0 md:pr-8'
                  : idx === 1
                  ? 'py-8 md:py-0 md:px-8'
                  : 'pt-8 md:pt-0 md:pl-8'
              }`}
            >
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-chocolate tracking-tight mb-2">
                {stat.value}{' '}
                {stat.highlight && (
                  <span className="italic font-serif text-teddy font-light">
                    {stat.highlight}
                  </span>
                )}
              </span>
              <span className="font-sans text-xs sm:text-sm uppercase tracking-editorial font-medium text-chocolate/90 mb-1">
                {stat.label}
              </span>
              <p className="font-sans text-xs text-teddy/80 max-w-xs">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
