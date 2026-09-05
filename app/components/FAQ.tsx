"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "ما هي طرق الدفع المتاحة داخل المملكة العربية السعودية؟",
      a: "نوفر أسهل وأأمن طرق الدفع المتوافقة في المملكة، بما في ذلك التحويل البنكي المباشر (الراجحي، الأهلي، الإنماء، وغيرها)، وبطاقات مدى (Mada)، وخدمة Apple Pay، والبطاقات الائتمانية (Visa / Mastercard) عبر روابط دفع رسمية وموثوقة.",
    },
    {
      q: "كم يستغرق تفعيل الاشتراك بعد إتمام الطلب؟",
      a: "التفعيل يتم بشكل فوري وآلي! بمجرد تأكيد طلبك عبر الواتساب، يُرسل لك فريق الدعم بيانات الاشتراك (اليوزر والباسورد ورابط السيرفر وكود التفعيل) في أقل من 3 دقائق مع خطوات التشغيل الواضحة لجهازك.",
    },
    {
      q: "هل يعمل الاشتراك على أكثر من جهاز؟",
      a: "نعم، يمكنك تثبيت تطبيق المشاهدة وبيانات اشتراكك على كافة أجهزتك (الشاشة الذكية، الجوال، التابلت، اللابتوب). التشغيل النشط يكون لجهاز واحد في الوقت ذاته، كما يتوفر خيار باقات الأجهزة المتعددة بالتواصل مع خدمة العملاء.",
    },
    {
      q: "ما هي سرعة الإنترنت المطلوبة للبث بدقة 4K بدون تقطيع؟",
      a: "يكفي اتصال إنترنت مستقر بسرعة 15 إلى 25 ميغابت بالثانية لمشاهدة قنوات 4K و Ultra HD بسلاسة. بالإضافة إلى ذلك، نوفر جودات متعددة تلقائية (FHD, HD, SD) تعمل بكفاءة عالية على شبكات الجوال 4G و 5G.",
    },
    {
      q: "هل يمكنني طلب باقة عائلية وحجب أي قنوات غير مناسبة؟",
      a: "بالتأكيد! نحرص في LuxTV على الخصوصية والقيم العائلية، ويمكنك عند استلام الاشتراك طلب فلترة كاملة لحجب أو إخفاء أي باقات أو قنوات لا تناسب أطفالك أو رغبتك العائلية بسهولة تامة وبشكل مجاني.",
    },
    {
      q: "ماذا لو واجهتني أي مشكلة تقنية أثناء تشغيل القنوات؟",
      a: "فريق الدعم الفني السعودي متواجد على مدار 24 ساعة يومياً عبر الواتساب لمساعدتك في ضبط التطبيق، حل أي استفسار، وتحديث الروابط فوراً لضمان تجربة مشاهدة مريحة وممتعة طوال فترة اشتراكك.",
    },
  ];

  const whatsappUrl =
    "https://wa.me/966500000000?text=" +
    encodeURIComponent("السلام عليكم، لدي استفسار إضافي بخصوص اشتراك LuxTV");

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold-500/30 text-xs sm:text-sm font-bold text-gold-400">
            <HelpCircle className="w-4 h-4" />
            <span>الأسئلة الشائعة والاستفسارات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-silver-100 tracking-tight">
            كل ما تود معرفته عن LuxTV
          </h2>
          <p className="text-base sm:text-lg text-silver-400">
            إجابات واضحة وشفافة على أبرز الأسئلة المتكررة من عملائنا في السعودية.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-card border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-right gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-silver-100 hover:text-gold-300 transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-gold-500/20 text-gold-300" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-silver-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-6 rounded-2xl glass-card text-center border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-base font-bold text-white mb-1">
              لديك سؤال آخر لم تجد إجابته هنا؟
            </h4>
            <p className="text-xs sm:text-sm text-silver-400">
              فريقنا متواجد ومستعد لمساعدتك والإجابة على استفساراتك فوراً.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full btn-whatsapp text-sm font-bold shadow-whatsapp-glow"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>اسألنا عبر الواتساب</span>
          </a>
        </div>

      </div>
    </section>
  );
}