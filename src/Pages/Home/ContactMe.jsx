// import React from "react";
// import Footer from "./Footer";
// export default function ContactMe() {
//   return (
//     <>
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p><br/>
//         <h2>Contact Us</h2><br/>
//         <p className="text-lg">
//         If you have a general question or would like to learn more about FullFill Compliances please reach out. We would love to hear from you.
//         </p>
//       </div>
//       <form className="contact--form--container">
//         <div className="container">
//           <label htmlFor="first-name" className="contact--label">
//             <span className="text-md">First Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="first-name"
//               id="first-name"
//               required
//             />
//           </label>
//           <label htmlFor="last-name" className="contact--label">
//             <span className="text-md">Last Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="last-name"
//               id="last-name"
//               required
//             />
//           </label>
//           <label htmlFor="email" className="contact--label">
//             <span className="text-md">Email</span>
//             <input
//               type="email"
//               className="contact--input text-md"
//               name="email"
//               id="email"
//               required
//             />
//           </label>
//           <label htmlFor="phone-number" className="contact--label">
//             <span className="text-md">phone-number</span>
//             <input
//               type="tel"
//               className="contact--input text-md"
//               name="phone-number"
//               id="phone-number"
//               required
//             />
//           </label>
//         </div>
//         <label htmlFor="choode-topic" className="contact--label">
//           <span className="text-md">Choose a topic</span>
//           <select id="choose-topic" className="contact--input text-md">
//             <option>Select One...</option>
//             <option>Start-Up Services</option>
//             <option>Accounting Services</option>
//             <option>GST Services</option>
//             <option>IncomeTax Services</option>
//             <option>PayRoll Services</option>
//             <option>ROC Services</option>
//           </select>
//         </label>
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//             className="contact--input text-md"
//             id="message"
//             rows="8"
//             placeholder="Type your message..."
//           />
//         </label>
//         <label htmlFor="checkboc" className="checkbox--label">
//           <input type="checkbox" required name="checkbox" id="checkbox" />
//           <span className="text-sm">I accept the terms</span>
//         </label>
//         <div>
//           <button className="btn btn-primary contact--form--btn">Submit</button>
//         </div>
//       </form>
//     </section>
//     <Footer />
//     </>
//   );
// }


import React from "react";
import Footer from "./Footer";

export default function ContactMe() {
  return (
    <>
      <section id="Contact" className="contact--section">
        <div>
          {/* <p className="sub--title">Get In Touch</p><br/> */}
          <h2>Contact Us</h2><br />
          <p className="text-lg">
            If you have a general question or would like to learn more about FullFill Compliances please reach out. We would love to hear from you.
          </p>
        </div>
        <div style={{ width: "100%", overflowX: "hidden" }}>
          {/* Embedded Zoho CRM form */}
          <iframe
            title="Zoho CRM Form"
            src="https://crm.zohopublic.in/crm/WebFormServeServlet?rid=382a47d8ed4790f33dd4708dd9dd82846d1c01940c4946b97272f02a2bd79d9b470261b82a91044ce429c39794b04dfagidd89d59dee04969177f61dc9e893474751a4beee1792e2a645121432882e60e8f"
            style={{ width: "60%", height: "1070px" }} // Adjust the height as needed
            frameBorder="0"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

