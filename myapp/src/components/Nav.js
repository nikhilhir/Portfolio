import React from "react";
import { FaBars } from "react-icons/fa";


const Nav = () => {
  const [state, setState] = React.useState(true);
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo"></div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="#Banner">Home</a>
              </li>

              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>

              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaBars className="fa" />
      </div>
    </nav>
  );
};

export default Nav;