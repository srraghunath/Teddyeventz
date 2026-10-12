import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Quote } from 'lucide-react';

export default function Reviews() {
  const { reviews } = siteConfig;

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute -bottom-20 right-10 w-72 h-72 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-teddy" />
            <span className="text-xs uppercase tracking-editorial font-medium text-teddy">
              Client Testimonials
            </span>
            <span className="h-[1px] w-8 bg-teddy" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-chocolate mb-3">
            Words from Our <span className="italic font-normal text-teddy">Clients</span>
          </h2>
          <div className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 bg-ivory border border-champagne/50 rounded-full shadow-warm-sm">
            <svg className="w-4 h-4 text-teddy" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-[11px] font-sans uppercase tracking-widest text-teddy font-medium">
              Google Reviews
            </span>
          </div>
        </div>

        {/* Three-Column Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative bg-ivory border border-champagne/40 rounded-lg p-6 sm:p-8 shadow-warm-sm hover:shadow-warm-md transition-shadow duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-champagne" strokeWidth={1.5} />
              </div>

              {/* Review Text */}
              <blockquote className="font-sans text-sm text-chocolate/85 leading-relaxed flex-1 mb-6">
                "{review.quote}"
              </blockquote>

              {/* Author Line */}
              <div className="pt-4 border-t border-champagne/30">
                <span className="font-serif text-lg font-semibold text-chocolate block">
                  {review.author}
                </span>
                <span className="text-[11px] font-sans uppercase tracking-widest text-teddy/80">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
