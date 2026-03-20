import { NavItem, Stat, Value, Programme, Testimonial, BlogPost, Event } from './types';
import { Award, Users, Heart, Shield, Lightbulb, Globe } from 'lucide-react';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programmes', path: '/programmes' },
  { label: 'Get Involved', path: '/get-involved' },
  // { label: 'Blog', path: '/blog' },
  // { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

export const IMPACT_STATS: Stat[] = [
  { label: 'Members Across Africa', value: '1000', suffix: '+' },
  { label: 'Years of Impact', value: '8', suffix: '' },
  { label: 'Awards Won', value: '5', suffix: '+' },
  { label: 'Communities Reached', value: '50', suffix: '+' },
];

export const VALUES: Value[] = [
  {
    title: 'Excellence',
    description: 'We hold ourselves and our community to the highest professional standards. African nurses are world-class practitioners.',
    icon: React.createElement(Award, { className: "w-8 h-8" }),
  },
  {
    title: 'Unity',
    description: 'We believe in the power of collective action. When African nurses unite, we become an unstoppable force.',
    icon: React.createElement(Users, { className: "w-8 h-8" }),
  },
  {
    title: 'Empowerment',
    description: 'We build capacity. Every programme is designed to empower African nurses to lead and innovate.',
    icon: React.createElement(Heart, { className: "w-8 h-8" }),
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency and accountability. Trust is the foundation of everything we build.',
    icon: React.createElement(Shield, { className: "w-8 h-8" }),
  },
  {
    title: 'Innovation',
    description: 'We embrace new ideas and technologies. The future of nursing is being written by African nurses.',
    icon: React.createElement(Lightbulb, { className: "w-8 h-8" }),
  },
  {
    title: 'Pan-African Pride',
    description: 'We celebrate our African heritage while embracing our global presence. Rooted in Africa, branching worldwide.',
    icon: React.createElement(Globe, { className: "w-8 h-8" }),
  },
];

export const PROGRAMMES: Programme[] = [
  {
    id: '1',
    title: 'Training Workshops & Webinars',
    description: 'Professional development sessions covering clinical skills, leadership, and healthcare innovation.',
    category: 'Training',
    image: '/assets/images/training_workshop.png',
  },
  {
    id: '2',
    title: 'Mentorship Programme',
    description: 'Connecting experienced nursing leaders with students and early-career professionals.',
    category: 'Mentorship',
    image: '/assets/images/mentorship_nurse.png',
  },
  {
    id: '3',
    title: 'Community Outreach',
    description: 'Providing healthcare services and health education to underserved populations across the continent.',
    category: 'Outreach',
    image: '/assets/images/community_outreach.png',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Mensah',
    role: 'Student Nurse, Ghana',
    quote: 'The mentorship programme changed my career trajectory. I feel more confident and prepared for the challenges ahead.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    name: 'Dr. Kofi Adu',
    role: 'Healthcare Partner',
    quote: 'Nurse Hub Africa is bridging a critical gap in African healthcare. Their commitment to excellence is inspiring.',
     image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&h=400&q=80',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Nursing in Africa',
    excerpt: 'Exploring how technology and innovation are transforming healthcare delivery across the continent.',
    date: 'March 15, 2026',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Advocacy for Better Working Conditions',
    excerpt: 'Why policy reform is essential for retaining nursing talent in African healthcare systems.',
    date: 'March 10, 2026',
    category: 'Advocacy',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
];

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Pan-African Nursing Summit 2026',
    date: 'June 20-22, 2026',
    location: 'Abuja, Nigeria & Online',
    description: 'Our flagship annual event bringing together nursing leaders from across the globe.',
    link: '#',
  },
  {
    id: '2',
    title: 'Webinar: Digital Health for Nurses',
    date: 'April 15, 2026',
    location: 'Zoom',
    description: 'Learn how to leverage digital tools in your daily clinical practice.',
    link: '#',
  },
];
