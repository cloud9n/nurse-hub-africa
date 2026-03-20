import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { VALUES, PROGRAMMES, TESTIMONIALS } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FormModal } from '../components/FormModal';
import { useState } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="member"
      />
      <Hero />
      <Stats />

      {/* Our Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Narrative</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Connecting African Nurses Worldwide
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Nurse Hub Africa exists because we saw something powerful: African nurses possess extraordinary expertise, earned through rigorous training and practice across the globe. Yet this knowledge wasn't flowing back to the communities where it could save lives and transform healthcare systems.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Founded in 2017, we set out to change that. Today, we're the largest Pan-African nursing community, connecting over 100,000 nurses across 54 countries and the diaspora. We don't just network—we create tangible impact through four flagship programs that promote healthcare knowledge exchange in innovative, sustainable ways.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-primary font-bold hover:underline group"
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
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/impact_nurse.png"
                  alt="African Nurses Excellence"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-navy text-4xl font-bold mb-1">100k+</p>
                <p className="text-navy/70 font-bold text-sm uppercase tracking-wider">Expert Navigators</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The Power of Connection</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Why It Matters</h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Here's what most people don't understand about healthcare in Africa: the expertise exists. African nurses working in London, Toronto, Sydney, and New York are among the best-trained healthcare professionals in the world.
                </p>
                <p>
                  The problem isn't knowledge. It's distance. It's access. It's the practical barriers that prevent a nurse in Manchester from supporting her home community in Accra.
                </p>
                <p>
                  That's why Nurse Hub Africa exists. We don't just connect nurses—we create systems that enable diaspora expertise to flow back home in meaningful, measurable ways.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Mama Aid', desc: 'A nurse in London supports 50 mothers in Lagos via AI navigation.' },
                { title: 'NHA Academy', desc: 'Access training across Africa previously only available abroad.' },
                { title: 'Ubuntu Magazine', desc: 'Success stories in Nairobi inspire students in Johannesburg.' },
                { title: 'Excellence Everywhere', desc: 'Awards ensure brilliance anywhere is recognized everywhere.' }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
                >
                  <h4 className="text-primary font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
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
                Join 100,000+ African Nurses
              </h3>
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Whether you trained in Kampala or Cardiff, work in Abuja or Alberta, you belong here. We're transforming healthcare across an entire continent.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
                {[
                  'Exclusive training & development',
                  'Network across 54 countries',
                  'Mama Aid opportunities',
                  'Career guidance & mentorship',
                  'Recognition & awards',
                  'Transform African healthcare'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-gold hover:text-navy transition-all shadow-xl"
                >
                  Join Our Community (It's Free)
                </button>
                <Link
                  to="/get-involved"
                  className="bg-navy text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all border border-white/10"
                >
                  Get Involved
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
