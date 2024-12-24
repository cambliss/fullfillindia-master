import React from "react";
import Footer from "./Footer"
const TDS = () => {
  return (
    <div style={{ textAlign: "start" }}>
      <div className="carousel fade-carousel slide">
        <div className="overlay"></div>
        <div className="carousel-inner">
          <div className="item slides active">
          <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/payroll.jpg')`
  }}
></div>
            <div className="hero">
              <hgroup>
                <h3 style={{ color: "white" }}>
   TDS - Sale Of Property
                </h3>
              </hgroup>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio_area" style={{ color: "black" }}>
        <div className="container">
          <div className="portfolio_section">
            <div className="col-md-12 portfolio_top">
              <br />
              <br />
              <br />
              <p className="title" style={{ fontSize: "26px" }}>
                Documents required:
              </p>
              <br />
              <ol>
                <li>PAN and Aadhar of Buyer</li> <br />
                <li>PAN and Aadhar of Seller</li>
                <br />
                <li>Purchased property Address</li>
                <br />
                <li>Total value of Property
</li>
                <br />
                <li>Date of Agreement
</li>
                <br />
               
                <li>Email id of Buyer
</li>
                <br />
              
              </ol>
              <br /> 
          
              <button
          type="button"
          className="btn custom-btn"
          onClick={() =>
            window.open(
              '/book-now',
              '_self'
            )
          }
        >
          Book Now
        </button>
       <br /> <br />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TDS;