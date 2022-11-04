import React from "react";
import './Footer.css';

const Footer = () => {
  const today = new Date();
  let year = today.getFullYear();
  return (
    <footer>
      <div className="row container m-auto">
        <div className="col-3">
            <h3 className="footer-logo">OnTheGo.</h3>
            <p>We are best travel guide in the word.Our main goal is 100% client satisfaction.</p>
            <p>onthego@example.com</p>
            <p>1 562 867 5111</p>
            <p>Broadway & Morris St, New York</p>    
        </div>
        <div className="col-3">
            <h5>Our Recent Posts</h5>
            <p>Visit Thailand, Bali And China</p>
            <p>September 7, 2016</p>
            <p>The Sound Of Our Jungle</p>
            <p>September 7, 2016</p>
            <p>New Year, New Resolutions!</p>
            <p>September 7, 2016</p>
        </div>
        <div className="col-3 newsletter-input ">
            <h5>Subscribe to our Newsletter</h5>
            <p>Join our Newsletter to know our Special news And Discout.</p>
            <input type="email" name="email" placeholder="  Email" />
            <input className="newsletter-button" type="submit" value="SUBCRIBES" />

        </div>
        <div className="col-3">
            <h5>Follow us on</h5>
        </div>
      </div>
      <div className="text-center  mt-5">
        <p>
          <small>
            copyright @ {year}{" "}
            <span style={{ color: "#FFBD30" }}>OnTheGo.</span>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
