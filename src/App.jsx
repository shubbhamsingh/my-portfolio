import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './index.css';

const TypewriterText = ({ text, speed = 20, style, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayedLength, setDisplayedLength] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev < text.length) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, speed);
      return () => clearInterval(interval);
    }
  }, [isInView, text, speed]);

  return (
    <span ref={ref} className={className} style={style}>
      {text.substring(0, displayedLength)}
      <span style={{ visibility: 'hidden' }}>
        {text.substring(displayedLength)}
      </span>
    </span>
  );
};
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div 
      ref={cardRef}
      className={`glass-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
    >
      {children}
    </div>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <>
      <div className="bg-layer">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-logo heading-gradient">SS.</div>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#resume" onClick={() => setIsMobileMenuOpen(false)}>Resume</a></li>
            <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="section container" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Hi, I am <br />
                <span className="heading-gradient">Shubham Raj</span>
              </h1>
              <p className="subheading" style={{ marginBottom: '2rem' }}>
                <TypewriterText text="Full Stack Developer | Python & React" speed={40} /> <br />
                <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                  <TypewriterText text="B.Tech CS Student passionate about building scalable web applications and robust backend systems." speed={15} />
                </span>
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="https://drive.google.com/file/d/1KBQBv__OYS5FdxK1MMU_xSYHw9YtLQz6/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--surface-border)', color: 'white' }}>
                  📄 Resume
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              {/* Abstract 3D Element Placeholder using CSS */}
              <div style={{
                width: '300px', height: '300px',
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(138, 43, 226, 0.2))',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                boxShadow: 'inset 10px 10px 20px rgba(255,255,255,0.05), 0 0 50px rgba(138,43,226,0.3)',
                animation: 'morph 8s ease-in-out infinite',
                backdropFilter: 'blur(10px)'
              }} />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About <span className="heading-gradient">Me</span></h2>
            <div className="grid-2">
              <div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  <TypewriterText text="I am currently pursuing my B.Tech in Computer Science from Jagannath University, Jaipur (Expected 2027). I specialize in backend technologies with a strong proficiency in Python and Django REST Framework, alongside modern frontend tools like React.js and Tailwind CSS." speed={10} />
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  <TypewriterText text="My key strengths are problem-solving, teamwork, and I am a quick learner who adapts easily to new technologies. I recently worked as a Full Stack Web Development Intern at Yhills, where I developed core web applications." speed={10} />
                </p>
              </div>
              <div className="grid-2" style={{ gap: '1rem' }}>
                <TiltCard>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Frontend</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>React.js, Tailwind CSS, JavaScript</p>
                </TiltCard>
                <TiltCard>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Backend</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Python, Django, Node.js, PostgreSQL</p>
                </TiltCard>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="section container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', margin: 0 }}>My <span className="heading-gradient">Resume</span></h2>
              <a href="https://drive.google.com/file/d/1KBQBv__OYS5FdxK1MMU_xSYHw9YtLQz6/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '1rem', background: 'var(--surface-color)', border: '1px solid var(--surface-border)', color: 'white' }}>📄 View PDF</a>
            </div>

            <div className="grid-2" style={{ gap: '2rem' }}>
              {/* Experience Column */}
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Experience</h3>
                <TiltCard>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Full Stack Intern</h4>
                      <p style={{ color: 'var(--accent-cyan)', fontSize: '1rem', marginBottom: '1rem' }}>Yhills</p>
                    </div>
                    <span style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid var(--surface-border)' }}>
                      Jan 2024 - Present
                    </span>
                  </div>
                  <ul style={{ color: 'var(--text-secondary)', marginLeft: '1.2rem', marginTop: '0.5rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><TypewriterText text="Developed core web applications and full-stack solutions." speed={20} /></li>
                    <li><TypewriterText text="Gained practical exposure to agile methodologies and best practices." speed={20} /></li>
                  </ul>
                </TiltCard>
              </div>

              {/* Education Column */}
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Education</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <TiltCard>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>B.Tech in Computer Science</h4>
                        <p style={{ color: 'var(--accent-purple)', fontSize: '1rem' }}>Jagannath University, Jaipur</p>
                      </div>
                      <span style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid var(--surface-border)' }}>
                        Expected 2027
                      </span>
                    </div>
                  </TiltCard>

                  <TiltCard>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>12th (BSEB Board)</h4>
                        <p style={{ color: 'var(--accent-emerald)', fontSize: '1rem' }}>Gandhi Inter School</p>
                      </div>
                      <span style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', border: '1px solid var(--surface-border)' }}>
                        2023
                      </span>
                    </div>
                  </TiltCard>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>My <span className="heading-gradient">Skills</span></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {[
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                { name: 'Django REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
                { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
                { name: 'Git/GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5, borderColor: 'var(--accent-cyan)' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    width: '130px',
                    height: '130px',
                    borderRadius: '16px',
                    border: '1px solid var(--surface-border)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    cursor: 'default'
                  }}
                >
                  <img src={skill.icon} alt={skill.name} style={{ width: '50px', height: '50px', filter: skill.name === 'Django REST' ? 'brightness(0) invert(1)' : 'none' }} />
                  <span style={{ fontWeight: '500', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Featured <span className="heading-gradient">Projects</span></h2>
            <div className="grid-2">
              {/* Project 1: UrbanShift */}
              <TiltCard className="project-card">
                <div style={{ height: '200px', borderRadius: '8px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  <img src="/urbanshift.png" alt="UrbanShift" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>UrbanShift</h3>
                <p style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '1rem' }}>React.js • Django REST • PostgreSQL • WebSockets</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px' }}>
                  <TypewriterText text="A comprehensive full-stack platform integrating property buying/renting with Packers & Movers booking services. Features JWT auth, Razorpay, and real-time chat." speed={15} />
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://urbanshift.vercel.app/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>🔗 Live Demo</a>
                  <a href="https://github.com/shubbhamsingh/UrbanShift-Project" target="_blank" rel="noreferrer" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>💻 Source</a>
                </div>
              </TiltCard>

              {/* Project 2: Tech Evolution */}
              <TiltCard className="project-card">
                <div style={{ height: '200px', borderRadius: '8px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  <img src="/techevolution.png" alt="Tech Evolution" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Tech Evolution (Major Project)</h3>
                <p style={{ color: 'var(--accent-emerald)', fontSize: '0.9rem', marginBottom: '1rem' }}>MERN Stack • Full Stack</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px' }}>
                  <TypewriterText text="A comprehensive major project exploring modern technological advancements. Features a robust backend and a dynamic frontend." speed={15} />
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://shubbhamsingh.github.io/Techvolution_2024_Major_Project/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>🔗 Live Demo</a>
                  <a href="https://github.com/shubbhamsingh/Techvolution_2024_Major_Project" target="_blank" rel="noreferrer" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>💻 Source</a>
                </div>
              </TiltCard>

              {/* Project 3: Student Registration Portal */}
              <TiltCard className="project-card">
                <div style={{ height: '200px', borderRadius: '8px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  <img src="/registration.png" alt="Student Registration Portal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Student Registration Portal</h3>
                <p style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '1rem' }}>HTML • CSS • JavaScript</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px' }}>
                  <TypewriterText text="A dynamic student registration form built for efficient data collection with robust client-side validation logic." speed={15} />
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://shubbhamsingh.github.io/Techvolution_Minor_Project/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>🔗 Live Demo</a>
                  <a href="https://github.com/shubbhamsingh/Techvolution_Minor_Project" target="_blank" rel="noreferrer" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>💻 Source</a>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section container" style={{ minHeight: '60vh' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{ textAlign: 'center', padding: '4rem 2rem' }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's <span className="heading-gradient">Connect</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              I'm currently open for new opportunities, internships, and collaborations. If you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:shubhamsingh161203@gmail.com" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              ✉️ shubhamsingh161203@gmail.com
            </a>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', fontSize: '1.5rem' }}>
              <a href="https://github.com/shubbhamsingh" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>💻 GitHub</a>
              <a href="https://www.linkedin.com/in/shubham-raj840/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>🔗 LinkedIn</a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Inline styles for the animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
      `}} />
    </>
  );
}

export default App;
