import React, { useState } from 'react';
import { useLanguage } from '@/components/shared/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Programs() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 'oboor',
      year: '2021',
      title: t('Oboor', 'عبور'),
      titleFull: t('Oboor — Crossing / Transition', 'عبور — العبور / الانتقال'),
      category: 'exhibition',
      description: t(
        'One of Harmony\'s foundational initiatives, implemented in collaboration with the Union of Fine Artists in Homs. Launched after a decade of war, the project invited artists to reflect on how those ten years had shaped them — expressing their journey from loss to resilience.',
        'إحدى المبادرات التأسيسية للوئام، نُفذت بالتعاون مع اتحاد الفنانين التشكيليين في حمص. أُطلقت بعد عقد من الحرب، دعت الفنانين للتأمل في كيفية تشكيل تلك السنوات العشر لهم — معبرين عن رحلتهم من الخسارة إلى الصمود.'
      ),
      stats: [
        { value: '75', label: t('Youth Participants', 'مشارك شاب') },
        { value: '15', label: t('Professional Artists', 'فنان محترف') },
        { value: '150', label: t('Artworks', 'عمل فني') },
        { value: '5,000+', label: t('Visitors', 'زائر') },
      ],
      highlights: [
        t('Painting, sculpture, videography and photography', 'الرسم والنحت والتصوير بالفيديو والفوتوغرافي'),
        t('7-day public exhibition at historic Zahrawi Palace', 'معرض عام لمدة 7 أيام في قصر الزهراوي التاريخي'),
        t('Fostered empathy and understanding across community segments', 'عزز التعاطف والتفاهم بين شرائح المجتمع'),
      ],
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=700&h=500&q=80&fit=crop',
      color: '#6b4f7a',
    },
    {
      id: 'bc1',
      year: '2021',
      title: t('Beyond Colors 1', 'ما وراء الألوان 1'),
      titleFull: t('Beyond Colors — Phase 1', 'ما وراء الألوان — المرحلة 1'),
      category: 'workshop',
      description: t(
        'Uses art to promote peace and community cohesion in Homs through drawing, sculpture, photography, music, and cinema. Includes workshops on peacebuilding, team building, life skills, and conflict resolution, engaging youth, adolescents, and children.',
        'يستخدم الفن لتعزيز السلام والتماسك المجتمعي في حمص من خلال الرسم والنحت والتصوير والموسيقى والسينما. يشمل ورشات حول بناء السلام وبناء الفريق والمهارات الحياتية وحل النزاعات، إشراكاً للشباب والمراهقين والأطفال.'
      ),
      highlights: [
        t('Built a network of Homs city and countryside residents', 'بنى شبكة من سكان مدينة حمص وريفها'),
        t('Multiple art and community workshops', 'ورشات فنية ومجتمعية متعددة'),
        t('Inclusive spaces encouraging peaceful coexistence', 'مساحات شاملة تشجع التعايش السلمي'),
      ],
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&h=500&q=80&fit=crop',
      color: '#4a3456',
    },
    {
      id: 'bc2',
      year: '2022',
      title: t('Beyond Colors 2', 'ما وراء الألوان 2'),
      titleFull: t('Beyond Colors — Phase 2', 'ما وراء الألوان — المرحلة 2'),
      category: 'workshop',
      description: t(
        'Expanded to include peacebuilding camps and workshops in painting, music, photography, theater, and writing over 7 months. The final exhibition showcased 80 artworks, a theatre play, and monologues addressing fanaticism, child-rearing, and mental health.',
        'توسع ليشمل معسكرات بناء السلام وورشات في الرسم والموسيقى والتصوير والمسرح والكتابة على مدى 7 أشهر. عرض المعرض الختامي 80 عملاً فنياً ومسرحية ومونولوجات تتناول التعصب وتربية الأطفال والصحة النفسية.'
      ),
      stats: [
        { value: '150', label: t('Participants', 'مشارك') },
        { value: '80', label: t('Artworks', 'عمل فني') },
        { value: '7 mo.', label: t('Program Duration', 'مدة البرنامج') },
      ],
      highlights: [
        t('150 participants from diverse backgrounds', '150 مشاركاً من خلفيات متنوعة'),
        t('Theatre play + monologues on social topics', 'مسرحية + مونولوجات حول مواضيع اجتماعية'),
        t('Musical performance composed against fanaticism', 'عرض موسيقي ضد التعصب'),
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=500&q=80&fit=crop',
      color: '#8b6a9a',
    },
    {
      id: 'bc3',
      year: '2023',
      title: t('Beyond Colors 3', 'ما وراء الألوان 3'),
      titleFull: t('Beyond Colors 3 — The Alphabet of Art and Human', 'ما وراء الألوان 3 — أبجدية الفن والإنسان'),
      category: 'documentary',
      description: t(
        'Explores the collective memory of Syrian society through 10 true stories written by their owners. The team famously slept in the exhibition yard for a full month to protect the installed artworks during three postponements — an act of solidarity that itself became a living expression of peacebuilding.',
        'يستكشف الذاكرة الجماعية للمجتمع السوري من خلال 10 قصص حقيقية كتبها أصحابها. نام الفريق بشكل مشهور في ساحة المعرض لمدة شهر كامل لحماية الأعمال الفنية المركبة خلال ثلاثة تأجيلات — فعل تضامن أصبح في حد ذاته تعبيراً حياً عن بناء السلام.'
      ),
      stats: [
        { value: '10', label: t('True Stories', 'قصص حقيقية') },
        { value: '74 min', label: t('Documentary Film', 'الفيلم الوثائقي') },
        { value: '5,000+', label: t('Exhibition Visitors', 'زوار المعرض') },
      ],
      highlights: [
        t('Documentary film with real storytellers on screen', 'فيلم وثائقي مع رواة حقيقيين على الشاشة'),
        t('Music, literature, painting, sculpture, and graphic design', 'موسيقى وأدب ورسم ونحت وتصميم جرافيك'),
        t('"Preserving Stories" training workshop for storytellers', 'ورشة تدريبية "حفظ القصص" للرواة'),
        t('Team lived on-site for a month of postponement — solidarity in action', 'عاش الفريق في الموقع لشهر من التأجيل — تضامن في العمل'),
      ],
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=700&h=500&q=80&fit=crop',
      hasVideo: true,
      color: '#4a3456',
    },
    {
      id: 'revival',
      year: '2024',
      title: t('Revival', 'إحياء'),
      titleFull: t('Revival — A Celebration of Homs', 'إحياء — احتفاء بحمص'),
      category: 'ongoing',
      description: t(
        'A major new initiative exploring and celebrating the city of Homs — its people, habitats, cultural heritage, and social identity. Unlike past exhibitions centered on trauma, Revival re-centers Homs around life, continuity, and shared identity through three thematic axes.',
        'مبادرة كبيرة جديدة لاستكشاف والاحتفاء بمدينة حمص — سكانها وموائلها وتراثها الثقافي وهويتها الاجتماعية. على عكس المعارض السابقة المتمحورة حول الصدمة، يعيد إحياء تمركز حمص حول الحياة والاستمرارية والهوية المشتركة من خلال ثلاثة محاور موضوعية.'
      ),
      highlights: [
        t('Still Life & Urban Landscape: documenting Homs\' heritage', 'الطبيعة الصامتة والمشهد العمراني: توثيق تراث حمص'),
        t('Cultural & Artistic Context: traditions and creative practices', 'السياق الثقافي والفني: التقاليد والممارسات الإبداعية'),
        t('Lifestyle & Daily Practices: local habits and lived experience', 'نمط الحياة والممارسات اليومية: العادات المحلية والتجربة المعاشة'),
      ],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&h=500&q=80&fit=crop',
      color: '#c9a84c',
    },
  ];

  const clubs = [
    { emoji: '🌍', name: t('English Club', 'نادي اللغة الإنجليزية'), desc: t('Language learning and cultural exchange', 'تعلم اللغة والتبادل الثقافي') },
    { emoji: '🎬', name: t('Cinema Club', 'نادي السينما'), desc: t('Film screenings and discussions', 'عروض الأفلام والمناقشات') },
    { emoji: '📚', name: t('Book Club', 'نادي الكتاب'), desc: t('Literary dialogue and social reflection', 'الحوار الأدبي والتأمل الاجتماعي') },
  ];

  const tabs = [
    { value: 'all', label: t('All Programs', 'جميع البرامج') },
    { value: 'exhibition', label: t('Exhibitions', 'المعارض') },
    { value: 'workshop', label: t('Workshops', 'الورشات') },
    { value: 'documentary', label: t('Documentary', 'الوثائقي') },
    { value: 'ongoing', label: t('Ongoing', 'قيد التنفيذ') },
  ];

  const filtered = activeTab === 'all' ? programs : programs.filter(p => p.category === activeTab);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 harmony-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-yellow-400">
              {t('Peace Building Program', 'برنامج بناء السلام')}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {t('Our Work', 'أعمالنا')}
            </h1>
            <p className="mt-4 text-xl text-white/70 font-light max-w-xl">
              {t(
                'A sustained ecosystem of programs using art as a tool for peacebuilding, healing, and cultural revival in Homs and Hama.',
                'نظام بيئي مستدام من البرامج يستخدم الفن كأداة لبناء السلام والشفاء والإحياء الثقافي في حمص وحماة.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.value
                    ? 'text-white harmony-gradient'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <AnimatePresence mode="wait">
            {filtered.map((p, index) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <div className="aspect-[4/3]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {p.hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                          <Play className="w-8 h-8 text-gray-900 fill-gray-900 ml-1" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs text-white font-bold" style={{ backgroundColor: p.color }}>
                        {p.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: p.color }}>
                        {p.year}
                      </span>
                      <h2 className="mt-2 text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                        {p.titleFull}
                      </h2>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{p.description}</p>

                    {p.stats && (
                      <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
                        {p.stats.map((s, i) => (
                          <div key={i}>
                            <p className="text-2xl font-black text-gray-900">{s.value}</p>
                            <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <ul className="space-y-2.5">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                          <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: p.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Community Clubs */}
      <section className="py-24" style={{ backgroundColor: '#f7f4ef' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#6b4f7a' }}>
              {t('Community Activities', 'الأنشطة المجتمعية')}
            </span>
            <div className="section-divider mt-3 mb-4 mx-auto" />
            <h2 className="text-3xl font-bold text-gray-900">{t('The Clubs', 'النوادي')}</h2>
            <p className="mt-3 text-gray-500">
              {t(
                'Part of Harmony\'s safe space — over 100 participants gathering to share mutual interests.',
                'جزء من المساحة الآمنة للوئام — أكثر من 100 مشارك يجتمعون لتبادل الاهتمامات المشتركة.'
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {clubs.map((club, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="text-5xl">{club.emoji}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{club.name}</h3>
                <p className="text-gray-500 text-sm">{club.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl('GetInvolved')}>
              <button className="px-8 py-3.5 rounded-full text-white font-semibold harmony-gradient hover:opacity-90 transition-opacity shadow-md">
                {t('Join a Club', 'انضم لنادي')}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}