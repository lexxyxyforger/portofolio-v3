'use client';

import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "circOut" } 
  }
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

  const filteredCerts = certificates.filter(cert => 
    activeFilter === "ALL" ? true : cert.category === activeFilter
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 selection:bg-cyan-500/30">
      <div className="fixed inset-0 pointer-events-none z-99 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <section className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.5em] font-black text-cyan-500 uppercase block mb-4"
          >
            Behind the Code
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none"
          >
            Digital <span className="text-transparent stroke-text">Architect</span>
          </motion.h1>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-8 bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-14 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[80px] group-hover:bg-cyan-500/10 transition-colors" />
            <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">The Persona</h3>
            <p className="text-2xl md:text-4xl font-medium leading-[1.1] tracking-tighter text-zinc-300">
             Saya adalah seorang <span className="text-white font-bold italic">Fullstack Craftsman</span> yang berdedikasi dalam mengubah kompleksitas menjadi kesederhanaan. Fokus utama saya adalah membangun <span className="text-white">scalable product</span> dengan sentuhan <span className="text-cyan-400 font-black">identitas digital</span> yang mampu memberikan kesan mendalam dan tak terlupakan.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-4 bg-cyan-500 rounded-3xl p-8 flex flex-col justify-between text-[#050505] shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)]"
          >
            <div className="text-5xl font-black italic tracking-tighter leading-[0.8]">VOL.<br/>2026</div>
            <div className="pt-10 border-t border-[#050505]/10">
              <p className="text-[11px] font-black uppercase tracking-widest leading-relaxed">
                Currently based in north Jakarta, ID.<br/>Available for high-end digital crafts.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section: Journey & Education */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Foundation</h3>
                <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-cyan-500" />
                    <h4 className="text-xl font-bold italic uppercase tracking-tighter">Information Systems Degree</h4>
                    <p className="text-zinc-500 text-sm mt-1 font-mono uppercase tracking-widest">Media Nusantara University — 2023 - 2027</p>
                    <p className="text-zinc-400 mt-4 text-sm leading-relaxed max-w-sm">
                        Berfokus pada pengembangan sistem informasi, manajemen data, serta perancangan dan implementasi solusi teknologi berskala besar.
                    </p>
                </div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Current Status</h3>
                <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl">
                    <p className="text-zinc-400 text-sm italic font-medium">
                        &quot;Saat ini saya berdomisili di kawasan Jakarta Utara. Saya kerap mengunjungi coworking space untuk mencari inspirasi maupun mengerjakan proyek-proyek terbaru dengan memanfaatkan teknologi mutakhir.&quot;
                    </p>
                </div>
            </motion.div>
        </section>

        {/* Tech Arsenal */}
        <section className="mb-24">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Tech Arsenal</h3>
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
                  Tools & <span className="text-transparent stroke-text">Technologies</span>
                </h2>
                <p className="text-zinc-500 text-xs font-medium mt-4 max-w-lg">
                  Perangkat dan teknologi yang saya gunakan untuk mendorong batas kemampuan di setiap baris kode.
                </p>
              </div>
              <div className="flex items-center gap-3 px-5 py-2.5 bg-zinc-900/40 border border-white/5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{techCategories.reduce((acc, cat) => acc + cat.tools.length, 0)}+ Technologies</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {techCategories.map((category, catIdx) => {
              const colorMap: Record<string, { border: string; accent: string; bg: string; glow: string; hoverBorder: string }> = {
                cyan: { border: 'border-cyan-500/20', accent: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'rgba(6,182,212,0.08)', hoverBorder: 'rgba(6,182,212,0.4)' },
                blue: { border: 'border-blue-500/20', accent: 'text-blue-400', bg: 'bg-blue-500/10', glow: 'rgba(59,130,246,0.08)', hoverBorder: 'rgba(59,130,246,0.4)' },
                emerald: { border: 'border-emerald-500/20', accent: 'text-emerald-400', bg: 'bg-emerald-500/10', glow: 'rgba(16,185,129,0.08)', hoverBorder: 'rgba(16,185,129,0.4)' },
                orange: { border: 'border-orange-500/20', accent: 'text-orange-400', bg: 'bg-orange-500/10', glow: 'rgba(249,115,22,0.08)', hoverBorder: 'rgba(249,115,22,0.4)' },
                violet: { border: 'border-violet-500/20', accent: 'text-violet-400', bg: 'bg-violet-500/10', glow: 'rgba(139,92,246,0.08)', hoverBorder: 'rgba(139,92,246,0.4)' },
                rose: { border: 'border-rose-500/20', accent: 'text-rose-400', bg: 'bg-rose-500/10', glow: 'rgba(244,63,94,0.08)', hoverBorder: 'rgba(244,63,94,0.4)' },
              };
              const c = colorMap[category.color] || colorMap.cyan;

              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.08, duration: 0.5 }}
                  className={`group relative bg-zinc-900/40 border ${c.border} rounded-2xl p-7 backdrop-blur-md overflow-hidden hover:scale-[1.01] transition-all duration-500`}
                  style={{ boxShadow: `0 0 40px -10px ${c.glow}` }}
                >
                  {/* Background glow */}
                  <div 
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ backgroundColor: c.glow }}
                  />

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${c.bg} ${c.accent} text-[9px] font-black uppercase tracking-widest rounded-full`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {category.name}
                      </span>
                    </div>
                    <span className="text-zinc-700 font-mono text-[10px]">{category.tools.length} tools</span>
                  </div>

                  {/* Tools grid */}
                  <div className="grid grid-cols-2 gap-2 relative z-10">
                    {category.tools.map((tool, toolIdx) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.05 + toolIdx * 0.02 }}
                        whileHover={{ 
                          y: -2, 
                          borderColor: c.hoverBorder,
                          backgroundColor: c.glow,
                        }}
                        className="flex items-center gap-2.5 px-3 py-2.5 bg-white/2 border border-white/5 rounded-xl transition-all duration-300 group/tool cursor-default"
                      >
                        <svg className={`w-4 h-4 shrink-0 text-zinc-600 group-hover/tool:${c.accent.replace('text-', 'text-')} transition-colors duration-300`} viewBox="0 0 24 24" fill="none" style={{ color: 'inherit' }}>
                          {tool.icon}
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover/tool:text-white transition-colors duration-300 truncate">
                          {tool.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-5 relative z-10">
                    <div className="h-px bg-white/5 w-full relative overflow-hidden">
                      <div 
                        className="absolute inset-y-0 left-0 w-0 group-hover:w-full transition-all duration-1000"
                        style={{ backgroundColor: c.hoverBorder }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section: Milestones with Filter */}
        <section className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-left">
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Milestones</h3>
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Validated <span className="text-transparent stroke-text">Certificates</span></h2>
                <p className="text-zinc-500 text-xs font-medium mt-4 max-w-md">Kumpulan sertifikasi profesional yang telah diperoleh sepanjang perjalanan pengembangan karir di bidang teknologi.</p>
              </motion.div>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest border transition-all duration-300 rounded-full ${
                      activeFilter === cat 
                      ? 'bg-cyan-500 border-cyan-500 text-black scale-105' 
                      : 'border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode='popLayout'>
                {filteredCerts.map((cert, i) => {
                    const colors = categoryColors[cert.category] || categoryColors.WEB;
                    return (
                    <motion.div 
                        key={cert.title}
                        layout
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className={`group relative bg-zinc-900/40 border ${colors.border} rounded-2xl p-7 backdrop-blur-md overflow-hidden hover:scale-[1.02] transition-all duration-500 ${colors.glow}`}
                    >
                        {/* Decorative corner accents */}
                        <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${colors.border} rounded-tl-2xl opacity-60`} />
                        <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${colors.border} rounded-br-2xl opacity-60`} />
                        
                        {/* Background glow effect */}
                        <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.bg} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                        
                        {/* Top row: category badge + date */}
                        <div className="flex items-center justify-between mb-6 relative z-10">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${colors.bg} ${colors.text} text-[9px] font-black uppercase tracking-widest rounded-full border ${colors.border}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            {cert.category}
                          </span>
                          <span className="text-zinc-600 font-mono text-[10px] tracking-wider">{cert.date}</span>
                        </div>

                        {/* Icon */}
                        <div className={`${colors.text} opacity-30 group-hover:opacity-70 transition-opacity duration-500 mb-5 relative z-10`}>
                          {categoryIcons[cert.category]}
                        </div>

                        {/* Title */}
                        <h4 className="text-lg font-bold uppercase italic tracking-tighter leading-tight text-zinc-200 group-hover:text-white transition-colors duration-300 mb-4 relative z-10">
                          {cert.title}
                        </h4>

                        {/* Divider */}
                        <div className="relative z-10 mb-4">
                          <div className="h-px bg-white/5 w-full" />
                          <div className={`h-px ${colors.bg} w-0 group-hover:w-full transition-all duration-700 -mt-px`} />
                        </div>

                        {/* Footer: issuer + cert ID */}
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

        <motion.div 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-12 bg-zinc-900/50 border border-white/5 rounded-3xl p-10 flex items-center justify-center group relative overflow-hidden mb-24"
        >
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h4 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter text-center group-hover:scale-105 transition-transform duration-500">
            &quot;Simple is the ultimate sophistication.&quot;
          </h4>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 text-center">
          <p className="text-zinc-600 font-mono text-[10px] mb-10 tracking-[0.4em] uppercase">READY TO COLLABORATE?</p>
          <a 
            href="https://github.com/username-lo" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 px-16 py-8 bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all rounded-full shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 italic">Explore GitHub Archive</span>
            <div className="absolute inset-0 bg-cyan-400 rounded-full translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 1.5px rgba(255,255,255,0.2); }
      `}</style>
    </main>
  );
}