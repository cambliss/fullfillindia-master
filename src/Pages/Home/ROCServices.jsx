
import React from 'react'
import './bootstrap.min.css'
import './AccountingServices.css'


import { useState } from 'react';



import Footer from "./Footer";
const ROCServices = () => {
    return (
        <>
      <div className='container'>
        <br /><br /><br /><br />
        <center>
        <h3>Seamless Compliance, Swift Growth: Unleashing the Power of ROC Services
</h3>
</center> <br /><br />
        <div className="row col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{paddingRight:"0px"}}>

        <div 
                      class="col-lg-4 col-md-6 col-sm-6  wow fadeIn vij"
                      data-wow-delay="0.1s" style={{marginBottom:"15px"}}>
                                <a href="/IT-ROC Tax-Audit" style={{ textDecoration: "none", color: "inherit" }}>
                                    <div class="service-item d-flex flex-column justify-content-center text-center rounded"  style={{ height: "100%",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
                                        <div class="service-icon btn-square">
                                            <i class="fa fa-home fa-2x"></i>
                                        </div>
                                        <h6 class="mb-3" >
                                       LLP Annual Compliance | IT ROC & Tax Audit</h6><br/>
                                       
                                    </div>
                                    </a>
                                </div>
                 
                                <div 
                      class="col-lg-4 col-md-6 col-sm-6  wow fadeIn vij"
                      data-wow-delay="0.1s" style={{marginBottom:"15px"}}>
                            <a href="/Audit-ROC" style={{ textDecoration: "none", color: "inherit" }}>

                                    <div class="service-item d-flex flex-column justify-content-center text-center rounded"  style={{ height: "100%",boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
                                        <div class="service-icon btn-square">
                                            <i class="fas fa-balance-scale-left fa-2x"></i>
                                        </div>
                                        <h6 class="mb-3" >
                                        Audit and Roc- Private Limited</h6>
                                        
                                    </div>
                                    </a>
                                </div>

                   
              





        </div>
      </div>
       <br /><br /><br />
      <Footer />
      </>
    )
  }
  
  export default ROCServices;

  