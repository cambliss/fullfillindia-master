import React from 'react';
import './AccountingServices.css';
import Footer from './Footer';

const AadhaarPANLinkingTable = () => {
  // Define categories with respective documents
  const categories = [
    {
      number: '1',
      category: 'Linking of PAN and Aadhaar',
      documents: [
        'Linking of PAN and Aadhaar is mandatory as per section 139AA of the Income Tax Act 1961.',
        '1.Govt can meticulously detect any form of tax evasion.',
        '2.Filing income tax returns become considerably easier as an individual does not require to provide any proof of him or her having filed their tax return.',
      ],
    },
    {
      number: '2',
      category: 'Details to Check',
      documents: [
        'Make sure details in Aadhaar - Name, Date of birth, and gender are as per PAN.',
      ],
    },
    {
      number: '3',
      category: 'Important Dates',
      documents: [
        'Last Date: 31-03-2023',
      ],
    },
    {
      number: '4',
      category: 'Late Fee',
      documents: [
        'Late fee: 1000',
      ],
    },
    {
      number: '5',
      category: 'Penalty for Not Linking',
      documents: [
        'Penalty for not linking: 10,000.00',
      ],
    },
    {
      number: '6',
      category: 'Impact of Not Linking',
      documents: [
        'PAN may become inoperable',
       
       
      ],
    },
    {
      number: '7',
      category: ' ',
      documents: ['No refunds, No processing, No pending rectification'],
    },
    {
      number: '8',
      category: ' ',
      documents: [ 'An Individual cannot file ITR as it shows PAN became inoperable',],
    },
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
    backgroundImage: `url('/img/tax7.jpg')`
  }}
></div>
          <div className="hero">
            <hgroup>
              <h3 style={{color:"white",}}>PAN-AAdhar Linking</h3>
            </hgroup>
          </div>
        </div>
      </div>
    </div>


      {/* Main content section */}
      <div className="portfolio_area" style={{ color: 'black' }}>
        <div className="container">
          <div className="portfolio_section">
            <div className="col-md-12 portfolio_top">
              <br />
              <br />
              <br />

              <p style={{ textAlign: 'justify' }}>
                An Aadhaar card contains a unique 12-digit number issued to every citizen in India by the Unique Identification Authority of India (UIDAI). It is an identification number that helps access the cardholder’s details from the government database, such as biometrics and contact information.
              </p>
              <br />

              {/* Table section */}
              <table style={{ width: '100%', margin: 'auto', borderCollapse: 'separate', borderSpacing: '10px 15px', marginTop: '20px' }}>
              <colgroup>
    <col style={{ width: '10%' }} /> {/* Adjust the width as needed */}
    <col style={{ width: '40%' }} /> {/* Adjust the width as needed */}
    <col style={{ width: '50%' }} /> {/* Adjust the width as needed */}
    </colgroup>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Category of Persons</th>
                    <th>Documents Required for GST Registration</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr key={index}>
                      <td>{category.number}</td>
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
            </div>
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
      </div>

      {/* Footer section */}
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default AadhaarPANLinkingTable;
