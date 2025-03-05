import React from 'react';
import './QuickLink.css';

const ConsultationCard = () => {
  return (
    <div className="card consultation-card">
      <div className="card-overlay">
        <div className="card-content">
          <div className="text-container">
            <p style={{textAlign:"center"}}>Start Your Consultation Here</p>
            <h1 style={{ color: "#fff", fontWeight: "700" }}>Book Your Appointment Now</h1>
            <br />
          </div>

          <a href="/Main-Services">
            <button type="button" className="btn custom-btn quick-btn">
              Contact Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCard;
