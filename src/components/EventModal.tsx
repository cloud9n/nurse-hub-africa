import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2 } from 'lucide-react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl: string;
  title: string;
}

export const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, formUrl, title }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  // If the link is a Google Forms short link (forms.gle), we might need to be careful with embedding.
  // Ideally, the link should be the full URL with /viewform?embedded=true.
  // But for now, we'll just try to use what's provided.
  
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
            className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-navy">{title}</h3>
                <p className="text-sm text-gray-500">Register for this event below</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Iframe Content */}
            <div className="flex-1 relative bg-gray-50">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                  <div className="text-center">
                    <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Loading registration form...</p>
                  </div>
                </div>
              )}
              <iframe
                src={formUrl}
                className="w-full h-full border-none"
                onLoad={() => setIsLoading(false)}
                title={title}
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
