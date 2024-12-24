import React from 'react';

function Footer() {
  const style1 = {
    color: "white",
    fontWeight: "500",
    textDecoration: "none",
    backgroundColor: "transparent",
  };

  return (
    <>
      <footer style={{ background: "#79848B" }}>
        <div className="container pt-5 border-bottom">
          <div className="row">
            <div className="col-md-3 col-sm-12 mb-3 text-center">
              <a href="/">
                <img src="./img/ff.png" alt="Logo" />
              </a>
            </div>
            <div className="col-md-9 col-sm-12">
              <div className="col-md-4 col-sm-6 col-6 p-0 mb-3 float-left">
                <h5 className="mb-4" style={{ color: "white" }}>Quick links</h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="/Main-Services" style={{ color: "white", textDecoration: "none" }}>Services</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact us</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="Privacy-Policy" style={{ color: "white", textDecoration: "none" }}>Privacy-policy</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="Terms-and-Conditions" style={{ color: "white", textDecoration: "none" }}>Terms & Conditions</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="Refund-Policy" style={{ color: "white", textDecoration: "none" }}>Refunds-Cancellations</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-sm-6 col-6 mb-3 p-0 float-left">
                <h5 className="mb-4" style={{ color: "white" }}>Connect</h5>
                <ul className="list-group" style={style1}>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.linkedin.com/company/fullfill-online" style={{ color: "white", textDecoration: "none" }} target='_blank'>
                      <i className="fa-brands fa-linkedin"></i>&nbsp;&nbsp; LinkedIn
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.instagram.com/fullfillonline/" style={{ color: "white", textDecoration: "none" }} target='_blank'>
                      <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;Instagram
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.facebook.com/FullFillOnline" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
                      <i className="fa-brands fa-facebook"></i>&nbsp;&nbsp; Facebook
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a href="https://www.youtube.com/@FullFillOnlineOfficial" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
                      <i className="fa-brands fa-youtube"></i>&nbsp;&nbsp; YouTube
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 col-sm-6 col-6 mb-3 p-0 float-left">
                <h5 className="mb-4" style={{ color: "white" }}>Contact</h5>
                <ul className="list-group" style={style1}>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2" style={{ color: "white", textDecoration: "none" }}>
                  9-1-193/1, Regimental Bazaar,

                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2" style={{ color: "white", textDecoration: "none" }}>
                  Shivaji Nagar ,

                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2" style={{ color: "white", textDecoration: "none" }}>
                  Secunderabad – 500003,

                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2" style={{ color: "white", textDecoration: "none" }}>
                  Telangana. (040) 40-175191

                  </li>
               
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="py-4 d-flex justify-content-center align-items-center">
                <a className="mr-4" href="https://camblissstudio.com/" style={{ color: "white", textDecoration: "none" }}>
                  Designed & Developed by CAMBLISS PRIVATE LIMITED
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
