import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Banner = () => {
  const [state] = React.useState({
    title: "Nikhil Hirulkar",
    text: "FULL-STACK WEB DEVELOPER",
    image: "./images/ProfilePic.jpg",
   });
  return (
    <header id="Banner" className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <ul className="contactCircles">
                  <li>
                    <a
                      href="https://github.com/nikhilhir"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nikhil-hirulkar-882a70127/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/@HirulkarR"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter className="headerIcon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
