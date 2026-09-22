"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Crown, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "الأجهزة المدعومة", href: "#devices" },
    { name: "الباقات والعروض", href: "#pricing" },
    { name: "تجارب المشتركين", href: "#testimonials" },
    { name: "الأسئلة الشائعة", href: "#faq" },
  ];

  const whatsappUrl =
    "https://wa.me/212718404459text=" +
    encodeURIComponent("السلام عليكم، أريد الاستفسار عن اشتراك LuxTV الملكي");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-charcoal-950/40 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-gold-600 via-gold-400 to-silver-300 shadow-gold-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-charcoal-900 relative">
                <Image
                  src="/logo.jpg"
                  alt="LuxTV Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-gold-gradient font-sans">
                  LUX<span className="text-silver-gradient">TV</span>
                </span>
                <Crown className="w-4 h-4 text-gold-400 inline-block drop-shadow-[0_0_8px_rgba(245,208,97,0.8)]" />
              </div>
              <span className="text-[10px] text-silver-400 tracking-widest uppercase font-semibold">
                Premium Entertainment
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-silver-300 hover:text-gold-300 transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Tablet & Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gold-400 border border-gold-500/30 hover:border-gold-400 rounded-full hover:bg-gold-500/10 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>العروض الملكية</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#2EE070] hover:to-[#17A392] rounded-full shadow-whatsapp-glow hover:shadow-lg transition-all duration-300 hover:scale-[1.03]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>اشتراك عبر الواتساب</span>
            </a>
          </div>

          {/* Mobile Direct CTA (Clean header without sidebar/drawer) */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-whatsapp-glow active:scale-95 transition-transform"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>اشتراك واتساب</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}