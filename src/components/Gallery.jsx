import React, { useState, useEffect, useCallback } from 'react';
import { galleryCategories, galleryItems } from '../data/gallery';
import SmartImage from './SmartImage';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const isLightboxOpen = lightboxIndex !== null;

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen, goNext, goPrev]);

  // Touch swipe for lightbox
  const [touchStart, setTouchStart] = useState(null);
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    setTouchStart(null);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-teddy" />
            <span className="text-xs uppercase tracking-editorial font-medium text-teddy">
              Portfolio
            </span>
            <span className="h-[1px] w-8 bg-teddy" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-chocolate mb-3">
            Our <span className="italic font-normal text-teddy">Past Work</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-chocolate/75 max-w-xl mx-auto">
            A glimpse into the celebrations we have had the privilege of crafting across Tamil Nadu.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[11px] sm:text-xs uppercase tracking-editorial font-medium rounded transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-chocolate text-ivory shadow-warm-sm'
                  : 'bg-cream border border-champagne/50 text-chocolate/80 hover:text-chocolate hover:border-teddy'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {filteredItems.map((item, idx) => {
            // Vary aspect ratios for masonry effect
            const aspects = ['aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-[1/1]', 'aspect-[4/5]', 'aspect-[3/4]'];
            const aspect = aspects[idx % aspects.length];

            return (
              <div
                key={item.id}
                className="group relative break-inside-avoid rounded-lg overflow-hidden border border-champagne/40 cursor-pointer shadow-warm-sm hover:shadow-warm-hover transition-shadow duration-300"
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              >
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  aspectRatio={aspect}
                  className="img-zoom"
                  fallbackLabel={item.title}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/40 transition-all duration-500 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100">
                  <div>
                    <p className="font-serif text-base sm:text-lg text-ivory font-medium leading-snug">
                      {item.title}
                    </p>
                  </div>
                  <Maximize2 className="w-5 h-5 text-ivory/80 flex-shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-chocolate/60 italic">
              Photos for this category will be added soon.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-chocolate/90 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 bg-ivory/10 hover:bg-ivory/20 rounded-full text-ivory transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-ivory/10 hover:bg-ivory/20 rounded-full text-ivory transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-ivory/10 hover:bg-ivory/20 rounded-full text-ivory transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] w-full mx-4 sm:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex]?.src}
              alt={filteredItems[lightboxIndex]?.alt}
              className="w-full h-full max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                const target = e.currentTarget;
                const currentSrc = target.src || '';
                if (!target.dataset.triedPng && currentSrc.includes('.jpg')) {
                  target.dataset.triedPng = 'true';
                  target.src = currentSrc.replace(/\.jpg/i, '.png');
                } else if (!target.dataset.triedJpg && currentSrc.includes('.png')) {
                  target.dataset.triedJpg = 'true';
                  target.src = currentSrc.replace(/\.png/i, '.jpg');
                } else {
                  target.style.display = 'none';
                }
              }}
            />
            <div className="text-center mt-3">
              <p className="font-serif text-ivory/90 text-lg">{filteredItems[lightboxIndex]?.title}</p>
              <p className="text-ivory/50 text-xs font-sans mt-1">
                {lightboxIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
