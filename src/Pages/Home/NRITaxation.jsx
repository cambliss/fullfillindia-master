    import React from 'react'
    import './AccountingServices.css'
    import Footer from './Footer'
    const NRIInformation = () => {
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
    backgroundImage: `url('/img/tax3.webp')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>NRI Taxation Indiviual </h3>
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
                <h2 className="title">Who is a Non- Resident of India (NRI)?</h2><br/>
                <p style={{textAlign:"justify"}}>
                Non-Resident” is a person who is not Resident in India. The residential status of an individual in a given year determines whether the individual is Resident or Non-Resident for that given year. Thus, the residential status of an individual needs to be determined every year.
                </p>
                <br />
            
            <h4> You are considered as “Resident in India” for a financial year if you stayed in India –            </h4><br/>
            
                <p>
                1.for a period of 182 days or more during the Financial year; Or
                </p>
                <br />
                <p >
                2.for 60 days in the financial year and for a total of 365 days in the preceding 4 years.
                </p>
                <br />
                <h4  sty>
                There are certain exceptions to the above condition of 60 Days i.e. only the test of first condition is done in these cases:

                </h4><br/>
            
                <p>
                1.If you are an Indian citizen who has left India in the financial year as a crew member of an Indian ship or for the purposes of employment abroad; or

                </p>
                <br />
                <p >
                2.If you are a Person of Indian Origin(PIO) or a citizen of India who comes on a visit to India;
                </p>
                <br />
                <p >
                Therefore, you are a Non-Resident if you do not fulfil any of the above conditions.
                </p>
                <br />
                <p >
                For Non-Resident Indians: Only income earned or accrued in India or deemed to be so is taxable in India. Therefore, your income from any country besides India is not taxable in India.
                </p>
                <br />
                <h4 >
                Generally, you need to file your Income Tax Returns if:


                </h4>
                <br />

                <ul style={{listStyleType:"disc", marginLeft:"15px"}}>
                <li>Your total income earned or accrued in India exceeds the basic exemption limit of ₹ 2,50,000</li> <br/>
                <li>You have a refund for excessively deducted TDS on Interest, Rent etc</li><br/>
                <li>You want the benefit of carrying forward of losses or want to set off your losses with gains</li><br/>
                </ul>
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
       <br/><br/><br/><br/><br/>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
    )
    }

    export default NRIInformation