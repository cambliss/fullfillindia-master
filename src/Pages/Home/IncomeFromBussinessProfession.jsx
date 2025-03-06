import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const IncomeBussinessprofession = () => {
  return (
    <div style={{textAlign:"start"}}>
    <div className="carousel fade-carousel slide">
      <div className="overlay"></div>
      <div className="carousel-inner">
        <div className="item slides active">
        <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/tax10.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>Income From Bussiness / Profession </h3>
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
            <h4 className="title">Income from Business (Turnover less than 2cr)/Profession (Gross receipts less than 50Lakhs)

</h4><br/>
            <p style={{textAlign:"justify"}}>
            Filing business/professional  income  is critical to avoid any tax non-compliance. At end of year businesses struggle to get their accounts in order. This  FullFill Compliance provide you professional help in preparing financial statements and filing business ITR.
            </p>
            <br />
            <h4  sty>
            Who Should Buy
            </h4><br/>
           
            <p>
              1.Any business entity required to maintain books of accounts.
            </p>
            <br />
            <p >
              2.Small Businesses and Professionals requiring books of account.

            </p>
            <br />
            <p >
              3.Any Business/Profession required to file ITR return.

            </p>
            <br />
            <h4  sty>
            Services Covered
            </h4><br/>
           
            <p>
              1.Account Summary – P&L and Balance Sheet

            </p>
            <br />
            <p >
              2.Advance Tax Payment


            </p>
            <br />
            <p >
              3.Expert Consultation – Tax Filing for business and professionals and Tax savings.

            </p>
            <br />
          <h4>Documents To Be Submitted</h4>
            <br />

            <ul style={{listStyleType:"disc", marginLeft:"15px"}}>
              <li>PAN and Aadhaar details.(Income Tax login details)</li> <br/>
              <li>Business or Profession details.</li><br/>
              <li>Bank statements for the financial year</li><br/>
              <li>GST turnover details (if applicable)</li><br/>

              <li>Business Expenses, Business Loan, and Books of Accounts (if available)</li><br/>
              <li>Investments, Sales, Purchase, and loan details</li><br/>
              <li>Investments or Savings details</li><br/>
              <li>
              Any other Income details.
              </li><br/>

             
            </ul>

            <br/>
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
        </button>
        */}
            <br/><br/><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default IncomeBussinessprofession