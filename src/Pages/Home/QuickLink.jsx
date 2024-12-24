

import React from 'react';
import './QuickLink.css';


const ConsultationCard = () => {
 
 return (
    <div className="card">
      <div className="card-content">
        <div className="text-container text-white">
         <p >Start Your Consultation Here</p>
          <h2 >Book Your Appointment Now</h2><br/>
        </div>
        
        <a href="/Main-Services"><button
      type="button"
      className="btn custom-btn quick-btn"
     
    >
      Book Now
    </button>
    </a>
      </div>
    </div>
 );
};

export default ConsultationCard;


