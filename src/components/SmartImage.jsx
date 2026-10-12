import React, { useState } from 'react';

/**
 * SmartImage Component
 * 
 * Renders an image with fallback to an editorial, elegant placeholder if
 * the photo is missing or fails to load.
 * 
 * Features:
 * - Graceful fallback (soft cream block, champagne hairline border, logo mark, "Photo coming soon")
 * - Native lazy loading and asynchronous decoding
 * - Explicit aspect ratio wrapper preventing Cumulative Layout Shift (CLS)
 * - Smooth transition when image is loaded
 */
export default function SmartImage({
  src,
  alt = 'Teddy Eventz celebration photo',
  className = '',
  aspectRatio = 'aspect-[4/3]',
  width,
  height,
  objectFit = 'object-cover',
  priority = false,
  fallbackLabel = 'Photo coming soon',
  onClick,
}) {
  const [currentCandidateIdx, setCurrentCandidateIdx] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate candidates across all common extensions (.png, .jpg, .jpeg, .webp)
  const candidates = React.useMemo(() => {
    if (!src) return [];
    const match = src.match(/^(.*)\.(jpg|jpeg|png|webp)$/i);
    if (!match) return [src];
    const basePath = match[1];
    const currentExt = match[2].toLowerCase();
    const extensions = [currentExt, 'png', 'jpg', 'jpeg', 'webp'];
    const unique = [...new Set(extensions)];
    return unique.map((ext) => `${basePath}.${ext}`);
  }, [src]);

  // Reset state when src changes
  React.useEffect(() => {
    setCurrentCandidateIdx(0);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const activeSrc = candidates[currentCandidateIdx] || src;

  const handleImgError = () => {
    if (currentCandidateIdx + 1 < candidates.length) {
      setCurrentCandidateIdx((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const handleImgLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`relative overflow-hidden bg-cream-warm ${aspectRatio} ${className}`}
      onClick={onClick}
    >
      {!hasError ? (
        <img
          key={activeSrc}
          src={activeSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={handleImgError}
          onLoad={handleImgLoad}
          className={`w-full h-full ${objectFit} transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : null}

      {/* Elegant Editorial Fallback when image is missing or loading fails */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-cream/90 border border-champagne/40">
          {/* Subtle Teddy Motif Mark */}
          <div className="w-12 h-12 rounded-full border border-champagne/60 bg-ivory/80 flex items-center justify-center mb-3 shadow-warm-sm">
            <svg
              className="w-6 h-6 text-teddy/80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Teddy Bear Head Silhouette Outline */}
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <path d="M12 7c-4.4 0-8 3.6-8 8 0 2.2.9 4.2 2.3 5.7C7.7 21.5 9.7 22 12 22s4.3-.5 5.7-1.3C19.1 19.2 20 17.2 20 15c0-4.4-3.6-8-8-8z" />
              <circle cx="9" cy="14" r="1" fill="currentColor" />
              <circle cx="15" cy="14" r="1" fill="currentColor" />
              <path d="M11 17.5a1.5 1.5 0 0 0 2 0" />
            </svg>
          </div>
          <span className="font-serif italic text-chocolate/80 text-lg">
            Teddy Eventz
          </span>
          <span className="text-[11px] uppercase tracking-widest text-teddy/70 font-sans mt-1">
            {fallbackLabel}
          </span>
        </div>
      )}

      {/* Subtle loader shimmer while fetching */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-cream-warm via-ivory to-cream-warm animate-pulse pointer-events-none" />
      )}
    </div>
  );
}
