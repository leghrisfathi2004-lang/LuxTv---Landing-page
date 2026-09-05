import React from "react";
import {
  Smartphone,
  Tv,
  Monitor,
  Tablet,
  Laptop,
  Flame,
  CheckCircle2,
  Sparkles,
  DownloadCloud,
} from "lucide-react";

export default function Devices() {
  const devices = [
    {
      name: "Smart TVs (الشاشات الذكية)",
      models: "Samsung, LG, Sony, TCL, Philips",
      description: "يدعم أنظمة Tizen و webOS و Google TV بدقة 4K كاملة.",
      icon: Tv,
      tag: "الأكثر استخداماً",
    },
    {
      name: "Apple TV & iOS",
      models: "Apple TV 4K, iPhone, iPad",
      description: "توافق كامل وسلاسة خرافية مع تطبيقات المشاهدة على متجر App Store.",
      icon: Tablet,
      tag: "أداء استثنائي",
    },
    {
      name: "Android TV & Box",
      models: "Xiaomi Mi Box, Nvidia Shield, Chromecast",
      description: "دعم كافة أجهزة وملحقات الأندرويد مع أسرع استجابة لتنقل القنوات.",
      icon: Monitor,
      tag: "سرعة فائقة",
    },
    {
      name: "Amazon Firestick",
      models: "Fire TV Stick 4K Max, Cube, Lite",
      description: "تثبيت سهل بضغطة زر وتوافق مثالي مع جودة البث العالية.",
      icon: Flame,
      tag: "سهل وسريع",
    },
    {
      name: "الهواتف الذكية والأجهزة اللوحية",
      models: "iOS & Android Mobiles",
      description: "تابع فعالياتك الرياضية أينما كنت بتطبيق مخصص واستهلاك بيانات متوازن.",
      icon: Smartphone,
      tag: "ترفيه متنقل",
    },
    {
      name: "الحواسيب المحمولة والمكتبية",
      models: "Windows PC & Mac OS",
      description: "تشغيل عبر برامج المشاهدة المعتمدة أو متصفح الويب المباشر.",
      icon: Laptop,
      tag: "مشاهدة مرنة",
    },
  ];

  const popularApps = [
    "IPTV Smarters Pro",
    "IBO Player",
    "XCIPTV Player",
    "Flix IPTV",
    "Bob Player",
    "Smart IPTV",
  ];

  return (
    <section id="devices" className="py-24 relative overflow-hidden bg-charcoal-900/40">
      {/* Visual Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-silver-400/20 text-xs sm:text-sm font-bold text-silver-200">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>حرية المشاهدة بلا قيود</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-silver-100 tracking-tight">
            يعمل بكل سلاسة على كافة أجهزتك المفضلة
          </h2>
          <p className="text-base sm:text-lg text-silver-400 leading-relaxed">
            اشتراك LuxTV متوافق 100% مع جميع الشاشات الذكية، الأجهزة اللوحية، الهواتف، وأجهزة البث دون الحاجة لأي معدات إضافية معقدة.
          </p>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {devices.map((device, idx) => {
            const Icon = device.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-gold-500/40 group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-silver-200 group-hover:text-gold-400 group-hover:border-gold-500/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-charcoal-800 text-gold-400 border border-gold-500/20">
                      {device.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                    {device.name}
                  </h3>
                  <div className="text-xs text-gold-400/90 font-mono mb-3">
                    {device.models}
                  </div>
                  <p className="text-sm text-silver-400 leading-relaxed">
                    {device.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supported IPTV Applications Bar */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 mb-16 text-center">
          <h4 className="text-sm sm:text-base font-bold text-silver-200 mb-4 flex items-center justify-center gap-2">
            <DownloadCloud className="w-5 h-5 text-gold-400" />
            <span>يدعم تشغيل أشهر برامج وتطبيقات الـ IPTV العالمية:</span>
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {popularApps.map((app, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-silver-300 hover:text-gold-300 hover:border-gold-500/30 hover:bg-white/10 transition-all"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* 3-Step Simple Setup Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card rounded-2xl p-6 text-center relative border border-white/10">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-400 font-black text-lg flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h4 className="text-base font-bold text-white mb-2">اختر باقتك المفضلة</h4>
            <p className="text-xs sm:text-sm text-silver-400 leading-relaxed">
              اختر المدة المناسبة لك (3 أشهر، 6 أشهر، أو 12 شهر ملكي) واضغط على زر الاشتراك.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center relative border border-white/10">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-400 font-black text-lg flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h4 className="text-base font-bold text-white mb-2">استلم الكود والشرح فوراً</h4>
            <p className="text-xs sm:text-sm text-silver-400 leading-relaxed">
              يصلك كود التفعيل ورابط السيرفر وطريقة الإعداد في رسالة واتساب واضحة ومباشرة.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 text-center relative border border-white/10">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/40 text-gold-400 font-black text-lg flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h4 className="text-base font-bold text-white mb-2">استمتع بالمشاهدة الملكية</h4>
            <p className="text-xs sm:text-sm text-silver-400 leading-relaxed">
              أدخل الكود على شاشتك أو هاتفك واستمتع بمباريات اليوم وأحدث الأفلام فوراً وبدقة 4K.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}