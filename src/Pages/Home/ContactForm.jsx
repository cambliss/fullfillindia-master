import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
const ContactForm = () => {
  useEffect(() => {
    // Include Bootstrap styles
    const link = document.createElement("link");
    link.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
    link.rel = "stylesheet";
    link.integrity =
      "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    // Include Bootstrap scripts
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
    script.integrity =
      "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Cleanup function to remove the styles and scripts when the component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const wfInnerWidth = window.innerWidth;

    if (wfInnerWidth <= 768) {
      document.forms["BiginWebToRecordForm327578000000543024"].setAttribute(
        "data-ux-form-alignment",
        "top"
      );
    }

    document
      .getElementById("hidden327578000000543024Frame")
      .addEventListener("load", function () {
        try {
          const doc = arguments[0].currentTarget.contentWindow.document;
          if (doc.body.childElementCount !== 0) {
            arguments[0].currentTarget.style.display = "block";
            document.getElementById(
              "BiginWebToRecordForm1000000105005"
            ).style.display = "none";
          }
        } catch (error) {
          arguments[0].currentTarget.style.display = "block";
          document.getElementById(
            "BiginWebToRecordForm327578000000543024"
          ).style.display = "none";
        }
      });
  }, []);

  function removeError(fieldObj) {
    const parentElement = fieldObj.parentElement.parentElement;
    const childEle = parentElement.getElementsByClassName("wf-field-error")[0];

    if (childEle) {
      parentElement.classList.remove("wf-field-error-active");
      parentElement.removeChild(
        parentElement.getElementsByClassName("wf-field-error")[0]
      );
    }
  }

  function setError(fieldObj, label) {
    const parentElement = fieldObj.parentElement.parentElement;
    const childEle = parentElement.getElementsByClassName("wf-field-error")[0];

    if (!childEle) {
      const spanEle = document.createElement("SPAN");
      spanEle.setAttribute("class", "wf-field-error");
      spanEle.innerHTML = label;
      parentElement.append(spanEle);
      parentElement.classList.add("wf-field-error-active");
    }
  }

  function validateFields327578000000543024() {
    console.log("this is vijay");
    let isReturn = true;
    const form = document.forms["BiginWebToRecordForm327578000000543024"];
    const validateFld = form.querySelectorAll("[fvalidate=true]");

    validateFld.forEach((validateFld) => {
      const validateFldVal = validateFld.value;
      if (validateFldVal !== "") {
        const fLabel =
          validateFld.parentElement.parentElement.parentElement.getElementsByClassName(
            "wf-label"
          )[0].innerHTML;

        switch (validateFld.getAttribute("ftype")) {
          case "email":
            if (
              validateFldVal.match(
                /^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,22})$/
              ) === null
            ) {
              setError(validateFld, "Enter valid " + fLabel);
              isReturn = false;
            }
            break;
          // Add cases for other field types
        }
      }
    });

    return isReturn;
  }

  function checkMandatory327578000000543024() {
    let isReturn = true;

    mndFields.forEach((fieldName, i) => {
      const fieldObj =
        document.forms["BiginWebToRecordForm327578000000543024"][fieldName];

      if (fieldObj) {
        const fieldObjValue = fieldObj.value.replace(/^\s+|\s+$/g, "");

        if (fieldObjValue.length === 0) {
          if (fieldObj.type === "file") {
            setError(fieldObj, "Please select a file to upload.");
            isReturn = false;
          }

          setError(fieldObj, fldLangVal[i] + " cannot be empty");
          isReturn = false;
        } else if (
          fieldObj.nodeName === "SELECT" &&
          fieldObj.options[fieldObj.selectedIndex].value === "-None-"
        ) {
          setError(fieldObj, fldLangVal[i] + " cannot be none.");
          isReturn = false;
        } else if (fieldObj.type === "checkbox" && !fieldObj.checked) {
          setError(fieldObj, "Please accept " + fldLangVal[i]);
          isReturn = false;
        }

        try {
          if (fieldObj.name === "Last Name") {
            setName(fieldObjValue);
          }
        } catch (e) { }
      }
    });

    if (!validateFields327578000000543024()) {
      isReturn = false;
    }

    if (!isReturn) {
      const errEle = document.getElementsByClassName("wf-field-error");

      if (errEle && errEle.length > 0) {
        const inputEle = errEle[0].parentElement.getElementsByTagName("input");

        if (inputEle && inputEle.length === 0) {
          inputEle = errEle[0].parentElement.getElementsByTagName("select");
        }

        if (inputEle && inputEle.length > 0) {
          inputEle[0].focus();
        }
      }
    }

    return isReturn;
  }
  useEffect(() => {
    // Your JavaScript code
    var formname = document.BiginWebToRecordForm;
    if (!formname) {
      formname = document.BiginWebToRecordForm327578000000543024;
    }
    if (!formname) {
      formname = document.BiginWebToContactForm327578000000543024;
    }
    if (!formname) {
      formname = document.WebToContacts327578000000543024;
    }
    formname.action = "https://bigin.zoho.in/crm/WebForm";
    formname.className = formname.className + " wf-form-paid";

    // function validateForm327578000000543024() {
    //     if (
    //       (typeof checkMandatory !== 'undefined' && checkMandatory()) ||
    //       (typeof checkMandatory327578000000543024 !== 'undefined' &&
    //         checkMandatory327578000000543024())
    //     ) {
    //       var formname = document.BiginWebToRecordForm;
    //       if (!formname) {
    //         formname = document.BiginWebToRecordForm327578000000543024;
    //       }
    //       formname.submit();
    //     } else {
    //       // Prevent the default form submission
    //       event.preventDefault();
    //       return false;
    //     }
    //   }
    // function validateForm() {
    //   return validateForm327578000000543024();
    // }
  }, []);

  const myHtml = `
  <div class="container-fluid " >
      <div>

          <iframe id='hidden327578000000543024Frame' name='hidden327578000000543024Frame' style='display: none;width: 100%;height: 100vh;' class='iframe-container'></iframe>
          <div class='wf-parent' >
              <div class='wf-wrapper' id='BiginWebToRecordFormDiv327578000000543024'>
              <meta name='viewport' content='width=device-width, initial-scale=1.0'>
              <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>



                  <div class="container py-5">
                     
                      <div class="row justify-content-center">
                          <div class="col-lg-7">
                              <div class="wow fadeIn" data-wow-delay="0.3s">
                                   
                     
                                  <form id='BiginWebToRecordForm327578000000543024'
                                  name='BiginWebToRecordForm327578000000543024' class='wf-form-component'
                                  data-ux-form-alignment='top'
                                  style='font-family: Arial;position: relative;font-size:15px;' method='POST'
                                  enctype='multipart/form-data' target='hidden327578000000543024Frame'
                                  onSubmit='javascript:document.charset="UTF-8"; '
                                  accept-charset='UTF-8'>  <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 500px;" id="baddam">
                                  
                                  <h3 class="mb-4">If You Have Any Query, Please Contact Us</h3>
                              </div>
                                  <input type='text' style='display:none;' name='xnQsjsdp'
                                      value='da0a4990e7728390a64681c4506e7db5b3eb1d2bb1df648e917ac639f23c255c' />
                                  <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                                  <input type='text' style='display:none;' name='xmIwtLD'
                                      value='66ea49c8f2849bbee27e0e27b77bf076d7a4717bbc0a5bae838bbac0f7c819439af900c9439ddd05796a866dd8039303' />
                                  <input type='text' style='display:none;' name='actionType' value='Q29udGFjdHM=' />
                                  <input type='hidden' name='rmsg' id='rmsg' value='true' />
                                  <input type='text' style='display:none;' name='returnURL' value='null' />                                        <div class="row gy-2 gy-xl-5 p-4 p-xl-5">
                                          <div class="col-12 col-md-6 col-sm-6 col-lg-6">
                                            <label for="First Name" class="form-label">First Name<span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="First Name" name="First Name" value="" required>
                                          </div>
                                          <div class="col-12 col-md-6 col-sm-6 col-lg-6">
                                              <label for="Last Name" class="form-label">Last Name<span class="text-danger">*</span></label>
                                              <input type="text" class="form-control" id="Last Name" name="Last Name" value="" required>
                                            </div>
                                          <div class="col-12 col-md-6 col-sm-6 col-lg-6">
                                            <label for="Email" class="form-label">Email <span class="text-danger">*</span></label>
                                            <div class="input-group">
                                              <span class="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                </svg>
                                              </span>
                                              <input type="email" class="form-control" id="Email" name="Email" value="" required>
                                            </div>
                                          </div>
                                          <div class="col-12 col-md-6 col-sm-6 col-lg-6">
                                            <label for="Mobile" class="form-label">Mobile</label>
                                            <div class="input-group">
                                              <span class="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                              </span>
                                              <input type="tel" class="form-control" id="Mobile" name="Mobile" value="" required>
                                            </div>
                                          </div>
                                          <div class="col-12 col-md-6 col-sm-6 col-lg-6">
                                              <label for="Mailing Street" class="form-label">Mailing Street<span class="text-danger">*</span></label>
                                              <input type="text" class="form-control" id="Mailing Street" name="Mailing Street" value="" required>
                                            </div> <div class="col-12 col-md-6 col-sm-6 col-lg-6">
                                              <label for="Mailing City" class="form-label">Mailing City<span class="text-danger">*</span></label>
                                              <input type="text" class="form-control" id="Mailing City" name="Mailing City" value="" required>
                                            </div> <div class="col-12 col-md-6 col-sm-6 col-lg-6">
                                              <label for="Mailing State" class="form-label">Mailing State<span class="text-danger">*</span></label>
                                              <input type="text" class="form-control" id="Mailing State" name="Mailing State" value="" required>
                                            </div>
                      
                                            <div class="col-12 col-md-6 col-sm-6 col-lg-6">
                                              <label for="Mailing Country" class="form-label">Mailing Country<span class="text-danger">*</span></label>
                                              <input type="text" class="form-control" id="Mailing Country" name="Mailing Country" value="" required>
                                            </div>
                                            <div class="col-12 col-md-6 col-sm-6 col-lg-6">
                                              <label for="Mailing Zip" class="form-label">Mailing Zip<span class="text-danger">*</span></label>
                                              <input type="text" class="form-control" id="Mailing Zip" name="Mailing Zip" value="" required>
                                            </div>
                                            
                                          <div class="col-12 ">
                                            <div class="d-grid">
                                              <button class="btn btn-primary btn-lg" type="submit" >Submit</button>
                                            </div>
                                          </div>
                                        </div>
          <br><br>
          
          
                                         
                                      </div>
                                  </form>
                              </div>
                              <div class="col-lg-5 col-12" 
                              > 

                           


    <iframe id="googleMap" 
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.400808771557!2d78.50117647516615!3d17.4405200834557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI2JzI1LjkiTiA3OMKwMzAnMTMuNSJF!5e0!3m2!1sen!2sin!4v1741254139907!5m2!1sen!2sin" 
        width="500" height="700" style="border:0;" 
        allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>

    <!-- Transparent Overlay to Open Directions -->
    <a href="https://www.google.com/maps/dir/?api=1&destination=17.440520,78.501176" 
       target="_blank" 
       style="
           position: absolute; 
           top: 0; 
           left: 0; 
           width: 100%; 
           height: 100%; 
           background: rgba(0, 0, 0, 0); 
           cursor: pointer;">
    </a>













                            </div>
                          </div>
                          
                      </div>
                      
                      
</div>



          </div>



      </div>
  </div>
  `;

  return (
    <>
      <div className="container-fluid ">
        <div dangerouslySetInnerHTML={{ __html: myHtml }} />

        <Helmet>
          <script
            id="wf_script"
            src="https://bigin.zoho.in/crm/WebformScriptServlet?rid=66ea49c8f2849bbee27e0e27b77bf076d7a4717bbc0a5bae838bbac0f7c819439af900c9439ddd05796a866dd8039303gidda0a4990e7728390a64681c4506e7db5b3eb1d2bb1df648e917ac639f23c255c"
          ></script>
        </Helmet>
      </div>

      <Footer />
    </>
  );
};

export default ContactForm;
