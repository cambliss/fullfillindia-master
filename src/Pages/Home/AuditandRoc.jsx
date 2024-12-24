import React from "react";
import Footer from "./Footer";
// import "./page.css";
const AuditandRoc = () => {
  return (
    <div style={{ textAlign: "start" }}>
      <div className="carousel fade-carousel slide">
        <div className="overlay"></div>
        <div className="carousel-inner">
          <div className="item slides active">
          <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/itroc1.jpg')`
  }}
></div>


            <div className="hero">
              <hgroup>
                <h3 style={{ color: "white" }}>
                  Audit and ROC – Private limited{" "}
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
                <li>Full Current Address of the Company.</li> <br />
                <li>E-mail ID & Mobile Number.</li>
                <br />
                <li>Company Incorporation Certificate</li>
                <br />
                <li>AOA, MOA Document soft copies</li>
                <br />
                <li>Signed copies of Financial statements</li>
                <br />
                <li>Company Bank Statement(s) for the FY (from Apr to Mar)</li>
                <br />
                <li>Business or Profession Details.</li>
                <br />
                <li>Business Expenses, Business Loans.</li>
                <br />
                <li>Books of Accounts and P&L (if available).</li>
                <br />
                <li>
                Digital Signature Certificates (DSC).                </li>
                <br />
                <li>
                Old Auditor Resignation Letter if needed (if not 1st time).
                </li>
                <br />
                <li>if applicable, GST Revenue details (GSTR-3B or Consolidated Statement) for the FY (from Apr to Mar)
</li> <br />
                <li>Pan Number and Date of Birth (or ITD Portal Credentials)
</li>
              </ol>
              <br /> <br />
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
       
              <br /> <br /> <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuditandRoc;