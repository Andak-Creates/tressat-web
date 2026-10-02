import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tressat.com"),
  title: "TressAt - Book Top Hair, Barber & Beauty Professionals Near You",
  description:
    "TressAt is the premier marketplace for booking vetted barbers, braiders, nail technicians, and hair stylists. Real-time availability, instant voice/chat, and secure Paystack checkout.",
  keywords: [
    "TressAt",
    "haircut booking",
    "barber app",
    "braids appointment",
    "nail tech near me",
    "beauty salon booking",
    "hair stylist app",
    "grooming professionals",
  ],
  authors: [{ name: "TressAt by Vwindi Technologies" }],
  openGraph: {
    title: "TressAt - Look Your Best. Anywhere, Anytime.",
    description:
      "Discover top-rated barbers, braiders, and beauty professionals. Seamless discovery, in-app chat, and verified reviews.",
    url: "https://tressat.com",
    siteName: "TressAt",
    images: [
      {
        url: "/tress-splash.png",
        width: 1200,
        height: 630,
        alt: "TressAt App Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TressAt - Book Top Beauty & Grooming Artists",
    description:
      "Discover, chat, and book top-rated beauty and grooming professionals nearby.",
    images: ["/tress-splash.png"],
  },
  icons: {
    icon: "/tressatLogo.png",
    shortcut: "/tressatLogo.png",
    apple: "/tressatLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <div className="flex-1 pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
