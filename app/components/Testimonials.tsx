import React from "react";
import {
  MessageSquare,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Star,
  ShieldCheck,
  Crown,
} from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      author: "أبو فهد",
      location: "الرياض 🇸🇦",
      plan: "مشترك في الباقة الملكية (12 شهر)",
      time: "9:42 م",
      replyTime: "9:44 م",
      avatarBg: "bg-emerald-700",
      rating: 5,
      messages: [
        {
          sender: "client",
          text: "يا هلا أخوي، حبيت أشكركم من القلب على السيرفر الخرافي.. تابعت مباراة الكلاسيكو أمس كاملة من أول دقيقة لآخر دقيقة بدون رمشة ولا تقطيع واحد! والجودة 4K حقيقية تفوق الوصف بصراحة 👏🔥",
          time: "9:42 م",
        },
        {
          sender: "support",
          text: "حياك الله يا أبو فهد ونورّتنا، شهادتك نعتز فيها وهذا واجبنا دائماً 👑 سيرفراتنا مجهزة بأعلى طاقة وقت المباريات الكبرى. مشاهدة ممتعة ومرحباً بك دائماً في عائلة LuxTV!",
          time: "9:44 م",
        },
      ],
    },
    {
      author: "م. أسامة الشريف",
      location: "جدة 🇸🇦",
      plan: "مشترك في باقة 6 أشهر",
      time: "4:15 م",
      replyTime: "4:17 م",
      avatarBg: "bg-blue-700",
      rating: 5,
      messages: [
        {
          sender: "client",
          text: "السلام عليكم ورحمة الله، ما شاء الله تبارك الله.. ما كملت دقيقتين من مراسلتكم إلا والكود ورابط التشغيل عندي، وفعلته على شاشة سامسونج سمارت وشغال مثل الساعة. سرعة تجاوب وخدمة عملاء تبيض الوجه صراحة 🤍",
          time: "4:15 م",
        },
        {
          sender: "support",
          text: "وعليكم السلام مهندس أسامة يا هلا بك! سرعة تفعيل الخدمة وراحتكم هي غايتنا الأولى دائماً ⚡ استمتع بمكتبة الأفلام والمسلسلات الحديثة ومحدثة يومياً بإذن الله.",
          time: "4:17 م",
        },
      ],
    },
    {
      author: "عبدالمجيد الدوسري",
      location: "الدمام 🇸🇦",
      plan: "مشترك في الباقة الملكية (12 شهر)",
      time: "11:20 م",
      replyTime: "11:23 م",
      avatarBg: "bg-amber-700",
      rating: 5,
      messages: [
        {
          sender: "client",
          text: "أمانة أنا جربت أكثر من اشتراك قبلكم وكان وقت المباريات القوية يجيه لاق وبطء.. بس LuxTV ثباته عجيب ماشاء الله! غير كذا ميزة حجب القنوات اللي ما تناسب الأطفال ريحتني جداً مع أهلي بالبيت 🙏",
          time: "11:20 م",
        },
        {
          sender: "support",
          text: "أهلاً بك أخ عبدالمجيد، سعداء جداً بتجربتك وشهادتك تاج على رؤوسنا 💚 خصوصية العائلة وجودة البث أولويتنا المطلقة في المملكة. بأي وقت فريقنا في خدمتك!",
          time: "11:23 م",
        },
      ],
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-charcoal-900/40">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-whatsapp/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-whatsapp/10 border border-whatsapp/30 text-xs sm:text-sm font-bold text-whatsapp">
            <MessageSquare className="w-4 h-4" />
            <span>تجارب واقعية وموثقة عبر الواتساب</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-silver-100 tracking-tight">
            ماذا يقول عملاؤنا في المملكة؟
          </h2>
          <p className="text-base sm:text-lg text-silver-400 leading-relaxed">
            محادثات حقيقية وصادقة تعكس مستوى الثقة والالتزام والسرعة التي نقدمها لكل مشترك.
          </p>
        </div>

        {/* WhatsApp Styled Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-[#0B141A] border border-white/10 shadow-2xl flex flex-col justify-between hover:border-whatsapp/40 transition-all duration-300"
            >
              {/* WhatsApp Chat Top Header Bar */}
              <div className="bg-[#202C33] px-4 py-3 flex items-center justify-between border-b border-[#2A3942]">
                <div className="flex items-center gap-3">
                  {/* Contact Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}
                  >
                    {item.author.charAt(0)}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{item.author}</span>
                      <span className="text-[11px] text-[#8696A0] font-normal">
                        ({item.location})
                      </span>
                    </div>
                    <div className="text-[10px] text-whatsapp font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-whatsapp" />
                      <span>متصل الآن</span>
                    </div>
                  </div>
                </div>

                {/* Header Icons Mockup */}
                <div className="flex items-center gap-3 text-[#8696A0]">
                  <Video className="w-4 h-4" />
                  <Phone className="w-4 h-4" />
                  <MoreVertical className="w-4 h-4" />
                </div>
              </div>

              {/* Chat Messages Body Area */}
              <div className="p-4 sm:p-5 space-y-4 bg-[#0B141A] min-h-[260px] flex flex-col justify-center relative">
                
                {/* Subtle WhatsApp wallpaper overlay effect */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#25D366_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Customer Message Bubble (Inbound) */}
                <div className="relative z-10 flex flex-col items-start max-w-[92%] mr-auto">
                  <div className="rounded-2xl rounded-tr-none px-4 py-3 bg-[#202C33] text-silver-100 text-xs sm:text-sm leading-relaxed shadow-sm">
                    {item.messages[0].text}
                    <div className="text-[10px] text-[#8696A0] mt-1.5 text-left">
                      {item.messages[0].time}
                    </div>
                  </div>
                </div>

                {/* Support Response Bubble (Outbound) */}
                <div className="relative z-10 flex flex-col items-end max-w-[92%] ml-auto">
                  <div className="rounded-2xl rounded-tl-none px-4 py-3 bg-[#005C4B] text-white text-xs sm:text-sm leading-relaxed shadow-md">
                    {item.messages[1].text}
                    <div className="flex items-center justify-end gap-1 text-[10px] text-[#8696A0] mt-1.5">
                      <span>{item.messages[1].time}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Card Footer with Package Tag & Rating */}
              <div className="px-4 py-3 bg-[#111B21] border-t border-[#2A3942] flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-gold-300">
                  {item.plan}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Community Trust Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-silver-300">
            <ShieldCheck className="w-5 h-5 text-whatsapp" />
            <span>انضم لأكثر من 14,000+ مشترك نشط في مختلف مدن ومناطق المملكة 🇸🇦</span>
          </div>
        </div>

      </div>
    </section>
  );
}