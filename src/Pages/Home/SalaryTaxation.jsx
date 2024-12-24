import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const SalaryTaxation = () => {
  return (
    <div style={{textAlign:"start"}}>
    <div className="carousel fade-carousel slide">
      <div className="overlay"></div>
      <div className="carousel-inner">
        <div className="item slides active">
        <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/tax2.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>Salary Taxation Individual</h3>
            </hgroup>
          </div>
        </div>
      </div>
    </div>
    


    <div className="portfolio_area" style={{color:"black"}}>
      <div className="container">
        <div className="portfolio_section">
          <div className="col-md-12 portfolio_top">
            <br />
            <br />
            <br />
            <h2 className="title">ITR-1 Filing salary Income</h2><br/>
<h4>Who Should Buy</h4><br/>
            <p style={{textAlign:"justify"}}>
            Individuals with single form-16, and / or house property, interest income, Agriculture income, Dividend income.
            </p>
            <br />
            <p style={{textAlign:"justify"}}>
            Any Income level but income greater than Rs. 50L will go through different pricing.

</p>
            <br />
            <h4  sty>
            Documents to be Submitted
            </h4><br/>
           
            <br />

            <ul style={{listStyleType:"disc", marginLeft:"15px"}}>
              <li>PAN and Aadhaar Details.</li> <br/>
              <li>E-mail ID & Mobile Number.</li><br/>
              <li>Bank Account Number & IFSC Code.</li><br/>
              <li>Form-16.</li><br/>

              <li>House Property related.</li><br/>
              <li>Rent receiving house property address</li><br/>
              <li>Rental Income.</li><br/>
              <li>
              Municipal Tax paid
              </li><br/>

              <li>
              Municipal Tax paid copy
              </li><br/>
              <li>Tenant Name</li><br/>
              <li>
              If it is Co-Owned Property, Co-owner name and PAN
              </li><br/>

              <li>
              Housing loan statement if any

              </li><br/>
              <li>Any other incomes, Investments or Savings details.
</li><br/>
<li> Any additional income and any tax savings payments which are not mentioned in Form-16.
</li><br/>
            </ul>
<h4>Process</h4><br/>
<p>Upon receiving the documents, our team will call you on scheduled time before starting the process to get additional information.

</p><br/>
<p>Our team will send you draft computation after receiving required information for finalization.

</p><br/>
<p>After confirmation we will e-file your return and send the Acknowledgement copy, Final computation with detailed explanation and Tax payment receipts if any.

</p><br/>
<h4>Other Benefits we provide

</h4><br/>
<ul style={{listStyleType:"disc", marginLeft:"15px"}}>
              <li>PDF reports, 26AS</li> <br/>
              <li>E-verification assistance</li><br/>
              <li>Post service follow up</li><br/>
            <br/>
            </ul>
            <br/>
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
       <br/><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default SalaryTaxation;