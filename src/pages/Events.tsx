import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EVENTS } from '../constants';
import { Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';
import { EventModal } from '../components/EventModal';
import { Event } from '../types';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = (event: Event) => {
    if (event.link && event.link !== '#') {
      setSelectedEvent(event);
      setIsModalOpen(true);
    }
  };

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Upcoming Events</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join our workshops, webinars, and summits to connect with nursing leaders and peers across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {EVENTS.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-warm-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 flex flex-col lg:flex-row gap-12 items-center hover:shadow-2xl transition-all"
              >
                <div className="w-full lg:w-48 h-48 bg-primary rounded-3xl flex flex-col items-center justify-center text-white shrink-0 shadow-lg">
                  <Calendar className="w-10 h-10 mb-2" />
                  <span className="text-2xl font-bold">2026</span>
                  <span className="text-sm font-medium uppercase tracking-widest">Upcoming</span>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-primary uppercase tracking-widest">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-navy">{event.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="w-full lg:w-auto">
                  <button 
                    onClick={() => handleRegisterClick(event)}
                    className="w-full lg:w-auto bg-navy text-white px-10 py-4 rounded-full font-bold hover:bg-primary transition-all flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!event.link || event.link === '#'}
                  >
                    {event.link && event.link !== '#' ? 'Register Now' : 'Coming Soon'}
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Past Events Link */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 mb-6">Looking for past event summaries and photos?</p>
            <button className="text-primary font-bold hover:underline">View Past Events Archive</button>
          </div>
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Host an Event with Us</h3>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Are you an organization looking to reach African nurses? Partner with us to host your next healthcare event.
          </p>
          <button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-navy hover:text-white transition-all shadow-2xl">
            Partner Enquiry
          </button>
        </div>
      </section>

      {/* Registration Modal */}
      {selectedEvent && (
        <EventModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          formUrl={selectedEvent.link}
          title={selectedEvent.title}
        />
      )}
    </main>
  );
};

export default Events;
