import React, {
  forwardRef,
  useEffect,
  useState,
} from "react";

import "./Navbar.css";

const Navbar = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================================
     CLOSE MENU WHEN SCREEN BECOMES DESKTOP
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =========================================================
     ESC KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener(
        "keydown",
        handleKeyDown
      );
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [menuOpen]);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    if (menuOpen && window.innerWidth <= 900) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================================================
     NAVIGATION CLICK
  ========================================================= */

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      ref={ref}
      className={`navbar ${
        menuOpen ? "navbar-menu-open" : ""
      }`}
    >
      <div className="navbar-container">

        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={handleNavClick}
        >
          <span className="logo-mark">
            D
          </span>

          <span className="logo-text">
            Debashish{" "}
            <span>| Developer</span>
          </span>
        </a>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="navbar-menu">
          <a
            href="#home"
            onClick={handleNavClick}
          >
            <span className="nav-number">
              01
            </span>
            Home
          </a>

          <a
            href="#about"
            onClick={handleNavClick}
          >
            <span className="nav-number">
              02
            </span>
            About
          </a>

          <a
            href="#projects"
            onClick={handleNavClick}
          >
            <span className="nav-number">
              03
            </span>
            Projects
          </a>

          <a
            href="#skills"
            onClick={handleNavClick}
          >
            <span className="nav-number">
              04
            </span>
            Skills
          </a>

          <a
            href="#contact"
            onClick={handleNavClick}
          >
            <span className="nav-number">
              05
            </span>
            Contact
          </a>
        </nav>


        {/* =================================================
            DESKTOP RESUME
        ================================================= */}

        <a
          href="/resume.pdf"
          className="resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            Resume
          </span>

          <span className="resume-arrow">
            ↗
          </span>
        </a>


        {/* =================================================
            HAMBURGER BUTTON
        ================================================= */}

        <button
          type="button"
          className={`menu-button ${
            menuOpen
              ? "menu-button-active"
              : ""
          }`}
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
        >
          <span />
          <span />
          <span />
        </button>

      </div>


      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      <div
        id="mobile-navigation"
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu-visible"
            : ""
        }`}
      >
        <div className="mobile-menu-inner">

          {/* Mobile menu header */}

          <div className="mobile-menu-label">
            <span className="mobile-menu-line" />

            <span>
              NAVIGATION
            </span>

            <span className="mobile-menu-code">
              01—05
            </span>
          </div>


          {/* Mobile links */}

          <nav className="mobile-navigation">

            <a
              href="#home"
              onClick={handleNavClick}
            >
              <span className="mobile-nav-number">
                01
              </span>

              <span className="mobile-nav-text">
                Home
              </span>

              <span className="mobile-nav-arrow">
                ↗
              </span>
            </a>


            <a
              href="#about"
              onClick={handleNavClick}
            >
              <span className="mobile-nav-number">
                02
              </span>

              <span className="mobile-nav-text">
                About
              </span>

              <span className="mobile-nav-arrow">
                ↗
              </span>
            </a>


            <a
              href="#projects"
              onClick={handleNavClick}
            >
              <span className="mobile-nav-number">
                03
              </span>

              <span className="mobile-nav-text">
                Projects
              </span>

              <span className="mobile-nav-arrow">
                ↗
              </span>
            </a>


            <a
              href="#skills"
              onClick={handleNavClick}
            >
              <span className="mobile-nav-number">
                04
              </span>

              <span className="mobile-nav-text">
                Skills
              </span>

              <span className="mobile-nav-arrow">
                ↗
              </span>
            </a>


            <a
              href="#contact"
              onClick={handleNavClick}
            >
              <span className="mobile-nav-number">
                05
              </span>

              <span className="mobile-nav-text">
                Contact
              </span>

              <span className="mobile-nav-arrow">
                ↗
              </span>
            </a>

          </nav>


          {/* Mobile resume */}

          <a
            href="/resume.pdf"
            className="mobile-resume-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            <span>
              Download Resume
            </span>

            <span>
              ↓
            </span>
          </a>


          {/* Mobile footer */}

          <div className="mobile-menu-footer">

            <span>
              MERN STACK DEVELOPER
            </span>

            <span>
              BHUBANESWAR • INDIA
            </span>

          </div>

        </div>
      </div>


      {/* ===================================================
          MOBILE BACKDROP
      =================================================== */}

      <div
        className={`mobile-backdrop ${
          menuOpen
            ? "mobile-backdrop-visible"
            : ""
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

    </header>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;