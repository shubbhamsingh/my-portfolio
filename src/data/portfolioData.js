// src/data/portfolioData.js
import { Github, Linkedin, Code2, Layout, Server, Wrench } from 'lucide-react';

export const RESUME_LINK = "https://drive.google.com/file/d/1KBQBv__OYS5FdxK1MMU_xSYHw9YtLQz6/view?usp=sharing";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/shubbhamsingh", icon: Github, label: "shubbhamsingh" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shubham-raj840/", icon: Linkedin, label: "shubham-raj840" }
];

export const stats = [
  { label: "Projects Built", value: "3+" },
  { label: "Internships", value: "1" },
];

export const experiences = [
  {
    company: "Yhills",
    role: "Full-Stack Web Development Intern",
    period: "Jan 2024 – Present",
    location: "Remote",
    color: "from-violet-500 to-pink-500",
    logo: "Y",
    highlights: [
      "Developed core web applications and full-stack solutions.",
      "Gained practical exposure to agile methodologies and best practices.",
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
    color: "from-violet-500 to-purple-500",
    skills: ["React.js"],
  },
  {
    title: "Backend & Database",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
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
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "tech-evolution",
    title: "Tech Evolution",
    tagline: "Major Project",
    description: "A comprehensive major project exploring modern technological advancements. Features a robust backend and a dynamic frontend.",
    tags: ["MERN Stack", "Full Stack"],
    github: "https://github.com/shubbhamsingh/Techvolution_2024_Major_Project",
    demo: "https://shubbhamsingh.github.io/Techvolution_2024_Major_Project/",
    image: "/techevolution.png",
    featured: false,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "student-registration",
    title: "Student Registration Portal",
    tagline: "Efficient Data Collection",
    description: "A dynamic student registration form built for efficient data collection with robust client-side validation logic.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shubbhamsingh/Techvolution_Minor_Project",
    demo: "https://shubbhamsingh.github.io/Techvolution_Minor_Project/",
    image: "/registration.png",
    featured: false,
    color: "from-purple-500 to-indigo-600",
  }
];