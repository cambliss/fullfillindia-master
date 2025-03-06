import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const GSTPublicPrivate = () => {
  return (
    <div style={{textAlign:"start"}}>
    <div className="carousel fade-carousel slide">
      <div className="overlay"></div>
      <div className="carousel-inner">
        <div className="item slides active">
        <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/gst2.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>GST Registration For Public-Private and Indian-Foreign Companies </h3>
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
              1.PAN card of Company

            </p>
            <br />
            <p >
              2.Certificate of incorporation given by Ministry of Corporate Affairs
            </p>
            <br />
            <p >
              3.Memorandum of Association / Articles of Association
            </p>
            <br />
            <p >
            4.PAN card and Aadhar card of authorized signatory. The authorised signatory must be an Indian even in case of foreign companies/branch registration
            </p>
            <br />
            <p >
            5.PAN card and address proof of all directors of the Company
            </p>
            <br/>
            <p >
            6.Photograph of all directors and authorised signatory (in JPEG format, maximum size – 100 KB)
            </p><br/>
            <p >
            7.Board resolution appointing authorised signatory / Any other proof of appointment of authorised signatory (in JPEG format / PDF format, maximum size – 100 KB)            </p><br/>
            <br/>
            <p >
8.Bank account details</p>            <br/>
<p >
9.Address proof of principal place of business.</p>            <br/>
{/* <button
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
        </button> */}
       
            <br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default GSTPublicPrivate;