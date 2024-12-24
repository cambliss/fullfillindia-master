import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const IncomeFromHouseproperty = () => {
    const documentList = [
        'House Property related.',
        'Any other incomes, investments or savings details.',
        'PAN and Aadhaar Details.',
        'Bank Account number and IFSC code for Refund if any.',
        'House Loan Statement (if any) or rental information.',
        'Any savings and Investment details.',
       
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
    backgroundImage: `url('/img/tax9.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>Income From House Property or any Other sources</h3>
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
    
            <h4 className="title">Income other than Salary/Business/Profession In ITR</h4><br/>
           
            <p>
            If any income does not fall in the first 4 heads of income (Salary/Business/Profession/Capital Gain), it will come under this head. Some Common examples of income from other sources are.            </p>
            <br />
           
           

            <ul style={{listStyleType:"disc", marginLeft:"15px"}}>
              <li>Income from House Property</li> <br/>
              <li>Interest Received from Fixed Deposits</li><br/>
              <li>Dividends Received
</li><br/>
              <li>Amount received as a Family Pension
</li><br/>

              <li>Saving Bank Account interest earned
</li><br/>
              <li>Interest income on Income Tax Refund amount</li><br/>
              <li>Interest received on securities</li><br/>
              <li>
              Any other type of Interest Income like interest from Loan given to Relative
              </li><br/>
              <li>Gift Income [Other than those gifts which are not exempt]</li><br/>
<li>Winnings from Lotteries, crossword puzzle, race including horse race, card and other games including gambling, betting etc</li><br/>
<li>Any amount received from employee like PF contribution etc which is not taxable under PGBP (Profit and Gains of Business and Profession).</li><br/>
<li>Income from subletting of house property etc</li><br/>

             
            </ul>

            <br/>
          
            <br />
            <h4>Documents Required:</h4><br/>
                <ul style={{ listStyleType: "decimal", marginLeft: "15px", lineHeight:"40px" }}>
    {documentList.map((document, index) => (
        <li key={index} style={{ marginBottom: "8px" }}>
            {document === 'House Property related.' ? (
                <ul style={{ listStyleType: "circle", marginLeft: "15px" }}>
                    <li style={{ marginBottom: "4px" }}>Rent receiving house property address</li>
                    <li style={{ marginBottom: "4px" }}>Rental Income.</li>
                    <li style={{ marginBottom: "4px" }}>Municipal tax paid copy</li>
                    <li style={{ marginBottom: "4px" }}>Tenant Name</li>
                    <li style={{ marginBottom: "4px" }}>If it is Co-Owned Property, Co-owner name and PAN</li>
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

export default IncomeFromHouseproperty