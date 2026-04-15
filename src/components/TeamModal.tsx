import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    role: string;
    image: string;
    bio: string;
  };
}

export const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose, member }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col md:flex-row"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Member Image */}
            <div className="w-full md:w-1/2 h-80 md:h-auto relative bg-gray-100 shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Member Info */}
            <div className="p-8 md:p-12 flex-1 overflow-y-auto max-h-[60vh] md:max-h-none">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-navy mb-2">{member.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">{member.role}</p>
              </div>
              <div className="prose prose-navy max-w-none">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
