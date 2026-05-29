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
  "Frontend": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
  "Backend": ["Node.js", "FastAPI", "Django", "REST APIs", "WebSocket"],
  "Languages": ["Python", "C++", "JavaScript", "HTML/CSS", "SQL"],
  "CS Core": ["DSA", "DBMS", "OOP", "OS", "Computer Networks"],
};

function GlitchText({ text, className = "" }) {
  return (
    <span className={`glitch ${className}`} data-text={text} style={{ position: "relative", display: "inline-block" }}>
      {text}
    </span>
  );
}

function Tag({ label, accent }) {
  return (
    <span style={{
      fontSize: 11,
      fontFamily: "'Space Mono', monospace",
      padding: "3px 8px",
      border: `1px solid ${accent || MUTED}`,
      color: accent || DIM,
      borderRadius: 2,
      letterSpacing: "0.08em",
      whiteSpace: "nowrap",
    }}>{label}</span>
  );
}

function ProjectCard({ project, index }) {
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
        <div style={{
          position: "absolute", top: 16, right: 16,
          fontSize: 10, fontFamily: "'Space Mono', monospace",
          color: project.accent, border: `1px solid ${project.accent}`,
          padding: "2px 7px", borderRadius: 2, letterSpacing: "0.1em",
        }}>RESEARCH</div>
      )}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
        <span style={{ fontSize: 22 }}>{project.icon}</span>
        <div>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: WHITE, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {project.title}
          </h3>
          <p style={{ margin: "3px 0 0", fontSize: 11, fontFamily: "'Space Mono', monospace", color: DIM }}>{project.period}</p>
        </div>
      </div>
      <ul style={{ margin: "0 0 16px", paddingLeft: 16, listStyle: "none" }}>
        {project.points.map((p, i) => (
          <li key={i} style={{ fontSize: 13, color: DIM, lineHeight: 1.7, paddingLeft: 12, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, top: 8, width: 4, height: 4, background: project.accent, borderRadius: "50%", display: "block" }} />
            {p}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.stack.map(s => <Tag key={s} label={s} accent={hovered ? project.accent : undefined} />)}
      </div>
    </div>
  );
}

function SkillGroup({ category, items }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ margin: "0 0 8px", fontSize: 11, fontFamily: "'Space Mono', monospace", color: CYAN, letterSpacing: "0.15em", textTransform: "uppercase" }}>{category}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {items.map(s => (
          <span key={s} style={{
            fontSize: 12, fontFamily: "'Space Mono', monospace", color: WHITE,
            background: MUTED, padding: "4px 10px", borderRadius: 2,
          }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function NavLink({ label, section, active, onClick }) {
  return (
    <button onClick={() => onClick(section)} style={{
      background: "none", border: "none", cursor: "pointer",
      fontFamily: "'Space Mono', monospace", fontSize: 12,
      color: active ? CYAN : DIM,
      letterSpacing: "0.1em", textTransform: "uppercase",
      padding: "4px 0", transition: "color 0.2s",
      borderBottom: active ? `1px solid ${CYAN}` : "1px solid transparent",
    }}>{label}</button>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
  };

  const scrollTo = (section) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(section);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); });
      },
      { threshold: 0.3 }
    );
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) { ref.current.dataset.section = key; observer.observe(ref.current); }
    });
    return () => observer.disconnect();
  }, []);

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
          0% { clip: rect(92px, 9999px, 2px, 0); } 20% { clip: rect(15px, 9999px, 80px, 0); }
          40% { clip: rect(50px, 9999px, 30px, 0); } 60% { clip: rect(70px, 9999px, 10px, 0); }
          80% { clip: rect(5px, 9999px, 60px, 0); } 100% { clip: rect(35px, 9999px, 85px, 0); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(10px, 9999px, 60px, 0); } 25% { clip: rect(80px, 9999px, 5px, 0); }
          50% { clip: rect(25px, 9999px, 95px, 0); } 75% { clip: rect(55px, 9999px, 35px, 0); }
          100% { clip: rect(4px, 9999px, 70px, 0); }
        }
        .blink { animation: blink 1.2s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .fade-in { animation: fadeIn 0.6s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: ${INK}; } ::-webkit-scrollbar-thumb { background: ${MUTED}; }
      `}</style>

      <div className="portfolio-root scanlines">
        {/* NAV */}
        <nav style={{
          position: "sticky", top: 0, zIndex: 100,
          background: `${INK}ee`, backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${MUTED}`,
          padding: "0 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 52,
        }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "0.15em", textTransform: "uppercase", color: WHITE }}>
            IV<span style={{ color: CYAN }}>_</span>
          </span>
          <div style={{ display: "flex", gap: 28 }}>
            {["about", "experience", "projects", "skills"].map(s => (
              <NavLink key={s} label={s} section={s} active={activeSection === s} onClick={scrollTo} />
            ))}
          </div>
          <a href="mailto:isha.verma0125@gmail.com" style={{
            fontFamily: "'Space Mono', monospace", fontSize: 11,
            color: INK, background: CYAN, padding: "6px 14px",
            letterSpacing: "0.08em", textTransform: "uppercase",
            textDecoration: "none", fontWeight: 700,
          }}>Contact</a>
        </nav>

        {/* HERO */}
        <section ref={sectionRefs.about} className="grid-bg" style={{ padding: "100px 40px 80px", maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 12 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE, marginTop: 8 }}>01 /</span>
            <div>
              <p style={{ margin: "0 0 4px", fontFamily: "'Space Mono', monospace", fontSize: 12, color: DIM, letterSpacing: "0.12em" }}>
                <span style={{ color: CYAN }}>~/</span>about
              </p>
              <h1 style={{
                margin: 0, lineHeight: 1,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: "clamp(56px, 10vw, 96px)",
                textTransform: "uppercase", letterSpacing: "0.02em", color: WHITE,
              }}>
                <GlitchText text="Isha" /> <span style={{ color: CYAN }}>Verma</span>
                <span className="blink" style={{ color: ROSE }}>_</span>
              </h1>
            </div>
          </div>

          <div style={{ maxWidth: 600, marginLeft: 52 }}>
            <p style={{ fontSize: 14, lineHeight: 1.9, color: DIM, margin: "24px 0 28px" }}>
              CS + AI undergrad @ <span style={{ color: WHITE }}>IGDTUW Delhi</span> (2023–27) ·
              Building at the intersection of full-stack engineering & machine learning.
              300+ LeetCode problems solved. Hackathon 1st runner-up.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Python", "React.js", "TensorFlow", "FastAPI", "YOLOv8", "Claude API"].map(t => (
                <Tag key={t} label={t} accent={CYAN} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 20, marginTop: 28, alignItems: "center" }}>
              <a href="https://github.com" style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: CYAN, textDecoration: "none", letterSpacing: "0.08em" }}>GitHub ↗</a>
              <a href="https://linkedin.com" style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: CYAN, textDecoration: "none", letterSpacing: "0.08em" }}>LinkedIn ↗</a>
              <a href="https://leetcode.com" style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: CYAN, textDecoration: "none", letterSpacing: "0.08em" }}>LeetCode ↗</a>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1, marginTop: 64, border: `1px solid ${MUTED}`,
            background: MUTED,
          }}>
            {[
              { label: "CGPA", value: "7.5" },
              { label: "LeetCode", value: "300+" },
              { label: "Internships", value: "2" },
              { label: "Projects", value: "3+" },
            ].map(stat => (
              <div key={stat.label} style={{
                background: SURFACE, padding: "20px 24px",
                textAlign: "center",
              }}>
                <p style={{ margin: "0 0 4px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 36, color: CYAN }}>{stat.value}</p>
                <p style={{ margin: 0, fontSize: 10, color: DIM, letterSpacing: "0.15em" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section ref={sectionRefs.experience} style={{ padding: "80px 40px", maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE }}>02 /</span>
            <h2 style={{
              margin: 0, fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 42, textTransform: "uppercase",
              letterSpacing: "0.06em", color: WHITE,
            }}>Experience</h2>
            <div style={{ flex: 1, height: 1, background: MUTED, marginLeft: 8 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {experience.map((exp, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "200px 1fr",
                gap: 32, padding: "32px 0",
                borderBottom: i < experience.length - 1 ? `1px solid ${MUTED}` : "none",
              }}>
                <div>
                  <p style={{ margin: "0 0 6px", fontFamily: "'Space Mono', monospace", fontSize: 10, color: CYAN, letterSpacing: "0.1em" }}>{exp.period}</p>
                  <p style={{ margin: 0, fontSize: 13, color: DIM, lineHeight: 1.6 }}>{exp.company}</p>
                </div>
                <div>
                  <h3 style={{ margin: "0 0 12px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, textTransform: "uppercase", letterSpacing: "0.06em", color: WHITE }}>{exp.role}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ fontSize: 13, color: DIM, lineHeight: 1.8, paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, top: 9, color: ROSE, fontSize: 10 }}>›</span>
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
        <section ref={sectionRefs.projects} style={{ padding: "80px 40px", maxWidth: 960, margin: "0 auto", background: `${SURFACE}88` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE }}>03 /</span>
            <h2 style={{
              margin: 0, fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 42, textTransform: "uppercase",
              letterSpacing: "0.06em", color: WHITE,
            }}>Projects</h2>
            <div style={{ flex: 1, height: 1, background: MUTED, marginLeft: 8 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 16 }}>
            {projects.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
          </div>

          {/* Achievement */}
          <div style={{
            marginTop: 32, border: `1px solid ${ROSE}`,
            borderLeft: `4px solid ${ROSE}`,
            background: `${ROSE}0a`, padding: "20px 24px",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <span style={{ fontSize: 28 }}>🏆</span>
            <div>
              <p style={{ margin: "0 0 4px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.06em", color: WHITE }}>
                InnovateX Hackathon — 1st Runner Up
              </p>
              <p style={{ margin: 0, fontSize: 12, color: DIM }}>
                Nov 2024 · Built <span style={{ color: WHITE }}>EduX</span> — a gamified learning platform with challenges, progress tracking & collaborative features
              </p>
            </div>
            <span style={{ marginLeft: "auto", fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE, whiteSpace: "nowrap" }}>Nov 2024</span>
          </div>
        </section>

        {/* SKILLS */}
        <section ref={sectionRefs.skills} style={{ padding: "80px 40px", maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: ROSE }}>04 /</span>
            <h2 style={{
              margin: 0, fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 42, textTransform: "uppercase",
              letterSpacing: "0.06em", color: WHITE,
            }}>Skills</h2>
            <div style={{ flex: 1, height: 1, background: MUTED, marginLeft: 8 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 60px" }}>
            {Object.entries(skills).map(([cat, items]) => (
              <SkillGroup key={cat} category={cat} items={items} />
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          borderTop: `1px solid ${MUTED}`, padding: "24px 40px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: DIM }}>
            <span style={{ color: CYAN }}>©</span> 2026 Isha Verma
          </span>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: MUTED }}>IGDTUW · CS + AI · Delhi</span>
          <a href="mailto:isha.verma0125@gmail.com" style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: CYAN, textDecoration: "none" }}>isha.verma0125@gmail.com</a>
        </footer>
      </div>
    </>
  );
}
