import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = forwardRef((props, ref) => {
  /* =====================================================
     REFS
  ===================================================== */

  const sectionRef = useRef(null);

  /* =====================================================
     FORM
  ===================================================== */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  /* =====================================================
     CODING RAIN SYMBOLS
  ===================================================== */

  const codeSymbols = [
    "</>",
    "{}",
    "JS",
    "RE",
    "N",
    "API",
    "DB",
    "git",
    "=>",
    "()",
    "[]",
    "</",
    "/>",
    "&&",
    "||",
    "const",
    "let",
    "npm",
    "M",
    "CSS",
    "HTML",
    "SQL",
    "JWT",
    "404",
    "200",
    "useState",
    "useEffect",
    "async",
    "await",
    "CRUD",
  ];

  /* =====================================================
     SOCIAL LINKS
  ===================================================== */

  const socialLinks = [
    {
      name: "WhatsApp",
      short: "WA",
      className: "whatsapp",
      url: "https://wa.me/919668563648",
      text: "Chat with me",
    },
    {
      name: "Instagram",
      short: "IG",
      className: "instagram",
      url: "https://www.instagram.com/",
      text: "Follow me",
    },
    {
      name: "X",
      short: "𝕏",
      className: "x",
      url: "https://x.com/",
      text: "Connect on X",
    },
    {
      name: "Facebook",
      short: "f",
      className: "facebook",
      url: "https://www.facebook.com/",
      text: "Find me",
    },
    {
      name: "GitHub",
      short: "GH",
      className: "github",
      url: "https://github.com/debashishmallick",
      text: "View my code",
    },
    {
      name: "LinkedIn",
      short: "in",
      className: "linkedin",
      url: "https://www.linkedin.com/",
      text: "Let's connect",
    },
  ];

  /* =====================================================
     FORM CHANGE
  ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) {
      setStatus("");
    }
  };

  /* =====================================================
     FORM SUBMIT
  ===================================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      subject,
      message,
    } = formData;

    if (!name || !email || !subject || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const mailSubject =
      encodeURIComponent(subject);

    const mailBody = encodeURIComponent(
      `Hello Debashish,

Name: ${name}
Email: ${email}

Message:
${message}
`
    );

    setStatus(
      "Opening your email client..."
    );

    window.location.href =
      `mailto:mdebashish543@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  /* =====================================================
     GSAP
     CODING RAIN + SECTION ANIMATION
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =================================================
         CODING RAIN
      ================================================= */

      const rainContainer =
        section.querySelector(
          ".contact-code-rain"
        );

      const rainItems = [];

      /*
        Create many tiny coding particles.
        More particles on desktop,
        fewer on mobile.
      */

      const isMobile =
        window.innerWidth <= 700;

      const particleCount = isMobile
        ? 65
        : 125;

      for (
        let i = 0;
        i < particleCount;
        i++
      ) {
        const particle =
          document.createElement("span");

        particle.className =
          "code-rain-particle";

        particle.textContent =
          codeSymbols[
            Math.floor(
              Math.random() *
                codeSymbols.length
            )
          ];

        /* ---------------------------------------------
           RANDOM POSITION
        --------------------------------------------- */

        const left =
          Math.random() * 100;

        particle.style.left =
          `${left}%`;

        /* ---------------------------------------------
           RANDOM SIZE
        --------------------------------------------- */

        const size =
          isMobile
            ? 6 + Math.random() * 4
            : 7 + Math.random() * 6;

        particle.style.fontSize =
          `${size}px`;

        /* ---------------------------------------------
           RANDOM COLOR CLASS
        --------------------------------------------- */

        const colorIndex =
          Math.floor(
            Math.random() * 8
          );

        particle.classList.add(
          `rain-color-${colorIndex}`
        );

        /* ---------------------------------------------
           RANDOM OPACITY
        --------------------------------------------- */

        particle.style.opacity =
          0.16 +
          Math.random() * 0.38;

        /* ---------------------------------------------
           RANDOM BLUR
        --------------------------------------------- */

        if (Math.random() > 0.78) {
          particle.classList.add(
            "rain-blur"
          );
        }

        /* ---------------------------------------------
           ADD TO DOM
        --------------------------------------------- */

        rainContainer.appendChild(
          particle
        );

        rainItems.push(particle);
      }

      /* =================================================
         INITIAL POSITION
      ================================================= */

      gsap.set(rainItems, {
        y: () =>
          -80 -
          Math.random() * 500,

        rotation:
          0,

        opacity: 0,
      });

      /* =================================================
         RAIN ANIMATION
      ================================================= */

      rainItems.forEach(
        (particle, index) => {
          const duration =
            5 +
            Math.random() * 8;

          const delay =
            Math.random() * 8;

          const drift =
            -25 +
            Math.random() * 50;

          const rotation =
            -12 +
            Math.random() * 24;

          gsap.to(particle, {
            y: "115vh",

            x: drift,

            rotation,

            opacity:
              0.18 +
              Math.random() * 0.42,

            duration,

            delay,

            repeat: -1,

            ease: "none",

            onRepeat: () => {
              gsap.set(
                particle,
                {
                  x:
                    -25 +
                    Math.random() * 50,

                  rotation:
                    -12 +
                    Math.random() * 24,

                  opacity:
                    0.18 +
                    Math.random() * 0.42,
                }
              );
            },
          });

          /*
            Tiny scale pulse for some particles
          */

          if (index % 5 === 0) {
            gsap.to(particle, {
              scale: 1.35,

              duration:
                1.2 +
                Math.random(),

              repeat: -1,

              yoyo: true,

              ease: "sine.inOut",

              delay:
                Math.random() * 2,
            });
          }
        }
      );

      /* =================================================
         SECTION ENTRANCE
      ================================================= */

      const title =
        section.querySelector(
          ".contact-title-area"
        );

      const cards =
        gsap.utils.toArray(
          section.querySelectorAll(
            ".contact-info-card, .contact-form"
          )
        );

      const header =
        section.querySelector(
          ".contact-header"
        );

      const bottom =
        section.querySelector(
          ".contact-bottom"
        );

      gsap.set(
        [
          header,
          title,
          ...cards,
          bottom,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      const timeline =
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        });

      timeline
        .to(header, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power4.out",
        })
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.16,
            ease: "power4.out",
          },
          "-=0.45"
        )
        .to(
          bottom,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25"
        );

      /* =================================================
         BACKGROUND GLOWS
      ================================================= */

      const glows =
        gsap.utils.toArray(
          section.querySelectorAll(
            ".contact-glow"
          )
        );

      glows.forEach(
        (glow, index) => {
          gsap.to(glow, {
            x:
              index % 2 === 0
                ? 70
                : -70,

            y:
              index % 2 === 0
                ? -40
                : 50,

            scale: 1.15,

            duration:
              5 + index * 1.5,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut",
          });
        }
      );

      /* =================================================
         CODE RAIN SCROLL PARALLAX
      ================================================= */

      gsap.to(rainContainer, {
        yPercent: 8,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top bottom",

          end: "bottom top",

          scrub: 1,
        },
      });

      /* =================================================
         MOUSE PARALLAX
      ================================================= */

      const handleMouseMove =
        (event) => {
          const rect =
            section.getBoundingClientRect();

          const mouseX =
            event.clientX -
            rect.left;

          const mouseY =
            event.clientY -
            rect.top;

          const centerX =
            rect.width / 2;

          const centerY =
            rect.height / 2;

          const moveX =
            (mouseX - centerX) /
            centerX;

          const moveY =
            (mouseY - centerY) /
            centerY;

          gsap.to(
            section.querySelector(
              ".contact-bg"
            ),
            {
              x: moveX * 8,
              y: moveY * 8,
              duration: 1.2,
              ease: "power3.out",
            }
          );
        };

      section.addEventListener(
        "mousemove",
        handleMouseMove
      );

      /* =================================================
         CLEANUP
      ================================================= */

      return () => {
        section.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      };
    }, section);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      className="contact-section"
      id="contact"
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="contact-bg">

        <div className="contact-glow contact-glow-one"></div>

        <div className="contact-glow contact-glow-two"></div>

        <div className="contact-glow contact-glow-three"></div>

        <div className="contact-grid"></div>

        <div className="contact-code contact-code-one">
          {"</contact>"}
        </div>

        <div className="contact-code contact-code-two">
          {"{ connect: true }"}
        </div>

        <div className="contact-code contact-code-three">
          {"const developer = true;"}
        </div>

      </div>

      {/* =================================================
          TOP → BOTTOM CODING RAIN
      ================================================= */}

      <div
        className="contact-code-rain"
        aria-hidden="true"
      ></div>

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="contact-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="contact-header">

          <div className="contact-header-left">

            <span className="contact-overline">
              CONTACT / LET'S CONNECT
            </span>

            <span className="contact-number">
              06 — GET IN TOUCH
            </span>

          </div>

          <div className="contact-header-right">

            <span className="contact-status-dot"></span>

            <span className="contact-status">
              AVAILABLE FOR WORK
            </span>

          </div>

        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <div className="contact-title-area">

          <div className="contact-small-title">
            HAVE A PROJECT IN MIND?
          </div>

          <h2>
            Let's
            <br />
            <span>Talk.</span>
          </h2>

          <div className="contact-title-decoration">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p className="contact-intro">
            Whether you have a new project,
            a business idea, or simply want
            to connect, feel free to reach out.
            I am always open to interesting
            conversations and new opportunities.
          </p>

        </div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="contact-main-grid">

          {/* =================================================
              LEFT
          ================================================= */}

          <div className="contact-left">

            <div className="contact-info-card">

              <div className="contact-info-top">

                <span className="info-label">
                  01 / CONTACT
                </span>

                <span className="info-index">
                  2026
                </span>

              </div>

              <div className="contact-info-content">

                <span className="contact-small-title">
                  START A CONVERSATION
                </span>

                <h3>
                  Build
                  <br />
                  something
                  <br />
                  <span>great.</span>
                </h3>

                <p>
                  I enjoy turning ideas into
                  clean, responsive and scalable
                  digital experiences.
                </p>

              </div>

              {/* DETAILS */}

              <div className="contact-details">

                <a
                  href="mailto:mdebashish543@gmail.com"
                  className="contact-detail"
                >
                  <span className="detail-icon">
                    @
                  </span>

                  <span className="detail-content">
                    <small>EMAIL</small>

                    <strong>
                      mdebash543@gmail.com
                    </strong>
                  </span>

                  <span className="detail-arrow">
                    ↗
                  </span>
                </a>

                <a
                  href="tel:+919668563648"
                  className="contact-detail"
                >
                  <span className="detail-icon">
                    ☎
                  </span>

                  <span className="detail-content">
                    <small>PHONE</small>

                    <strong>
                      +91 96685 63648
                    </strong>
                  </span>

                  <span className="detail-arrow">
                    ↗
                  </span>
                </a>

                <a
                  href="https://wa.me/919668563648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail"
                >
                  <span className="detail-icon">
                    WA
                  </span>

                  <span className="detail-content">
                    <small>WHATSAPP</small>

                    <strong>
                      Start a conversation
                    </strong>
                  </span>

                  <span className="detail-arrow">
                    ↗
                  </span>
                </a>

              </div>

              {/* AVAILABILITY */}

              <div className="contact-availability">

                <span className="availability-dot"></span>

                <span className="availability-text">

                  <small>
                    STATUS
                  </small>

                  <strong>
                    Currently available for opportunities
                  </strong>

                </span>

              </div>

            </div>

            {/* =================================================
                SOCIALS
            ================================================= */}

            <div className="social-section">

              <div className="social-heading">
                FIND ME ONLINE
              </div>

              <div className="social-grid">

                {socialLinks.map(
                  (social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-card ${social.className}`}
                    >

                      <span className="social-icon">
                        {social.short}
                      </span>

                      <span className="social-card-content">

                        <strong>
                          {social.name}
                        </strong>

                        <small>
                          {social.text}
                        </small>

                      </span>

                      <span className="social-arrow">
                        ↗
                      </span>

                    </a>
                  )
                )}

              </div>

            </div>

          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div className="contact-right">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-topbar">

                <div className="terminal-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="form-terminal-name">
                  contact.form
                </span>

                <span className="form-terminal-status">
                  ● ONLINE
                </span>

              </div>

              <div className="form-content">

                <div className="form-intro">

                  <span className="form-line-number">
                    01
                  </span>

                  <p>
                    Send me a message and
                    let's discuss your idea.
                  </p>

                </div>

                {/* NAME */}

                <div className="form-group">

                  <label htmlFor="name">
                    <span>01</span>
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                </div>

                {/* EMAIL */}

                <div className="form-group">

                  <label htmlFor="email">
                    <span>02</span>
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>

                {/* SUBJECT */}

                <div className="form-group">

                  <label htmlFor="subject">
                    <span>03</span>
                    SUBJECT
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project discussion"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                </div>

                {/* MESSAGE */}

                <div className="form-group">

                  <label htmlFor="message">
                    <span>04</span>
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                </div>

                {/* STATUS */}

                {status && (
                  <div className="form-status">
                    <span>›</span>
                    {status}
                  </div>
                )}

                {/* BUTTON */}

                <button
                  type="submit"
                  className="contact-submit"
                >

                  <span className="submit-icon">
                    →
                  </span>

                  <span>
                    SEND MESSAGE
                  </span>

                  <span className="submit-end">
                    ↗
                  </span>

                </button>

                <div className="form-footer">

                  <span>
                    PRESS SEND TO OPEN YOUR EMAIL CLIENT
                  </span>

                  <span>
                    SECURE / DIRECT
                  </span>

                </div>

              </div>

            </form>

          </div>

        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="contact-bottom">

          <div className="contact-bottom-line"></div>

          <div className="contact-bottom-content">

            <span>
              © 2026 DEBASHISH MALLICK
            </span>

            <strong>
              FULL STACK DEVELOPER
            </strong>

            <span>
              BHUBANESWAR / INDIA
            </span>

          </div>

        </div>

      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;