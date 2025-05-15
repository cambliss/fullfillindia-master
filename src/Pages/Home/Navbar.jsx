import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleService = () => {
    navigate("/Main-Services");
    toggleNav();
  };

  const handleAboutus = () => {
    navigate("/About-us");
    toggleNav();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`} style={{ zIndex: "100" }}>
  <div
  onClick={handleHome}
  className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2"
  style={{ cursor: "pointer" }}
>
  <img
    src="./img/fullfill.png"
    alt="FullFill Compliances"
    style={{ height: "50px", width: "auto" }}
  />
  <img
    src="./img/zoho.png"
    alt="Zoho"
    style={{ height: "50px", width: "auto" }}
  />
</div>



      <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li style={{ color: "black", fontFamily: "'Open Sans', sans-serif", fontSize: "21px" }}>
            <Link
              onClick={handleHome}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              <strong>Home</strong>
            </Link>
          </li>
          <li style={{ color: "black", fontFamily: "'Open Sans', sans-serif", fontSize: "21px" }}>
            <Link
              onClick={handleService}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              <strong>Services</strong>
            </Link>
          </li>
          <li style={{ color: "black", fontFamily: "'Open Sans', sans-serif", fontSize: "21px" }}>
            <Link
              onClick={handleAboutus}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="about-section"
              className="navbar--content"
            >
              <strong>About Us</strong>
            </Link>
          </li>
          <li style={{ color: "black", fontFamily: "'Open Sans', sans-serif", fontSize: "21px" }}>
            <a
              style={{ color: "black", fontFamily: "'Open Sans', sans-serif", fontSize: "17px" }}
              href="/contact"
            >
              <strong>Contact</strong>
            </a>
          </li>
          {/* <li style={{ color: "black", fontFamily: "'Open Sans', sans-serif", fontSize: "21px" }}>
            <button
              type="button"
              className="btn custom-btn1" style={{color:"#3E409A", border:"2px solid #3E409A"}}
              onClick={() =>
                window.open(
                  '/book-now',
                  '_self'
                )
              }
            >
              Book Now
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
