import React from "react";
import { FaBars } from "react-icons/fa";
//import { ThemeContext } from "../Context/theme";

const Nav = () => {
  const [state, setState] = React.useState(true);
  // const [{ themename, toggeltheme }] = React.useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <a href="Banner">
                <img src="./images/1.jpg" alt="logo" />{" "}
              </a>
            </div>
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
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1ect9y7mx6R-7P71pn5gQ8E1Q0pF4lzF9"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>
              </li>
              {/* <button
                type="button"
                onClick={toggeltheme}
                className="btn btn--icon nav__theme"
                aria-label="toggle theme"
                style={{ backgroundColor: "inherit" }}
              >
                {themename === "dark" ? (
                  <FaSun />
                ) : (
                  <FaMoon />
                )}
              </button> */}
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
