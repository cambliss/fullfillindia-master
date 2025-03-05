import React from "react";
import { CheckCircle } from "lucide-react"; // Importing tick mark icon

export default function AboutMe() {
  return (
    <div>
  
    <div className="container1" style={{maxWidth:"1400px",margin:"0 auto"}}>
   <div className="row gy-4 align-items-stretch justify-content-between features-item ">
          <div className="col-12 col-md-12 col-lg-5 d-flex align-items-center features-img-bg justify-content-between" data-aos="zoom-out">
            <img src="https://img.freepik.com/premium-photo/man-sits-desk-with-pen-paper-with-words-travel-it_1115474-166871.jpg" classn="img-fluid" alt="" style={{borderRadius:"10px"}}/>
          </div>
          {/* Text Section */}
          <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-center flex-column" data-aos="fade-up">
            <h1 style={{ color: "#2c3e50", fontWeight: "700" }}>About us</h1>
            <br />
            <p style={{ textAlign: "justify", color: "#555", lineHeight: "1.8" }}>
              <strong>FULLFILL Tax Consultancy Services (FFTCS)</strong> was founded in 2014 and is an India-focused firm specializing in 
            accounting, taxation, payroll processing, compliance management, and business advisory services.            Based in Hyderabad, we have a strong presence across India and a global outreach through our extensive network.
            </p>
         

            <p style={{ textAlign: "justify", color: "#555", lineHeight: "1.8" }}>
              Our mission is to provide top-notch financial and business solutions to startups, SMEs, and enterprises. 
              With a team of experts, we ensure that businesses stay compliant with regulations while optimizing their operations.
            </p>

            <ul style={{ listStyle: "none", paddingLeft: "0", marginTop: "20px" }}>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <CheckCircle color="blue" size={22} style={{ marginRight: "10px" }} />
                New business setup & financial statement preparation.
              </li>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <CheckCircle color="blue" size={22} style={{ marginRight: "10px" }} />
                Comprehensive tax planning & compliance services.
              </li>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <CheckCircle color="blue" size={22} style={{ marginRight: "10px" }} />
                Business advisory & financial risk management.
              </li>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <CheckCircle color="blue" size={22} style={{ marginRight: "10px" }} />
                Payroll processing & corporate governance.
              </li>
              <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                <CheckCircle color="blue" size={22} style={{ marginRight: "10px" }} />
                GST, income tax & company law compliance.
              </li>
            </ul>
          </div>
        </div>
        <br /><br /><br /><br />
        
        </div>
  </div>
  
  );
}
