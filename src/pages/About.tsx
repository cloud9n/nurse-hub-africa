import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Award, History } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-navy relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Nurse Hub Africa</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Every African nurse empowered. Every African community served.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Journey</h2>
              <h3 className="text-4xl font-bold text-navy mb-8 leading-tight">From Lagos to London to Leading Change</h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Nurse Hub Africa was born from a simple observation that led to a powerful question.
                </p>
                <p>
                  The observation: Over 1000 African nurses work abroad—in the UK, USA, Canada, Australia, and across Europe. These aren't just any nurses. They're among the best-trained healthcare professionals in the world, having navigated rigorous international licensing and practiced in state-of-the-art facilities.
                </p>
                <p>
                  The question: What if this diaspora expertise could flow back to African communities in meaningful, sustainable ways?
                </p>
                <p>
                  Founded in 2017 in Nigeria, we started as a community supporting each other through migration and practice abroad. Today, we've evolved into a movement of 1000+ nurses across multiple countries, proving that diaspora doesn't mean disconnect—it means expanded capacity.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/training_workshop.png"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 bg-primary p-10 rounded-full shadow-xl hidden md:block">
                <History className="text-white w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-primary font-semibold mb-6 italic border-l-4 border-primary pl-4 uppercase tracking-wide text-sm">
                Connecting and empowering African nurses worldwide to promote healthcare knowledge exchange.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every word matters here. We don't just 'connect' nurses—we empower them with tools, training, and opportunities. We're not limited to Africa or the diaspora—we're worldwide. Our purpose is specific: promoting healthcare knowledge exchange that saves lives and transforms systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-navy p-12 rounded-[3rem] text-white shadow-xl shadow-navy/20"
            >
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center text-navy mb-8">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gold font-semibold mb-6 italic border-l-4 border-gold pl-4 uppercase tracking-wide text-sm">
                Every African nurse empowered. Every African community served.
              </p>
              <p className="text-white/70 leading-relaxed">
                This is the world we're building. One where no African nurse feels limited by geography, resources, or opportunity. One where no African community lacks access to healthcare expertise because distance gets in the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
