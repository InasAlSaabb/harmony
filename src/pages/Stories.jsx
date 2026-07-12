import React from 'react';
import { useLanguage } from '@/components/shared/LanguageContext';
import { motion } from 'framer-motion';
import { Quote, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Stories() {
  const { t, isRTL } = useLanguage();

  const impactPoints = [
    {
      heading: t('Freedom of Expression', 'حرية التعبير'),
      text: t(
        'Encourages freedom of expression previously restricted during intense conflict — creating spaces where voices long silenced can finally be heard.',
        'تشجع حرية التعبير التي كانت مقيدة سابقاً خلال النزاع الحاد — خلق مساحات حيث يمكن أخيراً سماع الأصوات التي طال صمتها.'
      ),
    },
    {
      heading: t('Amplifying Local Voices', 'تضخيم الأصوات المحلية'),
      text: t(
        'Amplifies local voices through artistic forms now showcased both in Syria and abroad — including film and other media distributed internationally.',
        'تضخم الأصوات المحلية من خلال أشكال فنية تُعرض الآن في سوريا وخارجها — بما يشمل الأفلام والإعلام الأخرى المُوزعة دولياً.'
      ),
    },
    {
      heading: t('Youth Identity & Purpose', 'هوية الشباب وهدفه'),
      text: t(
        'Supports youth in rediscovering identity, purpose, and connection after prolonged hardship — helping them become resilient leaders in their communities.',
        'يدعم الشباب في إعادة اكتشاف الهوية والهدف والتواصل بعد المعاناة المطولة — مساعدتهم على أن يصبحوا قادة متحملين في مجتمعاتهم.'
      ),
    },
    {
      heading: t('Place of Convergence', 'مكان التقاطع'),
      text: t(
        'Harmony has increasingly become a place of convergence — attracting people from other cities, representing diverse ethnicities, backgrounds, and life experiences, including the most vulnerable.',
        'أصبح هارموني بشكل متزايد مكان التقاطع — يستقطب أشخاصاً من مدن أخرى يمثلون أعراقاً وخلفيات وتجارب حياتية متنوعة، بمن فيهم الأكثر هشاشة.'
      ),
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 harmony-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&q=60"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-yellow-400">
              {t('Impact & Stories', 'التأثير والقصص')}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {t('Voices of Resilience', 'أصوات الصمود')}
            </h1>
            <p className="mt-4 text-xl text-white/70 font-light">
              {t(
                'Real stories, documented impact, and the transformative power of art in post-conflict Syria.',
                'قصص حقيقية، تأثير موثق، والقوة التحويلية للفن في سوريا ما بعد النزاع.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documentary Feature — Beyond Colors 3 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&q=80&fit=crop"
                  alt="Beyond Colors 3 Documentary"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-8 h-8 text-gray-900 fill-gray-900 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2.5">
                    <p className="text-white text-sm font-semibold">{t('Beyond Colors 3 — Documentary Film', 'ما وراء الألوان 3 — الفيلم الوثائقي')}</p>
                    <p className="text-white/60 text-xs">{t('74 minutes · Homs, Syria · 2023', '74 دقيقة · حمص، سوريا · 2023')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
                {t('Featured Documentary', 'الفيلم الوثائقي المميز')}
              </span>
              <div className="section-divider mt-3 mb-5" />
              <h2 className="text-3xl font-bold text-gray-900">
                {t('"The Alphabet of Art and Human"', '"أبجدية الفن والإنسان"')}
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t(
                  'A 74-minute documentary film featuring 10 real stories from Homs, with the storytellers themselves appearing on screen to share their experiences and personal journeys during years of war.',
                  'فيلم وثائقي بطول 74 دقيقة يضم 10 قصص حقيقية من حمص، مع ظهور الرواة أنفسهم على الشاشة لمشاركة تجاربهم ورحلاتهم الشخصية خلال سنوات الحرب.'
                )}
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {t(
                  'The stories were transformed into diverse art forms — music, literature, painting, sculpture, and graphic design — showcased in an exhibition that attracted over 5,000 visitors.',
                  'تحولت القصص إلى أشكال فنية متنوعة — موسيقى وأدب ورسم ونحت وتصميم جرافيك — عُرضت في معرض استقطب أكثر من 5000 زائر.'
                )}
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-3xl font-black" style={{ color: '#6b4f7a' }}>10</p>
                  <p className="text-gray-400 text-xs mt-1">{t('True Stories', 'قصص حقيقية')}</p>
                </div>
                <div>
                  <p className="text-3xl font-black" style={{ color: '#6b4f7a' }}>74</p>
                  <p className="text-gray-400 text-xs mt-1">{t('Minutes', 'دقيقة')}</p>
                </div>
                <div>
                  <p className="text-3xl font-black" style={{ color: '#6b4f7a' }}>5K+</p>
                  <p className="text-gray-400 text-xs mt-1">{t('Visitors', 'زائر')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Exhibition Night Story */}
      <section className="py-24" style={{ backgroundColor: '#f7f4ef' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
              {t('A Story of Solidarity', 'قصة تضامن')}
            </span>
            <div className="section-divider mt-3 mb-4 mx-auto" />
            <h2 className="text-3xl font-bold text-gray-900">
              {t('Sleeping in the Exhibition Yard', 'النوم في ساحة المعرض')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="aspect-[21/9] relative">
              <img
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=500&q=80&fit=crop"
                alt="Exhibition installation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,52,86,0.8) 0%, transparent 60%)' }} />
            </div>

            <div className="p-8 sm:p-12 space-y-5">
              <p className="text-gray-600 leading-relaxed">
                {t(
                  'During Beyond Colors 3, the exhibition was postponed three times — first due to severe weather, then because of a deteriorating security situation following a bombing in Homs, and finally in response to the escalation of violence in Gaza. Together, these events led to a full month of delay.',
                  'خلال ما وراء الألوان 3، تأجل المعرض ثلاث مرات — أولاً بسبب الطقس القاسي، ثم بسبب تدهور الوضع الأمني بعد تفجير في حمص، وأخيراً استجابة لتصاعد العنف في غزة. معاً، أدت هذه الأحداث إلى تأخير لمدة شهر كامل.'
                )}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t(
                  'During this period, the artworks had already been installed in the exhibition yard and required continuous protection. In response, the Harmony team made a collective decision to remain on site — sleeping in the yard until the exhibition could finally open.',
                  'خلال هذه الفترة، كانت الأعمال الفنية قد ركبت بالفعل في ساحة المعرض واحتاجت إلى حماية مستمرة. استجابة لذلك، اتخذ فريق هارموني قراراً جماعياً بالبقاء في الموقع — النوم في الساحة حتى يتمكن المعرض أخيراً من الافتتاح.'
                )}
              </p>

              <blockquote className="rounded-2xl p-6 border-r-4" style={{ backgroundColor: '#f7f4ef', borderColor: '#c9a84c' }}>
                <p className="text-gray-700 italic leading-relaxed">
                  {t(
                    '"What emerged was an intense co-living experience that reshaped the team\'s understanding of peacebuilding and collective care. In many ways, this lived experience became a practical expression of the values Harmony promotes — demonstrating how peacebuilding is not only practiced through art and programming, but also through presence, shared responsibility, and standing together in moments of vulnerability."',
                    '"ما نشأ كان تجربة تعايش مكثفة أعادت تشكيل فهم الفريق لبناء السلام والرعاية الجماعية. بطرق عديدة، أصبحت هذه التجربة المعاشة تعبيراً عملياً عن القيم التي يروج لها هارموني — موضحة كيف أن بناء السلام لا يُمارس فقط من خلال الفن والبرمجة، ولكن أيضاً من خلال الحضور والمسؤولية المشتركة والوقوف معاً في لحظات الضعف."'
                  )}
                </p>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Beyond Art */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
              {t('Impact Beyond Art', 'التأثير بعيداً عن الفن')}
            </span>
            <div className="section-divider mt-3 mb-4 mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t('Cultural Revival in Homs', 'الإحياء الثقافي في حمص')}
            </h2>
            <p className="mt-4 text-gray-500">
              {t(
                'Harmony Cultural Forum has become a symbolic space for cultural revival. Here\'s what community leaders say:',
                'أصبح ملتقى هارموني الثقافي مساحة رمزية للإحياء الثقافي. إليك ما يقوله قادة المجتمع:'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl harmony-gradient flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{point.heading}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Peacebuilding reflection */}
      <section className="py-24 harmony-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-yellow-400/50 mx-auto mb-6" />
          <blockquote>
            <p className="text-2xl sm:text-3xl text-white font-light leading-relaxed italic">
              {t(
                '"In a context marked by fragmentation and uncertainty, Harmony remains one of the few places where diversity is not only present but actively embraced."',
                '"في سياق يتسم بالتشرذم وعدم اليقين، يظل هارموني أحد الأماكن القليلة التي لا يكون فيها التنوع حاضراً فحسب، بل مُحتضناً بنشاط."'
              )}
            </p>
            <footer className="mt-8">
              <p className="text-yellow-300 font-semibold">{t('Community Leaders — Homs', 'قادة المجتمع — حمص')}</p>
            </footer>
          </blockquote>

          <div className="mt-12">
            <Link to={createPageUrl('Contact')}>
              <button className="px-8 py-3.5 rounded-full text-gray-900 bg-white font-semibold hover:bg-yellow-50 transition-colors shadow-md">
                {t('Share Your Story', 'شارك قصتك')}
                <ArrowRight className={`inline-block w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}