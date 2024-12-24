import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const CapitalGainTaxation = () => {
    const documentList = [
        'Trading Statements (Profit and Loss or Capital Gains Statements) from the Stock Broker(s)',
        'If income from sale of property / asset, below details required',
        'Any other incomes, Investments or Savings details',
        'Arrears Statement* for earlier years, if applicable',
        'Pan Number and Date of Birth (or ITD Portal Credentials)',
       
    ];
return (
    <div style={{textAlign:"start"}}>
    <div className="carousel fade-carousel slide">
      <div className="overlay"></div>
      <div className="carousel-inner">
        <div className="item slides active">
        <div
  className="slide-1"
  style={{
    backgroundImage: `url('/img/tax6.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>Capital Gain Taxation - Indiviual</h3>
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
            If have a profit or a loss from sale of stocks/mutual funds/House property in addition to salary income(or) other income. then we need to file Income tax .            </p>
            <h2 className="title">Who need to file :</h2><br/>
           
            <p>
            1.Salaried Employees/non salaried individuals with Capital Gains from Property/Stock
            </p>
            <br />
            <p >
            2.for 60 days in the financial year and for a total of 365 days in the preceding 4 years.
            </p>
            <br />
            <h2 className="title">Services Covered</h2><br/>
           
           <p>
           1.Tax filing for individuals with capital gains, ESOP
           </p>
           <br />
           <p >
           2.Advise on Long term capital gain savings.
           </p>
           <br />
        
            <p>
            Advance tax calculations
            </p>
            <br />
            <h2>Documents Required:</h2><br/>
                <ul style={{ listStyleType: "decimal", marginLeft: "15px", lineHeight:"40px" }}>
    {documentList.map((document, index) => (
        <li key={index} style={{ marginBottom: "8px" }}>
            {document === 'If income from sale of property / asset, below details required' ? (
                <ul style={{ listStyleType: "circle", marginLeft: "15px" }}>
                    <li style={{ marginBottom: "4px" }}>Sale value, purchase value, sale date, purchase date</li>
                    <li style={{ marginBottom: "4px" }}>Valuation Report* (where needed)</li>
                    <li style={{ marginBottom: "4px" }}>Any cost of improvements</li>
                    <li style={{ marginBottom: "4px" }}>Will / Inheritance / Advance / Registration Cost Details</li>
                    <li style={{ marginBottom: "4px" }}>plan to defer, re-investment, pay the gains (we will help if needed)</li>
                </ul>
            ) : (
                document
            )}
        </li>
    ))}
</ul>
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
       
      


        
            <br/><br/><br/><br/><br/><br/>
        </div>
        </div>
    </div>
    </div>
    <Footer />
</div>
)
}

export default CapitalGainTaxation