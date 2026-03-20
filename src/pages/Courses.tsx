import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2, Clock, Users, Award, BookOpen, ChevronDown,
  ChevronUp, Star, Phone, Mail, MessageCircle, ArrowRight, Shield, Zap, Globe
} from 'lucide-react';

const courses = [
  {
    id: 'medical-aesthetics',
    badge: 'Most Popular',
    badgeColor: 'bg-primary text-white',
    title: 'Level 7 Medical Aesthetics for Nurses',
    subtitle: 'Become A Medical Aesthetics Practitioner',
    price: '£2,490',
    duration: '6 Months (Hybrid)',
    students: '1,200+',
    rating: 4.9,
    reviews: 340,
    image: '/assets/images/training_workshop.png',
    overview: `This comprehensive Level 7 programme is designed exclusively for registered nurses who want to specialise in medical aesthetics. Uniquely tailored to melanin-rich and African skin types, this course bridges the gap between clinical nursing excellence and the fast-growing aesthetics industry.

You will graduate fully equipped to offer botulinum toxin, dermal fillers, skin rejuvenation treatments and more — all within a safe, evidence-based clinical framework.`,
    whyChoose: [
      'Designed for African & melanin-rich skin — no more Eurocentric-only training',
      'Delivered by internationally-trained nurse practitioners with real-world experience',
      'Hybrid model: online theory + hands-on clinical practice days',
      'Small cohort sizes (max 8 per group) for personalised learning',
      'Full support for NMC registration queries throughout your journey',
      'Business mentorship module: launch your own aesthetics clinic',
    ],
    curriculum: [
      { module: 'Module 1', title: 'Foundations of Medical Aesthetics', hours: '20 hrs' },
      { module: 'Module 2', title: 'Skin Science & Diverse Skin Types', hours: '15 hrs' },
      { module: 'Module 3', title: 'Botulinum Toxin: Theory & Practice', hours: '30 hrs' },
      { module: 'Module 4', title: 'Dermal Fillers: Anatomy & Technique', hours: '30 hrs' },
      { module: 'Module 5', title: 'Skin Rejuvenation & Advanced Peels', hours: '20 hrs' },
      { module: 'Module 6', title: 'Business, Ethics & Clinic Management', hours: '15 hrs' },
    ],
    outcomes: [
      'Level 7 Certificate in Medical Aesthetics',
      'Insurance-ready qualification recognised by leading providers',
      'Competency to perform 10+ aesthetic procedures safely',
      'A business plan for your own aesthetics practice',
    ],
    faqs: [
      { q: 'Do I need to be a registered nurse?', a: 'Yes. This course is exclusively for NMC-registered nurses and midwives. It builds on your existing clinical foundation.' },
      { q: 'What are the clinic days like?', a: 'Clinic days are held at our partner training centres. You\'ll practice on models under direct supervision of experienced practitioners.' },
      { q: 'Can I get funding or payment plans?', a: 'Yes — we offer flexible payment plans. Contact us to discuss options including NHS CPD funding routes.' },
      { q: 'Is the qualification recognised internationally?', a: 'The Level 7 is UK-accredited. We also provide guidance for nurses seeking recognition in their home country.' },
    ],
  },
  {
    id: 'clinical-skills',
    badge: 'New',
    badgeColor: 'bg-gold text-navy',
    title: 'Advanced Clinical Skills Refresh',
    subtitle: 'Sharpen Your Practice, Elevate Patient Care',
    price: '£890',
    duration: '8 Weeks (Online)',
    students: '3,000+',
    rating: 4.8,
    reviews: 210,
    image: '/assets/images/mentorship_nurse.png',
    overview: `Tailored for African nurses in the diaspora returning to practice, or those stepping into new clinical environments. This fully online course refreshes essential clinical competencies, highlights differences in healthcare systems, and prepares you to perform confidently from day one.`,
    whyChoose: [
      'Purpose-built for diaspora nurses navigating new healthcare systems',
      'Covers UK, USA, Canada and Australian nursing frameworks',
      'Live weekly webinars with Q&A from senior nurse practitioners',
      'Flexible scheduling — study around your shift pattern',
      'Certificate of Completion valued by NHS and international employers',
    ],
    curriculum: [
      { module: 'Week 1-2', title: 'System Orientation: UK / USA / Canada / AU', hours: '10 hrs' },
      { module: 'Week 3', title: 'Medicines Management & Safe Administration', hours: '8 hrs' },
      { module: 'Week 4', title: 'Infection Prevention & Control (Updated IPC)', hours: '6 hrs' },
      { module: 'Week 5-6', title: 'Documentation, NMC/NMBA Standards & Law', hours: '12 hrs' },
      { module: 'Week 7', title: 'Mental Health Awareness for Clinical Staff', hours: '6 hrs' },
      { module: 'Week 8', title: 'Communication, Compassion & Cultural Safety', hours: '8 hrs' },
    ],
    outcomes: [
      'Current, confident clinical practice skills',
      'Understanding of your host country\'s regulatory framework',
      'CPD certificate (50 hours) for professional portfolio',
      'Community access to peer support network of 3,000+ nurses',
    ],
    faqs: [
      { q: 'Is this course 100% online?', a: 'Yes — all content, assessments and live sessions are delivered online so you can study from anywhere in the world.' },
      { q: 'Who is this course for?', a: 'Any registered nurse who has had a career break, recently migrated, or is preparing to work in a new country.' },
      { q: 'How long do I have access to content?', a: 'You have 12 months of access to all course materials after enrolment.' },
    ],
  },
  {
    id: 'leadership',
    badge: 'CPD Certified',
    badgeColor: 'bg-navy text-white',
    title: 'Nursing Leadership & Management',
    subtitle: 'Step Into Your Power as a Nurse Leader',
    price: '£1,190',
    duration: '12 Weeks (Hybrid)',
    students: '600+',
    rating: 4.9,
    reviews: 140,
    image: '/assets/images/community_outreach.png',
    overview: `This leadership programme is built for African nurses who are ready to move beyond the bedside and into roles of influence — ward manager, matron, CNO, or healthcare entrepreneur. It blends evidence-based leadership theory with African-centred values of community and collective action.`,
    whyChoose: [
      'African-centred leadership framework grounded in ubuntu philosophy',
      'Guest sessions from African CMOs, CNOs and healthcare CEOs',
      'Practical project: lead a real quality-improvement initiative',
      'Recognised by NHS England, HSE Ireland & international equivalents',
      'Peer coaching circles with like-minded nurse leaders',
    ],
    curriculum: [
      { module: 'Module 1', title: 'Leadership Styles & The Nurse Leader Identity', hours: '10 hrs' },
      { module: 'Module 2', title: 'Strategic Thinking in Healthcare', hours: '10 hrs' },
      { module: 'Module 3', title: 'Managing Teams & Difficult Conversations', hours: '12 hrs' },
      { module: 'Module 4', title: 'Quality Improvement & Patient Safety', hours: '10 hrs' },
      { module: 'Module 5', title: 'Finance, Budgets & Resource Management', hours: '8 hrs' },
      { module: 'Module 6', title: 'Policy, Advocacy & Leading Change', hours: '10 hrs' },
    ],
    outcomes: [
      'NHA Leadership Certificate (CPD Certified, 60 hours)',
      'A personal leadership development plan',
      'Practical quality-improvement project portfolio piece',
      'Lifelong membership in NHA Leaders Network',
    ],
    faqs: [
      { q: 'What level of experience do I need?', a: 'You should be a registered nurse with at least 2 years post-qualifying experience. Band 5 and above are ideal candidates.' },
      { q: 'Are there live sessions?', a: 'Yes — fortnightly live leadership masterclasses with guest speakers. All sessions are recorded if you cannot attend live.' },
      { q: 'Will this help me get promoted?', a: 'Many of our graduates have secured Band 7, 8a and senior management roles within 12 months of completing.' },
    ],
  },
  {
    id: 'skin-mastery',
    badge: 'Beginner Friendly',
    badgeColor: 'bg-primary/20 text-primary border border-primary/30',
    title: 'The Skin Mastery Programme',
    subtitle: 'From complete beginner to confident skin professional',
    price: 'From £1,490',
    duration: 'Self-Paced (4 Levels)',
    students: '800+',
    rating: 4.9,
    reviews: 190,
    image: '/assets/images/impact_nurse.png',
    overview: `A structured journey from foundational knowledge to clinical mastery. No previous experience required — we take you from complete beginner to confident, qualified skin professional.\n\nThis is where successful skin professionals begin their journey. Progress through four comprehensive levels, each building on the last, until you have both the clinical skills and the business acumen to thrive.`,
    whyChoose: [
      'No previous experience required — open to complete beginners',
      'Progress at your own pace through four structured levels',
      'Covers Nigerian & international market regulations for business',
      'Melanin-rich and diverse skin types covered throughout',
      'From skin science to injectable techniques — all in one pathway',
      'Includes personal branding, social media & clinic-building modules',
    ],
    curriculum: [
      { module: 'Level 3 — Entry to Aesthetics', title: 'Anatomy & Physiology · Skin barrier science · Consultations & skin analysis · First Aid & Anaphylaxis · Safety in aesthetic medicine', hours: 'Foundation' },
      { module: 'Level 4 — Advanced Skin Treatments', title: 'Professional Facials · Microneedling (Ofqual L4) · Chemical Peels (L4) · Dermaplaning · LED Therapy & Hydrofacial', hours: 'Intermediate' },
      { module: 'Level 5 — Injectables & Aesthetics', title: "Dermal Fillers (lip, nasolabial, marionette) · Botox (glabellar, forehead, crow's feet) · Profhilo & Skin Boosters · Complication management", hours: 'Advanced' },
      { module: 'Business & Ethics', title: 'Client consultation & consent · Nigerian market compliance · Personal branding & social media · Building a profitable clinic · Insurance & certification', hours: 'Business' },
    ],
    outcomes: [
      'Ofqual-recognised qualifications at Levels 3, 4 & 5',
      'Clinical competency across 12+ skin & injectable treatments',
      'A fully compliant, ready-to-launch aesthetics business plan',
      'NHA Skin Mastery certificate — recognised by insurers',
    ],
    faqs: [
      { q: 'Do I need any prior experience?', a: 'None at all. Level 3 is the perfect entry point — we cover everything from scratch including skin anatomy and first aid.' },
      { q: 'Can I join at a higher level?', a: 'Yes. If you already hold Level 3 or 4 qualifications, we can assess your prior learning and enrol you at the appropriate level.' },
      { q: 'Is this programme relevant to the Nigerian market?', a: 'Absolutely. The Business & Ethics module specifically covers Nigerian market regulations, client expectations, and building a profitable aesthetics clinic locally.' },
      { q: "What's included in the price?", a: 'Entry price covers Level 3. Each subsequent level is priced separately, or you can bundle all four for a discounted package price. Contact us for bundled pricing.' },
    ],
  },
];


type Course = (typeof courses)[0];

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id={course.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-warm-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16"
        >
          {/* Left: text */}
          <div>
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${course.badgeColor}`}>
              {course.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-3 leading-tight">{course.title}</h2>
            <p className="text-primary text-xl font-semibold italic mb-6">"{course.subtitle}"</p>

            <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-600">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />{course.duration}</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" />{course.students} enrolled</span>
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />{course.rating} ({course.reviews} reviews)</span>
            </div>

            <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-8">{course.overview}</p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2"
              >
                Enrol Now — {course.price} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="border-2 border-navy text-navy px-8 py-3 rounded-full font-bold hover:bg-navy hover:text-white transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Speak to an Advisor
              </a>
            </div>
          </div>

          {/* Right: image + price box */}
          <div className="space-y-6">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>

            <div className="bg-navy rounded-[2rem] p-8 text-white">
              <p className="text-white/60 uppercase tracking-wider text-xs font-bold mb-1">Course Investment</p>
              <p className="text-4xl font-bold text-white mb-1">{course.price}</p>
              <p className="text-white/50 text-sm mb-6">Payment plans available · Talk to us</p>
              <div className="space-y-3">
                {[`Duration: ${course.duration}`, `Group size: max 8`, `Certificate included`, `Lifetime community access`].map(f => (
                  <div key={f} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Why Choose */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" /> Why Choose This Course
            </h3>
            <div className="space-y-3">
              {course.whyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Curriculum */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" /> What You'll Cover
            </h3>
            <div className="space-y-3">
              {course.curriculum.map((mod) => (
                <div key={mod.module} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-0.5">{mod.module}</p>
                    <p className="text-navy font-semibold text-sm">{mod.title}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">{mod.hours}</span>
                </div>
              ))}
            </div>

            {/* Outcomes */}
            <div className="mt-8 bg-navy rounded-[2rem] p-6">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" /> What You'll Graduate With
              </h4>
              {course.outcomes.map((o) => (
                <div key={o} className="flex items-start gap-2 text-white/80 text-sm mb-2">
                  <Zap className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {o}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
          <h3 className="text-2xl font-bold text-navy mb-8 flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-primary" /> Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setExpanded(expanded === faq.q ? null : faq.q)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-navy hover:bg-primary/5 transition-colors"
                >
                  <span className="text-sm leading-snug pr-4">{faq.q}</span>
                  {expanded === faq.q
                    ? <ChevronUp className="w-4 h-4 text-primary shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                {expanded === faq.q && (
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Courses = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              NHA Academy
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Courses Built For <span className="text-primary">African Nurses</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
              World-class training that sees you, your skin, your patients, and your ambitions. 
              Every course is designed with the African nursing experience at its centre.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm">
              {[
                { icon: <Users className="w-5 h-5 text-primary" />, label: '5,000+ nurses trained' },
                { icon: <Globe className="w-5 h-5 text-primary" />, label: 'Recognised across 20+ countries' },
                { icon: <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />, label: '4.9/5 average rating' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">{item.icon}{item.label}</div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Course jump links */}
        <div className="max-w-4xl mx-auto px-4 mt-12 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex flex-wrap justify-center gap-3">
            {courses.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="bg-white/10 hover:bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
              >
                {c.title.split(' ').slice(0, 3).join(' ')}…
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators strip */}
      <section className="bg-primary py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { icon: <Shield className="w-6 h-6 mx-auto mb-2" />, label: 'Melanin-Rich Skin Focus' },
              { icon: <Award className="w-6 h-6 mx-auto mb-2" />, label: 'Internationally Accredited' },
              { icon: <Users className="w-6 h-6 mx-auto mb-2" />, label: 'Small Group Sizes' },
              { icon: <Zap className="w-6 h-6 mx-auto mb-2" />, label: 'Hybrid & Flexible' },
            ].map((d) => (
              <div key={d.label} className="text-sm font-semibold">
                {d.icon}
                {d.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Sections */}
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}

      {/* Contact / CTA strip */}
      <section className="bg-navy py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-4">Not Sure Which Course Is Right For You?</h2>
            <p className="text-gray-300 text-lg mb-10">
              Speak to one of our nurse advisors — a real nurse, not a salesperson. We'll help you find the best fit.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:academy@nursehub.africa" className="flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-xl">
                <Mail className="w-5 h-5" /> Email the Academy
              </a>
              <a href="/contact" className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-xl">
                <Phone className="w-5 h-5" /> Book a Free Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
