import React, { forwardRef } from "react";

import "./About.css";

/* =========================================================
   EXPERIENCE DATA
   Taken from resume
========================================================= */

const experience = [
  {
    number: "01",
    year: "JAN 2026 — PRESENT",
    role: "MERN Stack Developer",
    company: "PR-Webstock",
    location: "Nakhara, Bhubaneswar",

    current: true,

    description:
      "Architecting and managing full-stack web applications using React.js, Node.js, Express.js and MongoDB, with a strong focus on responsive interfaces, RESTful APIs, authentication and reliable application performance.",

    responsibilities: [
      "Building responsive, high-performance interfaces using React.js, JavaScript, HTML5, CSS3, Tailwind CSS and Bootstrap.",
      "Engineering RESTful APIs, CRUD operations and database integrations using Node.js, Express.js and MongoDB.",
      "Implementing secure user authentication and connecting frontend applications with backend services.",
      "Debugging cross-stack issues and improving application performance and reliability.",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT",
      "Git",
      "Postman",
    ],
  },

  {
    number: "02",
    year: "SEP 2025 — NOV 2025",
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    location: "Virtual Internship",

    current: false,

    description:
      "Worked on responsive, mobile-first web applications while gaining practical experience with modern frontend technologies, REST API integration, performance optimization and Agile development practices.",

    responsibilities: [
      "Built responsive and mobile-first web applications using HTML5, CSS3, JavaScript and React.js.",
      "Used Tailwind CSS and Bootstrap to create clean and responsive user interfaces.",
      "Integrated dynamic REST APIs and worked on optimized frontend code.",
      "Collaborated in an Agile environment using Git and GitHub, including code reviews and daily stand-ups.",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "REST API",
      "GitHub",
    ],
  },
];

/* =========================================================
   ABOUT COMPONENT
========================================================= */

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="about"
      id="about"
    >
      <div className="about-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="about-header">
          <span className="about-number">
            01
          </span>

          <div>
            <p className="about-label">
              ABOUT ME
            </p>

            <h2>
              Turning ideas into
              <span> digital experiences.</span>
            </h2>
          </div>
        </div>


        {/* =================================================
            MAIN ABOUT CONTENT
        ================================================= */}

        <div className="about-content">

          {/* =================================================
              PROFILE CARD
          ================================================= */}

          <div className="about-visual">

            <div className="about-card">

              <div className="about-card-top">
                <span>01</span>

                <span className="about-card-status">
                  AVAILABLE
                </span>
              </div>


              <div className="about-card-center">

                <div className="about-avatar">
                  D
                </div>

                <h3>
                  Debashish
                </h3>

                <p>
                  Full Stack Developer
                </p>

                <div className="about-card-role">
                  MERN STACK
                </div>

              </div>


              <div className="about-card-bottom">

                <span>
                  MERN
                </span>

                <span>
                  DEVELOPER
                </span>

                <span>
                  2026
                </span>

              </div>

            </div>


            {/* Decorative Orbits */}

            <div className="about-orbit about-orbit-one">
              <span />
            </div>

            <div className="about-orbit about-orbit-two">
              <span />
            </div>

          </div>


          {/* =================================================
              ABOUT TEXT
          ================================================= */}

          <div className="about-text">

            <p className="about-intro">
              I'm a{" "}
              <strong>
                Full Stack Developer
              </strong>{" "}
              passionate about creating clean,
              interactive and scalable web
              applications.
            </p>


            <p>
              I work across both frontend and
              backend, turning ideas into complete
              digital products. I build responsive
              interfaces with React.js and develop
              APIs and server-side applications
              using Node.js and Express.js.
            </p>


            <p>
              Currently, I work as a{" "}
              <strong className="about-highlight">
                MERN Stack Developer at PR-Webstock
              </strong>{" "}
              where I work across the complete
              development process — from UI
              development to APIs, databases,
              authentication and debugging.
            </p>


            <p>
              My goal is simple — build applications
              that look great, feel smooth and solve
              real problems.
            </p>


            {/* =================================================
                TECHNOLOGIES
            ================================================= */}

            <div className="about-tech">

              <p>
                Technologies I work with
              </p>

              <div className="tech-list">

                <span>React.js</span>

                <span>JavaScript</span>

                <span>Node.js</span>

                <span>Express.js</span>

                <span>MongoDB</span>

                <span>Next.js</span>

                <span>Redux Toolkit</span>

                <span>Tailwind CSS</span>

                <span>Git</span>

                <span>Postman</span>

              </div>

            </div>


            {/* =================================================
                CTA
            ================================================= */}

            <a
              href="#projects"
              className="about-button"
            >
              Explore My Projects

              <span>
                ↗
              </span>
            </a>

          </div>

        </div>


        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          className="about-experience"
          id="experience"
        >

          {/* =================================================
              EXPERIENCE HEADER
          ================================================= */}

          <div className="experience-header">

            <div className="experience-heading-left">

              <span className="experience-number">
                02
              </span>

              <div>

                <p className="experience-label">
                  MY EXPERIENCE
                </p>

                <h2>
                  Experience
                  <span> & growth.</span>
                </h2>

              </div>

            </div>


            <div className="experience-header-right">

              <span className="experience-header-line" />

              <p>
                Building real-world products,
                solving problems and growing
                through every project.
              </p>

            </div>

          </div>


          {/* =================================================
              EXPERIENCE TIMELINE
          ================================================= */}

          <div className="experience-timeline">

            {/* Base Tracking Line */}

            <div className="experience-line">

              <span className="experience-line-glow" />

              <span className="experience-line-progress" />

            </div>


            {/* Experience Items */}

            {experience.map((item, index) => (

              <article
                className={`experience-item ${
                  item.current
                    ? "experience-current"
                    : ""
                }`}
                key={`${item.company}-${item.role}`}
              >

                {/* =================================================
                    TIMELINE MARKER
                ================================================= */}

                <div className="experience-marker">

                  <div className="experience-marker-outer">

                    <div className="experience-marker-inner" />

                  </div>

                  {item.current && (
                    <span className="experience-pulse" />
                  )}

                </div>


                {/* =================================================
                    DATE
                ================================================= */}

                <div className="experience-date">

                  <span className="experience-date-label">
                    TIMELINE
                  </span>

                  <strong>
                    {item.year}
                  </strong>

                </div>


                {/* =================================================
                    EXPERIENCE CARD
                ================================================= */}

                <div className="experience-card">

                  {/* Card Top */}

                  <div className="experience-card-top">

                    <div className="experience-card-index">
                      {item.number}
                    </div>

                    <div className="experience-card-meta">

                      {item.current && (
                        <span className="experience-live">
                          <i />
                          CURRENT ROLE
                        </span>
                      )}

                      <span className="experience-type">
                        PROFESSIONAL
                      </span>

                    </div>

                  </div>


                  {/* Role */}

                  <div className="experience-title-wrap">

                    <h3>
                      {item.role}
                    </h3>

                    <div className="experience-company">

                      <span>
                        {item.company}
                      </span>

                      <b>
                        /
                      </b>

                      <span>
                        {item.location}
                      </span>

                    </div>

                  </div>


                  {/* Description */}

                  <p className="experience-description">
                    {item.description}
                  </p>


                  {/* Responsibilities */}

                  <div className="experience-responsibilities">

                    <div className="experience-responsibilities-title">

                      <span>
                        ROLE
                      </span>

                      <span>
                        KEY CONTRIBUTIONS
                      </span>

                    </div>


                    <div className="experience-responsibility-list">

                      {item.responsibilities.map(
                        (responsibility, responsibilityIndex) => (

                          <div
                            className="experience-responsibility"
                            key={responsibilityIndex}
                          >

                            <span className="responsibility-number">
                              0
                              {responsibilityIndex + 1}
                            </span>

                            <p>
                              {responsibility}
                            </p>

                          </div>

                        )
                      )}

                    </div>

                  </div>


                  {/* Technologies */}

                  <div className="experience-technologies">

                    <span className="experience-tech-label">
                      STACK
                    </span>

                    <div className="experience-tech-list">

                      {item.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* =================================================
              EXPERIENCE FOOTER
          ================================================= */}

          <div className="experience-footer">

            <div className="experience-footer-line" />

            <div className="experience-footer-center">

              <span className="experience-footer-dot" />

              <p>
                Still learning.
                <span>
                  Still building.
                </span>
              </p>

            </div>

            <div className="experience-footer-line" />

          </div>

        </section>


        {/* =================================================
            STATS
        ================================================= */}

        <div className="about-stats">

          <div className="about-stat">

            <strong>
              10+
            </strong>

            <span>
              Projects Built
            </span>

          </div>


          <div className="about-stat">

            <strong>
              2+
            </strong>

            <span>
              Professional Experiences
            </span>

          </div>


          <div className="about-stat">

            <strong>
              MERN
            </strong>

            <span>
              Primary Stack
            </span>

          </div>


          <div className="about-stat">

            <strong>
              100%
            </strong>

            <span>
              Passion for Code
            </span>

          </div>

        </div>

      </div>
    </section>
  );
});


About.displayName = "About";


export default About;