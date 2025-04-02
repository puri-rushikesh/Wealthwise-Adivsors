import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="appLogo.jpg" alt="Logo" />
      </div>
      <nav className="nav">
        <div className="dropdown">
          <a href="#services" className="dropbtn">Services &#9662;</a> {/* Added dropdown symbol */}
          <div className="dropdown-content">
            <div className="dropdown-column">
              <a href="#pan-tan">PAN/TAN</a>
              <a href="#income-tax">Income Tax</a>
              <a href="#gst">GST</a>
              <a href="#tax-return-filing">Tax Return Filing</a>
              <a href="#profession-tax">Profession Tax</a>
              <a href="#tds-tcs-filing">TDS & TCS Returns</a>
              <a href="#book-keeping">Book Keeping</a>
              <a href="#detailed-book-keeping">Detailed Book Keeping</a>
            </div>
            <div className="dropdown-column">
              <a href="#auditing">Auditing</a>
              <a href="#shop-act">Shop Act</a>
              <a href="#msme-certificate">MSME Certificate</a>
              <a href="#pf-esi-registration">PF/ESI Registration</a>
              <a href="#fssai-certificate">FSSAI Certificate</a>
              <a href="#firm-registration">Firm Registration</a>
              <a href="#loan-processing">Loan Processing</a>
            </div>
          </div>
        </div>
        <a href="#pricing">Pricing</a>
        <div className="dropdown">
          <a href="#resources" className="dropbtn">Resources &#9662;</a> {/* Added dropdown symbol */}
          <div className="dropdown-content">
            <div className="dropdown-column">
              <a href="#faqs">FAQs</a>
              <a href="#tax-glossary">Tax Glossary</a>
              <a href="#guides">Guides</a>
              <a href="#write-for-us">Write for Us</a>
              <a href="#case-study">Case study</a>
              <a href="#news">News</a>
              <a href="#calculators">Calculators</a>
              <a href="#blogs">Blogs</a>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <a href="#investments" className="dropbtn">Investments &#9662;</a> {/* Added dropdown symbol */}
          <div className="dropdown-content">
            <div className="dropdown-column">
              <a href="#portfolio-doctor">Portfolio Doctor</a>
              <a href="#wealth-builder">Wealth Builder</a>
              <a href="#mutual-fund">Mutual Fund</a>
            </div>
          </div>
        </div>
        <a href="#corporate-tie-up">Corporate tie-up</a>
        <a href="#login" className="login-button">
          Login <span className="arrow">→</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;