import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const { brand } = siteConfig;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-30 flex flex-col gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Call Button (mobile only) */}
      <a
        href={brand.contact.phoneTel}
        className="flex sm:hidden items-center justify-center w-12 h-12 bg-teddy hover:bg-teddy-dark text-ivory rounded-full shadow-warm-md hover:shadow-warm-hover transition-all duration-300"
        aria-label="Call Teddy Eventz"
        title="Call us"
      >
        <Phone className="w-5 h-5" strokeWidth={1.5} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={brand.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-chocolate hover:bg-chocolate-light text-ivory rounded-full shadow-warm-md hover:shadow-warm-hover transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
      </a>
    </div>
  );
}
