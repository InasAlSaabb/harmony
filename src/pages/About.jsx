import React from 'react';
import { useLanguage } from '@/components/shared/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function About() {
  const { t } = useLanguage();

  const timeline = [
    {
      year: '2019',
      title: t('Initiation', 'البداية'),
      description: t(
        '15 youngsters chose a place and repaired it into a safe space for the young and for art — a 1906 Syrian house in Homs.',
        '15 شاباً اختاروا مكاناً وأعادوا ترميمه ليصبح مساحة آمنة للشباب وللفن — منزل سوري من عام 1906 في حمص.'
      ),
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=300&q=80&fit=crop',
    },
    {
      year: '2021',
      title: t('Oboor Exhibition', 'معرض عبور'),
      description: t(
        '150 artworks of sculpture, painting, and photography about how each participant experienced 10 years of war. Over 5,000 visitors at Zahrawi Palace.',
        '150 عملاً فنياً من النحت والرسم والتصوير عن كيفية تجربة كل مشارك لـ 10 سنوات من الحرب. أكثر من 5000 زائر في قصر الزهراوي.'
      ),
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&q=80&fit=crop',
    },
    {
      year: '2021',
      title: t('Beyond Colors 1', 'ما وراء الألوان 1'),
      description: t(
        'Societal and artistic trainings in Homs city and its countryside, supervised by a group of trainers and artists. Laid groundwork for a peacebuilding network.',
        'تدريبات مجتمعية وفنية في مدينة حمص وريفها، بإشراف مجموعة من المدربين والفنانين. وضعت الأسس لشبكة بناء السلام.'
      ),
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&q=80&fit=crop',
    },
    {
      year: '2022',
      title: t('Beyond Colors 2', 'ما وراء الألوان 2'),
      description: t(
        'The exhibition was the closure of 7 months of camps, mutual living, and exchanging experiences between artists in painting, photography, blogging, theatre, and music. 150 participants, 80 artworks.',
        'كان المعرض ختام 7 أشهر من المعسكرات والمعيشة المشتركة وتبادل الخبرات بين الفنانين في الرسم والتصوير والتدوين والمسرح والموسيقى. 150 مشاركاً، 80 عملاً فنياً.'
      ),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&q=80&fit=crop',
    },
    {
      year: '2023',
      title: t('The Clubs', 'النوادي'),
      description: t(
        'The clubs became part of Harmony\'s safe space, with over 100 participants gathering to share mutual interests through the English Club, Cinema Club, and Book Club.',
        'أصبحت النوادي جزءاً من المساحة الآمنة للوئام، مع أكثر من 100 مشارك يجتمعون لتبادل الاهتمامات المشتركة من خلال نادي اللغة الإنجليزية ونادي السينما ونادي الكتاب.'
      ),
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&q=80&fit=crop',
    },
    {
      year: '2023',
      title: t('Beyond Colors 3', 'ما وراء الألوان 3'),
      description: t(
        '"The Alphabet of Art and Human" — 10 true stories, shared with the city of Homs and the world through different art forms. A 74-minute documentary film, 5,000+ visitors.',
        '"أبجدية الفن والإنسان" — 10 قصص حقيقية، شاركت مع مدينة حمص والعالم من خلال أشكال فنية مختلفة. فيلم وثائقي بطول 74 دقيقة، 5000+ زائر.'
      ),
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&q=80&fit=crop',
    },
    {
      year: '2024',
      title: t('Revival', 'إحياء'),
      description: t(
        'Harmony started the journey of "Revival" project — about the city of Homs, its habitats, and what gathers them. Three axes: monuments, cultural context, and lifestyle.',
        'بدأ هارموني رحلة مشروع "إحياء" — عن مدينة حمص وأحيائها  وما يجمعها. ثلاثة محاور: المعالم والسياق الثقافي ونمط الحياة.'
      ),
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&q=80&fit=crop',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#4a3456' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 h-full">
            {[
              'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&q=60',
              'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=60',
              'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=60',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=60',
            ].map((src, i) => (
              <img key={i} src={src} alt="" className="w-full h-full object-cover" />
            ))}
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-yellow-400">
              {t('About Us', 'من نحن')}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {t('Harmony', 'هارموني')}
            </h1>
            <p className="mt-4 text-xl text-white/70 font-light">
              {t(
                'A voluntary, developmental and humanitarian initiative working on peace-building through art and culture.',
                'مشروع يهدف إلى إعادة التماسك المجتمعي وبناء السلام في سوريا .'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
                {t('Who We Are', 'من نحن')}
              </span>
              <div className="section-divider mt-3 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('Harmony', 'هارموني')}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {t(
                    'A voluntary, developmental and humanitarian project, working under the patronage of the Archbishopric of the Syriac Orthodox in Homs, operating on peace-building through arts and culture, pursuing to empower and support youth by providing them with a safe space.',
                    'مشروع طوعي وتنموي وإنساني يعمل تحت رعاية مطرانية السريان الأرثوذكس في حمص، يعمل على بناء السلام من خلال الفنون والثقافة، ويسعى إلى تمكين الشباب ودعمهم بتوفير مساحة آمنة لهم.'
                  )}
                </p>
                <p>
                  {t(
                    'Harmony project began in 2018 with a group of young people who believed in their abilities and skills. They took it upon themselves to create a place that captures the essence of Homs, and that\'s why they chose a 1906-year-old Syrian house. Despite being severely damaged by the conflict, volunteers worked tirelessly to restore it, turning the dust of conflict into the vibrant colors of life.',
                    'بدأ مشروع هارموني في عام 2018 بمجموعة من الشباب الذين آمنوا بقدراتهم ومهاراتهم. أخذوا على عاتقهم إنشاء مكان يجسد روح حمص، ولهذا اختاروا منزلاً سورياً يعود إلى عام 1906. على الرغم من تضرره الشديد بسبب النزاع، عمل المتطوعون بلا كلل لترميمه، محولين غبار النزاع إلى ألوان الحياة النابضة.'
                  )}
                </p>
                <p>
                  {t(
                    'In its early stages, Harmony faced significant challenges and was not widely accepted. At a time when economic hardship and basic needs were primary concerns, many questioned the relevance of art. Despite this, community leaders recognized its value and became key supporters.',
                    'في مراحله المبكرة، واجه هارموني تحديات كبيرة ولم يُقبل على نطاق واسع. في وقت كانت فيه الصعوبات الاقتصادية والاحتياجات الأساسية هي الشواغل الرئيسية، تساءل كثيرون عن أهمية الفن. على الرغم من ذلك، أدرك قادة المجتمع قيمته وأصبحوا داعمين رئيسيين.'
                  )}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Polaroid-style images like the actual site */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=500&q=80&fit=crop"
                    alt="Harmony cultural space"
                    className="w-full"
                    style={{ filter: 'saturate(0.7)' }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 bg-white p-3 shadow-xl rotate-3 rounded">
                  <img
                    src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=200&h=150&q=80&fit=crop"
                    alt="Exhibition"
                    className="w-full rounded"
                  />
                  <p className="text-xs text-center text-gray-500 mt-2">{t('Beyond Colors Exhibition', 'معرض ما وراء الألوان')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Values, Mission */}
      <section className="py-24" style={{ backgroundColor: '#f7f4ef' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: '#6b4f7a' }}>{t('Our Vision', 'رؤيتنا')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  'A cohesive humane society which believes in all its components, and the importance of every single individual in the process of creating one\'s self, as well as the other\'s — a community based on an active and capable youth.',
                  'مجتمع إنساني متماسك يؤمن بجميع مكوناته وبأهمية كل فرد في عملية بناء الذات وبناء الآخر — مجتمع قائم على شباب فاعل وقادر.'
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white rounded-2xl p-8 harmony-gradient"
            >
              <h3 className="text-lg font-bold mb-4 text-yellow-300">{t('Our Values', 'قيمنا')}</h3>
              <ul className="space-y-3">
                {[
                  t('Accepting Difference', 'قبول الاختلاف'),
                  t('Simplicity', 'البساطة'),
                  t('Singularity', 'التفرد'),
                  t('Humanity', 'الإنسانية'),
                  t('Participatory', 'المشاركة'),
                ].map((v, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-lg font-bold mb-4" style={{ color: '#6b4f7a' }}>{t('Our Mission', 'مهمتنا')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  'Working on peace-building through art and culture, aiming to empower and support the youth — providing a safe and inclusive space for creative expression and community dialogue.',
                  'العمل على بناء السلام من خلال الفن والثقافة، بهدف تمكين الشباب ودعمهم — وتوفير مساحة آمنة وشاملة للتعبير الإبداعي والحوار المجتمعي.'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline — like actual site */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
              {t("Harmony's Timeline", 'خط زمني للوئام')}
            </span>
            <div className="section-divider mt-3 mb-4 mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t('Our Journey', 'رحلتنا')}
            </h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:rtl-grid'}`}
                >
                  {/* Year bubble — center */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full items-center justify-center text-white text-xs font-bold z-10 shadow-lg harmony-gradient">
                    {item.year}
                  </div>

                  {/* Content side */}
                  <div className={`${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                    <div className="md:hidden inline-flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white harmony-gradient">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* Image side */}
                  <div className={`${index % 2 === 0 ? 'md:col-start-2 md:pl-16' : 'md:col-start-1 md:row-start-1 md:pr-16'}`}>
                    <div className="rounded-xl overflow-hidden shadow-md aspect-video">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16" style={{ backgroundColor: '#f7f4ef' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-10">
            {t('Our Partners', 'شركاؤنا')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {['URDC', 'MCC', 'Local Community Leaders', 'Union of Fine Artists — Homs'].map((p, i) => (
              <span key={i} className="text-gray-400 font-semibold text-sm">{p}</span>
            ))}
          </div>

          <div className="mt-16">
            <Link to={createPageUrl('Contact')}>
              <button className="px-8 py-3.5 rounded-full text-white font-semibold harmony-gradient hover:opacity-90 transition-opacity shadow-md">
                {t('Partner With Us', 'كن شريكاً')}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}