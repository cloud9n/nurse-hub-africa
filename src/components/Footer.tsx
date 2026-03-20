import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm border border-navy/10">
                <img src="/logo/logo.jpeg" alt="Nurse Hub Africa Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                NURSE HUB <span className="text-primary">AFRICA</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering nurses through education, mentorship, advocacy, and innovation to improve healthcare delivery across African communities.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/nursehubafrica" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:nursehubafr@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programmes" className="hover:text-white transition-colors">Programmes</Link></li>
              <li><Link to="/get-involved" className="hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & News</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>1844 Mahathir Mohammed Street, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>nursehubafr@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+234 (0) XXX XXX XXXX</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay updated with our latest impact stories and programmes.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-primary text-sm"
              />
              <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Nurse Hub Africa. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed by cLOUDig Global — Project 20·20·20</p>
        </div>
      </div>
    </footer>
  );
};
