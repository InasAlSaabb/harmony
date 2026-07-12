import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from './LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t, language, toggleLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: 'Home', label: t('Home', 'الرئيسية') },
    { href: 'About', label: t('About Us', 'من نحن') },
    { href: 'Programs', label: t('Our Work', 'أعمالنا') },
    { href: 'Stories', label: t('Stories', 'القصص') },
    { href: 'GetInvolved', label: t('Get Involved', 'شارك معنا') },
    { href: 'Contact', label: t('Contact', 'تواصل') },
  ];

  const isActive = (href) => location.pathname.includes(href.toLowerCase());

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-md shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full harmony-gradient flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-base md:text-lg" style={{ fontFamily: 'serif' }}>ﻫ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base md:text-lg font-bold text-gray-900 tracking-tight leading-tight">
                {t('Harmony Forum', 'ملتقى هارموني')}
              </h1>
              <p className="text-[11px] text-purple-600 font-medium -mt-0.5 tracking-wide uppercase">
                {t('Cultural Forum · Homs, Syria', 'الملتقى الثقافي · حمص، سوريا')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={createPageUrl(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                  isActive(item.href)
                    ? 'text-purple-700 bg-purple-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-purple-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-semibold">
                {language === 'en' ? 'AR' : 'EN'}
              </span>
            </button>

            <Link to={createPageUrl('Contact')}>
              <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white harmony-gradient hover:opacity-90 transition-opacity shadow-sm">
                {t('Partner With Us', 'كن شريكاً')}
              </button>
            </Link>

            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={createPageUrl(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to={createPageUrl('Contact')}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 harmony-gradient text-white rounded-xl text-center text-sm font-semibold mt-2"
              >
                {t('Partner With Us', 'كن شريكاً')}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}