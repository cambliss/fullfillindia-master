import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const Gstservicesmonthly = () => {
  return (
    <div style={{textAlign:"start"}}>
    <div className="carousel fade-carousel slide">
      <div className="overlay"></div>
      <div className="carousel-inner">
        <div className="item slides active">
        <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/gst8.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>GST And Bookkeeping -Monthly</h3>
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
            <h2 className="title">Books of Accounts</h2><br/>
            <p style={{textAlign:"justify"}}>
              The Income Tax Act has specified the books of accounts that are
              required to be maintained for the purpose of Income tax. These
              have been prescribed under section 44AA and Rule 6F.
            </p>
            <br />
            <h2  sty>
              Who is required to maintain books of account?
            </h2><br/>
            <p >
              The Income Tax Act has specified the books of accounts that are
              required to be maintained for the purpose of Income tax. These
              have been prescribed under section 44AA and Rule 6F.
            </p>
            <br />
            <p>
              1.Business Income &gt;120000 need to maintain Books of Accounts as
              per 44AA
            </p>
            <br />
            <p >
              2.Business Sales, turnover, gross receipts  &gt;Rs 25 Lakh need to
              maintain Books of Accounts as per 44AA
            </p>
            <br />
            <p >
              3.Books of accounts/accounting records have to be maintained if
              the gross receipts are more than Rs. 1,50,000 in 3 preceding years
              for an existing profession. This also applies to a newly set up
              profession whose gross receipts are expected to be more than Rs.
              1,50,000.
            </p>
            <br />
            <p >
              The accounting records to be kept have been prescribed in Rule 6F.
              The below professions are required to maintain Books of
              accounts/accounting records:
            </p>
            <br />

            <ul style={{listStyleType:"disc", marginLeft:"15px"}}>
              <li>Legal</li> <br/>
              <li>Medical</li><br/>
              <li>Engineering</li><br/>
              <li>Architectural</li><br/>

              <li>Accountancy</li><br/>
              <li>Technical consultancy</li><br/>
              <li>Interior decoration</li><br/>
              <li>
                Authorized representative — A person who represents another
                person for a fee before a tribunal or any authority constituted
                under any law. It does not include an employee of the person so
                represented or a person who is carrying on the profession of
                accountancy.
              </li><br/>

              <li>
                Film artist — This includes a producer, editor, actor, director,
                music director, art director, dance director, cameraman, singer,
                lyricist, story writer, screenplay or dialogue writer and
                costume designers.
              </li><br/>
              <li>Company secretary</li><br/>
              <li>
                If you are a freelancer pursuing any of these listed professions
                and your gross receipts are more than Rs. 1,50,000, these rules
                shall apply to you.
              </li><br/>

              <li>
                If the gross receipts of the Professions listed above are not
                more than Rs 1,50,000 in any one or more of the preceding 3
                years for an existing profession or for a newly set up
                profession whose gross receipts are expected to be not more than
                Rs 1,50,000 – the professional is not required to maintain books
                of accounts as per section 44AA. In such a situation, a
                professional has to maintain books of accounts which would
                enable the AO to compute the taxable income of the professional
                from them.
              </li>
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
        </button> */}
       
            <br/><br/><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Gstservicesmonthly