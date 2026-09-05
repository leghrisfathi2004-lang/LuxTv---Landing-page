import React from "react";
import { Tv, Film, Server, Headset } from "lucide-react";

export default function LiveStatsBanner() {
  const stats = [
    {
      icon: Tv,
      number: "+10,000",
      label: "قناة بث مباشر بجودة 4K & FHD",
      subtext: "تغطية شاملة لكل الفعاليات الرياضية والترفيهية",
    },
    {
      icon: Film,
      number: "+35,000",
      label: "فيلم ومسلسل بمكتبة سينمائية متجددة",
      subtext: "تحديثات يومية وأعلى جودة ترجمة وصورة",
    },
    {
      icon: Server,
      number: "99.9%",
      label: "معدل استقرار السيرفرات وقت المباريات",
      subtext: "سيرفرات مخصصة تمنع التقطيع والضغط",
    },
    {
      icon: Headset,
      number: "24/7",
      label: "دعم فني سعودي متواصل لحظياً",
      subtext: "متواجدون معك دائماً للمساعدة والحلول الفورية",
    },
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl sm:rounded-3xl glass-card border border-gold-500/20 shadow-2xl p-5 sm:p-8 bg-charcoal-900/90 backdrop-blur-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-white/10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center ${
                  idx > 1 ? "pt-4 lg:pt-0" : ""
                } px-2 sm:px-4`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-3 shadow-gold-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-gold-gradient font-sans">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-silver-100 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-silver-400 mt-1 hidden sm:block">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}