"use client";

import React from "react";
import Image from "next/image";
import {
  MessageCircle,
  Zap,
  ShieldCheck,
  Crown,
  Sparkles,
  Wifi,
  Film,
  Tv,
} from "lucide-react";

export default function Hero() {
  const whatsappUrl =
  "https://wa.me/212718404459?text=" +
  encodeURIComponent("السلام عليكم، أريد الاستفسار عن اشتراك LuxTV");

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-36 pb-24 overflow-hidden flex items-center justify-center"
    >
      {/* 1st Image as Hero Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="LuxTV Cinema and Entertainment Wall"
          fill
          priority
          quality={90}
          className="object-cover object-center scale-105"
        />
      </div>

      {/* Dark Shader Overlay: Smooth cinematic vignette with high contrast for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-950/92 via-charcoal-950/85 to-charcoal-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(8,8,10,0.65)_0%,rgba(8,8,10,0.95)_80%)]" />

      {/* Subtle Golden Ambient Light in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-gold-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Centered Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10 flex flex-col items-center space-y-7 sm:space-y-9">
        
        {/* Royal Saudi KSA Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-card border border-gold-500/40 shadow-gold-sm animate-float">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500"></span>
          </span>
          <Crown className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-bold text-silver-200">
            الخيار الأول والموثوق في المملكة العربية السعودية 🇸🇦
          </span>
        </div>

        {/* Main Luxury Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.2] tracking-tight text-white max-w-4xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          <span>تجربة ترفيهية </span>
          <span className="text-gold-gradient relative inline-block">
            ملكية
            <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-90" />
          </span>
          <br />
          <span className="text-silver-100">بدقة 4K بدون انقطاع</span>
        </h1>

        {/* Action CTAs */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary WhatsApp Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full btn-whatsapp text-base sm:text-lg tracking-wide group shadow-whatsapp-glow"
          >
            <div className="p-1 rounded-full bg-white/20 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5 fill-white text-whatsapp-dark" />
            </div>
            <span>اشترك الآن عبر الواتساب</span>
          </a>

          {/* Secondary Ghost Gold Button */}
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-outline-gold text-base sm:text-lg font-bold backdrop-blur-md bg-black/40"
          >
            <Crown className="w-5 h-5 text-gold-400" />
            <span>تصفح العروض والباقات</span>
          </a>
        </div>

        {/* Trust Badges & Server Proof Badges */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 border-t border-white/10 w-full max-w-4xl">
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl glass-card text-silver-200">
            <Zap className="w-4 h-4 text-gold-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">تفعيل فوري خلال دقيقتين</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl glass-card text-silver-200">
            <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">تقنية Anti-Freeze بدون تقطيع</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl glass-card text-silver-200">
            <Wifi className="w-4 h-4 text-whatsapp shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">سيرفرات الرياض 12ms</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl glass-card text-silver-200">
            <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">جودة 4K & HDR10</span>
          </div>
        </div>

      </div>
    </section>
  );
}