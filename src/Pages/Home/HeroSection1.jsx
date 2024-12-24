import { Link as ScrollLink } from "react-scroll";
import React from "react"; 

export default function HeroSection1() {
  const closeMenu = () => {
    // Add any code to close the menu if needed
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey There, We are</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Hassle Free</span>{" "}
            <br />
            Accounting Services
          </h1>
          <p className="hero--section-description">
          we are regarded as market leader and our clients enjoy access to a 
             combination of senior chartered accountants and experienced consultants
          </p>
        </div>
        {/* <ScrollLink style={{marginTop:"25px"}}
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-primary"
      >
        Contact Us
      </ScrollLink> */}
      </div>
      <div className="hero--section--img">
        <img src="https://fullfillindia.com/wp-content/uploads/2023/10/Fullfillindia-8.png" alt="Hero Section" />
      </div>
    </section>
  );
}
