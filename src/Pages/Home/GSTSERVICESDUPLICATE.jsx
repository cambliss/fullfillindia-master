import React from "react";
import "./bootstrap.min.css";
import "./AccountingServices.css";
import Footer from "./Footer";

import { useState } from "react";

const GSTServicesd = () => {
  const [color, setColor] = useState("black");

  const handleHover = () => {
    setColor("white");
  };

  const handleLeave = () => {
    setColor("black");
  };

  const style = {
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "600",
    color: color,
    transition: "color 0.3s ease-in-out",
  };
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
            <h3 className="mb-4" style={{ textAlign: "center" }}>
              Our Excellent GST Solutions for Your Business
            </h3>
            <br />
          </div>
          <div class="col-lg-12" id="abc">
            <div class="row g-12">
              <div
                class="col-md-4 "
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <div class="row g-4" style={{ paddingBottom: "20px" }}>
                  <a href="/GST-Service1">
                    {" "}
                    <div
                      class="col-12 wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <i class="fas fa-hand-holding-usd fa-2x"></i>
                        </div>
                        <h6 class="mb-3">
                          GST Registration for Company (Public and Private)
                          <br />
                          (Indian and Foreign)
                        </h6>
                        <br />
                      </div>
                    </div>
                  </a>
                  <a href="/GST-Service2">
                    <div
                      class="col-12 wow fadeIn"
                      data-wow-delay="0.5s"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <i class="fas fa-coins fa-2x"></i>
                        </div>
                        <h6 class="mb-3">
GST Registration for Partnership (including LLP)                        </h6>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="col-md-4"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <div class="row g-4" style={{ paddingBottom: "20px" }}>
                  <a href="/GST-Service1">
                    <div
                      class="col-12 wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <i class="fa-solid fa-user fa-2x"></i>
                        </div>
                        <h6 class="mb-3">
                        &nbsp;&nbsp;&nbsp;&nbsp; GST And BooKKeeping
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                        </h6>
                        <br />
                        <br />
                      </div>
                    </div>
                  </a>
                  <a href="/GST-Service2">
                    <div
                      class="col-12 wow fadeIn"
                      data-wow-delay="0.5s"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <i class="fas fa-balance-scale-left fa-2x"></i>
                        </div>
                        <br />
                        <h6 class="mb-3">
                          GST And BooKKeeping (Monthly)
                          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </h6>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div
                class="col-md-4"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <div class="row g-4" style={{ paddingBottom: "20px" }}>
                  <a href="/Gst-Service4">
                    <div
                      class="col-12 wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <i class="fas fa-credit-card fa-2x"></i>
                        </div>
                        <h6 class="mb-3">
                          GST And Service Tax (GST) Registration Sole Proprietor
                        </h6>
                        <br />
                        <br />
                      </div>
                    </div>
                  </a>
                  <a href="/GST-Service1">
                    <div
                      class="col-12 wow fadeIn"
                      data-wow-delay="0.5s"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <i class="fas fa-receipt fa-2x"></i>
                        </div>
                        <h6 class="mb-3">
                          &nbsp;&nbsp;&nbsp;&nbsp; GST And BooKKeeping(Quarterly)
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h6>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="col-md-4"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <div class="row g-4" style={{ paddingBottom: "20px" }}>
                  <a href="/Gst-Service4">
                    <div
                      class="col-12 wow fadeIn"
                      data-wow-delay="0.1s"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <i class="fas fa-credit-card fa-2x"></i>
                        </div>
                        <h6 class="mb-3">
                          GST And BookKeeping - Private Limited Company
                        </h6>
                        <br />
                        <br />
                      </div>
                    </div>
                  </a>
                  {/* <a href="/GST-Service1">
                    <div
                      class="col-12 wow fadeIn"
                      data-wow-delay="0.5s"
                      style={{ marginBottom: "15px" }}
                    >
                      <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <i class="fas fa-receipt fa-2x"></i>
                        </div>
                        <h6 class="mb-3">
                          &nbsp;&nbsp;&nbsp;&nbsp; GST And BooKKeeping
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h6>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  </a> */}
                </div>
              </div>
       
                  <a href="/GST-Service2">
                    <div
                      class="col-12 wow fadeIn"
                      data-wow-delay="0.5s"
                      style={{ marginBottom: "15px" }}
                    >
                      {/* <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <i class="fas fa-coins fa-2x"></i>
                        </div>
                        <h6 class="mb-3">
                          GST And BooKKeeping- Private Limited Company
                        </h6>
                        <br />
                        <br />
                        <br />
                      </div> */}
                    </div>
                  </a>
                </div>
                <a
        href="https://fullfillindia.zohobookings.in/#/customer/204334000000034094"
        className="btn btn-outline-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>Book Now</strong>
      </a>
              </div>
           
            </div>
          </div>
          
    
    
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default GSTServicesd;
