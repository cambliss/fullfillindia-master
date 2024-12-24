import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const RevisedIncomeTaxReturn = () => {
  return (
    <div style={{textAlign:"start"}}>
    <div className="carousel fade-carousel slide">
      <div className="overlay"></div>
      <div className="carousel-inner">
        <div className="item slides active">
        <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/tax8.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>Revised IncomeTax return Indiviual</h3>
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
         
            <p style={{textAlign:"justify"}}>
            A revised return is a return that is filed u/s 139(5) as a revision for the original return to rectify errors and omissions made while filing the original income tax return. You can file a Revised Return if you discover a mistake in your original ITR or if the income tax department issues a notice for any errors made in the ITR. And it is important to e-verify the Revised ITR within 30 days of filing.
            </p>
            <br />
            <h2  sty>
            When do you file a Revised Return under Section 139(5)?
            </h2><br/>
          
            <p>
              1.To rectify errors or mistakes made in the original Income Tax Return

            </p>
            <br />
            <p >
              2.To disclose income or information not reported in the original Income Tax Return.
            </p>
            <br />
            <h2  sty>
            Revising in response to a notice

            </h2><br/>
          
            <p>
            1.If the assessee agrees to a mismatch in the notice for the proposed adjustment under Section 143(1)(a).

            </p>
            <br />
            <p >
              2.When the assessee pays outstanding demand as per section 143(1)and then files a Revised Return.
 
            </p>
            <br />
         
            <p className="title" style={{ fontSize: "26px" }}>
                Documents required:
              </p>
              <br />
              <ol>
                <li>Notice Received.</li> <br />
                <li>Income Tax Login Credentials.</li>
                <br />
                <li>Other Support Documents Related to Notice</li>
                <br />
               
                </ol>
          

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
       
            <br/><br/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default RevisedIncomeTaxReturn;