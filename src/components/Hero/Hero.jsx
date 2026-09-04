import React, { forwardRef } from "react";
import "./Hero.css";
import profileImage from "../../assets/profile.jpg";
import resume from "../../assets/final2.pdf";

const Hero = forwardRef(function Hero(_, ref) {
  const codeRain = [
    "</>",
    "{}",
    "01",
    "JS",
    "=>",
    "&&",
    "()",
    "const",
    "let",
    "API",
    "npm",
    "git",
    "./",
    "<div>",
    "0101",
    "MERN",
    "CSS",
    "HTML",
    "node",
    "true",
    "false",
    "null",
    "&&",
    "||",
    "++",
    "[]",
    "</>",
    "{}",
    "01",
    "React",
    "DB",
    "HTTP",
    "JWT",
    "CRUD",
    "async",
    "await",
    "import",
    "export",
    "fetch",
    "map()",
    "useState",
    "useEffect",
    "API",
    "404",
    "200",
    "npm",
    "git",
    "</>",
    "{}",
  ];

  return (
    <main ref={ref} className="hero" id="home">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="hero-grid" />

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-glow hero-glow-three" />

      <div className="hero-noise" />

      {/* =====================================================
          DIGITAL CODE RAIN
      ====================================================== */}

      <div className="code-rain" aria-hidden="true">
        {codeRain.map((code, index) => (
          <span
            key={`${code}-${index}`}
            className={`rain-code rain-code-${(index % 20) + 1}`}
          >
            {code}
          </span>
        ))}
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="hero-container">
        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div className="hero-content">
          {/* Small top line */}
          <div className="hero-line hero-small-text">
            <span className="hero-kicker-dot" />
            <span className="hero-kicker">AVAILABLE FOR OPPORTUNITIES</span>
            <span className="hero-kicker-line" />
          </div>

          {/* Heading */}
          <h1>
            <span className="hero-name">Hi, I'm Debashish</span>

            <span className="hero-title-line">
              <span className="hero-gradient-text">FULL STACK</span>
            </span>

            <span className="hero-title-line">
              DEVELOPER<span className="hero-dot">.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            I build modern web applications, responsive interfaces and powerful
            backend systems using the MERN stack.
          </p>

          {/* Technology line */}
          <div className="hero-tech-line">
            <span>React</span>
            <span className="tech-separator">•</span>
            <span>Node</span>
            <span className="tech-separator">•</span>
            <span>Express</span>
            <span className="tech-separator">•</span>
            <span>MongoDB</span>
          </div>

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              <span>Explore My Work</span>

              <span className="button-arrow">↗</span>
            </a>

            <a
              href={resume}
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
              download="Debashish-Mallick-Resume.pdf"
            >
              <span className="resume-icon">↓</span>

              <span>Download Resume</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let's Talk
            </a>
          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================== */}

          <div className="hero-socials">
            <a
              href="https://github.com/debashishmallick"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <span> / </span>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <span> / </span>

            <a href="mailto:mdebashish543@gmail.com" aria-label="Email">
              Email
            </a>
          </div>

          {/* Code signature */}
          <div className="hero-code-signature">
            <span className="signature-symbol">{"{"}</span>

            <span>turning ideas into scalable digital products</span>

            <span className="signature-symbol">{"}"}</span>
          </div>
        </div>

        {/* ===================================================
            RIGHT PROFILE
        ==================================================== */}

        <div className="hero-profile">
          {/* Glow */}
          <div className="profile-glow">
            <div className="profile-glow-inner" />
          </div>

          {/* Outer rings */}
          <div className="profile-ring" />
          <div className="profile-ring profile-ring-two" />

          {/* =================================================
              ORBITING CODE
          ================================================== */}

          <div className="profile-orbit profile-orbit-one">
            <span>{"</>"}</span>
          </div>

          <div className="profile-orbit profile-orbit-two">
            <span>{"{}"}</span>
          </div>

          <div className="profile-orbit profile-orbit-three">
            <span>JS</span>
          </div>

          {/* =================================================
              PROFILE IMAGE
          ================================================== */}

          <div className="profile-image-wrapper">
            <div className="profile-image-border">
              <img
                src={profileImage}
                alt="Debashish Mallick"
                className="profile-image"
              />
            </div>
          </div>

          {/* =================================================
              CODE CARD
          ================================================== */}

          <div className="profile-code-card">
            <div className="profile-code-top">
              <div className="code-card-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="code-card-symbol">index.js</span>
            </div>

            <div className="profile-code-bottom">
              <span className="code-purple">const</span>

              <span className="code-white">developer</span>

              <span className="code-pink">=</span>

              <span className="code-cyan">"Debashish"</span>
            </div>
          </div>

          {/* =================================================
              AVAILABLE BADGE
          ================================================== */}

          <div className="profile-badge">
            <span className="badge-dot" />

            <span>Open to Work</span>
          </div>

          {/* Decorative corners */}
          <div className="profile-corner profile-corner-one" />
          <div className="profile-corner profile-corner-two" />
          <div className="profile-corner profile-corner-three" />
          <div className="profile-corner profile-corner-four" />
        </div>
      </div>

      {/* =====================================================
          SIDE CODE
      ====================================================== */}

      <div className="hero-side-code hero-side-code-left">
        <span>01</span>
        <span>10</span>
        <span>01</span>
        <span>11</span>
      </div>

      <div className="hero-side-code hero-side-code-right">
        <span>{"</>"}</span>
        <span>{"{}"}</span>
        <span>{"()"}</span>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div className="hero-scroll">
        <div className="scroll-mouse">
          <span />
        </div>

        <span className="scroll-text">SCROLL TO EXPLORE</span>
      </div>
    </main>
  );
});

export default Hero;
