import React, { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = forwardRef((props, ref) => {
  const footerRef = useRef(null);

  const socials = [
    {
      name: "GitHub",
      short: "GH",
      url: "https://github.com/debashishmallick",
    },
    {
      name: "LinkedIn",
      short: "IN",
      url: "https://www.linkedin.com/",
    },
    {
      name: "Instagram",
      short: "IG",
      url: "https://www.instagram.com/",
    },
    {
      name: "X",
      short: "X",
      url: "https://x.com/",
    },
    {
      name: "Facebook",
      short: "FB",
      url: "https://www.facebook.com/",
    },
  ];

  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "JavaScript",
    "Git",
    "REST API",
  ];

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      const revealItems = footer.querySelectorAll(".footer-reveal");
      const socialItems = footer.querySelectorAll(".footer-social");
      const techItems = footer.querySelectorAll(".footer-tech");
      const particles = footer.querySelectorAll(".footer-particle");
      const glow = footer.querySelector(".footer-main-glow");
      const grid = footer.querySelector(".footer-grid");
      const backTop = footer.querySelector(".footer-top-btn");

      gsap.set(revealItems, {
        y: 45,
        opacity: 0,
      });

      gsap.set(socialItems, {
        y: 25,
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(techItems, {
        y: 15,
        opacity: 0,
      });

      gsap.set(particles, {
        opacity: 0,
        scale: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
          once: true,
        },
      });

      tl.to(revealItems, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power4.out",
      })
        .to(
          socialItems,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "back.out(1.7)",
          },
          "-=0.45"
        )
        .to(
          techItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          particles,
          {
            opacity: 0.5,
            scale: 1,
            duration: 0.5,
            stagger: 0.02,
            ease: "back.out(1.5)",
          },
          "-=0.4"
        );

      // Main glow breathing
      gsap.to(glow, {
        scale: 1.12,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Grid movement
      gsap.to(grid, {
        backgroundPosition: "80px 80px",
        duration: 8,
        repeat: -1,
        ease: "none",
      });

      // Floating particles
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          x: gsap.utils.random(-35, 35),
          y: gsap.utils.random(-30, 30),
          rotation: gsap.utils.random(-20, 20),
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          yoyo: true,
          delay: index * 0.04,
          ease: "sine.inOut",
        });
      });

      // Social magnetic hover
      socialItems.forEach((item) => {
        const icon = item.querySelector(".footer-social-inner");

        const moveX = gsap.quickTo(icon, "x", {
          duration: 0.25,
          ease: "power3.out",
        });

        const moveY = gsap.quickTo(icon, "y", {
          duration: 0.25,
          ease: "power3.out",
        });

        item.addEventListener("mousemove", (e) => {
          const rect = item.getBoundingClientRect();

          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          moveX(x * 0.18);
          moveY(y * 0.18);
        });

        item.addEventListener("mouseleave", () => {
          moveX(0);
          moveY(0);
        });
      });

      // Back to top
      const handleTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      backTop?.addEventListener("click", handleTop);

      return () => {
        backTop?.removeEventListener("click", handleTop);
      };
    }, footer);

    return () => ctx.revert();
  }, []);

  const particleSymbols = [
    "</>",
    "{}",
    "()",
    "=>",
    "JS",
    "RE",
    "CSS",
    "API",
    "DB",
    "01",
    "&&",
    "||",
    "git",
    "npm",
    "MERN",
    "const",
    "async",
    "await",
  ];

  return (
    <footer
      ref={(node) => {
        footerRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      className="premium-footer"
    >
      {/* Animated top line */}
      <div className="footer-top-line">
        <span></span>
      </div>

      {/* Background */}
      <div className="footer-bg">
        <div className="footer-main-glow"></div>
        <div className="footer-grid"></div>

        <div className="footer-orb footer-orb-one"></div>
        <div className="footer-orb footer-orb-two"></div>
      </div>

      {/* Tiny code particles */}
      <div className="footer-particles">
        {Array.from({ length: 32 }).map((_, index) => (
          <span
            key={index}
            className="footer-particle"
            style={{
              left: `${(index * 31.7) % 100}%`,
              top: `${(index * 43.8) % 100}%`,
            }}
          >
            {particleSymbols[index % particleSymbols.length]}
          </span>
        ))}
      </div>

      <div className="footer-container">
        {/* Main CTA */}
        <div className="footer-cta footer-reveal">
          <div className="footer-cta-badge">
            <span className="footer-status-dot"></span>
            Available for opportunities
          </div>

          <h2>
            Let&apos;s build something
            <span> amazing.</span>
          </h2>

          <p>
            Turning ideas into scalable, modern and meaningful digital
            experiences.
          </p>

          <a
            href="mailto:mdebashish543@gmail.com"
            className="footer-email-btn"
          >
            <span>Let&apos;s Talk</span>
            <span className="footer-arrow">↗</span>
          </a>
        </div>

        {/* Divider */}
        <div className="footer-divider footer-reveal">
          <span></span>
          <div className="footer-divider-code">&lt;/developer&gt;</div>
          <span></span>
        </div>

        {/* Middle section */}
        <div className="footer-middle">
          <div className="footer-brand footer-reveal">
            <div className="footer-logo">
              <span>&lt;</span>
              <strong>DM</strong>
              <span>/&gt;</span>
            </div>

            <p>
              Full Stack Developer crafting modern web applications with
              clean code, thoughtful design and powerful technology.
            </p>

            <div className="footer-location">
              <span className="location-pulse"></span>
              Bhubaneswar, India
            </div>
          </div>

          <div className="footer-connect footer-reveal">
            <span className="footer-small-title">CONNECT</span>

            <div className="footer-socials">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label={social.name}
                >
                  <span className="footer-social-inner">
                    <span className="footer-social-short">
                      {social.short}
                    </span>

                    <span className="footer-social-name">
                      {social.name}
                    </span>

                    <span className="footer-social-arrow">↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div className="footer-tech-section footer-reveal">
          <div className="footer-tech-heading">
            <span>BUILT WITH</span>
            <div></div>
          </div>

          <div className="footer-tech-list">
            {technologies.map((tech) => (
              <span key={tech} className="footer-tech">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()}{" "}
            <strong>Debashish Mallick</strong>. All rights reserved.
          </p>

          <div className="footer-bottom-center">
            <span>DESIGNED</span>
            <span className="footer-heart">♥</span>
            <span>WITH CODE</span>
          </div>

          <button
            type="button"
            className="footer-top-btn"
            aria-label="Back to top"
          >
            <span>↑</span>
            <small>TOP</small>
          </button>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;