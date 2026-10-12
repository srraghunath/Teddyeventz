import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Phone, ArrowUpRight, Instagram, MapPin, Heart, Mail } from 'lucide-react';

export default function Footer() {
  const { brand, navigation } = siteConfig;
  const currentYear = new Date().getFullYear();
  const copyrightYears = brand.foundedYear === currentYear
    ? `${currentYear}`
    : `${brand.foundedYear}–${currentYear}`;

  return (
    <footer className="bg-chocolate text-ivory/90 relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Brand + Tagline */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#FFFCF7] border-2 border-champagne/50 flex items-center justify-center overflow-hidden shadow-warm-md flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Teddy Eventz"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <span className="font-serif text-2xl font-bold text-ivory">{brand.name}</span>
            </div>
            <p className="font-sans text-sm text-ivory/70 leading-relaxed max-w-xs">
              {brand.tagline}
            </p>
            <p className="font-sans text-xs text-ivory/50">
              Founded by {brand.founder}, {brand.foundedYear}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-editorial font-medium text-champagne mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2.5" aria-label="Footer Navigation">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-ivory/75 hover:text-ivory transition-colors font-sans"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-editorial font-medium text-champagne mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-champagne mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-sm text-ivory/75 font-sans leading-relaxed">
                  {brand.address.line1}, {brand.address.line2}, {brand.address.city}, {brand.address.state} {brand.address.pincode}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-champagne flex-shrink-0" strokeWidth={1.5} />
                <a
                  href={brand.contact.phoneTel}
                  className="text-sm text-ivory/75 hover:text-ivory font-sans transition-colors"
                >
                  {brand.contact.phoneFormatted}
                </a>
              </div>
              {brand.contact.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-champagne flex-shrink-0" strokeWidth={1.5} />
                  <a
                    href={`mailto:${brand.contact.email}`}
                    className="text-sm text-ivory/75 hover:text-ivory font-sans transition-colors break-all"
                  >
                    {brand.contact.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-editorial font-medium text-champagne mb-4">
              Connect With Us
            </h4>
            <div className="space-y-3">
              <a
                href={brand.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ivory/75 hover:text-ivory font-sans transition-colors"
              >
                <ArrowUpRight className="w-4 h-4 text-champagne" />
                <span>WhatsApp</span>
              </a>
              <a
                href={brand.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ivory/75 hover:text-ivory font-sans transition-colors"
              >
                <Instagram className="w-4 h-4 text-champagne" strokeWidth={1.5} />
                <span>{brand.contact.instagramHandle}</span>
              </a>
              <a
                href={brand.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ivory/75 hover:text-ivory font-sans transition-colors"
              >
                <MapPin className="w-4 h-4 text-champagne" strokeWidth={1.5} />
                <span>Google Maps</span>
              </a>
            </div>

            {/* CTA */}
            <a
              href={brand.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-ivory/10 hover:bg-ivory/20 border border-ivory/20 text-ivory text-xs uppercase tracking-editorial font-medium rounded transition-colors"
            >
              <span>Plan my event</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-xs text-ivory/50 font-sans">
            © {copyrightYears} {brand.name}. All rights reserved.
          </p>
          
            
          
        </div>
      </div>
    </footer>
  );
}
