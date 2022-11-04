import React from "react";
import profile from "../../images/profile.jpg";

const About = () => {
  return (
    <div className="container">
        <h1 className="text-center m-5">About Me</h1>
      <div className="row about-me mt-5">
        <div className="col-7 about-info">
          <h2>
            Hello dear,
            <br /> It's Pan Wei Zi
          </h2>
          <p>
            Pan Wii Zi is my Chinese name. Hahaha, it's hearing funny but it's
            true. However, Now I am Studying in china. My major subject is{" "}
            <span>Cloud Computing Technologies and Applications</span>.
          </p>
          <p>It simply introduces with about me . Have a Nice Day.</p>
          <p>
            <small>Thank You</small>
          </p>
        </div>
        <div className="col-5 about-img">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
