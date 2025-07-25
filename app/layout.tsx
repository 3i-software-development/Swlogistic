import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/Redux/StoreProvider";
import NavTop from "@/components/Header/NavTop";
import BottomNav from "@/components/Header/BottomNav";

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'], // hoặc thêm '500' nếu muốn
  display: 'swap',
})

const siteName = "KTO Logistics";
const siteUrl = "https://ktologistics.vn/";
const description =
  "KTO Logistics - Professional logistics solutions with global reach. We provide comprehensive transportation and logistics services.";
const keywords = [
  "logistics",
  "transportation",
  "freight",
  "shipping",
  "cargo",
  "supply chain",
  "professional logistics",
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: description,
  keywords: keywords.join(", "),

  openGraph: {
    title: siteName,
    description: description,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: "/images/paris-logistics-og.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: description,
    images: [
      {
        url: "/images/paris-logistics-og.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  authors: [
    {
      name: "KTO Logistics",
      url: siteUrl,
    },
  ],
  publisher: siteName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${robotoCondensed.className} antialiased`}
      >
        <StoreProvider>
          <NavTop />
          {children}
          <BottomNav />
        </StoreProvider>
      </body>
    </html>
  );
}
