import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useLanguage } from '../shared/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  const { t, isRTL } = useLanguage();

  const paths = [
    {
      label: t('Donors & Funders', 'المانحون والممولون'),
      description: t(
        'Support peacebuilding through art in post-conflict Syria. View our impact documentation and partnership opportunities.',
        'ادعم بناء السلام من خلال الفن في سوريا ما بعد النزاع. اطلع على توثيق تأثيرنا وفرص الشراكة.'
      ),
      cta: t('Become a Partner', 'كن شريكاً'),
      href: 'Contact',
    },
    {
      label: t('Local Community', 'المجتمع المحلي'),
      description: t(
        'Join our workshops, clubs and activities in Homs or Hama. Everyone is welcome — no prior experience needed.',
        'انضم إلى ورشاتنا ونوادينا وأنشطتنا في حمص أو حماة. الجميع مرحب به — لا حاجة لخبرة مسبقة.'
      ),
      cta: t('Join an Activity', 'انضم لنشاط'),
      href: 'GetInvolved',
    },
    {
      label: t('Researchers & Media', 'الباحثون والإعلام'),
      description: t(
        'Access comprehensive project documentation, case studies, and contact us for interviews or collaboration.',
        'الوصول إلى توثيق شامل للمشاريع ودراسات الحالة وتواصل معنا للمقابلات أو التعاون.'
      ),
      cta: t('Get In Touch', 'تواصل معنا'),
      href: 'Contact',
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#f7f4ef' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
            {t('Get Involved', 'شارك معنا')}
          </span>
          <div className="section-divider mt-3 mb-4 mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t('How You Can Help', 'كيف يمكنك المساهمة')}
          </h2>
          <p className="mt-4 text-gray-500">
            {t(
              'Whether you\'re a donor, community member, or researcher, there\'s a meaningful way to be part of Harmony\'s mission.',
              'سواء كنت مانحاً أو عضواً في المجتمع أو باحثاً، هناك طريقة هادفة لتكون جزءاً من مهمة هارموني.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 group hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl mb-5" style={{ backgroundColor: index === 0 ? '#6b4f7a' : index === 1 ? '#c9a84c' : '#4a3456' }} />
              <h3 className="text-lg font-bold text-gray-900 mb-3">{path.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{path.description}</p>
              <Link to={createPageUrl(path.href)}>
                <button className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: '#6b4f7a' }}>
                  {path.cta}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Partners section */}
        <div className="mt-20 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-8">
            {t('Our Partners', 'شركاؤنا')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {['URDC', 'MCC', 'Local Partners'].map((partner, i) => (
              <div key={i} className="text-gray-500 font-bold text-sm tracking-wider">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}