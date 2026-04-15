import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Users, Clock, Sparkles } from 'lucide-react';
import { EventModal } from './EventModal';

const LONDON_MIXER_FORM_URL = 'https://forms.gle/hdG8CMsGSD7RnqHK6';

const eventDetails = {
  title: 'NHA LONDON MIXER',
  subtitle: 'The Room You\'ve Been Looking For.',
  date: 'July 2026',
  location: 'London',
  tagline: 'You didn\'t cross oceans to sit on the sidelines.',
  description: 'You are talented, qualified, and building something remarkable in the UK. Now it\'s time to be in a room full of people who get it — because they\'re doing it too.',
  highlight: 'Nurse Hub Africa invites you to London\'s most exciting nursing mixer of the year.',
  energy: 'Think sharp conversations. Real connections. Big energy. And a room full of African nurses who are thriving, leading, and owning their space in UK healthcare.',
  notAverage: 'This Is Not Your Average Networking Event.',
  collaboration: 'This is the room where your next collaboration starts.',
  mentor: 'Where your next mentor walks in.',
  revelation: 'Where someone says "I was thinking the same thing."',
  movement: 'Come ready to connect, celebrate, and plug into a movement that is redefining what African nursing looks like on a global stage.',
  includes: [
    'Welcome cocktails & Afrobeats vibes',
    'High-energy networking with ambitious African nurses',
    'Inspiring stories from nurses making waves in the UK',
    'Exclusive NHA announcements you won\'t want to miss',
    'Light bites, great energy, and even better people'
  ],
  limited: 'Spaces strictly limited to 50'
};

export const LondonMixerPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('londonMixerSeen');
    if (!seen) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('londonMixerSeen', 'true');
    setHasSeen(true);
  };

  const handleRegister = () => {
    setIsVisible(false);
    setIsModalOpen(true);
  };

  if (hasSeen) return null;

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-gray-100 text-gray-500 transition-colors z-10 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="/upcoming-events/london-city-mixer.jpeg"
                    alt="NHA London Mixer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent md:bg-gradient-to-r md:from-navy/80 md:via-navy/40 md:to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{eventDetails.location}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4" />
                      <span>{eventDetails.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gold">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-bold">{eventDetails.limited}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col">
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Upcoming Event</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">{eventDetails.title}</h2>
                  <p className="text-primary font-semibold text-lg mb-4">{eventDetails.subtitle}</p>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    <span className="text-navy font-medium italic">"{eventDetails.tagline}"</span> {eventDetails.description}
                  </p>

                  <p className="text-gray-700 font-medium mb-4">{eventDetails.highlight}</p>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {eventDetails.energy}
                  </p>

                  <div className="bg-navy/5 p-4 rounded-2xl mb-6">
                    <p className="text-navy font-bold text-lg mb-2">{eventDetails.notAverage}</p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>{eventDetails.collaboration}</li>
                      <li>{eventDetails.mentor}</li>
                      <li>{eventDetails.revelation}</li>
                    </ul>
                    <p className="text-gray-700 mt-3 font-medium">{eventDetails.movement}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-navy font-bold mb-3">The Evening Includes:</p>
                    <ul className="space-y-2">
                      {eventDetails.includes.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handleRegister}
                    className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:bg-navy transition-all shadow-lg shadow-primary/30 mt-auto"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formUrl={LONDON_MIXER_FORM_URL}
        title={eventDetails.title}
      />
    </>
  );
};
