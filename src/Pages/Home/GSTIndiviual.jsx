import React from 'react';
import './AccountingServices.css'
import Footer from './Footer';

const GSTIndiviual = () => {
  const categories = [
    {
      category: 'Sole proprietor / Individual',
      documents: [
        'PAN card of the owner',
        'Aadhar card of the owner',
        'Photograph of the owner (in JPEG format, maximum size – 100 KB)',
        'Bank account details*',
        'Address proof**',
      ],
    },
    // Add more categories as needed
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
    backgroundImage: `url('/img/gst1.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>GST Registration For Sole Propreitor </h3>
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
            Any person undertaking the taxable intra-state supply of goods/services with an annual aggregate turnover of more than Rs 20 lakh (Rs 40 or Rs 10 lakh, as may vary depending upon the supply and state/UT) or undertaking inter-state supply (without any threshold limited) are mandatorily required to obtain GST registration.
            </p>
            <br />
<p>
GST registration number or GSTIN is a unique 15-digit number provided by the tax authorities to monitor tax payments and compliances of the registered person Different sets of documents will be required depending upon the constitution of the business or the type of GST registration that is obtained.
</p>
<br/>
      <table style={{ width: '80%', margin: 'auto', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Category of Persons</th>
            <th>Documents Required for GST Registration</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.category}</td>
              <td>
                <ul>
                  {category.documents.map((document, docIndex) => (
                    <li key={docIndex}>{document}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div><br/>
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
       
    </div>
    </div>
    </div><br/><br/>
    <Footer />
    </div>
    
  );
};

export default GSTIndiviual;
