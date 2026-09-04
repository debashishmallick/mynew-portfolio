import React, { forwardRef } from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "MERN E-Commerce",
    category: "Full Stack Application",
    description:
      "A modern full-stack e-commerce platform with product management, cart, authentication and secure online payments.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
    ],
    type: "ecommerce",
    github: "#",
    live: "#",
  },

  {
    number: "02",
    title: "Student Management",
    category: "Management System",
    description:
      "A complete student management system for handling admissions, student profiles, academic information and administration.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    type: "dashboard",
    github: "#",
    live: "#",
  },

  {
    number: "03",
    title: "Developer Portfolio",
    category: "Creative Website",
    description:
      "An interactive developer portfolio focused on smooth animations, modern UI, responsive design and immersive user experience.",
    technologies: [
      "React",
      "GSAP",
      "JavaScript",
      "CSS",
    ],
    type: "portfolio",
    github: "#",
    live: "#",
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="projects"
      id="projects"
    >
      {/* Background */}
      <div className="projects-grid"></div>

      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="projects-container">

        {/* ================= HEADER ================= */}

        <div className="projects-header">

          <div className="projects-heading-left">
            <span className="projects-number">
              03
            </span>

            <span className="projects-label">
              SELECTED WORK
            </span>
          </div>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>

          <p>
            A collection of projects where I combine
            clean design, powerful technologies and
            practical solutions.
          </p>
        </div>

        {/* ================= PROJECT LIST ================= */}

        <div className="projects-list">

          {projects.map((project, index) => (
            <article
              className={`project-card project-${project.type}`}
              key={project.number}
            >

              {/* Card number */}
              <div className="project-number">
                {project.number}
              </div>

              {/* Visual */}
              <div className="project-visual">

                <div className="project-visual-bg"></div>

                {/* Decorative elements */}
                <div className="visual-orbit visual-orbit-one"></div>
                <div className="visual-orbit visual-orbit-two"></div>

                {/* Mock browser */}
                <div className="project-browser">

                  <div className="browser-top">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-address">
                      {project.title.toLowerCase().replaceAll(" ", "-")}
                      .dev
                    </div>
                  </div>

                  <div className="browser-content">

                    {project.type === "ecommerce" && (
                      <>
                        <div className="mock-nav"></div>

                        <div className="mock-products">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="mock-lines">
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                      </>
                    )}

                    {project.type === "dashboard" && (
                      <>
                        <div className="mock-sidebar"></div>

                        <div className="mock-dashboard">

                          <div className="mock-stats">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>

                          <div className="mock-chart">
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                          </div>
                        </div>
                      </>
                    )}

                    {project.type === "portfolio" && (
                      <>
                        <div className="mock-hero-title"></div>
                        <div className="mock-hero-line"></div>

                        <div className="mock-portfolio-circle"></div>

                        <div className="mock-portfolio-lines">
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                      </>
                    )}

                  </div>
                </div>

                {/* Floating code */}
                <div className="floating-code floating-code-one">
                  &lt;/&gt;
                </div>

                <div className="floating-code floating-code-two">
                  {"{ }"}
                </div>

              </div>

              {/* Content */}
              <div className="project-content">

                <div className="project-meta">
                  <span>{project.category}</span>

                  <span className="project-index">
                    {project.number} / 03
                  </span>
                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-tech">

                  {project.technologies.map(
                    (tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    )
                  )}

                </div>

                {/* Actions */}
                <div className="project-actions">

                  <a
                    href={project.live}
                    className="project-live"
                  >
                    View Project
                    <span>↗</span>
                  </a>

                  <a
                    href={project.github}
                    className="project-github"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Bottom */}
        <div className="projects-footer">

          <span>
            MORE PROJECTS COMING SOON
          </span>

          <div className="projects-line"></div>

          <span>
            03+
          </span>

        </div>

      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;