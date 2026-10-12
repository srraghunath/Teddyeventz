import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Phone, ArrowUpRight, Navigation, Instagram, Send, Mail } from 'lucide-react';

export default function Contact() {
  const { brand, services } = siteConfig;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    city: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!form.eventType) newErrors.eventType = 'Please select an event type';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build WhatsApp message
    const lines = [
      `Hello Teddy Eventz! I'd like to enquire about an event.`,
      ``,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Event Type: ${form.eventType}`,
      form.eventDate ? `Event Date: ${form.eventDate}` : '',
      form.city ? `City: ${form.city.trim()}` : '',
      form.message ? `Message: ${form.message.trim()}` : '',
      ``,
      `Looking forward to hearing from you!`
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/${brand.contact.whatsappNumber}?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputClasses = "w-full px-4 py-3 bg-ivory border border-champagne/50 rounded text-sm font-sans text-chocolate placeholder:text-champagne-dark focus:outline-none focus:border-teddy focus:ring-1 focus:ring-teddy/30 transition-colors";
  const labelClasses = "block text-[11px] uppercase tracking-editorial font-medium text-teddy mb-1.5";
  const errorClasses = "text-[11px] text-red-700 mt-1 font-sans";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-8 bg-teddy" />
            <span className="text-xs uppercase tracking-editorial font-medium text-teddy">
              Get In Touch
            </span>
            <span className="h-[1px] w-8 bg-teddy" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-chocolate">
            Let's Plan Your <span className="italic font-normal text-teddy">Celebration</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column: Info & Map */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-champagne bg-ivory flex items-center justify-center">
                <MapPin className="w-4 h-4 text-teddy" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-chocolate mb-1">Visit Us</h4>
                <p className="font-sans text-sm text-chocolate/80 leading-relaxed">
                  {brand.address.full}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-champagne bg-ivory flex items-center justify-center">
                <Phone className="w-4 h-4 text-teddy" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-chocolate mb-1">Call Us</h4>
                <a
                  href={brand.contact.phoneTel}
                  className="font-sans text-sm text-teddy hover:text-chocolate transition-colors underline underline-offset-4 decoration-champagne"
                >
                  {brand.contact.phoneFormatted}
                </a>
              </div>
            </div>

            {/* Email */}
            {brand.contact.email && (
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-champagne bg-ivory flex items-center justify-center">
                  <Mail className="w-4 h-4 text-teddy" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-chocolate mb-1">Email Us</h4>
                  <a
                    href={`mailto:${brand.contact.email}`}
                    className="font-sans text-sm text-teddy hover:text-chocolate transition-colors underline underline-offset-4 decoration-champagne break-all"
                  >
                    {brand.contact.email}
                  </a>
                </div>
              </div>
            )}

            {/* Action Buttons Row */}
            <div className="flex flex-wrap gap-3">
              <a
                href={brand.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-chocolate hover:bg-chocolate-light text-ivory text-xs uppercase tracking-editorial font-medium rounded transition-colors shadow-warm-sm"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={brand.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-chocolate text-chocolate hover:bg-chocolate hover:text-ivory text-xs uppercase tracking-editorial font-medium rounded transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{brand.contact.instagramHandle}</span>
              </a>

              <a
                href={brand.contact.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-champagne text-chocolate hover:border-teddy text-xs uppercase tracking-editorial font-medium rounded transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden border border-champagne/50 shadow-warm-sm aspect-[16/10]">
              <iframe
                src={brand.contact.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Teddy Eventz Location on Google Maps"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="bg-ivory border border-champagne/40 rounded-lg p-6 sm:p-8 shadow-warm-sm">
            <h3 className="font-serif text-2xl font-semibold text-chocolate mb-1">
              Quick Enquiry
            </h3>
            <p className="font-sans text-xs text-teddy/80 mb-6">
              Fill in the details below and we'll continue the conversation on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className={labelClasses}>Your Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className={inputClasses}
                />
                {errors.name && <p className={errorClasses}>{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="contact-phone" className={labelClasses}>Phone Number *</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={inputClasses}
                />
                {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="contact-eventType" className={labelClasses}>Event Type *</label>
                <select
                  id="contact-eventType"
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select an event type</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
                {errors.eventType && <p className={errorClasses}>{errors.eventType}</p>}
              </div>

              {/* Event Date */}
              <div>
                <label htmlFor="contact-eventDate" className={labelClasses}>Event Date</label>
                <input
                  type="date"
                  id="contact-eventDate"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="contact-city" className={labelClasses}>City</label>
                <input
                  type="text"
                  id="contact-city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="e.g. Chennai, Coimbatore"
                  className={inputClasses}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className={labelClasses}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your celebration..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-chocolate hover:bg-chocolate-light text-ivory text-xs uppercase tracking-editorial font-medium rounded transition-colors shadow-warm-sm hover:shadow-warm-md"
              >
                <Send className="w-4 h-4" />
                <span>Send on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
