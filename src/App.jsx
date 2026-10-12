import React from 'react';
import { siteConfig } from './data/siteConfig';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredibilityStrip from './components/CredibilityStrip';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Gallery />
        {siteConfig.showReviews && <Reviews />}
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
