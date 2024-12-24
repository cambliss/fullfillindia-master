import React from 'react'
import './AccountingServices.css'
import Footer from './Footer'
const SalariedIndiviual = () => {
    const documentList = [
        'Form-16',
        'Asset information only if the gross income is greater than Rs. 50L',
        'House Loan Statement (if any) or rental information.',
        'House Property related (Optional)',
        'Rent receiving house property address',
        'Rental Income.',
        'Municipal tax paid copy',
        'Tenant Name',
        'If it is Co-Owned Property, Co-owner name and PAN',
        'Any other incomes, investments or savings details.',
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
backgroundImage: `url('/img/tax10.jpg')`
}}
></div>
      <div className="hero">
        <hgroup>
          <h3 style={{color:"white",}}>Salaried Indiviual &gt; Than 50 Lakhs Income</h3>
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
    
            <br/>
            <h2>Documents Required:</h2><br/>
            <ul style={{ listStyleType: "decimal", marginLeft: "15px", lineHeight:"40px" }}>
{documentList.map((document, index) => (
    <li key={index} style={{ marginBottom: "8px" }}>
        {document === 'House Property related (Optional)' ? (
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

export default SalariedIndiviual