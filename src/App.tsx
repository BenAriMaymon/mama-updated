/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, createContext, useContext, useEffect, useMemo, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ChevronLeft, 
  Scale, 
  FileText, 
  UserCheck, 
  Languages, 
  Landmark, 
  ScrollText,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import { Language, Content } from './types';
import { contentData } from './content';

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  content: Content;
  isRtl: boolean;
}>({
  language: 'he',
  setLanguage: () => {},
  content: contentData.he,
  isRtl: true,
});

const useLanguage = () => useContext(LanguageContext);

export default function App() {
  const [language, setLanguage] = useState<Language>('he');
  const content = useMemo(() => contentData[language], [language]);
  const isRtl = language === 'he';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRtl, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content, isRtl }}>
      <div className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Calculator />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

function Navbar() {
  const { language, setLanguage, content, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: content.nav.home, id: 'home' },
    { name: content.nav.about, id: 'about' },
    { name: content.nav.services, id: 'services' },
    { name: content.calculator.title, id: 'calculator' },
    { name: content.nav.contact, id: 'contact' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'he', label: 'עב', flag: 'IL' },
    { code: 'en', label: 'EN', flag: 'EN' },
    { code: 'hu', label: 'HU', flag: 'HU' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 md:gap-4 shrink-0"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-gold flex items-center justify-center font-fancy text-sm md:text-lg font-bold text-gold-dark shrink-0">
            KPM
          </div>
          <div className="flex flex-col overflow-hidden lowercase md:uppercase">
            <span className="text-xs md:text-lg font-serif font-bold leading-tight tracking-widest text-charcoal truncate">
              קריסטינה פוליצר מימון
            </span>
            <span className="text-[7px] md:text-[10px] text-gold-dark tracking-tighter font-semibold truncate uppercase">
              עורכת דין ונוטריון • izraeli ügyvéd és közjegyző
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse uppercase text-xs font-bold tracking-widest shrink-0">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-charcoal/70 hover:text-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-4 bg-stone-100 p-1 rounded-full px-4 border border-stone-200 ml-4 rtl:ml-0 rtl:mr-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-base transition-all hover:grayscale-0 ${language === lang.code ? 'grayscale-0 scale-110 drop-shadow-sm' : 'grayscale opacity-40 hover:opacity-100'}`}
                title={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center shrink-0">
          <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal p-2 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? 100 : -100 }}
            className="fixed inset-0 top-[72px] bg-white/98 backdrop-blur-md z-40 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-8">
              {navItems.map((item, idx) => (
                <motion.a 
                  key={item.id} 
                  href={`#${item.id}`}
                  initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-fancy text-charcoal border-b border-gold/10 pb-4 flex justify-between items-center"
                >
                  <span>{item.name}</span>
                  <ChevronLeft size={18} className={isRtl ? '' : 'rotate-180'} />
                </motion.a>
              ))}
              <div className="pt-8 flex justify-center gap-10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`text-4xl transition-all ${language === lang.code ? 'scale-125 grayscale-0' : 'grayscale opacity-30 grayscale'}`}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const { content, isRtl } = useLanguage();

  const renderText = (text: string) => {
    // First, handle links like {#id|text}
    const linkRegex = /({#\w+\|[^}]+})/;
    const parts = text.split(linkRegex);

    return parts.map((part, i) => {
      const linkMatch = part.match(/{#(\w+)\|([^}]+)}/);
      if (linkMatch) {
        const [_, id, label] = linkMatch;
        return (
          <a
            key={i}
            href={`#${id}`}
            className="text-red-600 hover:text-red-700 transition-colors underline font-medium"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {label}
          </a>
        );
      }

      // Handle bold text like **text**
      const boldRegex = /(\*\*[^*]+\*\*)/;
      const subParts = part.split(boldRegex);

      return subParts.map((subPart, si) => {
        const boldMatch = subPart.match(/\*\*([^*]+)\*\*/);
        if (boldMatch) {
          return <strong key={`${i}-${si}`} className="font-bold text-charcoal">{boldMatch[1]}</strong>;
        }
        return subPart;
      });
    });
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden bg-offwhite pt-24 pb-12">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-4xl md:text-8xl font-fancy text-charcoal font-light leading-tight mb-6">
              {content.hero.title}
            </h1>
            <div className="text-lg md:text-2xl text-stone-600 font-light max-w-2xl mb-10 leading-relaxed border-r-4 border-gold pr-6">
              {renderText(content.hero.subtitle)}
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-charcoal text-white px-10 py-4 rounded-none text-sm font-bold uppercase tracking-widest inline-flex items-center justify-center hover:bg-gold-dark transition-colors"
              >
                {content.hero.cta}
              </motion.a>
              <a 
                href="#services"
                className="px-10 py-4 rounded-none text-sm font-bold uppercase tracking-widest flex items-center justify-center text-charcoal border border-charcoal/10 hover:border-charcoal/30 transition-all"
              >
                {content.nav.services}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { content } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" 
                 alt="Law office decor" 
                 className="w-full h-full object-cover grayscale opacity-50 block"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 -z-10" />
            <div className="absolute -top-6 -left-6 border border-gold/20 w-32 h-32 -z-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-fancy text-charcoal mb-8">
              {content.about.title}
            </h2>
            <div className="space-y-6">
              {content.about.content.map((para, idx) => (
                <p key={idx} className="text-charcoal/70 leading-relaxed text-lg font-light">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-serif text-gold mb-1">20+</span>
                <span className="text-xs uppercase tracking-widest text-charcoal/50 font-semibold">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-gold mb-1">Expert</span>
                <span className="text-xs uppercase tracking-widest text-charcoal/50 font-semibold">Court Appointed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { content, isRtl } = useLanguage();

  const getIcon = (id: string) => {
    switch(id) {
      case 'inheritance': return <Landmark className="text-gold" size={32} />;
      case 'legal-opinion': return <Scale className="text-gold" size={32} />;
      case 'real-estate': return <FileText className="text-gold" size={32} />;
      case 'citizenship': return <UserCheck className="text-gold" size={32} />;
      case 'notary': return <ScrollText className="text-gold" size={32} />;
      case 'translation': return <Languages className="text-gold" size={32} />;
      default: return <Scale className="text-gold" size={32} />;
    }
  };

  const renderText = (text: string) => {
    // First, handle links like {#id|text}
    const linkRegex = /({#\w+\|[^}]+})/;
    const parts = text.split(linkRegex);

    return parts.map((part, i) => {
      const linkMatch = part.match(/{#(\w+)\|([^}]+)}/);
      if (linkMatch) {
        const [_, id, label] = linkMatch;
        return (
          <a
            key={i}
            href={`#${id}`}
            className="text-red-600 hover:text-red-700 transition-colors underline font-medium"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {label}
          </a>
        );
      }

      // Handle bold text like **text**
      const boldRegex = /(\*\*[^*]+\*\*)/;
      const subParts = part.split(boldRegex);

      return subParts.map((subPart, si) => {
        const boldMatch = subPart.match(/\*\*([^*]+)\*\*/);
        if (boldMatch) {
          return <strong key={`${i}-${si}`} className="font-bold text-charcoal">{boldMatch[1]}</strong>;
        }
        return subPart;
      });
    });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-offwhite">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-fancy text-charcoal font-light mb-4"
          >
            {content.services.title}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gold mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {content.services.items.map((service, idx) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 gold-border-t shadow-xl group border border-transparent"
            >
              <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                {getIcon(service.id)}
              </div>
              <h3 className="text-3xl font-fancy font-bold text-charcoal mb-6">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm font-medium italic mb-8 border-r-2 border-gold/30 pr-4">
                {service.description}
              </p>
              
              <div className="space-y-6 pt-4 border-t border-stone-100">
                {service.content.map((point, pIdx) => (
                  <div key={pIdx} className="text-charcoal/80 leading-relaxed font-light text-base text-justify">
                    {renderText(point)}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const { content, isRtl } = useLanguage();
  const [wordCount, setWordCount] = useState(100);

  const calculateTotal = (words: number) => {
    let total = 0;
    if (words <= 100) {
      total = 251;
    } else if (words <= 1000) {
      const extra = Math.ceil((words - 100) / 100);
      total = 251 + extra * 197;
    } else {
      const first1000 = 251 + 9 * 197; // 251 + 1773 = 2024
      const extraAbove1000 = Math.ceil((words - 1000) / 100);
      total = first1000 + extraAbove1000 * 99;
    }
    return total;
  };

  const subtotal = calculateTotal(wordCount);
  const vat = subtotal * 0.17;
  const grandTotal = subtotal + vat;

  return (
    <section id="calculator" className="py-24 md:py-32 bg-offwhite">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-fancy text-charcoal font-light mb-4">
              {content.calculator.title}
            </h2>
            <p className="text-stone-500 font-light italic">
              {content.calculator.subtitle}
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-xl gold-border-t">
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <label className="text-lg font-serif text-charcoal">
                  {content.calculator.wordCount}
                </label>
                <span className="text-2xl font-bold text-gold-dark">{wordCount}</span>
              </div>
              <input
                type="range"
                min="10"
                max="5000"
                step="10"
                value={wordCount}
                onChange={(e) => setWordCount(parseInt(e.target.value))}
                className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-gold accent-gold-dark"
              />
              <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                <span>10</span>
                <span>2500</span>
                <span>5000</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div className="space-y-4">
                <div className="flex justify-between text-stone-500">
                  <span>{content.calculator.totalExclVat}</span>
                  <span dir="ltr">{subtotal.toFixed(2)} ₪</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>{content.calculator.vatLabel}</span>
                  <span dir="ltr">{vat.toFixed(2)} ₪</span>
                </div>
                <div className="pt-4 border-t border-stone-100 flex justify-between text-2xl font-serif text-charcoal font-bold">
                  <span>{content.calculator.totalInclVat}</span>
                  <span dir="ltr">{grandTotal.toFixed(2)} ₪</span>
                </div>
              </div>

              <div className="bg-stone-50 p-6 italic text-xs leading-relaxed text-stone-400 border-r-2 border-gold/20">
                {content.calculator.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { content, isRtl, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const primaryContact = content.contact.details[0];
  const mailSubmitLabel = language === 'he'
    ? 'שליחה במייל'
    : language === 'hu'
      ? 'Küldés e-mailben'
      : 'Send by mail';
  const whatsappQuickSendLabel = language === 'he'
    ? 'שליחה מהירה ב-WhatsApp'
    : language === 'hu'
      ? 'Gyors küldés WhatsAppon'
      : 'WhatsApp quick send';

  const buildInquiryText = () => [
    `Name: ${formData.name || '-'}`,
    `Email: ${formData.email || '-'}`,
    `Phone: ${formData.phone || '-'}`,
    '',
    formData.message || '-',
  ].join('\n');

  const buildWhatsAppUrl = () => {
    if (!primaryContact?.phone) return null;

    const phoneDigits = primaryContact.phone.replace(/\D/g, '');
    const normalizedPhone = phoneDigits.startsWith('0')
      ? `972${phoneDigits.slice(1)}`
      : phoneDigits;

    const message = encodeURIComponent([
      `Hello ${primaryContact.name},`,
      '',
      `My name is ${formData.name || '-'}`,
      `Email: ${formData.email || '-'}`,
      `Phone: ${formData.phone || '-'}`,
      '',
      formData.message || '-',
    ].join('\n'));

    return `https://wa.me/${normalizedPhone}?text=${message}`;
  };

  const openWhatsAppQuickSend = () => {
    const whatsappUrl = buildWhatsAppUrl();
    if (whatsappUrl) {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const submitNetlifyForm = () => {
    const submitFrame = document.createElement('iframe');
    submitFrame.name = 'netlify-contact-submit';
    submitFrame.style.display = 'none';
    document.body.appendChild(submitFrame);

    const form = document.createElement('form');
    form.name = 'contact';
    form.method = 'POST';
    form.action = '/';
    form.target = submitFrame.name;
    form.setAttribute('data-netlify', 'true');
    form.setAttribute('netlify-honeypot', 'bot-field');

    const fields = [
      ['form-name', 'contact'],
      ['bot-field', ''],
      ['name', formData.name],
      ['email', formData.email],
      ['phone', formData.phone],
      ['message', formData.message],
      ['language', language],
    ] as const;

    fields.forEach(([fieldName, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = fieldName;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    window.setTimeout(() => {
      form.remove();
      submitFrame.remove();
    }, 1000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      submitNetlifyForm();

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('We could not send the mail right now. Please use WhatsApp or try again after deployment on Netlify.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-fancy text-charcoal mb-6">
                {content.contact.title}
              </h2>
              <p className="text-lg text-charcoal/60 font-light mb-12">
                {content.contact.subtitle}
              </p>

              <div className="space-y-12">
                {content.contact.details.map((person, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center">
                      <UserCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-charcoal mb-1">{person.name}</h4>
                      {person.role && <p className="text-gold text-sm font-medium tracking-wide uppercase mb-4">{person.role}</p>}
                      <div className="space-y-3">
                        <a href={`tel:${person.phone}`} className="flex items-center text-charcoal/70 hover:text-gold transition-colors">
                          <Phone size={16} className={`${isRtl ? 'ml-3' : 'mr-3'}`} />
                          <span dir="ltr">{person.phone}</span>
                        </a>
                        <a href={`mailto:${person.email}`} className="flex items-center text-charcoal/70 hover:text-gold transition-colors">
                          <Mail size={16} className={`${isRtl ? 'ml-3' : 'mr-3'}`} />
                          <span>{person.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#FDFCF9] p-8 md:p-12 border border-gray-100"
            >
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mb-4">
                    <UserCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-fancy text-charcoal">{content.contact.fields.success}</h3>
                  <p className="text-sm text-charcoal/60 max-w-md leading-relaxed">
                    Your message was sent through the site mail form. WhatsApp is still available for a quick chat.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" value="" />
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-charcoal/40 font-bold mb-2">
                      {content.contact.fields.name}
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      autoComplete="name"
                      className="w-full bg-white border border-gray-200 px-6 py-4 outline-none focus:border-gold transition-colors rounded-none" 
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-charcoal/40 font-bold mb-2">
                        {content.contact.fields.email}
                      </label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        autoComplete="email"
                        className="w-full bg-white border border-gray-200 px-6 py-4 outline-none focus:border-gold transition-colors rounded-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-charcoal/40 font-bold mb-2">
                        {content.contact.fields.phone}
                      </label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        autoComplete="tel"
                        className="w-full bg-white border border-gray-200 px-6 py-4 outline-none focus:border-gold transition-colors rounded-none" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-charcoal/40 font-bold mb-2">
                      {content.contact.fields.message}
                    </label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      autoComplete="off"
                      className="w-full bg-white border border-gray-200 px-6 py-4 outline-none focus:border-gold transition-colors rounded-none resize-none" 
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <div className="grid gap-4 md:grid-cols-2">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-charcoal text-white py-5 px-8 font-medium tracking-wide transition-all duration-300 active:scale-95 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold'}`}
                    >
                      {isSubmitting ? '...' : mailSubmitLabel}
                    </button>
                    <button
                      type="button"
                      onClick={openWhatsAppQuickSend}
                      className="w-full flex items-center justify-center gap-2 border border-emerald-300/60 bg-emerald-50 text-emerald-800 py-5 px-8 font-medium tracking-wide transition-all duration-300 hover:bg-emerald-100 active:scale-95"
                    >
                      <MessageCircle size={18} />
                      {whatsappQuickSendLabel}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { content } = useLanguage();
  return (
    <footer className="bg-charcoal text-white py-16 px-6 md:px-12 border-t-4 border-gold">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex gap-12 flex-wrap">
            {content.contact.details.map((person, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gold tracking-widest font-bold">
                  {person.name}
                </span>
                <span className="text-sm tracking-wide">{person.phone}</span>
                <span className="text-sm opacity-60 font-light">{person.email}</span>
              </div>
            ))}
          </div>
          <div className="text-left flex flex-col items-end justify-center">
            <p className="text-[10px] opacity-40 max-w-[400px] leading-tight mb-4 uppercase tracking-tighter text-right">
              Expert in Hungarian Law | Notary Services | Inheritance | Citizenship | Foreign Law Opinions
            </p>
            <p className="text-[9px] opacity-30 uppercase tracking-widest">
              {content.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
