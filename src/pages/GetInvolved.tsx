import React, { useState } from 'react';
import { motion } from 'motion/react';
import { UserPlus, HandHelping, Handshake, Heart, ArrowRight } from 'lucide-react';
import { FormModal } from '../components/FormModal';

const GetInvolved = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState<'member' | 'volunteer' | 'partner'>('member');

  const options = [
    {
      title: 'Become a Member',
      desc: 'Join our growing community of 1,000+ nurses across Africa and the diaspora.',
      icon: <UserPlus className="w-8 h-8" />,
      color: 'bg-primary',
      cta: 'Join Now',
      type: 'member' as const
    },
    {
      title: 'Volunteer',
      desc: 'Register as a volunteer for our community outreach and health education activities.',
      icon: <HandHelping className="w-8 h-8" />,
      color: 'bg-navy',
      cta: 'Sign Up',
      type: 'volunteer' as const
    },
    {
      title: 'Partner With Us',
      desc: 'Institutional collaboration opportunities for hospitals, clinics, and NGOs.',
      icon: <Handshake className="w-8 h-8" />,
      color: 'bg-gold',
      cta: 'Enquire',
      type: 'partner' as const
    }
  ];

  const openForm = (type: 'member' | 'volunteer' | 'partner') => {
    setFormType(type);
    setModalOpen(true);
  };

  return (
    <main className="pt-24">
      <FormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={formType}
      />
      {/* Hero */}
      <section className="py-20 bg-warm-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">Get Involved</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              There are many ways to support our mission. Whether you're a nurse, a volunteer, or a donor, your contribution matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((opt, index) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-warm-white p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all group"
              >
                <div className={`w-16 h-16 ${opt.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                  {opt.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{opt.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{opt.desc}</p>
                <button
                  onClick={() => openForm(opt.type)}
                  className="w-full py-4 rounded-full border-2 border-navy text-navy font-bold hover:bg-navy hover:text-white transition-all flex items-center justify-center group"
                >
                  {opt.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            <div className="flex-1 p-12 md:p-20">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Heart className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold text-navy mb-6">Support Our Cause</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Your donations help us fund training workshops, community outreach programmes, and research initiatives that strengthen African healthcare.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {['$10', '$25', '$50', '$100'].map(amount => (
                  <button key={amount} className="py-4 rounded-xl border-2 border-gray-100 text-navy font-bold hover:border-primary hover:text-primary transition-all">
                    {amount}
                  </button>
                ))}
                <button className="col-span-2 py-4 rounded-xl border-2 border-gray-100 text-gray-400 font-medium hover:border-primary transition-all">
                  Custom Amount
                </button>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-full font-bold text-xl hover:bg-opacity-90 transition-all shadow-xl shadow-primary/20">
                Donate via Paystack
              </button>
              <p className="text-center text-xs text-gray-400 mt-6">
                Secure payment integration powered by Paystack / Flutterwave
              </p>
            </div>
            <div className="flex-1 relative hidden lg:block">
              <img
                src="/event-photos/IMG_8989.PNG"
                alt="Support"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;
