import React from 'react';
import { useLanguage } from '../shared/LanguageContext';
import { MapPin, BookOpen, Film, Globe, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CentersSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
            {t('Our Centers', 'مراكزنا')}
          </span>
          <div className="section-divider mt-3 mb-4 mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('Two Cities, One Vision', 'مدينتان، رؤية واحدة')}
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            {t(
              'Safe, inclusive spaces rooted in their local communities — daily-open for creativity, learning, and cultural exchange.',
              'مساحات آمنة وشاملة متجذرة في مجتمعاتها المحلية — مفتوحة يومياً للإبداع والتعلم والتبادل الثقافي.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Homs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden"
          >
            <div className="aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=520&q=80&fit=crop"
                alt="Homs Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,52,86,0.92) 0%, rgba(74,52,86,0.3) 50%, transparent 100%)' }} />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-medium">{t('Founded 2018', 'تأسست 2018')}</span>
                </div>
                <h3 className="text-3xl font-black text-white">{t('Homs Center', 'مركز حمص')}</h3>
                <p className="text-white/70 text-sm mt-2 leading-relaxed max-w-sm">
                  {t(
                    'A 1906-year-old Syrian house restored by volunteers. The founding space — where it all began.',
                    'منزل سوري من عام 1906 أُعيد ترميمه بجهود المتطوعين. المساحة التأسيسية — حيث بدأ كل شيء.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    { icon: Globe, label: t('English Club', 'نادي اللغة الإنجليزية') },
                    { icon: Film, label: t('Cinema Club', 'نادي السينما') },
                    { icon: BookOpen, label: t('Book Club', 'نادي الكتاب') },
                  ].map((club, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white font-medium" style={{ backgroundColor: 'rgba(201,168,76,0.3)', border: '1px solid rgba(201,168,76,0.4)' }}>
                      <club.icon className="w-3 h-3" />
                      {club.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hama */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-2xl overflow-hidden"
          >
            <div className="aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?w=700&h=520&q=80&fit=crop"
                alt="Hama Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,52,86,0.92) 0%, rgba(74,52,86,0.3) 50%, transparent 100%)' }} />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-medium">{t('Expanded 2023', 'توسع 2023')}</span>
                </div>
                <h3 className="text-3xl font-black text-white">{t('Hama Center', 'مركز حماة')}</h3>
                <p className="text-white/70 text-sm mt-2 leading-relaxed max-w-sm">
                  {t(
                    'A restored historic home with a local team from the community. Includes a dedicated study zone.',
                    'منزل تاريخي مُرمم بفريق محلي من المجتمع. يشمل منطقة دراسة مخصصة.'
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    { icon: GraduationCap, label: t('Study Zone', 'منطقة دراسة') },
                    { icon: Globe, label: t('Language Programs', 'برامج لغات') },
                    { icon: Film, label: t('Screenings', 'عروض') },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white font-medium" style={{ backgroundColor: 'rgba(201,168,76,0.3)', border: '1px solid rgba(201,168,76,0.4)' }}>
                      <item.icon className="w-3 h-3" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community stat banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 text-center text-white harmony-gradient"
        >
          <p className="text-4xl font-black mb-2">100+</p>
          <p className="text-white/80 text-lg">
            {t(
              'Active participants across all community clubs in Homs and Hama',
              'مشارك نشط في جميع النوادي المجتمعية في حمص وحماة'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}