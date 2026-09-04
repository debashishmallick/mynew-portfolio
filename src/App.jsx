import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/footer/Footer";
import Contact from "./components/Contact/Contact";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const appRef = useRef(null);

  const navbarRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================================
         ELEMENTS
      ========================================================= */

      const navbar = navbarRef.current;
      const hero = heroRef.current;
      const about = aboutRef.current;
      const projects = projectsRef.current;
      const skills = skillsRef.current;

      /* =========================================================
         NAVBAR
      ========================================================= */

      const logo = navbar?.querySelector(".navbar-logo");

      const navLinks = navbar?.querySelectorAll(
        ".navbar-menu a"
      );

      const resume = navbar?.querySelector(
        ".resume-button"
      );

      /* =========================================================
         HERO
      ========================================================= */

      const heroLine = hero?.querySelector(
        ".hero-line"
      );

      const heroDot = hero?.querySelector(
        ".hero-line span"
      );

      const smallText = hero?.querySelector(
        ".hero-small-text"
      );

      const heading = hero?.querySelector(
        ".hero-content h1"
      );

      const name = hero?.querySelector(
        ".hero-name"
      );

      const subHeading = hero?.querySelector(
        ".hero-content h2"
      );

      const description = hero?.querySelector(
        ".hero-description"
      );

      const buttons = hero?.querySelectorAll(
        ".hero-actions a"
      );

      const socials = hero?.querySelector(
        ".hero-socials"
      );

      const scroll = hero?.querySelector(
        ".hero-scroll"
      );

      /* =========================================================
         HERO PROFILE
      ========================================================= */

      const profile = hero?.querySelector(
        ".hero-profile"
      );

      const profileGlow = hero?.querySelector(
        ".profile-glow"
      );

      const profileRing = hero?.querySelector(
        ".profile-ring"
      );

      const imageWrapper = hero?.querySelector(
        ".profile-image-wrapper"
      );

      const image = hero?.querySelector(
        ".profile-image"
      );

      const profileBadge = hero?.querySelector(
        ".profile-badge"
      );

      const heroGrid = hero?.querySelector(
        ".hero-grid"
      );

      /* =========================================================
         ABOUT
      ========================================================= */

      const aboutHeader = about?.querySelector(
        ".about-header"
      );

      const aboutNumber = about?.querySelector(
        ".about-number"
      );

      const aboutLabel = about?.querySelector(
        ".about-label"
      );

      const aboutHeading = about?.querySelector(
        ".about-header h2"
      );

      const aboutVisual = about?.querySelector(
        ".about-visual"
      );

      const aboutCard = about?.querySelector(
        ".about-card"
      );

      const aboutOrbitOne = about?.querySelector(
        ".about-orbit-one"
      );

      const aboutOrbitTwo = about?.querySelector(
        ".about-orbit-two"
      );

      const aboutParagraphs = about?.querySelectorAll(
        ".about-text > p"
      );

      const aboutTech = about?.querySelector(
        ".about-tech"
      );

      const techItems = about?.querySelectorAll(
        ".tech-list span"
      );

      const aboutButton = about?.querySelector(
        ".about-button"
      );

      const aboutStats = about?.querySelectorAll(
        ".about-stat"
      );

      /* =========================================================
         EXPERIENCE
      ========================================================= */

      const experienceSection =
        about?.querySelector(
          ".about-experience"
        );

      const experienceHeader =
        about?.querySelector(
          ".experience-header"
        );

      const experienceItems =
        about?.querySelectorAll(
          ".experience-item"
        );

      const experienceCards =
        about?.querySelectorAll(
          ".experience-card"
        );

      const experienceMarkers =
        about?.querySelectorAll(
          ".experience-marker-outer"
        );

      const experienceLine =
        about?.querySelector(
          ".experience-line-progress"
        );

      const experienceTech =
        about?.querySelectorAll(
          ".experience-tech-list span"
        );

      const experienceFooter =
        about?.querySelector(
          ".experience-footer"
        );

      /* =========================================================
         PROJECTS
      ========================================================= */

      const projectsHeader =
        projects?.querySelector(
          ".projects-header"
        );

      const projectCards =
        projects?.querySelectorAll(
          ".project-card"
        );

      const projectVisuals =
        projects?.querySelectorAll(
          ".project-visual"
        );

      const projectBrowsers =
        projects?.querySelectorAll(
          ".project-browser"
        );

      const projectContents =
        projects?.querySelectorAll(
          ".project-content"
        );

      const projectTech =
        projects?.querySelectorAll(
          ".project-tech span"
        );

      const projectActions =
        projects?.querySelectorAll(
          ".project-actions"
        );

      const projectNumbers =
        projects?.querySelectorAll(
          ".project-number"
        );

      const projectFooter =
        projects?.querySelector(
          ".projects-footer"
        );

      /* =========================================================
         NEW SKILLS STRUCTURE
      ========================================================= */

      const skillsHeader =
        skills?.querySelector(
          ".skills-header"
        );

      const skillsTitle =
        skills?.querySelector(
          ".skills-title-content"
        );

      const skillsIntro =
        skills?.querySelector(
          ".skills-intro-row"
        );

      const skillDomains =
        skills?.querySelectorAll(
          ".skill-domain"
        );

      const skillDomainNumbers =
        skills?.querySelectorAll(
          ".skill-domain-number"
        );

      const skillRows =
        skills?.querySelectorAll(
          ".skill-row"
        );

      const skillProgress =
        skills?.querySelectorAll(
          ".skill-row-progress"
        );

      const stackTerminal =
        skills?.querySelector(
          ".stack-terminal"
        );

      const stackItems =
        skills?.querySelectorAll(
          ".stack-chip"
        );

      const skillsFooter =
        skills?.querySelector(
          ".skills-footer"
        );

      /* =========================================================
         INITIAL STATES
      ========================================================= */

      /* ---------------- NAVBAR ---------------- */

      gsap.set(logo, {
        y: -30,
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(navLinks, {
        y: -20,
        opacity: 0,
      });

      gsap.set(resume, {
        y: -20,
        opacity: 0,
        scale: 0.9,
      });

      /* ---------------- HERO ---------------- */

      gsap.set(heroLine, {
        scaleY: 0,
        transformOrigin: "top",
      });

      gsap.set(heroDot, {
        scale: 0,
        opacity: 0,
      });

      gsap.set(smallText, {
        y: 30,
        opacity: 0,
      });

      gsap.set(heading, {
        y: 70,
        opacity: 0,
      });

      gsap.set(name, {
        clipPath: "inset(0 100% 0 0)",
      });

      gsap.set(subHeading, {
        y: 35,
        opacity: 0,
      });

      gsap.set(description, {
        y: 30,
        opacity: 0,
      });

      gsap.set(buttons, {
        y: 25,
        opacity: 0,
        scale: 0.95,
      });

      gsap.set(socials, {
        y: 20,
        opacity: 0,
      });

      /* ---------------- PROFILE ---------------- */

      gsap.set(profile, {
        y: 100,
        opacity: 0,
        scale: 0.88,
        transformPerspective: 1200,
      });

      gsap.set(profileGlow, {
        scale: 0.5,
        opacity: 0,
      });

      gsap.set(profileRing, {
        scale: 0.65,
        opacity: 0,
      });

      gsap.set(imageWrapper, {
        scale: 0.78,
        opacity: 0,
        rotationY: 12,
        rotationX: -3,
        transformPerspective: 1200,
      });

      gsap.set(image, {
        scale: 1.1,
        y: 25,
      });

      gsap.set(profileBadge, {
        y: 25,
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(scroll, {
        y: 20,
        opacity: 0,
      });

      /* ---------------- ABOUT ---------------- */

      gsap.set(aboutHeader, {
        y: 70,
        opacity: 0,
      });

      gsap.set(aboutNumber, {
        x: -20,
        opacity: 0,
      });

      gsap.set(aboutLabel, {
        y: 20,
        opacity: 0,
      });

      gsap.set(aboutHeading, {
        y: 50,
        opacity: 0,
      });

      gsap.set(aboutVisual, {
        x: -100,
        opacity: 0,
      });

      gsap.set(aboutCard, {
        scale: 0.8,
        rotationY: -15,
        opacity: 0,
      });

      gsap.set(
        [aboutOrbitOne, aboutOrbitTwo],
        {
          scale: 0.5,
          opacity: 0,
        }
      );

      gsap.set(aboutParagraphs, {
        y: 35,
        opacity: 0,
      });

      gsap.set(aboutTech, {
        y: 30,
        opacity: 0,
      });

      gsap.set(techItems, {
        y: 15,
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(aboutButton, {
        y: 20,
        opacity: 0,
        scale: 0.95,
      });

      gsap.set(aboutStats, {
        y: 40,
        opacity: 0,
      });

      /* ---------------- EXPERIENCE ---------------- */

      gsap.set(experienceHeader, {
        y: 60,
        opacity: 0,
      });

      gsap.set(experienceItems, {
        y: 70,
        opacity: 0,
      });

      gsap.set(experienceCards, {
        x: 50,
        opacity: 0,
      });

      gsap.set(experienceMarkers, {
        scale: 0,
        opacity: 0,
      });

      gsap.set(experienceLine, {
        scaleY: 0,
        transformOrigin: "top",
      });

      gsap.set(experienceTech, {
        y: 12,
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(experienceFooter, {
        y: 25,
        opacity: 0,
      });

      /* ---------------- PROJECTS ---------------- */

      gsap.set(projectsHeader, {
        y: 80,
        opacity: 0,
      });

      gsap.set(projectCards, {
        y: 120,
        opacity: 0,
        scale: 0.92,
        rotationX: 8,
        transformPerspective: 1400,
        transformOrigin: "center bottom",
      });

      gsap.set(projectVisuals, {
        x: -70,
        opacity: 0,
      });

      gsap.set(projectBrowsers, {
        scale: 0.82,
        rotationY: -18,
        rotationX: 8,
        opacity: 0,
        transformPerspective: 1400,
      });

      gsap.set(projectContents, {
        x: 70,
        opacity: 0,
      });

      gsap.set(projectTech, {
        y: 25,
        opacity: 0,
        scale: 0.8,
      });

      gsap.set(projectActions, {
        y: 25,
        opacity: 0,
        scale: 0.95,
      });

      gsap.set(projectNumbers, {
        scale: 0,
        opacity: 0,
        rotation: -25,
      });

      gsap.set(projectFooter, {
        y: 40,
        opacity: 0,
      });

      /* ---------------- NEW SKILLS ---------------- */

      gsap.set(skillsHeader, {
        y: 70,
        opacity: 0,
      });

      gsap.set(skillsTitle, {
        y: 45,
        opacity: 0,
      });

      gsap.set(skillsIntro, {
        y: 30,
        opacity: 0,
      });

      gsap.set(skillDomains, {
        y: 90,
        opacity: 0,
        scale: 0.96,
        rotationX: 5,
        transformPerspective: 1200,
      });

      gsap.set(skillDomainNumbers, {
        scale: 0,
        opacity: 0,
        rotation: -15,
      });

      gsap.set(skillRows, {
        y: 20,
        opacity: 0,
      });

      gsap.set(skillProgress, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(stackTerminal, {
        y: 50,
        opacity: 0,
        scale: 0.96,
      });

      gsap.set(stackItems, {
        y: 20,
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(skillsFooter, {
        y: 30,
        opacity: 0,
      });

      /* =========================================================
         HERO INTRO
      ========================================================= */

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro.to(logo, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
      });

      intro.to(
        navLinks,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.09,
        },
        "-=0.4"
      );

      intro.to(
        resume,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
        },
        "-=0.35"
      );

      intro.to(
        heroDot,
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(2)",
        },
        "-=0.2"
      );

      intro.to(
        heroLine,
        {
          scaleY: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.1"
      );

      intro.to(
        smallText,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
        },
        "-=0.45"
      );

      intro.to(
        heading,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.3"
      );

      intro.to(
        name,
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.55"
      );

      intro.to(
        subHeading,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.35"
      );

      intro.to(
        description,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "-=0.35"
      );

      intro.to(
        buttons,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.12,
          ease: "back.out(1.3)",
        },
        "-=0.3"
      );

      intro.to(
        socials,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.25"
      );

      intro.to(
        profile,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.55"
      );

      intro.to(
        profileGlow,
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      intro.to(
        profileRing,
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "back.out(1.4)",
        },
        "-=0.8"
      );

      intro.to(
        imageWrapper,
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          rotationX: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.75"
      );

      intro.to(
        image,
        {
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.7"
      );

      intro.to(
        profileBadge,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "back.out(1.5)",
        },
        "-=0.4"
      );

      intro.to(
        scroll,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.25"
      );

      /* =========================================================
         HERO CONTINUOUS ANIMATION
      ========================================================= */

      if (profileGlow) {
        gsap.to(profileGlow, {
          scale: 1.08,
          opacity: 0.8,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (profileRing) {
        gsap.to(profileRing, {
          rotation: 360,
          duration: 18,
          repeat: -1,
          ease: "none",
        });
      }

      if (heroGrid) {
        gsap.to(heroGrid, {
          y: 12,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (scroll) {
        gsap.to(scroll, {
          y: 8,
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* =========================================================
         ABOUT SCROLL
      ========================================================= */

      const aboutTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: about,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      aboutTimeline.to(aboutHeader, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      });

      aboutTimeline.to(
        aboutNumber,
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.45"
      );

      aboutTimeline.to(
        aboutLabel,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.35"
      );

      aboutTimeline.to(
        aboutHeading,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.35"
      );

      aboutTimeline.to(
        aboutVisual,
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.6"
      );

      aboutTimeline.to(
        aboutCard,
        {
          scale: 1,
          rotationY: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.75"
      );

      aboutTimeline.to(
        [aboutOrbitOne, aboutOrbitTwo],
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.4)",
        },
        "-=0.75"
      );

      aboutTimeline.to(
        aboutParagraphs,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.45"
      );

      aboutTimeline.to(
        aboutTech,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.35"
      );

      aboutTimeline.to(
        techItems,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "back.out(1.4)",
        },
        "-=0.35"
      );

      aboutTimeline.to(
        aboutButton,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "back.out(1.3)",
        },
        "-=0.3"
      );

      aboutTimeline.to(
        aboutStats,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.35"
      );

      /* =========================================================
         EXPERIENCE TIMELINE
      ========================================================= */

      if (experienceSection) {
        const experienceTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: experienceSection,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });

        experienceTimeline.to(
          experienceHeader,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power4.out",
          }
        );

        experienceTimeline.to(
          experienceLine,
          {
            scaleY: 1,
            duration: 1.4,
            ease: "power3.inOut",
          },
          "-=0.4"
        );

        experienceTimeline.to(
          experienceItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.18,
            ease: "power4.out",
          },
          "-=1"
        );

        experienceTimeline.to(
          experienceMarkers,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.18,
            ease: "back.out(1.8)",
          },
          "-=0.85"
        );

        experienceTimeline.to(
          experienceCards,
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.18,
            ease: "power4.out",
          },
          "-=0.8"
        );

        experienceTimeline.to(
          experienceTech,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.035,
            ease: "back.out(1.4)",
          },
          "-=0.45"
        );

        experienceTimeline.to(
          experienceFooter,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }

      /* =========================================================
         ABOUT CONTINUOUS ORBITS
      ========================================================= */

      if (aboutOrbitOne) {
        gsap.to(aboutOrbitOne, {
          rotation: 360,
          duration: 16,
          repeat: -1,
          ease: "none",
        });
      }

      if (aboutOrbitTwo) {
        gsap.to(aboutOrbitTwo, {
          rotation: -360,
          duration: 22,
          repeat: -1,
          ease: "none",
        });
      }

      /* =========================================================
         PROJECTS SCROLL REVEAL
      ========================================================= */

      const projectsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: projects,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      projectsTimeline.to(projectsHeader, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
      });

      projectsTimeline.to(
        projectCards,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.9,
          stagger: 0.18,
          ease: "power4.out",
        },
        "-=0.4"
      );

      projectsTimeline.to(
        projectNumbers,
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: "back.out(1.7)",
        },
        "-=0.7"
      );

      projectsTimeline.to(
        projectVisuals,
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.65"
      );

      projectsTimeline.to(
        projectBrowsers,
        {
          scale: 1,
          rotationY: 0,
          rotationX: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.7"
      );

      projectsTimeline.to(
        projectContents,
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power4.out",
        },
        "-=0.8"
      );

      projectsTimeline.to(
        projectTech,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "back.out(1.4)",
        },
        "-=0.45"
      );

      projectsTimeline.to(
        projectActions,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.1,
        },
        "-=0.35"
      );

      projectsTimeline.to(
        projectFooter,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.2"
      );

      /* =========================================================
         PROJECT FLOAT
      ========================================================= */

      projectBrowsers?.forEach(
        (browser, index) => {
          gsap.to(browser, {
            y: -8,
            rotationZ:
              index % 2 === 0
                ? 0.4
                : -0.4,
            duration: 2.8 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: projects,
              start: "top bottom",
              end: "bottom top",
              toggleActions:
                "play pause resume pause",
            },
          });
        }
      );

      /* =========================================================
         PROJECT NUMBER PULSE
      ========================================================= */

      projectNumbers?.forEach(
        (number, index) => {
          gsap.to(number, {
            scale: 1.08,
            opacity: 0.75,
            duration: 2 + index * 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: projects,
              start: "top bottom",
              end: "bottom top",
              toggleActions:
                "play pause resume pause",
            },
          });
        }
      );

      /* =========================================================
         PROJECT PARALLAX
      ========================================================= */

      projectCards?.forEach(
        (card, index) => {
          gsap.fromTo(
            card,
            {
              y:
                index % 2 === 0
                  ? 30
                  : -30,
            },
            {
              y:
                index % 2 === 0
                  ? -20
                  : 20,
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }
      );

      projectVisuals?.forEach(
        (visual) => {
          gsap.to(visual, {
            y: -35,
            scrollTrigger: {
              trigger: visual,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      );

      /* =========================================================
         PROJECT 3D HOVER
      ========================================================= */

      const projectCleanup = [];

      if (window.innerWidth > 900) {
        projectCards?.forEach((card) => {
          const browser =
            card.querySelector(
              ".project-browser"
            );

          const visual =
            card.querySelector(
              ".project-visual"
            );

          const content =
            card.querySelector(
              ".project-content"
            );

          const number =
            card.querySelector(
              ".project-number"
            );

          const tech =
            card.querySelectorAll(
              ".project-tech span"
            );

          const actions =
            card.querySelector(
              ".project-actions"
            );

          const handleEnter = () => {
            gsap.to(card, {
              y: -12,
              scale: 1.015,
              rotationX: 0,
              rotationY: 0,
              duration: 0.45,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(browser, {
              scale: 1.035,
              duration: 0.5,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(visual, {
              scale: 1.025,
              duration: 0.5,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(content, {
              x: 5,
              duration: 0.4,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(number, {
              scale: 1.12,
              rotation: 4,
              duration: 0.45,
              ease: "back.out(1.5)",
              overwrite: "auto",
            });

            gsap.to(tech, {
              y: -4,
              scale: 1.06,
              duration: 0.35,
              stagger: 0.04,
              ease: "back.out(1.5)",
              overwrite: "auto",
            });

            gsap.to(actions, {
              x: 5,
              duration: 0.4,
              ease: "power3.out",
              overwrite: "auto",
            });
          };

          const handleMove = (event) => {
            const rect =
              card.getBoundingClientRect();

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

            const rotateY =
              ((mouseX - centerX) /
                centerX) *
              5;

            const rotateX =
              ((mouseY - centerY) /
                centerY) *
              -5;

            gsap.to(card, {
              rotationX: rotateX,
              rotationY: rotateY,
              transformPerspective: 1200,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });

            gsap.to(browser, {
              x:
                ((mouseX - centerX) /
                  centerX) *
                8,
              y:
                ((mouseY - centerY) /
                  centerY) *
                6,
              duration: 0.5,
              ease: "power2.out",
              overwrite: "auto",
            });

            gsap.to(visual, {
              x:
                ((mouseX - centerX) /
                  centerX) *
                12,
              y:
                ((mouseY - centerY) /
                  centerY) *
                8,
              duration: 0.6,
              ease: "power2.out",
              overwrite: "auto",
            });

            gsap.to(content, {
              x:
                ((mouseX - centerX) /
                  centerX) *
                -5,
              y:
                ((mouseY - centerY) /
                  centerY) *
                -3,
              duration: 0.5,
              ease: "power2.out",
              overwrite: "auto",
            });
          };

          const handleLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              rotationX: 0,
              rotationY: 0,
              duration: 0.7,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(browser, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(visual, {
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(content, {
              x: 0,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(number, {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(tech, {
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.03,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(actions, {
              x: 0,
              duration: 0.5,
              ease: "power3.out",
              overwrite: "auto",
            });
          };

          card.addEventListener(
            "mouseenter",
            handleEnter
          );

          card.addEventListener(
            "mousemove",
            handleMove
          );

          card.addEventListener(
            "mouseleave",
            handleLeave
          );

          projectCleanup.push(() => {
            card.removeEventListener(
              "mouseenter",
              handleEnter
            );

            card.removeEventListener(
              "mousemove",
              handleMove
            );

            card.removeEventListener(
              "mouseleave",
              handleLeave
            );
          });
        });
      }

      /* =========================================================
         PROJECT MAGNETIC ACTIONS
      ========================================================= */

      if (window.innerWidth > 900) {
        projectActions?.forEach(
          (action) => {
            const handleActionMove =
              (event) => {
                const rect =
                  action.getBoundingClientRect();

                const x =
                  event.clientX -
                  rect.left -
                  rect.width / 2;

                const y =
                  event.clientY -
                  rect.top -
                  rect.height / 2;

                gsap.to(action, {
                  x: x * 0.18,
                  y: y * 0.18,
                  duration: 0.35,
                  ease: "power3.out",
                  overwrite: "auto",
                });
              };

            const handleActionLeave =
              () => {
                gsap.to(action, {
                  x: 0,
                  y: 0,
                  duration: 0.5,
                  ease: "elastic.out(1, 0.4)",
                  overwrite: "auto",
                });
              };

            action.addEventListener(
              "mousemove",
              handleActionMove
            );

            action.addEventListener(
              "mouseleave",
              handleActionLeave
            );

            projectCleanup.push(() => {
              action.removeEventListener(
                "mousemove",
                handleActionMove
              );

              action.removeEventListener(
                "mouseleave",
                handleActionLeave
              );
            });
          }
        );
      }

      /* =========================================================
         NEW SKILLS SCROLL REVEAL
      ========================================================= */

      const skillsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: skills,
          start: "top 78%",
          toggleActions:
            "play none none reverse",
        },
      });

      skillsTimeline.to(skillsHeader, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
      });

      skillsTimeline.to(
        skillsTitle,
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power4.out",
        },
        "-=0.45"
      );

      skillsTimeline.to(
        skillsIntro,
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
        },
        "-=0.4"
      );

      skillsTimeline.to(
        skillDomains,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.85,
          stagger: 0.13,
          ease: "power4.out",
        },
        "-=0.3"
      );

      skillsTimeline.to(
        skillDomainNumbers,
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        "-=0.65"
      );

      skillsTimeline.to(
        skillRows,
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.025,
          ease: "power3.out",
        },
        "-=0.45"
      );

      skillProgress?.forEach((bar) => {
        const width =
          bar.dataset.width || "0%";

        skillsTimeline.to(
          bar,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.72"
        );

        bar.style.setProperty(
          "--skill-width",
          width
        );
      });

      skillsTimeline.to(
        stackTerminal,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.4"
      );

      skillsTimeline.to(
        stackItems,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.035,
          ease: "back.out(1.5)",
        },
        "-=0.4"
      );

      skillsTimeline.to(
        skillsFooter,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2"
      );

      /* =========================================================
         SKILLS CARD FLOAT
      ========================================================= */

      skillDomains?.forEach(
        (domain, index) => {
          gsap.to(domain, {
            y:
              index % 2 === 0
                ? -5
                : 5,
            duration:
              3 + index * 0.25,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: skills,
              start: "top bottom",
              end: "bottom top",
              toggleActions:
                "play pause resume pause",
            },
          });
        }
      );

      /* =========================================================
         SKILLS 3D HOVER
      ========================================================= */

      const skillsCleanup = [];

      if (window.innerWidth > 900) {
        skillDomains?.forEach((domain) => {
          const number =
            domain.querySelector(
              ".skill-domain-number"
            );

          const rows =
            domain.querySelectorAll(
              ".skill-row"
            );

          const bars =
            domain.querySelectorAll(
              ".skill-row-progress"
            );

          const handleEnter = () => {
            gsap.to(domain, {
              y: -10,
              scale: 1.015,
              duration: 0.4,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(number, {
              scale: 1.08,
              rotation: 4,
              duration: 0.4,
              ease: "back.out(1.5)",
              overwrite: "auto",
            });

            gsap.to(rows, {
              x: 4,
              duration: 0.35,
              stagger: 0.025,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(bars, {
              scaleY: 1.08,
              duration: 0.35,
              ease: "power3.out",
              overwrite: "auto",
            });
          };

          const handleMove = (event) => {
            const rect =
              domain.getBoundingClientRect();

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

            const rotateX =
              ((mouseY - centerY) /
                centerY) *
              -4;

            const rotateY =
              ((mouseX - centerX) /
                centerX) *
              4;

            gsap.to(domain, {
              rotationX: rotateX,
              rotationY: rotateY,
              transformPerspective: 1200,
              duration: 0.35,
              ease: "power2.out",
              overwrite: "auto",
            });

            domain.style.setProperty(
              "--mouse-x",
              `${mouseX}px`
            );

            domain.style.setProperty(
              "--mouse-y",
              `${mouseY}px`
            );
          };

          const handleLeave = () => {
            gsap.to(domain, {
              y: 0,
              scale: 1,
              rotationX: 0,
              rotationY: 0,
              duration: 0.65,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(number, {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(rows, {
              x: 0,
              duration: 0.4,
              stagger: 0.02,
              ease: "power3.out",
              overwrite: "auto",
            });

            gsap.to(bars, {
              scaleY: 1,
              duration: 0.35,
              ease: "power3.out",
              overwrite: "auto",
            });
          };

          domain.addEventListener(
            "mouseenter",
            handleEnter
          );

          domain.addEventListener(
            "mousemove",
            handleMove
          );

          domain.addEventListener(
            "mouseleave",
            handleLeave
          );

          skillsCleanup.push(() => {
            domain.removeEventListener(
              "mouseenter",
              handleEnter
            );

            domain.removeEventListener(
              "mousemove",
              handleMove
            );

            domain.removeEventListener(
              "mouseleave",
              handleLeave
            );
          });
        });

        /* =======================================================
           STACK CHIP HOVER
        ======================================================= */

        stackItems?.forEach((item) => {
          const handleEnter = () => {
            gsap.to(item, {
              y: -6,
              scale: 1.06,
              duration: 0.35,
              ease: "back.out(1.5)",
              overwrite: "auto",
            });
          };

          const handleLeave = () => {
            gsap.to(item, {
              y: 0,
              scale: 1,
              duration: 0.45,
              ease: "power3.out",
              overwrite: "auto",
            });
          };

          item.addEventListener(
            "mouseenter",
            handleEnter
          );

          item.addEventListener(
            "mouseleave",
            handleLeave
          );

          skillsCleanup.push(() => {
            item.removeEventListener(
              "mouseenter",
              handleEnter
            );

            item.removeEventListener(
              "mouseleave",
              handleLeave
            );
          });
        });
      }

      /* =========================================================
         GLOBAL MOUSE PARALLAX
      ========================================================= */

      const handleMouseMove = (event) => {
        if (window.innerWidth <= 900) {
          return;
        }

        const x =
          event.clientX /
            window.innerWidth -
          0.5;

        const y =
          event.clientY /
            window.innerHeight -
          0.5;

        if (profile) {
          gsap.to(profile, {
            x: x * 18,
            rotationY: x * 4,
            rotationX: -y * 3,
            duration: 1,
            ease: "power3.out",
            overwrite: "auto",
          });
        }

        if (image) {
          gsap.to(image, {
            x: x * 10,
            rotationY: x * 2,
            rotationX: -y * 2,
            duration: 1,
            ease: "power3.out",
            overwrite: "auto",
          });
        }

        if (profileGlow) {
          gsap.to(profileGlow, {
            x: x * 55,
            y: y * 40,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto",
          });
        }

        if (profileRing) {
          gsap.to(profileRing, {
            x: x * 25,
            y: y * 20,
            duration: 1.2,
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      };

      window.addEventListener(
        "mousemove",
        handleMouseMove
      );

      /* =========================================================
         REFRESH SCROLLTRIGGER
      ========================================================= */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      /* =========================================================
         CLEANUP
      ========================================================= */

      return () => {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );

        projectCleanup.forEach(
          (cleanup) => cleanup()
        );

        skillsCleanup.forEach(
          (cleanup) => cleanup()
        );
      };
    }, appRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={appRef}
      className="app"
    >
      <Navbar ref={navbarRef} />

      <main>
        <Hero ref={heroRef} />

        <About ref={aboutRef} />

        <Projects ref={projectsRef} />

        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </main>

      <Footer />
    </div>
  );
};

export default App;