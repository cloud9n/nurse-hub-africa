import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Value {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface Programme {
  id: string;
  title: string;
  description: string;
  category: 'Training' | 'Mentorship' | 'Outreach' | 'Innovation';
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  link: string;
}
