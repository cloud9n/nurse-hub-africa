import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Award, History } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Nurse Hub Africa is established to empower nurses and strengthen healthcare systems across the African continent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-warm-white p-12 rounded-[2rem] border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower nurses through education, mentorship, advocacy, and innovation, thereby improving healthcare delivery and outcomes across African communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy p-12 rounded-[2rem] text-white"
            >
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center text-navy mb-8">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To become a leading platform for nursing excellence in Africa — fostering a well-equipped, globally competitive, and highly motivated nursing workforce.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/training_workshop.png"
                  alt="Organization Background"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Background</h2>
              <h3 className="text-4xl font-bold text-navy mb-8">Bridging Critical Gaps</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Recognising the indispensable role nurses play in delivering quality care, Nurse Hub Africa was founded to bridge critical gaps in professional development, capacity building, and healthcare innovation within the nursing community.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that African nurses are world-class practitioners, and our goal is to provide them with the tools and platform they need to lead the future of healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Journey</h2>
            <h3 className="text-4xl font-bold text-navy">Timeline of Milestones</h3>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {[
                { year: '2018', title: 'Founded', desc: 'Nurse Hub Africa was established with a vision for nursing excellence.' },
                { year: '2019', title: 'Pan-African Award', desc: 'Received the Pan-African Healthcare Professionals Award celebrating nursing excellence.' },
                { year: '2019', title: 'Nursing Now Campaign', desc: 'Launched the Nursing Now Campaign in Nigeria to elevate the profession.' },
                { year: '2020+', title: 'Global Expansion', desc: 'Reached 1,000+ members and established UK Community Interest Company status.' },
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:w-auto">
                    <div className={`bg-warm-white p-8 rounded-3xl border border-gray-100 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <span className="text-primary font-bold text-xl mb-2 block">{milestone.year}</span>
                      <h4 className="text-2xl font-bold text-navy mb-3">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0 flex items-center justify-center text-white">
                    <History className="w-6 h-6" />
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
