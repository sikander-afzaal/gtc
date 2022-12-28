import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="container header-wrapp">
      {headerToggle && <div className="overlay"></div>}
      <header>
        <img src="/logo.png" alt="" />
        <nav className={`${headerToggle ? "nav-active" : ""}`}>
          <a href="#" className="navlink">
            Past
          </a>
          <a href="#" className="navlink">
            About Us
          </a>
          <div className="navlink-div">
            <p onClick={() => setDropDown((prev) => !prev)} className="navlink">
              Services{" "}
              <FontAwesomeIcon
                style={{ transform: dropDown ? "rotate(180deg)" : "none" }}
                icon={faChevronDown}
              />
            </p>
            <div className={`dropdown ${dropDown ? "active-drop" : ""}`}>
              <a
                onClick={() => {
                  setDropDown(false);
                }}
                href="#"
              >
                AAPI Adopt a Village
              </a>
              <a
                onClick={() => {
                  setDropDown(false);
                }}
                href="#"
              >
                DIPAM Program Platform
              </a>
            </div>
          </div>
          <a href="#" className="navlink">
            AAPI Adopt a Village
          </a>
          <a href="#" className="navlink">
            DIPAM Program Platform
          </a>
          <a href="#" className="navlink">
            Resources
          </a>
          <a href="#" className="navlink">
            Contract
          </a>
        </nav>
        <FontAwesomeIcon
          onClick={() => {
            setHeaderToggle((prev) => !prev);
          }}
          style={{ color: headerToggle ? "var(--blue)" : "black" }}
          className="header-toggle"
          icon={headerToggle ? faXmark : faBars}
        />
      </header>
    </div>
  );
};

export default Header;
