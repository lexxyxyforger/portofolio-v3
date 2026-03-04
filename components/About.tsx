'use client';

import { useState, useRef } from 'react';
import { motion, Variants, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } }
};

const chipIn: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }
};

const techCategories = [
  {
    name: "Languages",
    color: "cyan",
    tools: [
      { name: 'JavaScript', icon: <><rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M12 12V17M15.5 14.5C15.5 16 14.5 17 13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'TypeScript', icon: <><path d="M2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z" stroke="currentColor" strokeWidth="2"/><path d="M7 7H11M9 7V17M14 10C14 8.5 15 7 17 7C19 7 20 8.5 20 10V14C20 15.5 19 17 17 17C15 17 14 15.5 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Python', icon: <><path d="M12 2C9 2 8 3.5 8 5V8H13V9H6C4 9 2 10.5 2 13C2 15.5 4 17 6 17H8V14C8 12 9.5 10 12 10H16C18 10 19 8.5 19 7V5C19 3 17 2 14 2H12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 22C15 22 16 20.5 16 19V16H11V15H18C20 15 22 13.5 22 11C22 8.5 20 7 18 7H16V10C16 12 14.5 14 12 14H8C6 14 5 15.5 5 17V19C5 21 7 22 10 22H12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="10" cy="5" r="1" fill="currentColor"/><circle cx="14" cy="19" r="1" fill="currentColor"/></> },
      { name: 'PHP', icon: <><ellipse cx="12" cy="12" rx="10" ry="7" stroke="currentColor" strokeWidth="2"/><path d="M7 12V10C7 8.89543 7.89543 8 9 8H10C11.1046 8 12 8.89543 12 10V10C12 11.1046 11.1046 12 10 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 14V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Java', icon: <><path d="M8 17C8 17 6 18 9 19C12 20 15 19 15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6 21C6 21 7 20 12 20C17 20 18 21 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9 3C9 3 15 7 11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M15 5C15 5 17 8 13 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'C', icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M16 8C14.8 6.8 13.5 6 12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C13.5 18 14.8 17.2 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'C#', icon: <><path d="M16 8C14.8 6.8 13.5 6 12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C13.5 18 14.8 17.2 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M17 9V15M19 9V15M16 11H20M16 13H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></> },
      { name: 'C++', icon: <><path d="M16 8C14.8 6.8 13.5 6 12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C13.5 18 14.8 17.2 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M16 12H22M19 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'HTML5', icon: <><path d="M4 3L5.77778 19.3556L12 21L18.2222 19.3556L20 3H4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M16 7H8L8.5 11H15.5L15 16L12 17L9 16L8.8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
      { name: 'CSS3', icon: <><path d="M4 3L5.77778 19.3556L12 21L18.2222 19.3556L20 3H4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M15.5 7H8L8.3 10H15.2L14.8 15L12 16.5L9.2 15L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
    ]
  },
  {
    name: "Frontend",
    color: "blue",
    tools: [
      { name: 'Next.js', icon: <path d="M13 10L8 15M10.5 12.5L16 7M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/> },
      { name: 'React', icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/></> },
      { name: 'React Native', icon: <><circle cx="12" cy="12" r="2.5" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/></> },
      { name: 'Nuxt JS', icon: <><path d="M2 19L9 5L16 19H2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M13 19L18 9L22 19H13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></> },
      { name: 'SolidJS', icon: <><path d="M3 6L12 2L21 6L12 10L3 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M3 12L12 16L21 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M3 18L12 22L21 18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></> },
      { name: 'Tailwind', icon: <><path d="M12 6L4 10L12 14L20 10L12 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M4 14L12 18L20 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></> },
      { name: 'SASS', icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M15 9C15 7 13 7 12 7C10 7 9 8 9 9C9 12 16 11 16 15C16 16.5 14.5 17 13 17C10 17 8 15 8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Semantic UI', icon: <><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></> },
      { name: 'Framer', icon: <><path d="M12 2L19 9H5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M5 9L12 16L19 9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M5 16L12 23V16H5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></> },
      { name: 'Three.js', icon: <><path d="M12 2L22 8V16L12 22L2 16V8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 2V22M2 8L22 16M22 8L2 16" stroke="currentColor" strokeWidth="1.5"/></> },
      { name: 'Chart.js', icon: <><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 17V13M11 17V9M15 17V11M19 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'React Router', icon: <><circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="2"/><path d="M12 9V12M9 15L7 16M15 15L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Hook Form', icon: <><rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 7H16M8 11H16M8 15H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M14 15L15.5 17L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
      { name: 'Webpack', icon: <><path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 8L17 11V16L12 19L7 16V11L12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></> },
    ]
  },
  {
    name: "Backend & APIs",
    color: "emerald",
    tools: [
      { name: 'Node.js', icon: <><path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 11V17M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Express.js', icon: <><path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M4 6H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M4 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M18 6L22 12L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
      { name: 'NestJS', icon: <><path d="M12 2L4 6V18L12 22L20 18V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><path d="M12 8V4M12 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Meteor JS', icon: <><path d="M19 3L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M16 3L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M21 7L10 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></> },
      { name: 'Socket.io', icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 7L7 12H12L12 17L17 12H12V7Z" fill="currentColor"/></> },
      { name: 'JWT', icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 6V18M6 12H18M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></> },
      { name: 'Nodemon', icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 15C10 17 14 17 16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="10" r="1.5" fill="currentColor"/><circle cx="15" cy="10" r="1.5" fill="currentColor"/></> },
      { name: 'GraphQL', icon: <><path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></> },
      { name: 'Prisma', icon: <><path d="M12 2L20 8V16L12 22L4 16V8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 2V22" stroke="currentColor" strokeWidth="1.5"/><path d="M4 8L20 16M20 8L4 16" stroke="currentColor" strokeWidth="1"/></> },
      { name: 'NPM', icon: <><rect x="2" y="4" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="2"/><path d="M6 8V16M10 8V14M14 8V16M18 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
    ]
  },
  {
    name: "Database",
    color: "orange",
    tools: [
      { name: 'PostgreSQL', icon: <><path d="M6 4C4 4 3 6 3 8V16C3 18 4 20 6 20H18C20 20 21 18 21 16V8C21 6 20 4 18 4H6Z" stroke="currentColor" strokeWidth="2"/><path d="M3 12H21" stroke="currentColor" strokeWidth="2"/><path d="M12 4V20" stroke="currentColor" strokeWidth="2"/></> },
      { name: 'MySQL', icon: <><path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" stroke="currentColor" strokeWidth="2"/><path d="M8 9V15M8 12H12V9M12 15V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="12" r="2" stroke="currentColor" strokeWidth="2"/></> },
      { name: 'MongoDB', icon: <><path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></> },
      { name: 'Supabase', icon: <><path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
      { name: 'Redis', icon: <><path d="M12 4L20 8V16L12 20L4 16V8L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M4 8L12 12L20 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 12V20" stroke="currentColor" strokeWidth="2"/></> },
    ]
  },
  {
    name: "AI & Data Science",
    color: "violet",
    tools: [
      { name: 'TensorFlow', icon: <><path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 6L20 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12L4 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
      { name: 'PyTorch', icon: <><circle cx="12" cy="14" r="8" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="11" r="2" fill="currentColor"/><path d="M12 2V6M18 5L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Keras', icon: <><path d="M7 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M7 12L17 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 12L17 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'scikit-learn', icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></> },
      { name: 'Pandas', icon: <><path d="M8 3V21M16 3V21" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M8 8H8.01M8 12H8.01M8 16H8.01M16 8H16.01M16 12H16.01M16 16H16.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></> },
      { name: 'NumPy', icon: <><path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2"/><path d="M12 12V22" stroke="currentColor" strokeWidth="2"/></> },
      { name: 'Scipy', icon: <><path d="M4 20C4 20 8 4 12 4C16 4 20 20 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/></> },
      { name: 'Plotly', icon: <><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 17L11 9L15 13L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
      { name: 'Matplotlib', icon: <><path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 17L11 10L14 14L18 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
      { name: 'mlflow', icon: <><path d="M4 12C4 7.58172 7.58172 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M20 12C20 16.4183 16.4183 20 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 4L9 1M12 4L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 20L9 23M12 20L15 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
    ]
  },
  {
    name: "DevOps & Tools",
    color: "rose",
    tools: [
      { name: 'Git', icon: <><circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="2"/><circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2"/><path d="M6 8V16M8 6L16 12M8 18L16 12" stroke="currentColor" strokeWidth="2"/></> },
      { name: 'GitHub', icon: <><path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5 20.17 9 21.5C9.5 21.58 9.68 21.27 9.68 21C9.68 20.77 9.67 20.14 9.67 19.31C7 19.91 6.42 18.03 6.42 18.03C5.96 16.87 5.31 16.56 5.31 16.56C4.42 15.95 5.38 15.97 5.38 15.97C6.37 16.04 6.89 17 6.89 17C7.77 18.5 9.18 18.07 9.7 17.8C9.78 17.17 10.04 16.74 10.33 16.5C8.08 16.24 5.72 15.36 5.72 11.5C5.72 10.39 6.1 9.5 6.9 8.79C6.8 8.54 6.45 7.5 7 6.15C7 6.15 7.87 5.88 9.68 7.15C10.5 6.93 11.37 6.82 12.25 6.82C13.13 6.82 14 6.93 14.82 7.15C16.63 5.88 17.5 6.15 17.5 6.15C18.05 7.5 17.7 8.54 17.6 8.79C18.4 9.5 18.78 10.39 18.78 11.5C18.78 15.37 16.41 16.24 14.15 16.49C14.52 16.81 14.85 17.44 14.85 18.41C14.85 19.84 14.83 20.92 14.83 21.27C14.83 21.55 15 21.86 15.53 21.76C19.5 20.44 22 16.74 22 12.32C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/></> },
      { name: 'Actions', icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12L11 15L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
      { name: 'Docker', icon: <><path d="M4 12H6V14H4ZM7 12H9V14H7ZM10 12H12V14H10ZM7 9H9V11H7ZM10 9H12V11H10ZM13 9H15V11H13ZM10 6H12V8H10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 14C2 14 3 18 8 19C13 20 18 18 21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Vercel', icon: <path d="M12 3L22 20H2L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/> },
      { name: 'Heroku', icon: <><rect x="4" y="2" width="16" height="20" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M8 16L12 14L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 6C14 6 16 8 14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Cisco', icon: <><path d="M4 8V16M8 6V18M12 8V16M16 6V18M20 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'ESLint', icon: <><path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M8 12L11 15L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
      { name: 'Prettier', icon: <><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M7 8H17M7 12H14M7 16H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'FFmpeg', icon: <><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M10 9L16 12L10 15V9Z" fill="currentColor"/></> },
      { name: 'Figma', icon: <><circle cx="15" cy="8" r="3" stroke="currentColor" strokeWidth="2"/><path d="M12 5H9C7.34 5 6 6.34 6 8C6 9.66 7.34 11 9 11" stroke="currentColor" strokeWidth="2"/><path d="M12 11H9C7.34 11 6 12.34 6 14C6 15.66 7.34 17 9 17" stroke="currentColor" strokeWidth="2"/><path d="M9 17C7.34 17 6 18.34 6 20C6 21.66 7.34 23 9 23C10.66 23 12 21.66 12 20V17" stroke="currentColor" strokeWidth="2"/><path d="M12 5V17" stroke="currentColor" strokeWidth="2"/></> },
      { name: 'Photoshop', icon: <><rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M7 16V8H10C11.66 8 13 9.34 13 11C13 12.66 11.66 14 10 14H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 14C15 12.5 16 12 17 12C18 12 19 12.5 19 14C19 16 15 16 15 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Canva', icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M15 10C15 8.5 13.66 7 12 7C10.34 7 9 8.34 9 10V14C9 15.66 10.34 17 12 17C13.66 17 15 15.5 15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
      { name: 'Itch.io', icon: <><path d="M4 4H20V8C20 8 18 10 16 8C14 6 12 10 12 10C12 10 10 6 8 8C6 10 4 8 4 8V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><rect x="4" y="8" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="10" y="14" width="4" height="6" stroke="currentColor" strokeWidth="2"/></> },
    ]
  }
];

const certificates = [
  { title: "Teens Web Developer", issuer: "Timedoor Academy", date: "2024", category: "WEB", id: "TDA-WEB-2024" },
  { title: "Ai Engineer - Ai Computer Vision", issuer: "Timedoor Academy", date: "2026", category: "AI", id: "TDA-ACV-2026" },
  { title: "Software Developer - Android Apps Developer", issuer: "Timedoor Academy", date: "2023", category: "WEB", id: "TDA-AND-2023" },
  { title: "Ai Engineer - Ai Machine Learning", issuer: "Timedoor Academy", date: "2025", category: "AI", id: "TDA-AML-2025" },
  { title: "Ai Engineer - Python For Data Science", issuer: "Timedoor Academy", date: "2025", category: "AI", id: "TDA-PDS-2025" },
  { title: "Teens Programmer", issuer: "Timedoor Academy", date: "2023", category: "PROG", id: "TDA-PRG-2023" },
];

const categoryColors: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  WEB: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]' },
  AI: { border: 'border-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400', glow: 'shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]' },
  PROG: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)]' },
};

const categoryIcons: Record<string, React.ReactNode> = {
  WEB: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
      <path d="M9 22V12H15V22"/>
    </svg>
  ),
  AI: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
      <path d="M2 17L12 22L22 17"/>
      <path d="M2 12L12 17L22 12"/>
    </svg>
  ),
  PROG: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
      <line x1="14" y1="4" x2="10" y2="20"/>
    </svg>
  ),
};

const filterCategories = ["ALL", "WEB", "AI", "PROG"];

export default function AboutPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const filteredCerts = certificates.filter(cert => 
    activeFilter === "ALL" ? true : cert.category === activeFilter
  );

  const totalTech = techCategories.reduce((acc, cat) => acc + cat.tools.length, 0);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-150 h-150 bg-cyan-500/4 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-purple-500/4 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] left-[40%] w-100 h-100 bg-violet-500/3 rounded-full blur-[130px]"
        />
      </div>

      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-99 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/8 bg-white/2 backdrop-blur-md rounded-full mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em]">Behind the Code</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,11vw,10rem)] font-black tracking-tighter italic uppercase leading-[0.85] mb-6"
          >
            <span className="block bg-linear-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
              Digital
            </span>
            <span className="block text-transparent stroke-text relative">
              Architect
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[15%] left-0 h-0.75 bg-linear-to-r from-cyan-500 to-transparent"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl mx-auto text-zinc-500 text-sm md:text-lg font-medium leading-relaxed"
          >
            Mengubah kompleksitas menjadi kesederhanaan melalui kode, desain, dan arsitektur digital yang berkesan.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em]">Scroll</span>
            <div className="w-px h-8 bg-linear-to-b from-zinc-600 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ═══ Persona Bento Grid ═══ */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Main persona text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-8 relative group rounded-3xl border border-white/6 bg-white/2 backdrop-blur-md p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.4em] font-black text-cyan-500 uppercase mb-8">
                  <span className="w-6 h-px bg-cyan-500/50" />
                  The Persona
                </span>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.2] tracking-tight text-zinc-300">
                  Saya adalah seorang <span className="text-white font-bold italic">Fullstack Craftsman</span> yang berdedikasi dalam mengubah kompleksitas menjadi kesederhanaan. Fokus utama saya adalah membangun <span className="text-white">scalable product</span> dengan sentuhan <span className="text-cyan-400 font-black">identitas digital</span> yang mampu memberikan kesan mendalam dan tak terlupakan.
                </p>
              </div>
            </motion.div>

            {/* VOL card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="md:col-span-4 bg-cyan-500 rounded-3xl p-8 flex flex-col justify-between text-[#050505] shadow-[0_0_60px_-10px_rgba(6,182,212,0.3)] group hover:shadow-[0_0_80px_-10px_rgba(6,182,212,0.4)] transition-shadow duration-700"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-5xl md:text-6xl font-black italic tracking-tighter leading-[0.8]"
              >
                VOL.<br/>2026
              </motion.div>
              <div className="pt-8 border-t border-[#050505]/10 mt-6">
                <p className="text-[11px] font-black uppercase tracking-widest leading-relaxed">
                  Currently based in north Jakarta, ID.<br/>Available for high-end digital crafts.
                </p>
              </div>
            </motion.div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="md:col-span-5 relative group rounded-3xl border border-violet-500/15 bg-white/2 backdrop-blur-md p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-[0.3em] font-black text-violet-400 uppercase">Foundation</span>
                </div>
                <h4 className="text-xl font-bold italic uppercase tracking-tighter mb-2">Information Systems Degree</h4>
                <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mb-4">Media Nusantara University — 2023 - 2027</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Berfokus pada pengembangan sistem informasi, manajemen data, serta perancangan dan implementasi solusi teknologi berskala besar.
                </p>
              </div>
            </motion.div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="md:col-span-4 relative group rounded-3xl border border-white/6 bg-white/2 backdrop-blur-md p-8 flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <svg className="w-8 h-8 text-zinc-700 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.68 11 13.169 11 15c0 1.933-1.567 3.5-3.5 3.5-1.289 0-2.456-.562-2.917-1.179zM16.583 17.321C15.553 16.227 15 15 15 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C21.591 11.68 23 13.169 23 15c0 1.933-1.567 3.5-3.5 3.5-1.289 0-2.456-.562-2.917-1.179z"/>
                </svg>
                <p className="text-zinc-400 text-sm italic font-medium leading-relaxed">
                  Saat ini saya berdomisili di kawasan Jakarta Utara. Saya kerap mengunjungi coworking space untuk mencari inspirasi maupun mengerjakan proyek-proyek terbaru.
                </p>
              </div>
            </motion.div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="md:col-span-3 relative group rounded-3xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md p-8 flex flex-col justify-center overflow-hidden"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Available</span>
              </div>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider leading-relaxed">
                Open for freelance, collaboration & full-time opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ Tech Arsenal ═══ */}
        <section className="mb-32">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.5em] font-black text-cyan-500 uppercase mb-5">
              <span className="w-8 h-px bg-cyan-500/50" />
              Tech Arsenal
              <span className="w-8 h-px bg-cyan-500/50" />
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4">
              Tools & <span className="text-transparent stroke-text">Technologies</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-lg mx-auto">
              Perangkat dan teknologi yang saya gunakan untuk mendorong batas kemampuan di setiap baris kode.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="px-4 py-2 bg-white/2 border border-white/6 rounded-full">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{totalTech}+ Technologies</span>
              </div>
              <div className="px-4 py-2 bg-white/2 border border-white/6 rounded-full">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{techCategories.length} Categories</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techCategories.map((category, catIdx) => {
              const colorMap: Record<string, { border: string; accent: string; bg: string; glowColor: string; gradient: string }> = {
                cyan: { border: 'border-cyan-500/15', accent: 'text-cyan-400', bg: 'bg-cyan-500/10', glowColor: 'rgba(6,182,212,0.06)', gradient: 'from-cyan-500/8 to-transparent' },
                blue: { border: 'border-blue-500/15', accent: 'text-blue-400', bg: 'bg-blue-500/10', glowColor: 'rgba(59,130,246,0.06)', gradient: 'from-blue-500/8 to-transparent' },
                emerald: { border: 'border-emerald-500/15', accent: 'text-emerald-400', bg: 'bg-emerald-500/10', glowColor: 'rgba(16,185,129,0.06)', gradient: 'from-emerald-500/8 to-transparent' },
                orange: { border: 'border-orange-500/15', accent: 'text-orange-400', bg: 'bg-orange-500/10', glowColor: 'rgba(249,115,22,0.06)', gradient: 'from-orange-500/8 to-transparent' },
                violet: { border: 'border-violet-500/15', accent: 'text-violet-400', bg: 'bg-violet-500/10', glowColor: 'rgba(139,92,246,0.06)', gradient: 'from-violet-500/8 to-transparent' },
                rose: { border: 'border-rose-500/15', accent: 'text-rose-400', bg: 'bg-rose-500/10', glowColor: 'rgba(244,63,94,0.06)', gradient: 'from-rose-500/8 to-transparent' },
              };
              const c = colorMap[category.color] || colorMap.cyan;

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative rounded-3xl border ${c.border} bg-white/2 backdrop-blur-md p-7 overflow-hidden hover:border-opacity-40 transition-all duration-700`}
                >
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-linear-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${c.bg} ${c.accent} text-[9px] font-black uppercase tracking-widest rounded-full`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {category.name}
                    </span>
                    <span className="text-zinc-700 font-mono text-[10px]">{category.tools.length}</span>
                  </div>

                  {/* Tools as flowing chips */}
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-1.5 relative z-10"
                  >
                    {category.tools.map((tool) => (
                      <motion.div
                        key={tool.name}
                        variants={chipIn}
                        whileHover={{ scale: 1.06, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-white/3 border border-white/6 rounded-xl hover:bg-white/6 hover:border-white/12 transition-all duration-300 cursor-default group/tool"
                      >
                        <svg className={`w-3.5 h-3.5 shrink-0 text-zinc-600 group-hover/tool:${c.accent.split('-')[1] === 'cyan' ? 'text-cyan-400' : c.accent} transition-colors duration-300`} viewBox="0 0 24 24" fill="none">
                          {tool.icon}
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover/tool:text-zinc-200 transition-colors duration-300">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Bottom accent line */}
                  <div className="mt-5 relative z-10">
                    <div className="h-px bg-white/5 w-full relative overflow-hidden rounded-full">
                      <motion.div
                        className="absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-1000 rounded-full"
                        style={{ backgroundColor: c.glowColor.replace('0.06', '0.4') }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ═══ Certificates ═══ */}
        <section className="mb-32">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.5em] font-black text-cyan-500 uppercase mb-5">
              <span className="w-8 h-px bg-cyan-500/50" />
              Milestones
              <span className="w-8 h-px bg-cyan-500/50" />
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4">
              Validated <span className="text-transparent stroke-text">Certificates</span>
            </h2>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">
              Kumpulan sertifikasi profesional yang telah diperoleh sepanjang perjalanan pengembangan karir di bidang teknologi.
            </p>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-[10px] font-black uppercase tracking-widest border transition-all duration-300 rounded-full ${
                  activeFilter === cat 
                  ? 'bg-white border-white text-black scale-105' 
                  : 'border-white/8 text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, i) => {
                const colors = categoryColors[cert.category] || categoryColors.WEB;
                return (
                  <motion.div 
                    key={cert.title}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className={`group relative rounded-3xl border ${colors.border} bg-white/2 backdrop-blur-md p-7 overflow-hidden hover:scale-[1.02] transition-all duration-500 ${colors.glow}`}
                  >
                    {/* Corner accents */}
                    <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${colors.border} rounded-tl-2xl opacity-40 group-hover:opacity-80 transition-opacity`} />
                    <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${colors.border} rounded-br-2xl opacity-40 group-hover:opacity-80 transition-opacity`} />
                    
                    {/* Background glow */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.bg} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    {/* Top: badge + date */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${colors.bg} ${colors.text} text-[9px] font-black uppercase tracking-widest rounded-full border ${colors.border}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {cert.category}
                      </span>
                      <span className="text-zinc-600 font-mono text-[10px] tracking-wider">{cert.date}</span>
                    </div>

                    {/* Icon */}
                    <div className={`${colors.text} opacity-20 group-hover:opacity-60 transition-opacity duration-500 mb-5 relative z-10`}>
                      {categoryIcons[cert.category]}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold uppercase italic tracking-tighter leading-tight text-zinc-200 group-hover:text-white transition-colors duration-300 mb-4 relative z-10">
                      {cert.title}
                    </h4>

                    {/* Divider */}
                    <div className="relative z-10 mb-4">
                      <div className="h-px bg-white/5 w-full relative overflow-hidden">
                        <div className={`h-px ${colors.bg} w-0 group-hover:w-full transition-all duration-700 absolute inset-0`} />
                      </div>
                    </div>

                    {/* Footer: issuer + ID */}
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center`}>
                          <svg className={`w-3 h-3 ${colors.text}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{cert.issuer}</span>
                      </div>
                      <span className="text-[8px] text-zinc-700 font-mono tracking-wider">{cert.id}</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* ═══ Signature Quote ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-3xl border border-white/6 bg-white/2 backdrop-blur-md p-12 md:p-16 flex items-center justify-center overflow-hidden mb-32"
        >
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 text-center">
            <motion.h4
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xl md:text-3xl lg:text-4xl font-black italic uppercase tracking-tighter"
            >
              &quot;Simple is the ultimate sophistication.&quot;
            </motion.h4>
          </div>
        </motion.div>

        {/* ═══ CTA ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-20 text-center"
        >
          <p className="text-zinc-600 font-mono text-[10px] mb-10 tracking-[0.4em] uppercase">Ready to collaborate?</p>
          <a 
            href="https://github.com/username-lo" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative px-14 py-7 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-full shadow-[0_20px_50px_-10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_25px_60px_-10px_rgba(6,182,212,0.3)] transition-shadow duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 italic">Explore GitHub Archive</span>
            </motion.div>
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 2px rgba(255,255,255,0.15); }
      `}</style>
    </main>
  );
}