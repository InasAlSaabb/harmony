import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '@/components/shared/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function GetInvolved() {
  const { t, isRTL } = useLanguage();

  const ways = [
    {
      number: '01',
      title: t('Fund or Partner', 'تمويل أو شراكة'),
      who: t('For NGOs, Foundations & Donors', 'للمنظمات غير الحكومية والمؤسسات والمانحين'),
      description: t(
        'Support one of the few remaining safe spaces for arts and culture in post-conflict Homs and Hama. Your partnership directly funds programs that have reached over 10,000 people and produced documented, measurable peacebuilding impact.',
        'ادعم إحدى المساحات الآمنة القليلة المتبقية للفنون والثقافة في حمص وحماة ما بعد النزاع. شراكتك تموّل مباشرة برامج وصلت إلى أكثر من 10,000 شخص وأنتجت تأثيراً موثقاً وقابلاً للقياس في بناء السلام.'
      ),
      items: [
        t('Direct impact on post-conflict communities', 'تأثير مباشر على المجتمعات ما بعد النزاع'),
        t('Transparent reporting and regular updates', 'تقارير شفافة وتحديثات منتظمة'),
        t('Co-design and co-creation opportunities', 'فرص التصميم المشترك والإبداع المشترك'),
        t('Media visibility for your organization', 'ظهور إعلامي لمنظمتك'),
      ],
      cta: t('Discuss Partnership', 'ناقش الشراكة'),
      href: 'Contact',
      color: '#6b4f7a',
    },
    {
      number: '02',
      title: t('Volunteer', 'تطوع'),
      who: t('For Individuals with Skills to Share', 'للأفراد ذوي المهارات لمشاركتها'),
      description: t(
        'Harmony is built on the dedication of volunteers. We welcome people with skills in arts, facilitation, documentation, translation, or community organizing who share our vision of using culture for peacebuilding.',
        'يُبنى هارموني على تفاني المتطوعين. نرحب بالأشخاص ذوي المهارات في الفنون والتيسير والتوثيق والترجمة أو التنظيم المجتمعي ممن يشاركوننا رؤيتنا لاستخدام الثقافة في بناء السلام.'
      ),
      areas: [
        t('Arts facilitation & instruction', 'تيسير الفنون والتعليم'),
        t('Photography & videography', 'التصوير الفوتوغرافي والفيديو'),
        t('Translation (English ↔ Arabic)', 'الترجمة (إنجليزي ↔ عربي)'),
        t('Event documentation', 'توثيق الفعاليات'),
        t('Community engagement', 'المشاركة المجتمعية'),
      ],
      cta: t('Apply to Volunteer', 'قدم للتطوع'),
      href: 'Contact',
      color: '#c9a84c',
    },
    {
      number: '03',
      title: t('Participate', 'شارك'),
      who: t('For Community Members in Homs & Hama', 'لأبناء المجتمع في حمص وحماة'),
      description: t(
        'Our centers in Homs and Hama are open to everyone — no prior arts experience required. Join a club, attend a workshop, or simply come and be part of the community. All are welcome.',
        'مراكزنا في حمص وحماة مفتوحة للجميع — لا حاجة لخبرة فنية مسبقة. انضم لنادٍ أو حضر ورشة عمل أو ببساطة تعال وكن جزءاً من المجتمع. الجميع مرحب به.'
      ),
      activities: [
        { name: t('English Club', 'نادي اللغة الإنجليزية'), note: t('Weekly · Homs & Hama', 'أسبوعي · حمص وحماة') },
        { name: t('Cinema Club', 'نادي السينما'), note: t('Monthly screenings', 'عروض شهرية') },
        { name: t('Book Club', 'نادي الكتاب'), note: t('Bi-weekly · Homs', 'كل أسبوعين · حمص') },
        { name: t('Study Zone', 'منطقة الدراسة'), note: t('Daily · Hama Center', 'يومي · مركز حماة') },
      ],
      cta: t('Join an Activity', 'انضم لنشاط'),
      href: 'Contact',
      color: '#4a3456',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 harmony-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-yellow-400">
              {t('Get Involved', 'شارك معنا')}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {t('Be Part of the Change', 'كن جزءاً من التغيير')}
            </h1>
            <p className="mt-4 text-xl text-white/70 font-light max-w-xl">
              {t(
                'Three ways to join Harmony\'s mission — as a funder, volunteer, or community participant.',
                'ثلاث طرق للانضمام إلى مهمة هارموني — كممول أو متطوع أو مشارك مجتمعي.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three ways */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Number + Title */}
                <div className="rounded-2xl p-10" style={{ backgroundColor: way.color }}>
                  <span className="text-6xl font-black text-white/20">{way.number}</span>
                  <h2 className="text-3xl font-black text-white mt-2">{way.title}</h2>
                  <p className="text-white/70 text-sm mt-2 font-medium">{way.who}</p>
                  <p className="text-white/80 mt-4 leading-relaxed">{way.description}</p>
                  <Link to={createPageUrl(way.href)}>
                    <button className="mt-8 flex items-center gap-2 px-6 py-3 rounded-full bg-white font-semibold text-sm hover:bg-white/90 transition-colors" style={{ color: way.color }}>
                      {way.cta}
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  </Link>
                </div>

                {/* Details */}
                <div className="space-y-5 pt-4">
                  {way.items && (
                    <div>
                      <p className="text-sm font-bold text-gray-700 mb-4">
                        {t('What partners receive:', 'ما يحصل عليه الشركاء:')}
                      </p>
                      <ul className="space-y-3">
                        {way.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                            <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: way.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {way.areas && (
                    <div>
                      <p className="text-sm font-bold text-gray-700 mb-4">
                        {t('Volunteer areas:', 'مجالات التطوع:')}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {way.areas.map((area, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{ backgroundColor: `${way.color}15`, color: way.color }}
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {way.activities && (
                    <div>
                      <p className="text-sm font-bold text-gray-700 mb-4">
                        {t('Current activities:', 'الأنشطة الحالية:')}
                      </p>
                      <div className="space-y-3">
                        {way.activities.map((activity, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-4 rounded-xl"
                            style={{ backgroundColor: '#f7f4ef' }}
                          >
                            <span className="font-semibold text-gray-900 text-sm">{activity.name}</span>
                            <span className="text-gray-500 text-xs">{activity.note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24" style={{ backgroundColor: '#f7f4ef' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {t('Ready to Get Started?', 'مستعد للبدء؟')}
          </h2>
          <p className="mt-4 text-gray-500">
            {t(
              'Contact us to discuss how you can contribute to Harmony\'s mission. Every form of engagement matters.',
              'تواصل معنا لمناقشة كيفية مساهمتك في مهمة هارموني. كل شكل من أشكال المشاركة مهم.'
            )}
          </p>
          <Link to={createPageUrl('Contact')} className="inline-block mt-8">
            <button className="px-10 py-4 rounded-full text-white font-semibold harmony-gradient hover:opacity-90 transition-opacity shadow-lg">
              {t('Contact Us', 'تواصل معنا')}
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}