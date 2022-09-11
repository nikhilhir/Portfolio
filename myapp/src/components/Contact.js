import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaMobileAlt,
  FaLocationArrow,
  FaGooglePlusSquare,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo"></div>
              <p className="cont" id="cont">
                Contact Details
              </p>

              <div className="fl">
                <p>
                  <FaMobileAlt></FaMobileAlt>
                  <span> </span> +91 8806801620
                </p>

                <p>
                  <FaLocationArrow> </FaLocationArrow>
                  <span> </span>Yavatmal, Maharashtra
                </p>

                <p>
                  <FaGooglePlusSquare></FaGooglePlusSquare>
                  <span> </span>
                  nikhilhirulkar8@gmail.com
                </p>
              </div>
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
                    href="https://www.facebook.com/nikhil.hirulkar.3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="headerIcon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/nikhil_hirulkar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="headerIcon" />
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
      </div>
    </div>
  );
};

export default Contact;