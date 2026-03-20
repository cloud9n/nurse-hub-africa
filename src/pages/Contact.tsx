import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-warm-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions or want to partner with us? We'd love to hear from you. Reach out through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-navy mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-xl mb-1">Our Office</h4>
                      <p className="text-gray-600 leading-relaxed">
                        1844 Mahathir Mohammed Street,<br />
                        Abuja, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-xl mb-1">Email Us</h4>
                      <p className="text-gray-600">nursehubafr@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Instagram className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-xl mb-1">Follow Us</h4>
                      <p className="text-gray-600">@nursehubafrica</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-primary rounded-3xl p-8 text-white flex items-center justify-between shadow-xl shadow-primary/20">
                <div>
                  <h4 className="font-bold text-xl mb-1">Quick Chat?</h4>
                  <p className="text-white/80 text-sm">Message us on WhatsApp for quick enquiries.</p>
                </div>
                <a
                  href="https://wa.me/234XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform shadow-lg"
                >
                  <MessageCircle className="w-7 h-7" />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-warm-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-navy mb-8 text-center">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy ml-1">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:border-primary appearance-none">
                    <option>General Enquiry</option>
                    <option>Partnership</option>
                    <option>Volunteering</option>
                    <option>Membership</option>
                    <option>Donation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy ml-1">Message</label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-navy text-white py-5 rounded-full font-bold text-xl hover:bg-primary transition-all flex items-center justify-center group shadow-xl">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
        {/* Placeholder for Google Map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
            <p className="text-navy font-bold">1844 Mahathir Mohammed Street, Abuja</p>
            <p className="text-gray-500 text-sm">Google Map Integration Placeholder</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
