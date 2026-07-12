import React, { useState } from 'react';
import { useLanguage } from '@/components/shared/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiry_type: '',
    message: '',
  });

  const inquiryTypes = [
    { value: 'partnership', label: t('Partnership & Funding', 'الشراكة والتمويل') },
    { value: 'funding', label: t('Donation / Grant', 'التبرع / المنحة') },
    { value: 'volunteer', label: t('Volunteering', 'التطوع') },
    { value: 'participate', label: t('Participation in Activities', 'المشاركة في الأنشطة') },
    { value: 'media', label: t('Media & Press Inquiry', 'استفسار إعلامي وصحفي') },
    { value: 'other', label: t('Other', 'أخرى') },
  ];

  // Recipient for contact submissions (matches the email shown in the info card).
  const CONTACT_EMAIL = 'info@harmonyforum.org';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // No backend: open the visitor's email client with a pre-filled message.
    const inquiryLabel =
      inquiryTypes.find((type) => type.value === formData.inquiry_type)?.label ||
      formData.inquiry_type;

    const subject = `[Harmony] ${inquiryLabel} — ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Organization: ${formData.organization || '-'}`,
      `Inquiry type: ${inquiryLabel || '-'}`,
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 harmony-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-yellow-400">
              {t('Contact', 'تواصل')}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black text-white leading-tight">
              {t("Let's Start a Conversation", 'لنبدأ حواراً')}
            </h1>
            <p className="mt-4 text-xl text-white/70 font-light">
              {t(
                'Whether you\'re a donor, community member, researcher, or simply curious — we\'d love to hear from you.',
                'سواء كنت مانحاً أو عضواً في المجتمع أو باحثاً أو مجرد فضولي — نود أن نسمع منك.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <div className="rounded-2xl p-12 text-center" style={{ backgroundColor: '#f7f4ef' }}>
                  <div className="w-16 h-16 rounded-full harmony-gradient flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {t('Message Received!', 'تم استلام الرسالة!')}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {t(
                      'Thank you for reaching out. We\'ll get back to you as soon as possible.',
                      'شكراً لتواصلك. سنرد عليك في أقرب وقت ممكن.'
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', inquiry_type: '', message: '' });
                    }}
                    className="px-6 py-2.5 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-white transition-colors"
                  >
                    {t('Send Another Message', 'إرسال رسالة أخرى')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        {t('Full Name', 'الاسم الكامل')} *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder={t('Your name', 'اسمك')}
                        required
                        className="h-11 border-gray-200 focus:border-purple-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        {t('Email Address', 'البريد الإلكتروني')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="h-11 border-gray-200 focus:border-purple-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="org" className="text-sm font-medium text-gray-700">
                        {t('Organization', 'المنظمة')}
                      </Label>
                      <Input
                        id="org"
                        value={formData.organization}
                        onChange={(e) => handleChange('organization', e.target.value)}
                        placeholder={t('Optional', 'اختياري')}
                        className="h-11 border-gray-200 focus:border-purple-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        {t('Inquiry Type', 'نوع الاستفسار')} *
                      </Label>
                      <Select value={formData.inquiry_type} onValueChange={(v) => handleChange('inquiry_type', v)} required>
                        <SelectTrigger className="h-11 border-gray-200">
                          <SelectValue placeholder={t('Select...', 'اختر...')} />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      {t('Your Message', 'رسالتك')} *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder={t(
                        'Tell us about your interest, organization, and how you\'d like to collaborate...',
                        'أخبرنا عن اهتمامك ومنظمتك وكيف تود التعاون...'
                      )}
                      required
                      className="min-h-[140px] resize-none border-gray-200 focus:border-purple-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold harmony-gradient hover:opacity-90 transition-opacity disabled:opacity-60 shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {t('Sending...', 'جاري الإرسال...')}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('Send Message', 'إرسال الرسالة')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact details */}
              <div className="rounded-2xl p-7" style={{ backgroundColor: '#f7f4ef' }}>
                <h3 className="font-bold text-gray-900 mb-5">{t('Contact Information', 'معلومات التواصل')}</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl harmony-gradient flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{t('Email', 'البريد الإلكتروني')}</p>
                      <a href="mailto:info@harmonyforum.org" className="text-sm" style={{ color: '#6b4f7a' }}>
                        info@harmonyforum.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl harmony-gradient flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{t('Homs Center', 'مركز حمص')}</p>
                      <p className="text-gray-500 text-sm">{t('Homs, Syria · Since 2018', 'حمص، سوريا · منذ 2018')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl harmony-gradient flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{t('Hama Center', 'مركز حماة')}</p>
                      <p className="text-gray-500 text-sm">{t('Hama, Syria · Since 2023', 'حماة، سوريا · منذ 2023')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For international partners */}
              <div className="rounded-2xl p-7 text-white harmony-gradient">
                <h3 className="font-bold mb-3 text-yellow-300">{t('For International Partners', 'للشركاء الدوليين')}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t(
                    'For NGOs, foundations, and funding organizations interested in partnership: please include your organization\'s name, focus area, and the type of collaboration you envision in your message. We welcome co-design opportunities.',
                    'للمنظمات غير الحكومية والمؤسسات ومنظمات التمويل المهتمة بالشراكة: يرجى تضمين اسم منظمتك ومجال تركيزها ونوع التعاون الذي تتصوره في رسالتك. نرحب بفرص التصميم المشترك.'
                  )}
                </p>
              </div>

              {/* Patronage */}
              <p className="text-xs text-gray-400 text-center leading-relaxed">
                {t(
                  'Harmony Cultural Forum operates under the patronage of the Syriac Orthodox Archbishopric of Homs, Hama and Tartous',
                  'يعمل ملتقى هارموني الثقافي تحت رعاية مطرانية السريان الأرثوذكس في حمص وحماة وطرطوس'
                )}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}