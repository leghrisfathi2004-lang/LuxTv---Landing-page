"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Zap } from "lucide-react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the first 120px
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl =
    "https://wa.me/966500000000?text=" +
    encodeURIComponent("السلام عليكم، أريد الاستفسار عن اشتراك LuxTV الملكي");

  if (!isVisible) return null;

  return (
    <aside
      aria-label="طلب اشتراك فوري عبر الواتساب"
      className="block md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-charcoal-950/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_25px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl btn-whatsapp text-sm font-bold text-white shadow-whatsapp-glow transition-transform active:scale-[0.98]"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white text-whatsapp-dark" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
          </div>
          <span>تواصل معنا مباشرة عبر الواتساب 🇸🇦</span>
        </a>

        <a
          href="#pricing"
          className="shrink-0 p-3.5 rounded-xl bg-white/10 border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 active:scale-95 transition-all"
          aria-label="الانتقال إلى جدول الباقات"
        >
          <Zap className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
}