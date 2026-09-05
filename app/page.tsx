import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveStatsBanner from "./components/LiveStatsBanner";
import Features from "./components/Features";
import Devices from "./components/Devices";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-charcoal-950 text-silver-100 overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Live Performance & Statistics Banner */}
      <LiveStatsBanner />

      {/* Trust & Value Proposition (لماذا LuxTV) 
      <Features />*/}

      {/* Device Compatibility Ecosystem */}
      <Devices />

      {/* Pricing & Offers in Saudi Riyal */}
      <Pricing />

      {/* Native WhatsApp Dark Mode Testimonials */}
      <Testimonials />

      {/* FAQ & Golden Guarantee */}
      <FAQ />

      {/* Footer & Compliance Disclaimer */}
      <Footer />

      {/* Mobile Sticky Quick-Action Bar */}
      <StickyMobileCTA />
    </main>
  );
}