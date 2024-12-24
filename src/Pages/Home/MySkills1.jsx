import data from "../../data/index.json";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from "@fortawesome/free-solid-svg-icons";


export default function MySkills1() {

const [data1,setData1]=useState(data.skills)

const AccountingServices=[{
  id:"1",
  src:"https://cdn.pixabay.com/photo/2016/01/03/11/24/gear-1119298_640.png",
  title: "Accounting for Business/Profession (Yearly)",
  description:"The Income Tax Act has specified the books of accounts that are required to be maintained for the purpose of Income tax. These have been prescribed under section 44AA and Rule 6F."
}]


const  GST_Services =[
  {
    id:"1",
    src:"https://cdn.pixabay.com/photo/2016/01/03/11/24/gear-1119298_640.png",
    title: "GST Registration for Company (Public and Private) (Indian and foreign)",
    description:"The Income Tax Act has specified the books of accounts that are required to be maintained for the purpose of Income tax. These have been prescribed under section 44AA and Rule 6F."
  },
  {
    id:"2",
    src:"https://cdn.pixabay.com/photo/2016/01/03/11/24/gear-1119298_640.png",
    title: "GST Registration for Partnership(including LLP)",
    description:"The Income Tax Act has specified the books of accounts that are required to be maintained for the purpose of Income tax. These have been prescribed under section 44AA and Rule 6F."
  },
  {
    id:"3",
    src:"https://cdn.pixabay.com/photo/2016/01/03/11/24/gear-1119298_640.png",
    title: "Goods And Services Tax (GST) Registration sole proprietor",
    description:"The Income Tax Act has specified the books of accounts that are required to be maintained for the purpose of Income tax. These have been prescribed under section 44AA and Rule 6F."
  },
]








  return (
  
    <section className="skills--section1" id="mySkills">
      <div style={{display:"flex",width:"100%",justifyContent:"center",alignItems:"center",marginTop:"50px"}}>
  {/* <p className='skills--section--title1' >Full fill Services</p> */}
  {/* <div>
      <FontAwesomeIcon icon={faSadTear} size="2x" style={{color:"#518374",}}/>
    </div> */}
  </div>
      <div className="skills--section--container1">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card1">
            <div className="skills--section--img1">
              <img src={item.src} alt="Product Chain1" />
            </div>
            <div className="skills--section--card--content1">
              <h3 className="skills--section--title1">{item.title}</h3>
              <p className="skills--section--description1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
