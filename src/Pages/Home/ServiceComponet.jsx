import React, { useState ,useEffect} from 'react';
import './styl1.css'; 
import Footer from './Footer';

const ServiceComponent = () => {
    const [activeFilter, setActiveFilter] = useState('all');


  
  
    const handleFilterClick = (value) => {
        console.log(value);
        setActiveFilter(value)
      const filters = document.querySelectorAll('.gallery_product');
  
      filters.forEach((filter) => {
        if (value === 'all' || filter.classList.contains(value)) {
          filter.style.display = 'block';
        } else  {
          filter.style.display = 'none';
        }
      });
    };

  return (
    <>
    <div className="container" id='co'>
       <div className="row">
        {/* <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12"><br/><br/>
          <h1 className="gallery-title">Book Service</h1>
        </div> */}
        <br /> <br />

      <div style={{ textAlign: 'center' }}>
        <button
          className={`btn btn-default filter-button ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
          data-filter="all" style={{marginRight:"7px"}}
        >
          All
        </button>
        <button
          className={`btn btn-default filter-button ${activeFilter === 'income' ? 'active' : ''}`}
          onClick={() => handleFilterClick('income')}
          data-filter="income" style={{marginRight:"7px"}}
        >
        Income Tax services
        </button>
        <button
          className={`btn btn-default filter-button ${activeFilter === 'accounting' ? 'active' : ''}`}
          onClick={() => handleFilterClick('accounting')}
          data-filter="accounting"
        >
            Accounting Services
        </button>  <button
          className={`btn btn-default filter-button ${activeFilter === 'gst' ? 'active' : ''}`}
          onClick={() => handleFilterClick('gst')}
          data-filter="gst"
        >
            GST Services
        </button>  <button
          className={`btn btn-default filter-button ${activeFilter === 'roc' ? 'active' : ''}`}
          onClick={() => handleFilterClick('roc')}
          data-filter="roc"
        >
            ROC Services
        </button>  <button
          className={`btn btn-default filter-button ${activeFilter === 'payroll' ? 'active' : ''}`}
          onClick={() => handleFilterClick('payroll')}
          data-filter="payroll"
        >
            Payroll Services
        </button>  <button
          className={`btn btn-default filter-button ${activeFilter === 'startup' ? 'active' : ''}`}
          onClick={() => handleFilterClick('startup')}
          data-filter="startup"
        >
            Startup Services
        </button>
        {/* Add other filter buttons similarly */}
      </div>

      {/* Service cards */}

      <div className="container">
        <div className="row">
      <div style={{ textAlign: 'center',  }} className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <div className="gallery_container">
          {/* Sample service card */}
          <div className={`gallery_product filter  roc ${activeFilter === 'roc' ? '' : activeFilter}`} >
             <a href="/consultancy" style={{textDecoration:"none",color:"black"}} target='_self'>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' ,textAlign:"center",color:"#0199DB"}}>
            Book Free Consultancy
            </p>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>
              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>Free</span>
              </p>
            </div>
            </a>
          </div>
          <div className={`gallery_product filter  roc ${activeFilter === 'roc' ? '' : activeFilter}`} >
             <a href="/LLP Annual Compliance" style={{textDecoration:"none",color:"black"}} target='_self'>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
              LLP Annual Compliance | IT ROC & Tax Audit
            </p>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>
              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹23,600.00</span>
              </p>
            </div>
            </a>
          </div>
        
          <div className={`gallery_product filter roc ${activeFilter === 'roc' ? '' : activeFilter}`} > 
          <a href="/Audit and ROC-Private Limited-appointment" target="_self"  style={{textDecoration:"none",color:"black"}} >
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            AUDIT AND ROC – PRIVATE LIMITED
            </p>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹11,800.00</span>
              </p>
            </div>
            </a>
          </div>

          <div className={`gallery_product filter gst ${activeFilter === 'gst' ? '' : activeFilter}`} >
            <a href="/GSTregistrationPartnershipfirm-appointment" target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            GST Registration for Partnership(including LLP)            </p>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹2,950.00</span>
              </p>
            </div>
            </a>

          </div>

          <div className={`gallery_product filter gst ${activeFilter === 'gst' ? '' : activeFilter}`} >
            <a href="/GSTregistrationSoleProprieter-appointment" target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            Goods And Services Tax (GST) Registration sole proprietor      </p>      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹1,180.00</span>
              </p>
            </div>

            </a>
          </div>

          <div className={`gallery_product filter gst ${activeFilter === 'gst' ? '' : activeFilter}`} >
            <a href="/GSTBookkeepingOnepersonCompanyQuarterly-appointment"target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            GST & Bookkeeping (One person company /PVT LTD company)(Quarterly)
     </p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹23,600.0</span>
              </p>
            </div>
            </a>
          </div>

          <div className={`gallery_product filter gst ${activeFilter === 'gst' ? '' : activeFilter}`} >
            <a href="/GSTBookkeepingOnepersonCompanyMonthly-appointment"target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            GST & Bookkeeping (One person company /PVT LTD company)(Monthly)
     </p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹9,440.0</span>
              </p>
            </div>
            </a>
          </div>
       

          <div className={`gallery_product filter gst ${activeFilter === 'gst' ? '' : activeFilter}`} >
            <a href="/GstRegistrationForCompany-appointment"target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            GST REGISTRATION FOR (PUBLIC AND PRIVATE) (INDIAN AND FOREIGN)
            </p>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹5,900.00</span>
              </p>
            </div>
            </a>
          </div>
          <div className={`gallery_product filter gst ${activeFilter === 'gst' ? '' : activeFilter}`} >
            <a href="/GSTBookkeepingOnepersonCompanyYearly-appointment" target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            GST & Bookkeeping (One person company /PVT LTD company)(Yearly)
     </p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹59,000.0</span>
              </p>
            </div>
            </a>
          </div>
        
          <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
            <a href="/IncomefromotherHouse-appointment"target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            Income from other House property and other sources-Individual (Yearly) </p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹1,770.0</span>
              </p>
            </div>
            </a>
          </div>
          <div className={`gallery_product filter gst ${activeFilter === 'gst' ? '' : activeFilter}`} >
            <a href="/GSTBookkeeping-monthly-appointment"target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            GST & Bookkeeping -Individual(Monthly)
     </p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹23,600.0</span>
              </p>
            </div>
            </a>
          </div>




          <div className={`gallery_product filter payroll ${activeFilter === 'payroll' ? '' : activeFilter}`} >
            <a href="/tdsreturn-appointment" target="_self" style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            TDS return-Sale of Property     </p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹1,180.0</span>
              </p>
            </div>
            </a>
          </div>
      

          {/* <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            LLP Annual Compliance | IT ROC & Tax Audit (Yearly)</p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹23,600.00</span>
              </p>
            </div>
          </div> */}
        <div className={`gallery_product filter gst ${activeFilter === 'gst' ? '' : activeFilter}`} >
            <a href="/GSTBookkeeping-quarterly-appointment" target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            GST & Bookkeeping -Individual(Quarterly)
     </p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹23,600.0</span>
              </p>
            </div>
            </a>
          </div>

          <div className={`gallery_product filter accounting ${activeFilter === 'accounting' ? '' : activeFilter}`} >
            <a href="/accounting-service-appointment" target='_self'  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
     Accounting for Business/Profession (Yearly)</p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹41,300.00</span>
              </p>
            </div>
            </a>
          </div>
    






          <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
            <a href="/Capitalgaintaxation-appointment" target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            Capital Gain Taxation-Individual (Yearly)</p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹9,440.0</span>
              </p>
            </div>
            </a>
          </div>
          <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
            <a href="/Nritaxation-appointment" target="_self" style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            NRI-Taxation (Individual)(Yearly)</p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹5,900.00</span>
              </p>
            </div>
            </a>
          </div>
          <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
            <a href="/salaried-individual-appointment" target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            Salaried Individual &gt; 50 Lakhs Income (Yearly)</p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹4,130.00</span>
              </p>
            </div>
            </a>
          </div>
          <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
            <a href="/SalaryTaxation-appointment" target="_self" style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            Salary Taxation-Individual (Yearly)    </p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹1,180.0</span>
              </p>
            </div>
            </a>
          </div>
          <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
            <a href="/RevisedIncomeTaxReturn-appointment" target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            Revised Income Tax return-Individual (Yearly)</p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹3,540.00</span>
              </p>
            </div>
            </a>
          </div>
          <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
            <a href="/panaadharlink-appointment" target="_self"  style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
          PAN - Aadhaar linking (One-time)</p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹590.00</span>
              </p>
            </div>
            </a>
          </div>
          <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
            <a href="/IncomeTaxFiling-appointment" target="_self" style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            Income Tax filing-private limited company (Yearly)</p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹29,500.00</span>
              </p>
            </div>
            </a>
          </div>
      
      

        

      <div className={`gallery_product filter income ${activeFilter === 'income' ? '' : activeFilter}`} >
        <a href="/IncomeForBusiness-Profession-appointment" target="_self" style={{textDecoration:"none",color:"black"}}>
            <p style={{ fontSize: '15px', fontWeight: '700', paddingTop: '10px' }}>
            Income for Business/Profession - Individual (Yearly) </p>  
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
              <p>Duration: <span style={{ fontWeight: '600' }}>30 m</span></p>

              <p>
                Price: <span className="m-2" style={{ fontWeight: '600', color: '#f5fcff', padding: '5px 9px', background: '#0199db',borderRadius:"5px" }}>₹23,600.0</span>
              </p>
            </div>
            </a>
          </div>


        </div></div></div>
      </div>
    </div>
    
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br />
    <Footer/>
    </>
  );
};

export default ServiceComponent;

