import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm border border-gray-100">
              <img src="/logo/logo.jpeg" alt="Nurse Hub Africa Logo" className="w-full h-full object-contain" />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>
              Nurse <span className={scrolled ? 'text-primary' : 'text-white/80'}>Hub Africa</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  scrolled 
                    ? (location.pathname === item.path ? 'text-primary' : 'text-navy hover:text-primary')
                    : (location.pathname === item.path ? 'text-white' : 'text-white/70 hover:text-white')
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors p-2 focus:outline-none ${scrolled ? 'text-navy' : 'text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-gray-50 ${
                    location.pathname === item.path ? 'text-primary' : 'text-navy'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/get-involved"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
