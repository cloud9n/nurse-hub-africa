import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { VALUES, PROGRAMMES, TESTIMONIALS } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />

      {/* Impact Since 2018 Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Our Impact Since 2018
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Since its founding, Nurse Hub Africa has achieved significant milestones that demonstrate its growing influence across the continent and beyond.
              </p>
              <div className="space-y-4">
                {[
                  '1,000+ members across Africa and global diaspora',
                  'Pan-African Healthcare Professionals Award (2019)',
                  'Nursing Now Campaign launched in Nigeria (2019)',
                  'UK Community Interest Company status',
                  'International recognition as Africa’s premier nursing org'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                    <span className="text-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center mt-10 text-primary font-bold hover:underline group"
              >
                Read our full story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/impact_nurse.png"
                  alt="Impact"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-navy text-4xl font-bold mb-1">100%</p>
                <p className="text-navy/70 font-bold text-sm uppercase tracking-wider">Dedicated to Africa</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Foundation</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy mb-6">Core Values</h3>
            <p className="text-gray-600 text-lg">
              Nurse Hub Africa's work is grounded in six foundational values that guide every programme, partnership, and interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-navy mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">What We Do</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-navy">Our Programmes</h3>
            </div>
            <Link
              to="/programmes"
              className="bg-navy text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-all"
            >
              View All Programmes
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMMES.map((prog, index) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {prog.category}
                    </span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                  {prog.title}
                </h4>
                <p className="text-gray-600 line-clamp-2">{prog.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Voices of Impact</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">What Our Community Says</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testi, index) => (
              <motion.div
                key={testi.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl"
              >
                <p className="text-xl text-white/90 italic mb-8 leading-relaxed">
                  "{testi.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testi.image}
                    alt={testi.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="text-white font-bold">{testi.name}</h5>
                    <p className="text-primary text-sm font-medium">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to Join the Narrative of African Nursing?
              </h3>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Whether you're a student, a professional, or a potential partner, there's a place for you in our mission.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  to="/get-involved"
                  className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-gold hover:text-navy transition-all shadow-xl"
                >
                  Get Involved
                </Link>
                <Link
                  to="/contact"
                  className="bg-navy text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all border border-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
