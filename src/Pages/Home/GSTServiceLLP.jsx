import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const GSTLLP = () => {
  return (
    <div style={{textAlign:"start"}}>
    <div className="carousel fade-carousel slide">
      <div className="overlay"></div>
      <div className="carousel-inner">
        <div className="item slides active">
        <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/gst3.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>GST Registration For Partnership Including LLP </h3>
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
           
            <h2  sty>
             Documents Required
            </h2><br/>
          
            <br />
            <p>
              1.PAN card of all partners (including managing partner and authorized signatory)

            </p>
            <br />
            <p >
              2. Copy of partnership deed
            </p>
            <br />
            <p >
              3. Photograph of all partners and authorised signatories (in JPEG format, maximum size – 100 KB)
            </p>
            <br />
            <p >
            4.Address proof of partners (Passport, driving license, Voters identity card, Aadhar card etc.)
            </p>
            <br />
            <p >
            5.Aadhar card of authorised signatory</p>
            <br/>
            <p >
            6. Proof of appointment of authorized signatory
            </p><br/>
            <p >
7.In the case of LLP, registration certificate / Board resolution of LLP      </p>      <br/>
            <p >
8.Bank account details</p>            <br/>
<p >
9. Address proof of principal place of business</p>            <br/>
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
       
            <br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default GSTLLP;