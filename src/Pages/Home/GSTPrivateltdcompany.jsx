import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const GSTPrivateltdcompany = () => {
  return (
    <div style={{textAlign:"start"}}>
    <div className="carousel fade-carousel slide">
      <div className="overlay"></div>
      <div className="carousel-inner">
        <div className="item slides active">
        <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/gst5.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>GST Registration For PVT LTD Company </h3>
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
              1.GST Filing – GSTR – 1 , 3B
            </p>
            <br />
            <p >
              2.Book-Keeping and Accounting are part of this package
            </p>
            <br />
            <p >
              3.Valid for businesses with turnover less than 2 crores
            </p>
            <br />
            <p >
            4.Reconciliation for all transactions
            </p>
            <br />
            <p >
            5.Filing for B2B and B2C invoices
            </p>
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

export default GSTPrivateltdcompany;