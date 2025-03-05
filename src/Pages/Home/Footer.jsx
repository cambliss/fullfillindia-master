import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        backgroundColor:"#0098DB",
        padding: "50px 0",
      }}
    >
      <div className="container-fluid">
        <div className="row justify-content-between">
          {/* Logo Section */}
          <div className="col-md-3 col-sm-12 text-center mb-4">
            <a href="/">
              <img src="./img/ff.png" alt="Logo" style={{ maxWidth: "250px" }} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-sm-6 mb-4">
  <h5 className="mb-4 text-white">Quick Links</h5>
  <ul className="list-unstyled">
    {[
      { name: "Home", path: "/" },
      { name: "Services", path: "/Main-Services" },
      { name: "Contact us", path: "/contact" },
      { name: "Privacy-policy", path: "/Privacy-Policy" },
      { name: "Terms & Conditions", path: "/Terms-and-Conditions" },
      { name: "Refunds-Cancellations", path: "/Refund-Policy" }
    ].map((link, index) => (
      <li key={index} className="mb-2">
        <i className="fa-solid fa-arrow-right mr-2"></i>
        <a href={link.path} className="footer-link text-white text-decoration-none">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>


          {/* Social Media Links */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="mb-4 text-white">Connect</h5>
            <ul className="list-unstyled">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/company/fullfill-online", icon: "fa-linkedin" },
                { name: "Instagram", url: "https://www.instagram.com/fullfillonline/", icon: "fa-instagram" },
                { name: "Facebook", url: "https://www.facebook.com/FullFillOnline", icon: "fa-facebook" },
                { name: "YouTube", url: "https://www.youtube.com/@FullFillOnlineOfficial", icon: "fa-youtube" },
              ].map((social, index) => (
                <li key={index} className="mb-2">
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="footer-link">
                    <i className={`fa-brands ${social.icon}`} style={{ marginRight: "10px" }}></i> {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 col-sm-6 mb-4">
  <h5 className="mb-4 text-white">Contact</h5>

  <div className="d-flex align-items-start">
    <i className="fa-solid fa-location-dot mr-2 mt-1"></i>
    <p className="mb-2">
      9-1-193/1, Regimental Bazaar,<br />
      Shivaji Nagar, Secunderabad – 500003,
    </p>
  </div>


  <div className="d-flex align-items-start">
    <i className="fa-solid fa-phone mr-2 mt-1"></i>
    <p className="mb-2">
      <strong>Phone:</strong> (040) 40-175191
    </p>
  </div>
{/* 
  <div className="d-flex align-items-start">
    <i className="fa-solid fa-envelope mr-2 mt-1"></i>
    <p className="mb-2">
      <strong>Email:</strong> <a href="mailto:camblissworks@gmail.com" className="text-white">camblissworks@gmail.com</a>
    </p>
  </div> */}
</div>

        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4 pt-3 border-top">
          <a href="https://camblissstudio.com/" className="footer-link">
            Designed & Developed by CAMBLISS PRIVATE LIMITED
          </a>
        </div>
      </div>

      {/* Footer CSS */}
      <style jsx>{`
        .footer-link {
          color: white;
          text-decoration: none;
          transition: 0.3s ease-in-out;
        }
        .footer-link:hover {
          text-decoration: underline;
          color: #ffcc00;
        }
        p {
          margin-bottom: 8px;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
