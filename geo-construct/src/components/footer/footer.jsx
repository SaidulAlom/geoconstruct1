import React from "react";
import "./footer.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BiCopyright, BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">GEO-CONSTRUCT</h3>
            <div className="footer-text">
              <p>A location-based construction planning website</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank" className="social-icon">
                  <FaFacebook />
                </a>
                <a href="https://x.com/" target="_blank" className="social-icon">
                  <FaTwitter />
                </a>
                <a href="https://github.com/" target="_blank" className="social-icon">
                  <BsGithub />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" className="social-icon">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <div className="footer-text">
              <a href="/environmental" className="footer-link">Environmental</a>
              <a href="/demographical" className="footer-link">Demographical</a>
              <a href="/geographical" className="footer-link">Geographical</a>
              <a href="/public_amenities" className="footer-link">Public Amenities</a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Useful links</h3>
            <div className="footer-text">
              <a href="/help" className="footer-link">Help</a>
              <a href="/documentation" className="footer-link">Documentation</a>
              <a href="/services" className="footer-link">Services</a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Get in Touch</h3>
            <div className="footer-text">
              <div className="contact-item">
                <FaLocationDot className="icon" />
                <p>Dhemaji Engineering College</p>
              </div>
              <div className="contact-item">
                <BiPhoneCall className="icon" />
                <p>+91 8638205442</p>
              </div>
              <div className="contact-item">
                <MdEmail className="icon" />
                <p>geoconstruct@dec.ac.in</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <BiCopyright className="icon" />
          <p>2024 Geo-Construct | All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
