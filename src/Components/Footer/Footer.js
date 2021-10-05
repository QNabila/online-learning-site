import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-title">
          <h4>Edu More</h4>
        </div>
        <div className="footer-info"> 
          <p className="fs-5">Official:web@edu-more.com</p>
          <p className="fs-5"> Helpline : +8801427359234 <br/> (Available : 09:00am to 7:00pm)</p>
        </div>
        <div className="footer-link">
          <Link className="link" to="/about">
            About Us
            <br />
          </Link>
          <Link className="link" to="/services">
            Services
            <br />
          </Link>
          <Link className="link" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
      <div>
        <p className="copyright-text">
          Copyright ©2021 All rights reserved,site by nabila
        </p>
      </div>
    </div>
  );
};

export default Footer;
