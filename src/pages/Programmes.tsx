import React from 'react';
import { motion } from 'motion/react';
import { PROGRAMMES } from '../constants';
import { ArrowRight, BookOpen, Users, HeartPulse, Lightbulb } from 'lucide-react';

const Programmes = () => {
  const categories = [
    { name: 'Training', icon: <BookOpen className="w-6 h-6" />, desc: 'Workshops & Webinars' },
    { name: 'Mentorship', icon: <Users className="w-6 h-6" />, desc: 'Career Guidance' },
    { name: 'Outreach', icon: <HeartPulse className="w-6 h-6" />, desc: 'Community Health' },
    { name: 'Innovation', icon: <Lightbulb className="w-6 h-6" />, desc: 'Research & Tools' },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Programmes</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Empowering African nurses to lead, innovate, and transform healthcare through structured initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-white -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 text-center hover:border-primary transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  {cat.icon}
                </div>
                <h4 className="font-bold text-navy mb-1">{cat.name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Programmes */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {PROGRAMMES.map((prog, index) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="flex-1">
                  <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {prog.category}
                  </span>
                  <h3 className="text-4xl font-bold text-navy">{prog.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {prog.description}
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3 text-navy font-medium">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Interactive learning environments</span>
                    </li>
                    <li className="flex items-center space-x-3 text-navy font-medium">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Expert-led sessions and workshops</span>
                    </li>
                    <li className="flex items-center space-x-3 text-navy font-medium">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>Certification and professional recognition</span>
                    </li>
                  </ul>
                  <button className="bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all flex items-center group">
                    Learn More & Apply
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Have a Programme Idea?</h3>
              <p className="text-xl text-white/70 mb-8">
                We are always looking for innovative ways to support African nurses. Partner with us to launch a new initiative.
              </p>
              <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-navy transition-all">
                Partner With Us
              </button>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">NH</div>
                  <div>
                    <p className="text-white font-bold">Nurse Hub Africa</p>
                    <p className="text-white/50 text-sm">Innovation Lab</p>
                  </div>
                </div>
                <p className="text-white/80 italic mb-6">
                  "Our goal is to foster a well-equipped, globally competitive, and highly motivated nursing workforce."
                </p>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programmes;
