import React from 'react';
import { Code2, Layout, Server, Wrench } from 'lucide-react';

// Custom SVG Icons
export const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export const RESUME_LINK = "https://drive.google.com/file/d/1KBQBv__OYS5FdxK1MMU_xSYHw9YtLQz6/view?usp=sharing";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/shubbhamsingh", icon: GithubIcon, label: "shubbhamsingh" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shubham-raj840/", icon: LinkedinIcon, label: "shubham-raj840" }
];

export const stats = [
  { label: "Projects Built", value: "3+" },
  { label: "Internships", value: "1" },
];

export const experiences = [
  {
    company: "Infosys Springboard",
    role: "AI Virtual Intern (Track 7.0)",
    period: "Mar 2026 – Present",
    location: "Remote",
    color: "from-blue-500 to-indigo-500",
    logo: "I",
    link: "https://drive.google.com/file/d/1IoqoDck7jSpS2BXLU-m6jQkSzLbB-XIK/view?usp=sharing",
    highlights: [
      "Completed core certifications including AI Primer, Principles of Generative AI, and OpenAI GPT-3 for Developers.",
      "Built a strong conceptual and practical foundation in Generative AI and real-world LLM integrations.",
    ],
  },
  {
    company: "YHills",
    role: "Full-Stack Web Development Intern",
    period: "Mar 2024 – Jun 2024",
    location: "Remote",
    color: "from-emerald-500 to-cyan-500",
    logo: "Y",
    link: "https://drive.google.com/file/d/1ChF3Q0FmhhTlzvjGMcmA2P_V_rCZPgxx/view?usp=sharing",
    highlights: [
      "Mastered the MERN stack through a comprehensive 4-month program, building and delivering real-world full-stack web applications.",
      "Achieved key milestones: theoretical course completion, hands-on professional internship, and independent project execution.",
    ],
  }
];

export const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-emerald-500 to-teal-500",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    icon: Server,
    color: "from-purple-500 to-indigo-500",
    skills: ["Django REST", "Node.js", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "from-pink-500 to-rose-500",
    skills: ["Git/GitHub"],
  }
];

export const projects = [
  {
    id: "urbanshift",
    title: "UrbanShift",
    tagline: "Relocation & Property Platform",
    description: "A comprehensive full-stack platform integrating property buying/renting with Packers & Movers booking services. Features JWT auth, Razorpay, and real-time chat.",
    tags: ["React.js", "Django REST", "PostgreSQL", "WebSockets"],
    github: "https://github.com/shubbhamsingh/UrbanShift-Project",
    demo: "https://urbanshift.vercel.app/",
    image: "/urbanshift.png",
    featured: true,
    color: "from-emerald-500 to-cyan-600",
    caseStudy: {
      metrics: [
        { label: "USER ROLES", value: "3 Types" },
        { label: "COMMUNICATION", value: "Real-time WS" },
        { label: "PAYMENTS", value: "Razorpay" }
      ],
      problem: "Finding a verified home and reliable packers/movers are usually separate, stressful processes requiring multiple platforms. This leads to trust issues, fragmented coordination, and zero escrow security during transactions.",
      solution: "Developed a unified marketplace connecting property owners, buyers, and relocation companies. Engineered real-time chat using Django Channels for seamless communication, integrated Razorpay for secure token payments, and built a robust role-based dashboard system for Admins, Sellers, and Movers.",
      techStack: {
        frontend: "React, Context API, Tailwind CSS, Axios",
        backend: "Python, Django, Django REST Framework, Channels",
        infrastructure: "PostgreSQL, Cloudinary, Brevo SMTP, Razorpay API"
      }
    }
  },
  {
    id: "tech-evolution",
    title: "Tech Evolution",
    tagline: "Conference Landing Page",
    description: "A comprehensive major project exploring modern technological advancements. Features a robust backend and a dynamic frontend.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    github: "https://github.com/shubbhamsingh/Techvolution_2024_Major_Project",
    demo: "https://shubbhamsingh.github.io/Techvolution_2024_Major_Project/",
    image: "/techevolution.png",
    featured: false,
    color: "from-blue-500 to-indigo-600",
    caseStudy: {
      metrics: [
        { label: "TYPE", value: "Landing Page" },
        { label: "THEME", value: "Dark UI" },
        { label: "FOCUS", value: "Conversion" }
      ],
      problem: "Tech conferences often struggle with outdated web presences that fail to capture the innovative essence of the event and lack a streamlined, engaging user flow for attendees.",
      solution: "Designed and developed a sleek, modern landing page for the 'Techvolution 2024' conference. Focused on high-conversion UI/UX with smooth scrolling, deep dark-themed aesthetics, and structured event information (galleries, timelines) to drive user engagement and registrations.",
      techStack: {
        frontend: "HTML5, CSS3, Vanilla JavaScript",
        backend: "Static Hosting",
        infrastructure: "GitHub Pages, Responsive Flexbox/Grid"
      }
    }
  },
  {
    id: "student-registration",
    title: "Registration Portal",
    tagline: "Efficient Data Collection",
    description: "A dynamic student registration form built for efficient data collection with robust client-side validation logic.",
    tags: ["Bootstrap 5", "HTML/CSS", "JavaScript Regex"],
    github: "https://github.com/shubbhamsingh/Techvolution_Minor_Project",
    demo: "https://shubbhamsingh.github.io/Techvolution_Minor_Project/",
    image: "/registration.png",
    featured: false,
    color: "from-purple-500 to-pink-600",
    caseStudy: {
      metrics: [
        { label: "FRAMEWORK", value: "Bootstrap 5" },
        { label: "VALIDATION", value: "Strict Regex" },
        { label: "UI", value: "Glassmorphism" }
      ],
      problem: "Event data collection forms often suffer from poor user input quality, leading to database errors and administrative overhead due to invalid email or phone number formats.",
      solution: "Built a robust, responsive student registration portal using Bootstrap 5. Implemented strict client-side validation using JavaScript Regular Expressions (Regex) to instantly verify phone numbers and data integrity before submission, dramatically improving the user experience.",
      techStack: {
        frontend: "HTML5, CSS3, Bootstrap 5, JavaScript",
        backend: "Client-side Validation",
        infrastructure: "GitHub Pages"
      }
    }
  }
];