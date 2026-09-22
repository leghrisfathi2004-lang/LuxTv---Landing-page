import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Crown, MessageCircle, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/212718404459?text=" +
    encodeURIComponent("السلام عليكم، أود الاستفسار عن اشتراك LuxTV");

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-24 md:pb-16 text-silver-400 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-right">
            <Link href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-gold-600 via-gold-400 to-silver-300 shadow-gold-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-charcoal-900 relative">
                  <Image
                    src="/logo.jpg"
                    alt="LuxTV Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col text-right">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-black tracking-wider text-gold-gradient font-sans">
                    LUX<span className="text-silver-gradient">TV</span>
                  </span>
                  <Crown className="w-4 h-4 text-gold-400 inline-block drop-shadow-[0_0_8px_rgba(245,208,97,0.8)]" />
                </div>
                <span className="text-[10px] text-silver-400 tracking-widest uppercase font-semibold">
                  Premium Entertainment
                </span>
              </div>
            </Link>

            <p className="text-sm text-silver-400 leading-relaxed max-w-sm">
              الوجهة الأولى في المملكة العربية السعودية للاشتراكات الترفيهية الفاخرة. متعة المشاهدة بدقة 4K فائقة الوضوح مع ثبات مطلق وسرعة تفعيل لا مثيل لها.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-silver-300 pt-2">
              <ShieldCheck className="w-4 h-4 text-whatsapp" />
              <span>خدمة معتمدة ودعم فني سعودي على مدار 24 ساعة</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2 inline-block">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-gold-300 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#devices" className="hover:text-gold-300 transition-colors">
                  الأجهزة المدعومة
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gold-300 transition-colors">
                  جدول الباقات الملكية
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold-300 transition-colors">
                  تجارب المشتركين
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-300 transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Support & Payment Badges (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-right">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2 inline-block">
              طرق الدفع والتواصل
            </h4>

            <p className="text-xs text-silver-400 leading-relaxed">
              طرق دفع آمنة ومعتمدة في السعودية مع تأكيد فوري عبر الواتساب:
            </p>

            {/* Payment Method Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-silver-200">
                🇸🇦 مدى (Mada)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-silver-200">
                 Apple Pay
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-silver-200">
                💳 فيزا / ماستركارد
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-silver-200">
                🏦 تحويل بنكي مباشر
              </span>
            </div>

            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-whatsapp text-xs sm:text-sm font-bold shadow-whatsapp-glow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>دعم العملاء: +966 50 000 0000</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-center">
          <p className="text-[11px] text-silver-500 max-w-3xl mx-auto leading-relaxed">
            تنويه وإخلاء مسؤولية: موقع LuxTV يقدم خدمات تفعيل واشتراكات لتطبيقات وبرامج البث الوسيطة، ولا يقوم باستضافة أو بث أي مواد رقمية محفوظة الحقوق على خوادم ذاتية. البث مخصص للأغراض الترفيهية والشخصية وفق الشروط والأحكام.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-400 pt-4 border-t border-white/5">
            <div>
              جميع الحقوق محفوظة لـ <span className="text-gold-400 font-bold">LuxTV</span> © {new Date().getFullYear()}
            </div>
            <div className="flex items-center gap-1 text-[11px] text-silver-500">
              <span>صُمم بأعلى معايير الفخامة لجمهور المملكة العربية السعودية</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}