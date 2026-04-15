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
  { label: 'Countries Across Africa & Diaspora', value: '6', suffix: '+' },
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
    title: 'Mama Aid+',
    tagline: 'Every mama deserves expert care',
    eyebrow: 'DIGITAL HEALTH NAVIGATION',
    description: 'Through AI-powered navigation, we connect diaspora nurses with expectant mothers across Africa. One nurse can now support 20-50 mothers, providing free expert healthcare guidance and life-saving triage.',
    category: 'Digital Health',
    image: '/event-photos/IMG_8989.PNG',
    stats: [
      { label: 'mothers per navigator', value: '20-50' },
      { label: 'per mother/month', value: '£14.99' },
      { label: 'Always. For mothers.', value: 'Free' },
    ],
  },
  {
    id: 'nha-academy',
    title: 'NHA Academy',
    tagline: "Build the career you've always wanted",
    eyebrow: 'PROFESSIONAL EDUCATION',
    description: 'World-class hybrid training (online theory + hands-on practice). We specialize in Medical Aesthetics (Level 5), Clinical Skills, Business Entrepreneurship, and Leadership.',
    category: 'Education',
    image: '/event-photos/IMG_9041.PNG',
    features: [
      'Hybrid learning model',
      'Level 6 certifications',
      'Melanin-rich skin focus',
      'Internationally-trained tutors',
    ],
  },
  {
    id: 'nke-africa-magazine',
    title: 'Nke Africa Magazine',
    tagline: 'Your stories. Your voices. Your magazine.',
    eyebrow: 'STORYTELLING & MEDIA',
    description: 'Where African nursing stories come alive. We publish in-depth profiles, migration guides, and spotlights on innovation happening across the continent. Telling our real stories, for us.',
    category: 'Media',
    image: '/event-photos/IMG_9068.PNG',
    comingSoon: true,
  },
  {
    id: 'awards',
    title: 'Pan-African Healthcare Awards',
    tagline: 'Celebrating those who elevate our profession',
    eyebrow: 'RECOGNITION & CELEBRATION',
    description: 'Honoring outstanding African nurses across clinical practice, innovation, leadership, research, and community impact. Excellence anywhere becomes recognized everywhere.',
    category: 'Recognition',
    image: '/event-photos/IMG_8988.PNG',
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
    title: 'London City Mixer',
    date: 'July, 2026',
    location: 'London',
    description: 'An upcoming networking event for healthcare professionals in London.',
    link: 'https://forms.gle/hdG8CMsGSD7RnqHK6',
  },
  {
    id: '2',
    title: 'Nurse Hub Africa Launching Event',
    date: 'September 2026',
    location: 'London',
    description: 'Join us for the official launching event of Nurse Hub Africa in London.',
    link: '#',
  },
  {
    id: '3',
    title: 'The PAHP Awards and Pan-African Healthcare Summit',
    date: 'August 2027',
    location: 'TBA',
    description: 'Celebrating excellence and discussing the future of healthcare in Africa.',
    link: '#',
  },
  {
    id: '4',
    title: 'London City Mixer (Networking Event)',
    date: 'Coming Soon',
    location: 'London',
    description: 'An upcoming networking event for healthcare professionals in London.',
    link: '#',
  },
];
