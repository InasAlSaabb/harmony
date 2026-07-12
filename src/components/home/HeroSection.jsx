import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../shared/LanguageContext';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { t, isRTL } = useLanguage();

  const photos = [
    'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=500&q=80&fit=crop',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&q=80&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&q=80&fit=crop',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&q=80&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&q=80&fit=crop',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=350&q=80&fit=crop',
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#f7f4ef' }}>
      {/* Background mosaic of photos - like actual site */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-3 h-full opacity-20">
          {photos.map((photo, i) => (
            <div key={i} className="overflow-hidden">
              <img src={photo} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(107,79,122,0.85) 0%, rgba(74,52,86,0.92) 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Under patronage badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="text-yellow-300 text-xs font-medium">
                {t(
                  'Under the patronage of the Syriac Orthodox Archbishopric',
                  'تحت رعاية مطرانية السريان الأرثوذكس'
                )}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              HARMONY
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 font-light mb-4">
              {t(
                'We Work on Peace-Building Through Art and Culture',
                'نعمل على بناء السلام من خلال الفن والثقافة'
              )}
            </p>

            <p className="text-white/50 text-sm mb-12 max-w-xl mx-auto leading-relaxed">
              {t(
                'Homs, Syria · Since 2018 · Peacebuilding · Social Cohesion · Youth Empowerment',
                'حمص، سوريا · منذ 2018 · بناء السلام · التماسك الاجتماعي · تمكين الشباب'
              )}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to={createPageUrl('About')}>
                <button className="px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105" style={{ backgroundColor: '#c9a84c' }}>
                  {t('Who We Are', 'من نحن')}
                </button>
              </Link>
              <Link to={createPageUrl('Programs')}>
                <button className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
                  <Play className="w-4 h-4 fill-white" />
                  {t('Our Work', 'أعمالنا')}
                </button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <button className="px-8 py-3.5 rounded-full text-sm font-semibold border border-yellow-400/50 text-yellow-300 hover:bg-yellow-400/10 transition-all">
                  {t('Partner With Us', 'كن شريكاً')}
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { number: '2018', label: t('Founded', 'التأسيس') },
              { number: '10,000+', label: t('Exhibition Visitors', 'زوار المعارض') },
              { number: '250+', label: t('Artworks Created', 'عمل فني') },
              { number: '2', label: t('Centers: Homs & Hama', 'مركزان: حمص وحماة') },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-yellow-300">{stat.number}</p>
                <p className="text-white/50 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-white/30 mx-auto"
        />
      </div>
    </section>
  );
}