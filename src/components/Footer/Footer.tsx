import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are dedicated to providing the best tax filing services.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@taxfiling.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | LinkedIn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;