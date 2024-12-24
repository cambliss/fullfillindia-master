import React, { useState } from 'react';
import './Searchbox1.css';
import { useNavigate } from 'react-router-dom';

const SearchComponent1 = () => {
  const availableKeywords = [
    { label: 'Accounting-Services', link: '/Accounting-Services' },
    {label:'GST-Services',link:'/GST-Services'},
    {label:'ALL-Services',link:'/Main-Services'},
    {label: 'ROC-Services', link:'/ROC-Services'},
    {label:'IT-ROC and Tax-Audit',link:'/IT-ROC Tax-Audit'},

    {label:'LLP ANNUAL COMPLIANCE | IT ROC & TAX AUDIT' , link:'/IT-ROC Tax-Audit'},
    {label:'AUDIT AND ROC – PRIVATE LIMITED', link:'/Audit-ROC'},
    {label:"IT ROC & Tax Audit", link:"/IT-ROC Tax-Audit" },
    {label:"TDS-Sale Of Property", link:"/TDS-SaleOfProperty" },
    {label:"IncomeTax-Services", link:"/IncomeTax-Service" },
    {label:"GST And BookKeeping Quarterly for PVT LTD Company", link:"/GST-Bookkeeping-Quarterly-Pvt-Ltd-Company" },
    {label:"IncomeTax for PVT LTD Company", link:"/IncomeTax-Private-Limited-Company" },
    {label:"GST Registration for public private Indian and foreign Companies", link:"/GST-Registration-for-public-private-Indian-Foreign" },
    {label:"GST Registration for Partnership Including LLP", link:"/GST-Registration-for-Partnership-Including-LLP" },
    {label:"GST Registration for Sole Propreitor", link:"/GST-Registration-Sole-Propreitor" },
    {label:"NRI Taxation", link:"/NRI-Taxation" },
    {label:"Income From Bussiness Profession", link:"/Income-From-Bussiness-Profession" },
    {label:"Salary Taxation", link:"/Salary-Taxation" },
    {label:"Income From House Property or other sources", link:"/Income-From-House-Property" },

    {label:"GST-Services Monthly", link:"/GST-Services-Monthly" },
    {label:"GST-Services for PVT LTD Company", link:"/GST-Services-Private-Limited-Company" },
    {label:"Capital Gain Taxation", link:"/Capital-Gain-Taxation" },
    {label:"PAN Aadhar Linking", link:"/PAN-AAdhar-Linking" },
    {label:"Revised Income Return", link:"/Revised-IncomeTax-Return" },
    {label:"Salary Indiviual greater than 50 Lakhs", link:"/Salaried-Indiviual" },
    
    {label:"GST and Bookkeeping Monthly for PVT LTD Company", link:"/GST-Bookkeeping-Montly-Pvt-Ltd-Company" },














    

    

  
    {label:'ROC-Services',link:'/ROC-Services'},
    
    {label:'Audit and ROC',link:'/Audit-ROC'},
    {label:'Payroll Services',link:'/TDS-SaleOfProperty'},
    {label:'ROC-Services',link:'/ROC-Services'},
    {label:'IncomeTax-Services',link:'/IncomeTax-Service'},





    
  ];

  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (inputValue.length) {
      const filteredResult = availableKeywords.filter((keyword) =>
        keyword.label && keyword.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      setResult(filteredResult);
    } else {
      setResult([]);
    }
  };

  const selectInput = (value) => {
    setInput(value.label);
    setResult([]);
  
    // Navigate directly to the link associated with the selected keyword
    if (value.link) {
      navigate(value.link);
    }
  };
  const handleService = () => {
    const selectedKeyword = availableKeywords.find((keyword) => keyword.label === input);
    console.log('Selected Keyword:', selectedKeyword);

    if (selectedKeyword) {
      navigate(selectedKeyword.link);
    }
  };

  return (
    <center>
    <div className="search-box1" style={{background:"white",border:"1px solid #1363C6"}}>
      <div className="row2">
        <input
          type="text"
          id="input-box"
          placeholder="Search Our Services Here"
          autoComplete="off"
          value={input}
          onChange={handleInputChange}
        />
        <button id="search-icon" onClick={handleService}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="result-box1">
        {result.length > 0 && (
          <ul>
            {result.map((item, index) => (
  <li key={index} onClick={() => selectInput(item)} style={{ textAlign: 'start' }}>
    {item.label}
  </li>
))}
          </ul>
        )}
      </div>
    </div>
    </center>
  );
};

export default SearchComponent1;
