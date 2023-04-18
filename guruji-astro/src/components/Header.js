import React from "react";
import "../css/Header.css";
import man from "../images/man.png";
import customer from "../images/customer.png";
import refund from "../images/refund.png";
import privacy from "../images/privacy.png";
import verify from "../images/verify.png";
import security from "../images/security.png";
function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <img
            className="logo-img"
            src="https://media.glassdoor.com/sqll/4755382/guruji-astro-squarelogo-1645176134551.png"
            alt="logo"
          />
          <h1 className="logo-head">Guruji</h1>
        </div>
        <div className="about-div">
          <ul className="about">
            <li className="home">Home</li>
            <li>Call with Astrolger</li>
            <li>Live (Coming Soon)</li>
          </ul>
        </div>

        <div className="user-profile">
          <img src={man} alt="user" />
        </div>
      </div>

      <div className="main-header">
        <h2 className="heading">"Astrology for Clarity"</h2>
        <p className="para-1">
          Your Name is a Vedic Astrolger and has expertise in Vaastu and Mantra
          Therapy
        </p>
        <button>Consult Now</button>
      </div>

      <div className="nav-bottom">
        <div className="details">
          <img src={customer} alt="customer" />
          <p>24 X 7 Customer Support</p>
        </div>
        <div className="details">
          <img src={refund} alt="customer" />
          <p>100% Refund if Unsatisfied</p>
        </div>
        <div className="details">
          <img src={privacy} alt="customer" />
          <p>Private & Confidential</p>
        </div>
        <div className="details">
          <img src={verify} alt="customer" />
          <p>Verified Astrolger</p>
        </div>
        <div className="details">
          <img src={security} alt="customer" />
          <p>Secure Payment</p>
        </div>
      </div>
      <div className="pages">
        <div className="circle1"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Header;
