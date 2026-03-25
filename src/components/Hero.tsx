import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FormModal } from './FormModal';

export const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <FormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="member"
      />
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_nurses.png"
          alt="African Nurses"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-xs uppercase tracking-widest mb-6">
              Empowering African Nurses
            </span> */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Empowering African Nurses. <span className="text-primary italic">Elevating</span> African Nursing.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              We are a Pan-African community of 1000+ nurses across  countries and the diaspora, united by one mission: connecting expertise with communities that need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-opacity-90 transition-all shadow-xl hover:shadow-primary/20 group"
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-white/20 transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating element */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-xs">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
              <Award className="text-navy w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Pan-African Award</p>
              <p className="text-white/60 text-xs">Healthcare Excellence 2019</p>
            </div>
          </div>
          <p className="text-white/80 text-sm italic">
            "Celebrating nursing excellence across the continent and global diaspora."
          </p>
        </div>
      </div>
    </section>
  );
};
