


import React from 'react';
import './About-us.css';
import Footer from './Footer';
import SearchComponent from './SearchComponent';
import ConsultationCard from './QuickLink';

const AboutUs = () => {
  return (
    <><br/><br/>
   {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <SearchComponent />
    </div> */}
<br />


      <section className="about-section">
      
        <div className="container">
          <div className="row">
      
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                
                <div className="sec-title">
                  <span className="title">About US</span>
                  <h2>
                  Unlocking Full Compliance: Tailored Solutions Crafted for Every Unique Requirement                </h2></div>
                
                <div className="text">
                FULLFILL Compliances is Founded in 2014 and  is an India-focused accounting, taxation, payroll processing, Compliance management and business advisory firm, operating in Hyderabad. We also manages an extensive affiliate network, providing service throughout India and reach across the globe.                </div>
                <div className="text">
                At FULLFILL Compliances we recognize that you are unique, that you have unique requirements and we are committed to providing individually tailored financial solutions. FULLFILL Compliances is dedicated to providing personalized service by working closely with our clients to understand your individual business needs. This enable us to offer the most up-to-date and expert advice.                </div>
                <div className="text">
                FULLFILL Compliance offers a comprehensive portfolio of financial and business management services, from new business set up to preparation of financial statements. The full range of our services can be found throughout this brochure.                <div className="btn-box">
                 </div>
                  <a href="/contact" target="_self" className="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                {/* <div className="author-desc">
                  <h2>Rahul Kumar Yadav</h2>
                  <span>Web Developer</span>
                </div> */}
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      title="Rahul Kumar Yadav"
                      src="./img/aboutus.png"
                      alt="Rahul Kumar Yadav"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="sec-title">
            <span className="title">Why Choose Us</span>
            <h2> We are a blend of seasoned chartered accountants and proficient consultants. </h2>
          </div>
          <div className="text">
          Always Available to ensure that your business is supported at every stage. Our multicultural team has experience working with diverse businesses.
          </div>
          <div className="text">
          We have great relationships with our clients and a proven track record of success. personalized service by working closely with our clients to understand your individual business needs.    
          </div>
          
          <div className="text">
          FULLFILL Compliance offers a comprehensive portfolio of financial and business management services, from new business set up to preparation of financial statements. 
          </div>
        </div>
      </section>
      <ConsultationCard /><br/><br/>
      <Footer />
    </>
  );
};

export default AboutUs;