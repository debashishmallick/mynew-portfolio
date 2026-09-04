import React, {
  forwardRef,
  useEffect,
  useRef,
} from "react";

import { gsap } from "gsap";
import "./Skills.css";

const Skills = forwardRef((props, ref) => {
  const stackTerminalRef = useRef(null);
  const stackMouseIconRef = useRef(null);

  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      code: "UI / UX",
      description:
        "Building responsive, interactive and component-driven interfaces.",
      skills: [
        { name: "React.js", level: "Advanced", value: 90 },
        { name: "JavaScript", level: "Advanced", value: 92 },
        { name: "HTML5", level: "Advanced", value: 95 },
        { name: "CSS3", level: "Advanced", value: 90 },
        { name: "Next.js", level: "Intermediate", value: 78 },
        { name: "Redux Toolkit", level: "Intermediate", value: 82 },
        { name: "Tailwind CSS", level: "Advanced", value: 88 },
        { name: "Bootstrap", level: "Advanced", value: 85 },
      ],
    },

    {
      number: "02",
      title: "Backend",
      code: "SERVER / API",
      description:
        "Developing APIs, authentication systems and reliable server-side logic.",
      skills: [
        { name: "Node.js", level: "Advanced", value: 88 },
        { name: "Express.js", level: "Advanced", value: 90 },
        { name: "REST APIs", level: "Advanced", value: 92 },
        { name: "JWT", level: "Advanced", value: 85 },
        { name: "CRUD Operations", level: "Advanced", value: 92 },
        { name: "API Integration", level: "Advanced", value: 90 },
      ],
    },

    {
      number: "03",
      title: "Database",
      code: "DATA / STORAGE",
      description:
        "Managing application data, database structures and persistence.",
      skills: [
        { name: "MongoDB", level: "Advanced", value: 90 },
        { name: "Mongoose", level: "Advanced", value: 88 },
        { name: "MySQL", level: "Intermediate", value: 75 },
        { name: "Database Design", level: "Intermediate", value: 82 },
      ],
    },

    {
      number: "04",
      title: "Tools",
      code: "WORKFLOW",
      description:
        "Using modern development tools for testing, version control and workflow.",
      skills: [
        { name: "Git", level: "Advanced", value: 90 },
        { name: "GitHub", level: "Advanced", value: 90 },
        { name: "Postman", level: "Advanced", value: 88 },
        { name: "Responsive Design", level: "Advanced", value: 92 },
        { name: "VS Code", level: "Advanced", value: 95 },
      ],
    },
  ];

  const techStack = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Bootstrap",
    "REST API",
    "JWT",
    "Git",
    "GitHub",
    "Postman",
  ];

  /* =========================================================
     MOUSE FOLLOWING ICON
  ========================================================= */

  useEffect(() => {
    const terminal = stackTerminalRef.current;
    const icon = stackMouseIconRef.current;

    if (!terminal || !icon) return;

    const moveX = gsap.quickTo(icon, "x", {
      duration: 0.45,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(icon, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    const rotate = gsap.quickTo(icon, "rotation", {
      duration: 0.5,
      ease: "power3.out",
    });

    const handleMouseEnter = () => {
      gsap.to(icon, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "back.out(1.7)",
      });
    };

    const handleMouseMove = (event) => {
      const rect = terminal.getBoundingClientRect();

      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const iconWidth = icon.offsetWidth;
      const iconHeight = icon.offsetHeight;

      const padding = 14;

      const minX = padding;
      const minY = 65;

      const maxX =
        rect.width - iconWidth - padding;

      const maxY =
        rect.height - iconHeight - padding;

      const targetX = Math.max(
        minX,
        Math.min(mouseX - iconWidth / 2, maxX)
      );

      const targetY = Math.max(
        minY,
        Math.min(mouseY - iconHeight / 2, maxY)
      );

      /*
       * Small rotation based on mouse movement.
       */
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX =
        ((mouseX - centerX) / centerX) * 8;

      const rotateY =
        ((mouseY - centerY) / centerY) * 8;

      moveX(targetX);
      moveY(targetY);

      rotate(rotateX + rotateY);
    };

    const handleMouseLeave = () => {
      gsap.to(icon, {
        opacity: 0,
        scale: 0.65,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    terminal.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    terminal.addEventListener(
      "mousemove",
      handleMouseMove
    );

    terminal.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    gsap.set(icon, {
      opacity: 0,
      scale: 0.65,
      x: 0,
      y: 65,
    });

    return () => {
      terminal.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      terminal.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      terminal.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <section
      ref={ref}
      className="skills-section"
      id="skills"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="skills-background-grid" />

      <div className="skills-background-glow skills-glow-left" />

      <div className="skills-background-glow skills-glow-right" />

      <div className="skills-container">

        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="skills-main-header">

          <div className="skills-header-meta">

            <div className="skills-section-number">
              <span>04</span>
              <i />
              <small>MY EXPERTISE</small>
            </div>

            <div className="skills-header-status">
              <span className="status-indicator" />
              AVAILABLE FOR DEVELOPMENT
            </div>

          </div>

          <div className="skills-title-area">

            <div className="skills-title-line" />

            <div className="skills-title-content">

              <span className="skills-overline">
                TECHNICAL CAPABILITIES
              </span>

              <h2>
                Building with{" "}
                <span>
                  modern technology.
                </span>
              </h2>

            </div>

          </div>

          <div className="skills-intro-row">

            <p>
              From polished frontend experiences to scalable
              backend systems, these are the technologies I use
              to turn ideas into functional digital products.
            </p>

            <div className="skills-header-index">
              <strong>04</strong>

              <span>
                CORE
                <br />
                DOMAINS
              </span>
            </div>

          </div>

        </header>

        {/* ===================================================
            SKILL DIRECTORY
        =================================================== */}

        <div className="skills-directory">

          <div className="skills-directory-nav">

            <div className="directory-label">
              <span>01</span>
              <p>SKILL DIRECTORY</p>
            </div>

            <div className="directory-description">
              <span>STACK</span>

              <p>
                Technologies organized by
                development domain.
              </p>
            </div>

            <div className="directory-line" />

          </div>

          <div className="skills-directory-content">

            {skillGroups.map((group, index) => (

              <article
                className="skill-domain"
                key={group.title}
                data-index={index}
              >

                <div className="skill-domain-header">

                  <div className="skill-domain-number">
                    {group.number}
                  </div>

                  <div className="skill-domain-title">

                    <div className="skill-domain-code">
                      {group.code}
                    </div>

                    <h3>
                      {group.title}
                    </h3>

                  </div>

                  <div className="skill-domain-description">
                    {group.description}
                  </div>

                </div>

                <div className="skill-domain-list">

                  {group.skills.map(
                    (skill, skillIndex) => (

                      <div
                        className="skill-row"
                        key={skill.name}
                      >

                        <div className="skill-row-index">
                          {String(
                            skillIndex + 1
                          ).padStart(2, "0")}
                        </div>

                        <div className="skill-row-name">
                          {skill.name}
                        </div>

                        <div className="skill-row-track">

                          <span
                            className="skill-row-progress"
                            data-width={`${skill.value}%`}
                          />

                        </div>

                        <div className="skill-row-level">
                          {skill.level}
                        </div>

                      </div>

                    )
                  )}

                </div>

                <div className="skill-domain-footer">

                  <span>
                    {group.skills.length
                      .toString()
                      .padStart(2, "0")}{" "}
                    TECHNOLOGIES
                  </span>

                  <div />

                  <span>
                    0{index + 1} / 04
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

        {/* ===================================================
            TECH STACK
        =================================================== */}

        <section className="skills-stack-section">

          <div className="stack-section-header">

            <div className="stack-section-title">

              <span>
                TECH STACK
              </span>

              <i />

              <small>
                PRIMARY TECHNOLOGIES
              </small>

            </div>

            <span className="stack-count">
              {techStack.length
                .toString()
                .padStart(2, "0")}
            </span>

          </div>

          {/* TERMINAL */}

          <div
            className="stack-terminal"
            ref={stackTerminalRef}
          >

            <div className="terminal-top">

              <div className="terminal-dots">

                <span />
                <span />
                <span />

              </div>

              <div className="terminal-name">
                developer-stack.config
              </div>

              <div className="terminal-status">
                ● ACTIVE
              </div>

            </div>

            <div className="stack-items">

              {techStack.map(
                (tech, index) => (

                  <span
                    key={tech}
                    className="stack-chip"
                    data-index={index}
                  >

                    <small>
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </small>

                    <i />

                    {tech}

                  </span>

                )
              )}

            </div>

            {/* ============================================
                FLOATING MOUSE ICON
            ============================================ */}

            <div
              ref={stackMouseIconRef}
              className="stack-mouse-icon"
              aria-hidden="true"
            >
              <span>&lt;/&gt;</span>
            </div>

          </div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className="skills-footer">

          <div className="skills-footer-side">
            <span>03</span>
            <p>LEARN</p>
          </div>

          <div className="skills-footer-center">

            <span />
            <span />
            <span />

            <p>
              LEARNING → BUILDING → IMPROVING
            </p>

            <span />
            <span />
            <span />

          </div>

          <div className="skills-footer-side right">

            <p>BUILD</p>
            <span>∞</span>

          </div>

        </footer>

      </div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;