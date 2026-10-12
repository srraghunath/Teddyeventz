import React, { useState, useRef, useEffect, useCallback } from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Heart,
  Instagram,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
} from 'lucide-react';

const reels = [
  {
    id: 'reel-1',
    src: '/Video-12628.mp4',
    title: 'Grand Birthday & Theme Setup',
    category: 'Birthday Celebration',
    caption: 'Bespoke balloon arch & luxury celebratory atmosphere',
    likesCount: 1420,
    tag: 'Trending Reel',
  },
  {
    id: 'reel-2',
    src: '/Video-3626.mp4',
    title: 'Surprise Moments & Mascot Energy',
    category: 'Mascot & Surprises',
    caption: 'Life-sized teddy mascot spreading pure joy and smiles',
    likesCount: 1980,
    tag: 'Client Favorite',
  },
  {
    id: 'reel-3',
    src: '/Video-50498.mp4',
    title: 'Stage Illumination & Floral Styling',
    category: 'Stage Decor',
    caption: 'Spectacular floral mandap & warm ambient lighting',
    likesCount: 2240,
    tag: 'Stage Magic',
  },
  {
    id: 'reel-4',
    src: '/Video-59605.mp4',
    title: 'Complete Turnkey Event Execution',
    category: 'A-to-Z Planner',
    caption: 'From empty hall to unforgettable celebration wonderland',
    likesCount: 2650,
    tag: 'Signature Event',
  },
];

function ReelCard({ reel, onOpenLightbox }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(reel.likesCount);

  // Play/Pause on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked((prev) => {
      const next = !prev;
      setLikes((c) => (next ? c + 1 : c - 1));
      return next;
    });
  };

  return (
    <div
      className="group relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-champagne/50 bg-chocolate shadow-warm-md hover:shadow-warm-xl transition-all duration-500 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenLightbox(reel)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={reel.src}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Subtle Top & Bottom Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-chocolate/95 via-transparent to-chocolate/60 pointer-events-none" />

      {/* Top Header Bar: Reel Badge & Volume Toggle */}
      <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-chocolate/70 backdrop-blur-md border border-ivory/20 text-ivory text-[10px] uppercase tracking-editorial font-medium">
          <Instagram className="w-3 h-3 text-champagne" />
          <span>Reel</span>
        </div>

        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-chocolate/70 hover:bg-chocolate/90 backdrop-blur-md border border-ivory/20 text-ivory transition-transform active:scale-95"
          aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-ivory/80" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-champagne" />
          )}
        </button>
      </div>

      {/* Center Play Button Overlay (visible when paused) */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto"
        >
          <div className="w-14 h-14 rounded-full bg-ivory/20 backdrop-blur-md border border-ivory/40 flex items-center justify-center text-ivory shadow-warm-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="w-6 h-6 fill-ivory ml-1 text-ivory" />
          </div>
        </div>
      )}

      {/* Bottom Information Card */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20 text-ivory space-y-2">
        <div className="flex items-center justify-between">
          <span className="inline-block text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-champagne/25 backdrop-blur-sm border border-champagne/40 text-champagne font-medium">
            {reel.tag}
          </span>

          <div className="flex items-center gap-2">
            {/* Interactive Like Button */}
            <button
              onClick={handleLike}
              className="inline-flex items-center gap-1 text-xs text-ivory/90 hover:text-white transition-colors"
              aria-label="Like reel"
            >
              <Heart
                className={`w-4 h-4 transition-transform duration-200 active:scale-125 ${
                  isLiked ? 'fill-red-500 text-red-500' : 'text-ivory/80'
                }`}
              />
              <span className="text-[11px] font-sans font-medium">{likes}</span>
            </button>

            {/* Expand / Lightbox Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenLightbox(reel);
              }}
              className="p-1.5 rounded-full bg-ivory/15 hover:bg-ivory/25 backdrop-blur-sm transition-colors text-ivory"
              aria-label="Expand video"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-base sm:text-lg font-semibold text-ivory leading-snug drop-shadow-sm">
            {reel.title}
          </h3>
          <p className="font-sans text-[11px] text-ivory/80 line-clamp-1 mt-0.5">
            {reel.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedReelIndex, setSelectedReelIndex] = useState(null);
  const modalVideoRef = useRef(null);
  const [modalPlaying, setModalPlaying] = useState(true);
  const [modalMuted, setModalMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const activeReel = selectedReelIndex !== null ? reels[selectedReelIndex] : null;

  const openLightbox = (reel) => {
    const idx = reels.findIndex((r) => r.id === reel.id);
    setSelectedReelIndex(idx >= 0 ? idx : 0);
    setModalPlaying(true);
    setModalMuted(false);
  };

  const closeLightbox = () => {
    setSelectedReelIndex(null);
  };

  const goNext = useCallback(() => {
    if (selectedReelIndex === null) return;
    setSelectedReelIndex((prev) => (prev + 1) % reels.length);
  }, [selectedReelIndex]);

  const goPrev = useCallback(() => {
    if (selectedReelIndex === null) return;
    setSelectedReelIndex((prev) => (prev - 1 + reels.length) % reels.length);
  }, [selectedReelIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedReelIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === ' ') {
        e.preventDefault();
        toggleModalPlay();
      }
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedReelIndex, goNext, goPrev]);

  const toggleModalPlay = () => {
    if (!modalVideoRef.current) return;
    if (modalPlaying) {
      modalVideoRef.current.pause();
      setModalPlaying(false);
    } else {
      modalVideoRef.current.play().then(() => setModalPlaying(true)).catch(() => {});
    }
  };

  const toggleModalMute = () => {
    if (!modalVideoRef.current) return;
    const newMuted = !modalMuted;
    modalVideoRef.current.muted = newMuted;
    setModalMuted(newMuted);
  };

  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime);
      setDuration(modalVideoRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-champagne/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-teddy" />
            <span className="text-xs uppercase tracking-editorial font-medium text-teddy flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5 text-teddy" />
              Live Instagram Reels · Past Work
            </span>
            <span className="h-[1px] w-8 bg-teddy" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-chocolate mb-4">
            Celebrations in <span className="italic font-normal text-teddy">Motion</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-chocolate/80 max-w-2xl mx-auto leading-relaxed">
            Experience our authentic celebration vibes, mascot entries, and dream decors captured live from actual events across Chennai and Tamil Nadu.
          </p>
        </div>

        {/* 4 Reels Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reels.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>

        {/* Instagram Callout Strip */}
        <div className="mt-14 sm:mt-16 bg-cream border border-champagne/60 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-warm-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-warm-md flex-shrink-0">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-chocolate">
                Want to see more live celebration reels?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-chocolate/75 mt-0.5">
                Join our Instagram community for daily decor reveals, customer stories & mascot entries.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.brand.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-chocolate hover:bg-chocolate-light text-ivory text-xs uppercase tracking-editorial font-medium rounded-lg transition-all duration-300 shadow-warm-sm flex-shrink-0 hover:shadow-warm-md"
          >
            <span>Follow {siteConfig.brand.contact.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4 text-champagne" />
          </a>
        </div>
      </div>

      {/* Cinematic Modal / Lightbox */}
      {activeReel && (
        <div
          className="fixed inset-0 z-50 bg-chocolate/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-30 p-2.5 bg-ivory/15 hover:bg-ivory/30 text-ivory rounded-full transition-transform active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-ivory/15 hover:bg-ivory/30 text-ivory rounded-full transition-transform active:scale-95 hidden sm:flex items-center justify-center"
            aria-label="Previous reel"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-ivory/15 hover:bg-ivory/30 text-ivory rounded-full transition-transform active:scale-95 hidden sm:flex items-center justify-center"
            aria-label="Next reel"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Central Video Frame */}
          <div
            className="relative w-full max-w-sm sm:max-w-md max-h-[88vh] aspect-[9/16] rounded-3xl overflow-hidden border-2 border-champagne/40 bg-black shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Video Element */}
            <video
              ref={modalVideoRef}
              key={activeReel.src}
              src={activeReel.src}
              autoPlay
              loop
              muted={modalMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onClick={toggleModalPlay}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
            />

            {/* Top Bar inside modal */}
            <div className="relative z-20 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-champagne/20 border border-champagne/40 flex items-center justify-center text-champagne">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-serif font-bold text-ivory block leading-tight">
                    Teddy Eventz
                  </span>
                  <span className="text-[10px] text-ivory/70 font-sans block">
                    {activeReel.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleModalMute}
                  className="p-2 rounded-full bg-ivory/20 hover:bg-ivory/30 text-ivory transition-colors"
                  aria-label={modalMuted ? 'Unmute' : 'Mute'}
                >
                  {modalMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-champagne" />}
                </button>
              </div>
            </div>

            {/* Bottom Bar inside modal with controls */}
            <div className="relative z-20 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent space-y-3">
              <div>
                <h4 className="font-serif text-lg text-ivory font-semibold">
                  {activeReel.title}
                </h4>
                <p className="font-sans text-xs text-ivory/80 mt-0.5">
                  {activeReel.caption}
                </p>
              </div>

              {/* Progress Slider */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleModalPlay}
                  className="p-2 rounded-full bg-ivory/20 hover:bg-ivory/30 text-ivory transition-colors"
                >
                  {modalPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-ivory" />}
                </button>

                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full accent-champagne h-1.5 bg-ivory/30 rounded-lg cursor-pointer"
                />

                <span className="text-[10px] font-sans text-ivory/70 font-mono flex-shrink-0">
                  {Math.floor(currentTime)}s / {Math.floor(duration)}s
                </span>
              </div>

              <div className="pt-2 border-t border-ivory/15 flex items-center justify-between">
                <span className="text-[11px] text-ivory/60 font-sans">
                  Reel {selectedReelIndex + 1} of {reels.length}
                </span>

                <a
                  href={siteConfig.brand.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-champagne hover:underline"
                >
                  <span>Open on Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
