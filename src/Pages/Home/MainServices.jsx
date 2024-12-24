import React from "react";
import "./MainServices.css";
import Footer from "./Footer";
import SearchComponent from "./SearchComponent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MainServices = () => {
  return (
    <>
      <div>
        <div className="container-fluid bg-light py-5">
          <div className="container py-5">
            <br />
            <h2 style={{ textAlign: "center", margin: "0 auto", color: "#14183e" }}>
              Our Services
            </h2>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SearchComponent />
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "16px" }}>
                At our firm, we take pride in providing a comprehensive range of
                professional services to meet your financial needs.
              </p>
              <br />
            </div>
            <br />
            <br />
            <div className="row g-4">
              {/* Accounting Services */}
              <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <LazyLoadImage
                    className="img-fluid"
                    src="./img/acountingServies (2).webp"
                    alt="Accounting Services"
                    effect="blur" // Add a blur effect while loading
                  />
                  <a
                    className="case-overlay text-decoration-none"
                    href="/Accounting-Services"
                  >
                    <h5 className="lh-base text-white mb-1">
                      Accounting Services
                    </h5>
                    <span className="btn btn-square btn-primary">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              {/* ROC Services */}
              <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <LazyLoadImage
                    className="img-fluid"
                    src="./img/accountingServices (3).jpeg"
                    alt="ROC Services"
                    effect="blur"
                  />
                  <a
                    className="case-overlay text-decoration-none"
                    href="/ROC-Services"
                  >
                    <h5 className="lh-base text-white mb-1">ROC Services</h5>
                    <span className="btn btn-square btn-primary">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              {/* GST Services */}
              <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <LazyLoadImage
                    className="img-fluid"
                    src="./img/accountingServices (4).jpeg"
                    alt="GST Services"
                    effect="blur"
                  />
                  <a
                    className="case-overlay text-decoration-none"
                    href="/GST-Services"
                  >
                    <h5 className="lh-base text-white mb-1">GST Services</h5>
                    <span className="btn btn-square btn-primary">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              {/* Payroll Services */}
              <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <LazyLoadImage
                    className="img-fluid"
                    src="./img/accountingServices (5).jpeg"
                    alt="Payroll Services"
                    effect="blur"
                  />
                  <a
                    className="case-overlay text-decoration-none"
                    href="/TDS-SaleOfProperty"
                  >
                    <h5 className="lh-base text-white mb-1">Payroll Services</h5>
                    <span className="btn btn-square btn-primary">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              {/* Startup Services */}
              <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <LazyLoadImage
                    className="img-fluid"
                    src="./img/startupservices.jpeg"
                    alt="Startup Services"
                    effect="blur"
                  />
                  <a className="case-overlay text-decoration-none" href="">
                    <h5 className="lh-base text-white mb-1">Startup Services</h5>
                    <span className="btn btn-square btn-primary">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              {/* Income Tax Services */}
              <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="case-item position-relative overflow-hidden rounded mb-2">
                  <LazyLoadImage
                    className="img-fluid"
                    src="./img/incomeTax.webp"
                    alt="Income Tax Services"
                    effect="blur"
                  />
                  <a
                    className="case-overlay text-decoration-none"
                    href="/IncomeTax-Service"
                  >
                    <h5 className="lh-base text-white mb-1">
                      Income Tax Services
                    </h5>
                    <span className="btn btn-square btn-primary">
                      <i className="fa fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainServices;
