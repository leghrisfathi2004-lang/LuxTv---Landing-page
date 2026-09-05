import React from "react";
import {
  Headset,
  Zap,
  Sparkles,
  Clock,
  ShieldAlert,
  Sliders,
  CheckCircle,
  Crown,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Headset,
      tag: "خدمة فورية",
      title: "دعم فني سعودي 24/7",
      description:
        "متواجدون معك لحظة بلحظة عبر الواتساب لضمان أفضل تجربة، والإجابة عن أي استفسار وحل أي مشكلة تقنية فوراً.",
      highlight: "رد فوري عبر الواتساب",
    },
    {
      icon: Zap,
      tag: "ثبات 100%",
      title: "بث مباشر بدون تقطيع",
      description:
        "سيرفرات فائقة السرعة معززة بخوارزميات Anti-Freeze تضمن استقرار البث التام أثناء قمم المباريات والدوريات الكبرى.",
      highlight: "سيرفرات محلية فائقة الاستقرار",
    },
    {
      icon: Sparkles,
      tag: "دقة سينمائية",
      title: "جودة 4K & Ultra HD",
      description:
        "ألوان واقعية فائقة النقاء وصوت محيطي Dolby يجعل منزلك صالة سينما أو منصة استاد رياضي عالمي.",
      highlight: "تقنية HDR10 & 60 FPS",
    },
    {
      icon: Clock,
      tag: "سرعة وسهولة",
      title: "تفعيل فوري خلال دقائق",
      description:
        "استلم بيانات اشتراكك ورابط التشغيل والشرح الكامل مباشرة عبر الواتساب بعد طلبك، وابدأ المشاهدة دون أي انتظار.",
      highlight: "تسليم في أقل من 3 دقائق",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-silver-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold-500/30 text-xs sm:text-sm font-bold text-gold-400">
            <Crown className="w-4 h-4 text-gold-400" />
            <span>لماذا يختار عملاؤنا في المملكة اشتراك LuxTV؟</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-silver-100 tracking-tight">
            معايير فخامة تفوق التوقعات
          </h2>
          <p className="text-base sm:text-lg text-silver-400 leading-relaxed">
            صممنا خدمة LuxTV بأحدث تقنيات البث العالمية لنمنحك تجربة خالية من التقطيع، مع مراعاة كاملة لراحة واحتياجات العائلة السعودية.
          </p>
        </div>

        {/* 4-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-charcoal-900 to-charcoal-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:border-gold-400 group-hover:shadow-gold-sm transition-all duration-300">
                      <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-silver-300 border border-white/10 group-hover:border-gold-500/30 group-hover:text-gold-300 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-gold-300 transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-silver-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-gold-400">
                  <CheckCircle className="w-4 h-4 text-whatsapp shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Value Banner: Family Controls & Total Privacy */}
        <div className="mt-12 rounded-2xl glass-card p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/60 to-charcoal-900/90">
          <div className="flex items-start gap-4 text-right">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                باقات مخصصة وعائلية قابلة للتحكم التام والخصوصية 🛡️
              </h4>
              <p className="text-sm text-silver-400 max-w-2xl leading-relaxed">
                نوفر ميزة تخصيص القنوات وحجب أو إخفاء أي محتوى لا يناسب العائلة أو الأطفال بسهولة تامة بطلب مسبق عند التفعيل لتستمتع بأعلى درجات راحة البال.
              </p>
            </div>
          </div>
          <a
            href="#pricing"
            className="shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold btn-outline-gold text-center whitespace-nowrap"
          >
            استكشف باقات العائلة
          </a>
        </div>
      </div>
    </section>
  );
}