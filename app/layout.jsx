import { FirebaseAnalytics } from "@/components/FirebaseAnalytics";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const siteUrl = "https://camsecure.store";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "CamSecure | Видеонаблюдение за дом и бизнес — консултация и монтаж",
    template: "%s | CamSecure",
  },
  description:
    "Професионално видеонаблюдение, консултация, проектиране и монтаж на камери за дом и офис в регион Варна, Добрич, Балчик, Генерал Тошево, Обзор и Несебър. Достъп от телефон, висока резолюция и сигурност 24/7.",
  keywords: [
    "видеонаблюдение",
    "камери за дома",
    "CCTV България",
    "монтаж камери",
    "сигурност",
    "IP камери",
    "видеонаблюдение бизнес",
    "консултация видеонаблюдение",
    "видеонаблюдение Варна",
    "видеонаблюдение Добрич",
    "видеонаблюдение Балчик",
    "видеонаблюдение Генерал Тошево",
    "видеонаблюдение Обзор",
    "видеонаблюдение Несебър",
  ],
  authors: [{ name: "CamSecure" }],
  creator: "CamSecure",
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: siteUrl,
    siteName: "CamSecure",
    title: "CamSecure — Видеонаблюдение за дом и бизнес",
    description:
      "Консултация, инсталация и поддръжка на модерни системи за видеонаблюдение за Варна, Добрич, Балчик, Генерал Тошево, Обзор и Несебър.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CamSecure — Видеонаблюдение за дом и бизнес",
    description:
      "Консултация, монтаж и поддръжка на системи за видеонаблюдение.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "BxT7eKhR61eKjde06s8jHFq5ctnaZ6ZQSGuYmbC57HQ",
  },
};

export const viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CamSecure",
  description:
    "Видеонаблюдение, консултация и монтаж на камери за дом и бизнес.",
  url: siteUrl,
  areaServed: { "@type": "Country", name: "България" },
  serviceType: [
    "Видеонаблюдение",
    "Монтаж на камери",
    "Консултация сигурност",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bg"
      className={`${dmSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
