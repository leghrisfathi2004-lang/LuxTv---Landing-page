import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luxtv.sa"),
  title: "LuxTV | اشتراك الترفيه الملكي في السعودية - بث مباشر 4K بدون انقطاع",
  description: "استمتع بمتابعة أضخم البطولات الرياضية العالمية وأحدث الأفلام والمسلسلات بجودة 4K Ultra HD مع سيرفرات فائقة السرعة ودعم فني سعودي متواصل 24/7.",
  keywords: [
    "LuxTV",
    "اشتراك IPTV السعودية",
    "بث مباشر بدون تقطيع",
    "اشتراك قنوات رياضية",
    "مباريات اليوم 4K",
    "سيرفرات IPTV سريعة",
    "تفعيل فوري واتساب",
  ],
  authors: [{ name: "LuxTV Premium Entertainment" }],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "LuxTV | اشتراك الترفيه الملكي في السعودية",
    description: "بث مباشر بدقة 4K بدون تقطيع لجميع الفعاليات الرياضية والأفلام والمسلسلات مع تفعيل فوري.",
    url: "https://luxtv.sa",
    siteName: "LuxTV",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "LuxTV Premium Entertainment",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxTV | تجربة ترفيهية ملكية بدقة 4K",
    description: "سيرفرات فائقة السرعة وثبات حقيقي للبث المباشر بدون تقطيع. تفعيل فوري عبر الواتساب.",
    images: ["/logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="bg-charcoal-950 text-silver-100 antialiased font-cairo selection:bg-gold-500/20 selection:text-gold-300">
        {children}
      </body>
    </html>
  );
}