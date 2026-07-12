import React from 'react';
import { LanguageProvider } from '@/components/shared/LanguageContext';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default function Layout({ children, currentPageName }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

          :root {
            --harmony-purple: #6b4f7a;
            --harmony-purple-light: #8b6a9a;
            --harmony-purple-dark: #4a3456;
            --harmony-gold: #c9a84c;
            --harmony-gold-light: #e8c97a;
            --harmony-cream: #f7f4ef;
            --harmony-dark: #1a1118;
          }

          html { scroll-behavior: smooth; }

          body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background-color: #fff;
          }

          [dir="rtl"] {
            font-family: 'Noto Sans Arabic', 'Inter', system-ui, sans-serif;
          }

          .harmony-gradient {
            background: linear-gradient(135deg, #4a3456 0%, #6b4f7a 50%, #8b6a9a 100%);
          }

          .harmony-text-gradient {
            background: linear-gradient(135deg, #c9a84c, #e8c97a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .section-divider {
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #c9a84c, #6b4f7a);
            border-radius: 2px;
          }
        `}</style>

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}