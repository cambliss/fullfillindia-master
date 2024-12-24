import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'

const RefundPolicy = () => {
  return (
    <div style={{textAlign:"start"}}>
    <div className="carousel fade-carousel slide">
      <div className="overlay"></div>
      <div className="carousel-inner">
        <div className="item slides active">
        <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/refund3.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white"}}>Refund Policy</h3>
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
            <h2>Refund Policy</h2>
            <p style={{textAlign:"justify"}}>
If any refund towards services is intended, then you have to email- info@fullfillindia.com and also specify the reason before 24 hours of appointment time. In agreed upon the satisfying case , the return/refund process will be initiated within 5 to 7 working days .</p>
            <br />

          
            <p>
            Refund is allowed only before 24hours of the appointment time.


            </p>
            <br />
           
 <br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default RefundPolicy