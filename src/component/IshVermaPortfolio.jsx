import { useState, useEffect, useRef } from "react";

const CYAN = "#00f5d4";
const ROSE = "#ff3f7a";
const INK = "#0a0b0f";
const SURFACE = "#111318";
const MUTED = "#3a3d4a";
const DIM = "#8890a4";
const WHITE = "#e8eaf0";

const projects = [
  {
    title: "Real-time Object Detection",
    period: "Apr – May 2026",
    stack: ["YOLOv8", "FastAPI", "React.js", "OpenCV", "WebSocket"],
    points: [
      "Live webcam streams at 30+ FPS, <100ms latency using YOLOv8 + OpenCV",
      "WebSocket pipeline for low-latency frame transmission & prediction streaming",
      "React canvas overlays rendering bounding boxes & confidence scores in real time",
    ],
    accent: CYAN,
    icon: "👁",
  },
  {
    title: "Chat2Cash",
    period: "Jan – Feb 2026",
    stack: ["React.js", "Node.js", "Claude 3.5 Sonnet", "NLP", "TypeScript"],
    points: [
      "AI-powered WhatsApp → GST invoice automation using Claude 3.5 Sonnet API",
      "Multilingual NLP (English, Hindi, Hinglish) — reduced manual effort by ~70%",
      "Real-time analytics dashboard for invoice generation & revenue monitoring",
    ],
    accent: ROSE,
    icon: "💬",
  },
  {
    title: "Deepfake AI Detector",
    period: "Dec 2023 – Feb 2026",
    stack: ["TensorFlow", "OpenCV", "FastAPI", "React.js", "CNN"],
    points: [
      "Trained CNN deepfake detection models with TensorFlow + OpenCV preprocessing",
      "Evaluated with Accuracy, Precision, Recall, F1 & ROC-AUC metrics",
      "FastAPI backend + React.js frontend for real-time media inference",
    ],
    accent: CYAN,
    icon: "🎭",
  },
  
  {
  title: "E-commerce Sales Analytics Dashboard",
  period: "Feb 2026",
  stack: [
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Chart.js",
    "MongoDB"
  ],
  points: [
    "Built an interactive analytics dashboard to track revenue, sales trends, customer behavior, and product performance",
    "Visualized 10,000+ sales records using dynamic charts, KPI cards, and real-time business insights",
    "Integrated REST APIs and optimized database queries for efficient data processing and dashboard performance"
  ],
  accent: CYAN,
  icon: "📊",
},{
  title: "Converro CRM Analytics Platform",
  period: "May – Jun 2025",
  stack: [
    "React.js",
    "Tailwind CSS",
    "REST APIs",
    "Dashboard Analytics",
    "JavaScript",
    "CRM"
  ],
  points: [
    "Built responsive CRM dashboards for customer management, analytics tracking, and business insights visualization",
    "Integrated REST APIs to display real-time customer interaction metrics, engagement trends, and performance data",
    "Optimized React components and state management to improve dashboard responsiveness and reduce unnecessary re-renders"
  ],
  accent: ROSE,
  icon: "📈",
},{
    title: "House Price Prediction",
    period: "Aug 2024",
    stack: ["Random Forest", "Linear Regression", "Feature Engineering"],
    points: [
      "ML research on housing price prediction — 80%+ accuracy achieved",
      "Custom locality & amenity-based feature engineering on real-estate datasets",
      "Hyperparameter tuning with R², MAE, RMSE evaluation metrics",
    ],
    accent: ROSE,
    icon: "🏠",
    research: true,
  },
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "IDS – Institute of Digital Studies",
    period: "Jul – Dec 2025",
    points: [
      "Engineered full-stack modules with React.js + Node.js + REST APIs for analytics",
      "Optimized backend data pipelines to improve dashboard loading efficiency",
      "Scaled frontend-backend integrations for analytics-driven applications",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Converro",
    period: "May – Jun 2025",
    points: [
      "Built responsive CRM dashboards using React.js, Tailwind CSS & REST APIs",
      "Integrated real-time analytics APIs for customer interaction metrics",
      "Reduced re-renders with optimized state management & reusable React hooks",
    ],
  },
];

const skills = {
  "AI / ML": ["TensorFlow", "Scikit-learn", "OpenCV", "YOLOv8", "NumPy", "Pandas"],
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "FastAPI", "Django", "REST APIs", "WebSocket"],
  Languages: ["Python", "C++", "JavaScript", "HTML/CSS", "SQL"],
  "CS Core": ["DSA", "DBMS", "OOP", "OS", "Computer Networks"],
};

function GlitchText({ text }) {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
      }}
      className="glitch"
      data-text={text}
    >
      {text}
    </span>
  );
}

function Tag({ label, accent }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontFamily: "'Space Mono', monospace",
        padding: "3px 8px",
        border: `1px solid ${accent || MUTED}`,
        color: accent || DIM,
        borderRadius: 2,
        letterSpacing: "0.08em",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: SURFACE,
        border: `1px solid ${hovered ? project.accent : MUTED}`,
        borderRadius: 4,
        padding: "28px 28px 24px",
        transition: "border-color 0.25s, transform 0.2s",
        transform: hovered ? "translateY(-3px)" : "none",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {project.research && (
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            fontSize: 10,
            fontFamily: "'Space Mono', monospace",
            color: project.accent,
            border: `1px solid ${project.accent}`,
            padding: "2px 7px",
            borderRadius: 2,
            letterSpacing: "0.1em",
          }}
        >
          RESEARCH
        </div>
      )}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
        <span style={{ fontSize: 22 }}>{project.icon}</span>
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 700,
              color: WHITE,
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              margin: "3px 0 0",
              fontSize: 11,
              fontFamily: "'Space Mono', monospace",
              color: DIM,
            }}
          >
            {project.period}
          </p>
        </div>
      </div>
      <ul style={{ margin: "0 0 16px", paddingLeft: 16, listStyle: "none" }}>
        {project.points.map((p, i) => (
          <li
            key={i}
            style={{
              fontSize: 13,
              color: DIM,
              lineHeight: 1.7,
              paddingLeft: 12,
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 4,
                height: 4,
                background: project.accent,
                borderRadius: "50%",
                display: "block",
              }}
            />
            {p}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.stack.map((s) => (
          <Tag key={s} label={s} accent={hovered ? project.accent : undefined} />
        ))}
      </div>
    </div>
  );
}

function SkillGroup({ category, items }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p
        style={{
          margin: "0 0 8px",
          fontSize: 11,
          fontFamily: "'Space Mono', monospace",
          color: CYAN,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        {category}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {items.map((s) => (
          <span
            key={s}
            style={{
              fontSize: 12,
              fontFamily: "'Space Mono', monospace",
              color: WHITE,
              background: MUTED,
              padding: "4px 10px",
              borderRadius: 2,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function NavLink({ label, section, active, onClick }) {
  return (
    <button
      onClick={() => onClick(section)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "'Space Mono', monospace",
        fontSize: 12,
        color: active ? CYAN : DIM,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "4px 0",
        transition: "color 0.2s",
        borderBottom: active ? `1px solid ${CYAN}` : "1px solid transparent",
      }}
    >
      {label}
    </button>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const sectionRefs = useRef({
    about: null,
    experience: null,
    projects: null,
    skills: null,
  });

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const scrollTo = (section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(section);
    setMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.dataset.section);
        });
      },
      { threshold: 0.25 }
    );
    Object.entries(sectionRefs.current).forEach(([key, ref]) => {
      if (ref) {
        ref.dataset.section = key;
        observer.observe(ref);
      }
    });
    return () => observer.disconnect();
  }, []);

  const hPad = isMobile ? "20px" : isTablet ? "32px" : "40px";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; background: ${INK}; }
        .portfolio-root { background: ${INK}; color: ${WHITE}; min-height: 100vh; font-family: 'Space Mono', monospace; }
        .scanlines::after {
          content: '';
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px);
          pointer-events: none; z-index: 9999;
        }
        .grid-bg {
          background-image: linear-gradient(${MUTED}22 1px, transparent 1px), linear-gradient(90deg, ${MUTED}22 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; overflow: hidden;
        }
        .glitch::before {
          left: 2px; text-shadow: -1px 0 ${ROSE};
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px; text-shadow: -1px 0 ${CYAN};
          clip: rect(54px, 550px, 20px, 0);
          animation: glitch-anim2 3.5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0%   { clip: rect(92px, 9999px, 2px,  0); }
          20%  { clip: rect(15px, 9999px, 80px, 0); }
          40%  { clip: rect(50px, 9999px, 30px, 0); }
          60%  { clip: rect(70px, 9999px, 10px, 0); }
          80%  { clip: rect(5px,  9999px, 60px, 0); }
          100% { clip: rect(35px, 9999px, 85px, 0); }
        }
        @keyframes glitch-anim2 {
          0%   { clip: rect(10px, 9999px, 60px, 0); }
          25%  { clip: rect(80px, 9999px, 5px,  0); }
          50%  { clip: rect(25px, 9999px, 95px, 0); }
          75%  { clip: rect(55px, 9999px, 35px, 0); }
          100% { clip: rect(4px,  9999px, 70px, 0); }
        }
        .blink { animation: blink 1.2s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${INK}; }
        ::-webkit-scrollbar-thumb { background: ${MUTED}; }

        /* Hamburger */
        .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .hamburger span { display: block; width: 22px; height: 2px; background: ${WHITE}; }

        /* Mobile menu */
        .mobile-menu {
          display: none; position: fixed; top: 52px; left: 0; right: 0;
          background: ${INK}; border-bottom: 1px solid ${MUTED};
          padding: 20px; z-index: 99; flex-direction: column; gap: 4px;
        }
        .mobile-menu.open { display: flex; }
        .mobile-menu-btn {
          background: none; border: none; border-bottom: 1px solid ${MUTED};
          cursor: pointer; font-family: 'Space Mono', monospace; font-size: 14px;
          color: ${DIM}; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 12px 0; text-align: left; transition: color 0.2s; width: 100%;
        }
        .mobile-menu-btn.active { color: ${CYAN}; border-bottom-color: ${CYAN}; }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <div className="portfolio-root scanlines">

        {/* NAV */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: `${INK}ee`,
            backdropFilter: "blur(8px)",
            borderBottom: `1px solid ${MUTED}`,
            padding: `0 ${hPad}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 52,
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: WHITE,
              whiteSpace: "nowrap",
            }}
          >
            IV<span style={{ color: CYAN }}>_</span>
          </span>

          {/* Desktop nav */}
          <div className="nav-links-desktop" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["about", "experience", "projects", "skills"].map((s) => (
              <NavLink
                key={s}
                label={s}
                section={s}
                active={activeSection === s}
                onClick={scrollTo}
              />
            ))}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=isha.verma0125@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: INK,
                background: CYAN,
                padding: "6px 14px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Contact
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {["about", "experience", "projects", "skills"].map((s) => (
            <button
              key={s}
              className={`mobile-menu-btn${activeSection === s ? " active" : ""}`}
              onClick={() => scrollTo(s)}
            >
              {s}
            </button>
          ))}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=isha.verma0125@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: 8,
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: INK,
              background: CYAN,
              padding: "8px 14px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            Contact
          </a>
        </div>

        {/* HERO */}
        <section
          ref={(el) => (sectionRefs.current.about = el)}
          className="grid-bg"
          style={{
            padding: isMobile ? "60px 20px 40px" : isTablet ? "80px 32px 60px" : "100px 40px 80px",
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: isMobile ? 10 : 16, marginBottom: 12 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE, marginTop: 8 }}>
              01 /
            </span>
            <div>
              <p
                style={{
                  margin: "0 0 4px",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: DIM,
                  letterSpacing: "0.12em",
                }}
              >
                <span style={{ color: CYAN }}>~/</span>about
              </p>
              <h1
                style={{
                  margin: 0,
                  lineHeight: 1,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: isMobile ? "clamp(36px, 13vw, 64px)" : "clamp(56px, 10vw, 96px)",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: WHITE,
                }}
              >
                <GlitchText text="Isha" /> <span style={{ color: CYAN }}>Verma</span>
                <span className="blink" style={{ color: ROSE }}>_</span>
              </h1>
            </div>
          </div>

          <div style={{ maxWidth: 600, marginLeft: isMobile ? 0 : 52, marginTop: isMobile ? 12 : 0 }}>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: DIM, margin: "24px 0 28px" }}>
              CS + AI undergrad @ <span style={{ color: WHITE }}>IGDTUW Delhi</span> (2023–27) ·
              Building at the intersection of full-stack engineering & machine learning.
              300+ LeetCode problems solved. Hackathon 1st runner-up.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Python", "React.js", "TensorFlow", "FastAPI", "YOLOv8", "Claude API"].map((t) => (
                <Tag key={t} label={t} accent={CYAN} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 20, marginTop: 28, alignItems: "center", flexWrap: "wrap" }}>
              <a href="https://github.com/IsHa2507" style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: CYAN, textDecoration: "none", letterSpacing: "0.08em" }}>GitHub ↗</a>
              <a href="https://www.linkedin.com/in/isha-verma-401144289/" style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: CYAN, textDecoration: "none", letterSpacing: "0.08em" }}>LinkedIn ↗</a>
              <a href="https://leetcode.com/u/isha2027/" style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: CYAN, textDecoration: "none", letterSpacing: "0.08em" }}>LeetCode ↗</a>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              gap: 1,
              marginTop: isMobile ? 40 : 64,
              border: `1px solid ${MUTED}`,
              background: MUTED,
            }}
          >
            {[
              { label: "CGPA", value: "7.5" },
              { label: "LeetCode", value: "300+" },
              { label: "Internships", value: "2" },
              { label: "Projects", value: "3+" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: SURFACE, padding: isMobile ? "16px 12px" : "20px 24px", textAlign: "center" }}>
                <p style={{ margin: "0 0 4px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: isMobile ? 28 : 36, color: CYAN }}>{stat.value}</p>
                <p style={{ margin: 0, fontSize: 10, color: DIM, letterSpacing: "0.15em" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          ref={(el) => (sectionRefs.current.experience = el)}
          style={{ padding: `80px ${hPad}`, maxWidth: 960, margin: "0 auto" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE }}>02 /</span>
            <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: isMobile ? 28 : 42, textTransform: "uppercase", letterSpacing: "0.06em", color: WHITE }}>
              Experience
            </h2>
            <div style={{ flex: 1, height: 1, background: MUTED, marginLeft: 8 }} />
          </div>
          <div>
            {experience.map((exp, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "200px 1fr",
                  gap: isMobile ? 12 : 32,
                  padding: "32px 0",
                  borderBottom: i < experience.length - 1 ? `1px solid ${MUTED}` : "none",
                }}
              >
                <div>
                  <p style={{ margin: "0 0 6px", fontFamily: "'Space Mono', monospace", fontSize: 10, color: CYAN, letterSpacing: "0.1em" }}>{exp.period}</p>
                  <p style={{ margin: 0, fontSize: 13, color: DIM, lineHeight: 1.6 }}>{exp.company}</p>
                </div>
                <div>
                  <h3 style={{ margin: "0 0 12px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, textTransform: "uppercase", letterSpacing: "0.06em", color: WHITE }}>
                    {exp.role}
                  </h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ fontSize: 13, color: DIM, lineHeight: 1.8, paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, top: 0, color: ROSE, fontSize: 10, lineHeight: "1.8em" }}>›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          ref={(el) => (sectionRefs.current.projects = el)}
          style={{ padding: `80px ${hPad}`, maxWidth: 960, margin: "0 auto", background: `${SURFACE}88` }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE }}>03 /</span>
            <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: isMobile ? 28 : 42, textTransform: "uppercase", letterSpacing: "0.06em", color: WHITE }}>
              Projects
            </h2>
            <div style={{ flex: 1, height: 1, background: MUTED, marginLeft: 8 }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(auto-fill, minmax(400px, 1fr))",
              gap: 16,
            }}
          >
            {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>

          {/* Achievement */}
          <div
            style={{
              marginTop: 32,
              border: `1px solid ${ROSE}`,
              borderLeft: `4px solid ${ROSE}`,
              background: `${ROSE}0a`,
              padding: "20px 24px",
              display: "flex",
              alignItems: isMobile ? "flex-start" : "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 28 }}>🏆</span>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{ margin: "0 0 4px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.06em", color: WHITE }}>
                InnovateX Hackathon — 1st Runner Up
              </p>
              <p style={{ margin: 0, fontSize: 12, color: DIM }}>
                Nov 2024 · Built <span style={{ color: WHITE }}>EduX</span> — a gamified learning platform with challenges, progress tracking & collaborative features
              </p>
            </div>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE, whiteSpace: "nowrap" }}>
              Nov 2024
            </span>
          </div>
        </section>

        {/* SKILLS */}
        <section
          ref={(el) => (sectionRefs.current.skills = el)}
          style={{ padding: `80px ${hPad}`, maxWidth: 960, margin: "0 auto" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE }}>04 /</span>
            <h2 style={{ margin: 0, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: isMobile ? 28 : 42, textTransform: "uppercase", letterSpacing: "0.06em", color: WHITE }}>
              Skills
            </h2>
            <div style={{ flex: 1, height: 1, background: MUTED, marginLeft: 8 }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 0 : "0 60px",
            }}
          >
            {Object.entries(skills).map(([cat, items]) => (
              <SkillGroup key={cat} category={cat} items={items} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            borderTop: `1px solid ${MUTED}`,
            padding: isMobile ? "20px" : `24px ${hPad}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 8 : 12,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: DIM }}>
            <span style={{ color: CYAN }}>©</span> Isha Verma
          </span>
          {!isMobile && (
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: MUTED }}>
              IGDTUW · CS + AI · Delhi
            </span>
          )}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=isha.verma0125@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: CYAN, textDecoration: "none" }}
          >
            isha.verma0125@gmail.com
          </a>
        </footer>

      </div>
    </>
  );
}