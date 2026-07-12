import React from 'react';
import { useLanguage } from '../shared/LanguageContext';
import { motion } from 'framer-motion';

export default function MissionSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      number: '01',
      title: t('Peacebuilding Through Art', 'بناء السلام من خلال الفن'),
      description: t(
        'We use cultural expression to translate conflict experience into shared human narratives, creating neutral spaces where difficult histories can be explored without reinforcing divisions.',
        'نستخدم التعبير الثقافي لترجمة تجربة النزاع إلى روايات إنسانية مشتركة، خالقين مساحات محايدة حيث يمكن استكشاف التواريخ الصعبة دون تعزيز الانقسامات.'
      ),
    },
    {
      number: '02',
      title: t('Youth Empowerment', 'تمكين الشباب'),
      description: t(
        'We intentionally equip young people with creative and interpersonal skills, helping them become resilient leaders and giving them a platform to express identities beyond conflict and trauma.',
        'نجهز الشباب عمداً بمهارات إبداعية وشخصية، نساعدهم على أن يصبحوا قادة متحملين، ونوفر لهم منصة للتعبير عن هوياتهم بعيداً عن النزاع والصدمة.'
      ),
    },
    {
      number: '03',
      title: t('Memory & Documentation', 'الذاكرة والتوثيق'),
      description: t(
        'Our projects document lived experiences of war and everyday life in Homs, serving both historical memory preservation and cultural continuity for future generations.',
        'توثّق مشاريعنا التجارب المعاشة للحرب والحياة اليومية في حمص، خدمةً لحفظ الذاكرة التاريخية والاستمرارية الثقافية للأجيال القادمة.'
      ),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
              {t('Our Mission', 'مهمتنا')}
            </span>
            <div className="section-divider mt-3 mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {t(
                'A Cohesive Humane Society That Recognizes Everyone\'s Value',
                'مجتمع إنساني متماسك يعترف بقيمة الجميع'
              )}
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              {t(
                'Founded in Homs, Syria in 2018, Harmony Cultural Forum is a voluntary, developmental, and humanitarian initiative operating under the patronage of the Syriac Orthodox Archbishopric. We believe art and culture can bridge divides and foster social cohesion in post-conflict communities.',
                'تأسس ملتقى هارموني الثقافي في حمص، سوريا عام 2018، وهو مبادرة طوعية وتنموية وإنسانية تعمل تحت رعاية مطرانية السريان الأرثوذكس. نؤمن أن الفن والثقافة يمكنهما جسر الانقسامات وتعزيز التماسك الاجتماعي في المجتمعات ما بعد النزاع.'
              )}
            </p>

            <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: '#f7f4ef' }}>
              <p className="text-sm font-semibold text-gray-700 mb-3">{t('Our Values', 'قيمنا')}</p>
              <div className="space-y-2">
                {[
                  t('Humanity & Respect for Difference', 'الإنسانية واحترام الاختلاف'),
                  t('Simplicity & Genuine Expression', 'البساطة والتعبير الصادق'),
                  t('Participation & Collective Creation', 'المشاركة والإبداع الجماعي'),
                ].map((v, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold flex-shrink-0" style={{ backgroundColor: '#c9a84c' }}>✓</span>
                    <span className="text-sm text-gray-600">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Three pillars */}
          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <span className="text-4xl font-black" style={{ color: '#e8e0f0' }}>{pillar.number}</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Photo from actual programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl overflow-hidden aspect-video relative shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=450&q=80&fit=crop"
                alt="Harmony Forum community gathering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,52,86,0.8) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold text-sm">
                  {t('Homs, Syria · The Old House', 'حمص، سوريا · البيت القديم')}
                </p>
                <p className="text-white/60 text-xs mt-1">
                  {t('A 1906 Syrian house restored by volunteers into a cultural space', 'منزل سوري من عام 1906 أُعيد ترميمه بجهود المتطوعين ليصبح مساحة ثقافية')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}