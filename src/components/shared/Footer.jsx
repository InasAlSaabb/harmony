import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from './LanguageContext';
import { MapPin, Mail, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: 'About', label: t('About Us', 'من نحن') },
    { href: 'Programs', label: t('Our Work', 'أعمالنا') },
    { href: 'Stories', label: t('Impact Stories', 'قصص التأثير') },
    { href: 'GetInvolved', label: t('Get Involved', 'شارك معنا') },
    { href: 'Contact', label: t('Contact', 'تواصل') },
  ];

  const programs = [
    { label: t('Oboor Project (2021)', 'مشروع عبور (2021)') },
    { label: t('Beyond Colors Series (2021–2023)', 'ما وراء الألوان (2021–2023)') },
    { label: t('Revival Project (2024)', 'مشروع إحياء (2024)') },
    { label: t('Community Clubs', 'النوادي المجتمعية') },
    { label: t('Hama Center', 'مركز حماة') },
  ];

  return (
    <footer style={{ backgroundColor: '#1a1118' }} className="text-white">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs text-center sm:text-left">
            {t(
              'Under the patronage of the Syriac Orthodox Archbishopric of Homs, Hama and Tartous',
              'تحت رعاية مطرانية السريان الأرثوذكس في حمص وحماة وطرطوس'
            )}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.harmonyforum.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              harmonyforum.org
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full harmony-gradient flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'serif' }}>ﻫ</span>
              </div>
              <div>
                <h3 className="font-bold text-base text-white">{t('Harmony Forum', 'ملتقى هارموني')}</h3>
                <p className="text-white/40 text-xs">{t('Cultural Forum · Syria', 'الملتقى الثقافي · سوريا')}</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {t(
                'Using art and culture as tools for peacebuilding and social cohesion in post-conflict Syria since 2018.',
                'نستخدم الفن والثقافة كأدوات لبناء السلام والتماسك الاجتماعي في سوريا منذ 2018.'
              )}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/harmonyforum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/harmonyforum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm text-white/80 mb-5 uppercase tracking-wider">
              {t('Navigation', 'التنقل')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={createPageUrl(link.href)}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm text-white/80 mb-5 uppercase tracking-wider">
              {t('Programs', 'البرامج')}
            </h4>
            <ul className="space-y-3">
              {programs.map((p, i) => (
                <li key={i}>
                  <span className="text-white/50 text-sm">{p.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm text-white/80 mb-5 uppercase tracking-wider">
              {t('Contact', 'التواصل')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">{t('Homs Center', 'مركز حمص')}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t('Homs, Syria', 'حمص، سوريا')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm font-medium">{t('Hama Center', 'مركز حماة')}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t('Hama, Syria', 'حماة، سوريا')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@harmonyforum.org"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  info@harmonyforum.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2024 Harmony Cultural Forum. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
          </p>
          <p className="text-white/30 text-xs">
            {t('Homs · Hama · Syria', 'حمص · حماة · سوريا')}
          </p>
        </div>
      </div>
    </footer>
  );
}