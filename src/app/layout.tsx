"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import { usePathname } from "next/navigation";
import ScrollToTopButton from "./components/scrollbtn/page";
import WhatsAppButton from "./components/whatsup/page";
import { ReactNode } from "react";
import AuthProvider from "../context/AuthProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <head>
        {/* Primary Meta */}
        <title>Duranta Online Ltd. | Reliable Internet & IT Solutions</title>
        <meta
          name="description"
          content="Duranta Online Ltd. provides reliable internet services and IT solutions with a focus on performance, security, and customer satisfaction."
        />
        <meta
          name="keywords"
          content="Duranta, ISP Bangladesh, Internet Service Provider, IT Solutions, Broadband"
        />
        <meta name="author" content="Mehedi Hasan, Md Hossahin" />

        {/* Open Graph */}
        <meta property="og:title" content="Duranta Online Ltd." />
        <meta
          property="og:description"
          content="Reliable internet and IT solutions powered by Duranta Online Ltd."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://duranta-online.vercel.app" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Duranta Online Ltd." />
        <meta
          name="twitter:description"
          content="Reliable internet and IT solutions with professional support."
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {!isDashboard && <Navbar />}

          <main
            className={isDashboard ? "relative z-10" : "pt-22 relative z-10"}
          >
            {children}
          </main>

          {!isDashboard && <Footer />}

          <ScrollToTopButton />
          <WhatsAppButton />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
