import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../shared/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProgramsPreview() {
  const { t, isRTL } = useLanguage();

  const programs = [
    {
      year: '2021',
      title: t('Oboor', 'عبور'),
      subtitle: t('Crossing / Transition', 'العبور'),
      description: t(
        '75 young people guided by 15 professional artists produced 150 artworks reflecting on a decade of war. A 7-day public exhibition at Zahrawi Palace attracted over 5,000 visitors.',
        '75 شاباً بإرشاد 15 فناناً محترفاً أنتجوا 150 عملاً فنياً يعكس عقداً من الحرب. استقطب معرض عام لمدة 7 أيام في قصر الزهراوي أكثر من 5000 زائر.'
      ),
      stats: [
        { value: '75', label: t('Participants', 'مشارك') },
        { value: '150', label: t('Artworks', 'عمل فني') },
        { value: '5,000+', label: t('Visitors', 'زائر') },
      ],
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=700&q=80&fit=crop',
      color: '#6b4f7a',
    },
    {
      year: '2021–2023',
      title: t('Beyond Colors', 'ما وراء الألوان'),
      subtitle: t('3-Phase Program', 'برنامج من 3 مراحل'),
      description: t(
        'A multi-phase program culminating in a 74-minute documentary film. 150 participants, 80 artworks, theatre, music, and 10 real stories collected from Homs residents, attracting over 5,000 visitors.',
        'برنامج متعدد المراحل يتوج بفيلم وثائقي بطول 74 دقيقة. 150 مشاركاً، 80 عملاً فنياً، مسرح وموسيقى و10 قصص حقيقية من سكان حمص، استقطب أكثر من 5000 زائر.'
      ),
      stats: [
        { value: '150', label: t('Participants', 'مشارك') },
        { value: '74 min', label: t('Documentary', 'الوثائقي') },
        { value: '10', label: t('True Stories', 'قصص حقيقية') },
      ],
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=700&q=80&fit=crop',
      color: '#4a3456',
    },
    {
      year: '2024',
      title: t('Revival', 'إحياء'),
      subtitle: t('Ongoing Project', 'مشروع قائم'),
      description: t(
        'Exploring and celebrating the city of Homs — its people, habitats, cultural heritage, and social identity through three axes: Urban Landscape, Cultural Context, and Lifestyle.',
        'استكشاف والاحتفاء بمدينة حمص — سكانها وموائلها وتراثها الثقافي وهويتها الاجتماعية من خلال ثلاثة محاور: المشهد العمراني والسياق الثقافي ونمط الحياة.'
      ),
      stats: [
        { value: '3', label: t('Thematic Axes', 'محاور موضوعية') },
        { value: '2024', label: t('Ongoing', 'قيد التنفيذ') },
        { value: 'Homs', label: t('Focus City', 'المدينة المحورية') },
      ],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=700&q=80&fit=crop',
      color: '#8b6a9a',
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#f7f4ef' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
              {t('Peace Building Program', 'برنامج بناء السلام')}
            </span>
            <div className="section-divider mt-3 mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t('Our Long-Term Programs', 'برامجنا طويلة الأمد')}
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl">
              {t(
                'Each program builds on the last, creating a sustained ecosystem for peacebuilding, healing, and cultural revival.',
                'كل برنامج يبني على السابق، خالقاً نظاماً بيئياً مستداماً لبناء السلام والشفاء والإحياء الثقافي.'
              )}
            </p>
          </div>
          <Link to={createPageUrl('Programs')}>
            <button className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap" style={{ color: '#6b4f7a' }}>
              {t('View All Work', 'عرض جميع الأعمال')}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </Link>
        </div>

        {/* Programs */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${program.color}dd 0%, transparent 50%)` }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs text-white/70 font-medium">{program.year}</span>
                  <h3 className="text-2xl font-black text-white leading-tight">{program.title}</h3>
                  <p className="text-white/70 text-xs">{program.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {program.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                  {program.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="font-bold text-gray-900 text-lg leading-tight">{stat.value}</p>
                      <p className="text-gray-400 text-xs mt-0.5 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}