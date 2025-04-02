import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { FaLightbulb, FaClock } from 'react-icons/fa';
import './BodyContent.css';

const BodyContent: React.FC = () => {
  return (
    <div className="body-content">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>File your ITR in</h1>
          <h1>9 minutes</h1>
          <h2>Plans starting from ₹299*</h2>
          <div className="phone-input">
            <label htmlFor="phone">Enter your phone number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter phone number" />
          </div>
          <button className="start-filing-button">Start Filing</button>
        </div>
        <div className="image-content">
          <img src="appLogo.jpg" alt="ITR Filing" />
        </div>
      </div>
      <div className="info-sections">
        <div className="info-section">
          <h3>
            <FiUsers className="icon" />
            Users
          </h3>
          <p>Over 1 lac + users have trusted us with their tax filings.</p>
          <p>Join our community and experience hassle-free tax filing.</p>
        </div>
        <div className="info-section">
          <h3>
            <FaLightbulb className="icon" />
            Impact
          </h3>
          <p>We have helped users save over crores in taxes.</p>
          <p>Our expert advice ensures maximum savings for you.</p>
        </div>
        <div className="info-section">
          <h3>
            <FaClock className="icon" />
            Founded
          </h3>
          <p>Founded in 2010, we have a decade of experience.</p>
          <p>Our team of experts is dedicated to your success.</p>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;