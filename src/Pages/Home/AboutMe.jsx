import React from "react";
import a from './aboutus (2).png'
export default function AboutMe() {
  return (
    <div>
  
    <div className="container1" style={{maxWidth:"1400px",margin:"0 auto"}}>
   <div className="row gy-4 align-items-stretch justify-content-between features-item ">
          <div className="col-12 col-md-12 col-lg-6  d-flex align-items-center features-img-bg  justify-content-between" data-aos="zoom-out">
            <img src={a} classn="img-fluid" alt=""/>
          </div>
          <div class="col-12 col-md-12 col-lg-6  d-flex justify-content-center flex-column" data-aos="fade-up" id="ab1">
            <h1>About us</h1>
             <br />
         < p className="hero--section-description" style={{textAlign:"justify"}}>FULLFILL Compliances is Founded in 2014 and is an India-focused accounting, taxation, payroll processing, Compliance management, and business advisory firm, operating in Hyderabad. We also manage an extensive affiliate network, providing service throughout India and reach across the globe.</p>
            <p className="hero--section-description" style={{textAlign:"justify"}}>FULLFILL Compliance offers a comprehensive portfolio of financial and business management services, from new business set up to preparation of financial statements. The full range of our services can be found throughout this brochure.</p>
         
          </div>
        </div>
        <br /><br /><br /><br />
        
        </div>
  </div>
  
  );
}
