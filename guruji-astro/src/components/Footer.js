import React from "react";
import "../css/Footer.css";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
function Footer() {
  return (
    <div className="footer">
      <div className="first-row">
        <div className="guruji">
          <img
            className="logo-img"
            src="https://media.glassdoor.com/sqll/4755382/guruji-astro-squarelogo-1645176134551.png"
            alt="logo"
          />
          Guruji
        </div>
        <p>
          About Guruji s2 to 3 lines what guruji do and how it works About
          Guruji s2 to 3 lines what guruji do and how it works
        </p>
        <div className="social-handles">
          <img src={facebook} alt="social" />
          <img src={instagram} alt="social" />
          <img src={twitter} alt="social" />
          <img src={youtube} alt="social" />
        </div>

        <div className="partners">
          <h3>Trusted and Seals</h3>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg"
            alt="parters"
          />
          <img
            src="https://entrackr.com/storage/2023/02/Razorpay.jpg"
            alt="parters"
          />
          <img
            src="https://cdn.learnwoo.com/wp-content/uploads/2016/11/Payment-Gateway_Stripe.png"
            alt="parters"
          />
        </div>
      </div>

      <div className="second-row">
        <div className="first-column give-margin">
          <h3>Company</h3>
          <p>Home</p>
          <p>Privacy Policy</p>
          <p>T & C</p>
          <p>Varied Payment</p>
        </div>

        <div className="first-column">
          <h3>Collaborate</h3>
          <p>Clever Tap</p>
          <p>Exotel</p>
          <p>Facebook</p>
          <p>Quora</p>
          <p>Google</p>
          <p>Youtube</p>
        </div>
      </div>
      <div className="third-row">
        <div className="first-column give-margin">
          <h3>Support </h3>
          <p>Home</p>
          <p>Privacy Policy</p>
          <p>T & C</p>
          <p>Varied Payment</p>
        </div>

        <div className="first-column">
          <h3>Important Link</h3>
          <p>Tarat Reader</p>
          <p>Vedic Astrology</p>
          <p>Palmistry</p>
          <p>Gemology</p>
          <p>Vastu</p>
          <p>Numerology</p>
        </div>
      </div>
      <div className="fourth-row">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Mail ID" />
        <textarea placeholder="Write Query" />
        <button className="button">Submit</button>
      </div>
    </div>
  );
}

export default Footer;
