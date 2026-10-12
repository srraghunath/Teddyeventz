import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = siteConfig.navigation;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-champagne/40 py-3 shadow-warm-sm'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              className="flex items-center gap-3.5 group focus:outline-none"
              aria-label="Teddy Eventz Home"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFFCF7] border-2 border-champagne/60 shadow-warm-md flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Teddy Eventz Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to logo.jpeg or text if logo file is not loaded yet
                    if (!e.currentTarget.dataset.retried) {
                      e.currentTarget.dataset.retried = 'true';
                      e.currentTarget.src = '/images/logo.jpeg';
                      return;
                    }
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextSibling) {
                      e.currentTarget.nextSibling.style.display = 'block';
                    }
                  }}
                />
                <span className="hidden text-teddy text-xs font-serif font-bold">TE</span>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-chocolate' : 'text-chocolate'
                  }`}
                >
                  Teddy Eventz
                </span>
                <span className="text-[10px] tracking-widest uppercase font-sans text-teddy/80 -mt-1 hidden sm:block">
                  Event Planners & Decorators
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs uppercase tracking-editorial font-medium text-chocolate/80 hover:text-chocolate transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-teddy hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={siteConfig.brand.contact.phoneTel}
                className="flex items-center gap-1.5 text-xs uppercase tracking-editorial font-medium text-teddy hover:text-chocolate transition-colors"
                title="Call Teddy Eventz"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>90030 95602</span>
              </a>
              <a
                href={siteConfig.brand.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-chocolate hover:bg-chocolate-light text-ivory text-xs uppercase tracking-editorial font-medium rounded transition-all duration-300 shadow-warm-sm hover:shadow-warm-md"
              >
                <span>Plan my event</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={siteConfig.brand.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-chocolate text-ivory text-[11px] uppercase tracking-wider font-medium rounded flex items-center gap-1"
                aria-label="Enquire on WhatsApp"
              >
                <span>Plan</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-chocolate hover:bg-cream transition-colors border border-champagne/40"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-chocolate/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-[82%] max-w-sm bg-ivory border-l border-champagne/40 shadow-warm-lg flex flex-col justify-between p-6 pt-24 transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6">
            <div className="pb-4 border-b border-champagne/40">
              <span className="font-serif text-2xl font-bold text-chocolate block">
                Teddy Eventz
              </span>
              <span className="text-xs text-teddy">Life is an Event, Make it Memorable 🧸</span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-editorial font-medium text-chocolate/85 hover:text-chocolate py-1 border-b border-champagne/20 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-champagne/40 space-y-3">
            <a
              href={siteConfig.brand.contact.phoneTel}
              className="flex items-center justify-center gap-2 w-full py-3 border border-chocolate text-chocolate text-xs uppercase tracking-editorial font-medium rounded hover:bg-chocolate hover:text-ivory transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call 9003095602</span>
            </a>
            <a
              href={siteConfig.brand.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-chocolate text-ivory text-xs uppercase tracking-editorial font-medium rounded shadow-warm-sm hover:bg-chocolate-light transition-colors"
            >
              <span>Plan my event on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-center text-teddy/70 pt-1">
              Chennai & All over Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
