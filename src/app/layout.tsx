'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import { usePathname } from 'next/navigation';
import ScrollToTopButton from './components/scrollbtn/page';
import WhatsAppButton from './components/whatsup/page';
import { ReactNode } from 'react';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // Dashboard route detection
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navbar only for non-dashboard routes */}
        {!isDashboard && <Navbar />}

        {/* Main padding: non-dashboard routes pt-22, dashboard none */}
        <main className={isDashboard ? 'relative z-10' : 'pt-22 relative z-10'}>
          {children}
        </main>

        {/* Footer only for non-dashboard routes */}
        {!isDashboard && <Footer />}

        <ScrollToTopButton />
        <WhatsAppButton />
      </body>
    </html>
  );
};

export default RootLayout;
