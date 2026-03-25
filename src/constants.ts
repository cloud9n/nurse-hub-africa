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
  { label: 'NHA Academy', path: '/courses' },
  { label: 'Contact', path: '/contact' },
];

export const IMPACT_STATS: Stat[] = [
  { label: 'African Nurses in Our Community', value: '1000', suffix: '+' },
  { label: 'Countries Across Africa & Diaspora', value: '54', suffix: '' },
  { label: 'Programs Transforming Knowledge', value: '4', suffix: '' },
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
    id: 'mama-aid',
    title: 'Mama Aid',
    tagline: 'Every mama deserves expert care',
    eyebrow: 'DIGITAL HEALTH NAVIGATION',
    description: 'Through AI-powered navigation, we connect diaspora nurses with expectant mothers across Africa. One nurse can now support 20-50 mothers, providing free expert healthcare guidance and life-saving triage.',
    category: 'Digital Health',
    image: '/assets/images/community_outreach.png',
    stats: [
      { label: 'mothers per navigator', value: '50-100' },
      { label: 'per mother/month', value: '£4.50' },
      { label: 'Always. For mothers.', value: 'Free' },
    ],
  },
  {
    id: 'nha-academy',
    title: 'NHA Academy',
    tagline: "Build the career you've always wanted",
    eyebrow: 'PROFESSIONAL EDUCATION',
    description: 'World-class hybrid training (online theory + hands-on practice). We specialize in Medical Aesthetics (Level 7), Clinical Skills, Business Entrepreneurship, and Leadership.',
    category: 'Education',
    image: '/assets/images/training_workshop.png',
    features: [
      'Hybrid learning model',
      'Level 7 certifications',
      'Melanin-rich skin focus',
      'Internationally-trained tutors',
    ],
  },
  {
    id: 'ubuntu-magazine',
    title: 'Ubuntu Magazine',
    tagline: 'Your stories. Your voices. Your magazine.',
    eyebrow: 'STORYTELLING & MEDIA',
    description: 'Where African nursing stories come alive. We publish in-depth profiles, migration guides, and spotlights on innovation happening across the continent. Telling our real stories, for us.',
    category: 'Media',
    image: '/assets/images/mentorship_nurse.png',
    comingSoon: true,
  },
  {
    id: 'awards',
    title: 'Pan-African Healthcare Awards',
    tagline: 'Celebrating those who elevate our profession',
    eyebrow: 'RECOGNITION & CELEBRATION',
    description: 'Honoring outstanding African nurses across clinical practice, innovation, leadership, research, and community impact. Excellence anywhere becomes recognized everywhere.',
    category: 'Recognition',
    image: '/assets/images/impact_nurse.png',
    awardCategories: [
      'Nurse of the Year',
      'Innovation in Practice',
      'Community Impact',
      'Lifetime Achievement',
    ],
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
