"use client";

import React from "react";
import {
  Check,
  Crown,
  MessageCircle,
  Zap,
  ShieldCheck,
  Sparkles,
  Flame,
} from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      id: "3-months",
      name: "باقة 3 أشهر",
      subtitle: "الباقة الأساسية للتجربة والمتابعة",
      price: "99",
      period: "لكل 3 أشهر",
      savings: null,
      featured: false,
      popular: false,
      badge: "مرونة كاملة",
      features: [
        "أكثر من 10,000 قناة بث مباشر عالية الدقة",
        "مكتبة ضخمة متجددة من أحدث الأفلام والمسلسلات",
        "تغطية شاملة لجميع البطولات والدوريات الكبرى",
        "باقات مخصصة تناسب كافة أفراد العائلة والتحكم الكامل",
        "دعم جميع التطبيقات المشهورة (Smarters, IBO, etc.)",
        "جودات متعددة (4K, FHD, HD, SD)",
        "دعم فني وتحديثات مستمرة طوال فترة الاشتراك",
      ],
      whatsappMsg:
        "السلام عليكم، أريد الاشتراك في باقة LuxTV (3 أشهر) بسعر 99 ر.س",
      btnText: "اشترك الآن - 99 ر.س",
    },
    {
      id: "12-months",
      name: "باقة 12 شهر (الملكية)",
      subtitle: "الخيار الأكثر طلباً وتوفيراً في السعودية",
      price: "249",
      period: "لكل سنة كاملة (12 شهر)",
      savings: "وفر أكثر من 50% مع الباقة الملكية",
      featured: true,
      popular: true,
      badge: "الأكثر طلباً ومبيعاً 👑",
      features: [
        "أكثر من 10,000 قناة بث مباشر بدقة 4K و Ultra HD فائقة النقاء",
        "مكتبة الأفلام والمسلسلات الكاملة مع تحديث يومي للأفلام الجديدة",
        "تغطية البث المباشر الكامل لكافة البطولات العالمية والمحلية",
        "سيرفرات VIP مخصصة مع نظام Anti-Freeze فائق الثبات",
        "إمكانية تخصيص وترتيب قائمة القنوات وفق رغبة العائلة",
        "دعم التشغيل على جميع الأجهزة والشاشات مع إمكانية التنقل",
        "أولوية قصوى في الدعم الفني وخدمة العملاء على مدار 24 ساعة",
        "ضمان ذهبي شامل لكامل فترة الـ 12 شهراً مع استبدال فوري",
      ],
      whatsappMsg:
        "السلام عليكم، أريد الاشتراك في باقة LuxTV الملكية (12 شهر) بسعر 249 ر.س",
      btnText: "احصل على الباقة الملكية - 249 ر.س",
    },
    {
      id: "6-months",
      name: "باقة 6 أشهر",
      subtitle: "الباقة المتوازنة لموسم رياضي وترفيهي مميز",
      price: "159",
      period: "لكل نصف سنة (6 أشهر)",
      savings: "وفر 20% مقارنة بالاشتراك الدوري",
      featured: false,
      popular: false,
      badge: "قيمة ممتازة",
      features: [
        "أكثر من 10,000 قناة بث مباشر عالية الدقة",
        "مكتبة ضخمة متجددة من أحدث الأفلام والمسلسلات",
        "تغطية شاملة لجميع البطولات والدوريات الكبرى",
        "باقات مخصصة تناسب كافة أفراد العائلة والتحكم الكامل",
        "دعم جميع التطبيقات المشهورة (Smarters, IBO, etc.)",
        "جودات متعددة تناسب مختلف سرعات الإنترنت",
        "دعم فني ومتابعة دورية مستمرة على مدار الساعة",
      ],
      whatsappMsg:
        "السلام عليكم، أريد الاشتراك في باقة LuxTV (6 أشهر) بسعر 159 ر.س",
      btnText: "اشترك الآن - 159 ر.س",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gold-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold-500/30 text-xs sm:text-sm font-bold text-gold-400">
            <Crown className="w-4 h-4 text-gold-400" />
            <span>باقات حصرية بالريال السعودي (ر.س)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-silver-100 tracking-tight">
            اختر باقتك الملكية المناسبة
          </h2>
          <p className="text-base sm:text-lg text-silver-400 leading-relaxed">
            أسعار واضحة ومباشرة بدون أي رسوم خفية أو تجديد تلقائي إجباري. تفعيل فوري ومباشر عبر الواتساب.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier) => {
            const isFeatured = tier.featured;
            const waLink = `https://wa.me/966500000000?text=${encodeURIComponent(
              tier.whatsappMsg
            )}`;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "glass-card-featured lg:-translate-y-4 z-20 shadow-gold-md"
                    : "glass-card border border-white/10 hover:border-gold-500/30 z-10"
                }`}
              >
                {/* Floating Top Badge */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-700 text-charcoal-950 text-xs font-black tracking-wide shadow-gold-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Crown className="w-3.5 h-3.5 fill-charcoal-950" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Badges */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {tier.name}
                    </h3>
                    {!isFeatured && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-silver-300 border border-white/10">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-silver-400 mb-6">
                    {tier.subtitle}
                  </p>

                  {/* Price Tag */}
                  <div className="pb-6 mb-6 border-b border-white/10 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black font-sans text-gold-gradient">
                      {tier.price}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-silver-200">
                      ر.س
                    </span>
                    <span className="text-xs text-silver-400 mr-auto font-medium">
                      / {tier.period}
                    </span>
                  </div>

                  {/* Savings Tag */}
                  {tier.savings && (
                    <div className="mb-6 p-2 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-bold text-center flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      <span>{tier.savings}</span>
                    </div>
                  )}

                  {/* Features Checklist */}
                  <ul className="space-y-3.5 mb-8 text-right">
                    {tier.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-silver-300 leading-snug"
                      >
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            isFeatured
                              ? "bg-gold-500 text-charcoal-950"
                              : "bg-gold-500/20 text-gold-400"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-black text-sm sm:text-base tracking-wide transition-all duration-300 ${
                      isFeatured
                        ? "btn-gold shadow-gold-sm"
                        : "btn-whatsapp"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>{tier.btnText}</span>
                  </a>
                  <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-silver-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                    <span>تفعيل فوري وآمن خلال 3 دقائق عبر الواتساب</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Seal Box */}
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl glass-card p-6 sm:p-8 border border-gold-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-right">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-600 to-gold-400 flex items-center justify-center text-charcoal-950 shrink-0 shadow-gold-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                الضمان الذهبي 100% لثبات الخدمة
              </h4>
              <p className="text-xs sm:text-sm text-silver-400 leading-relaxed">
                نضمن لك استقرار السيرفرات وجودة البث دون انقطاع، مع دعم فني ومتابعة فورية طوال مدة اشتراكك.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-gold-400 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
            <Zap className="w-4 h-4 text-gold-400" />
            <span>تسليم وتفعيل فوري</span>
          </div>
        </div>

      </div>
    </section>
  );
}