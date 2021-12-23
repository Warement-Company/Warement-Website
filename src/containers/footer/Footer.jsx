import React from 'react';
import warementLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href="/services">Explore our services</a></p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={warementLogo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Social Media</h4>
        <p><a href="https://www.facebook.com/Warement">Facebook</a></p>
        <p><a href="https://www.instagram.com/warement_/">Instagram</a></p>
        <p><a href="https://twitter.com/Warement_">Twitter</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p><a href="/contact">Contact</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>+55 (11) 99341-2275</p>
        <p>info@warement.dev</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Warement. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
