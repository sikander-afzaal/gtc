import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);
  useEffect(() => {
    const splide = document.querySelector(".splide");
    if (headerToggle) {
      splide.style.zIndex = "-1";
    } else {
      splide.style.zIndex = "1";
    }
  }, [headerToggle]);

  return (
    <div className="container header-wrapp">
      {headerToggle && <div className="overlay"></div>}
      <header>
        <img src="/logo.png" alt="" />
        <nav className={`${headerToggle ? "nav-active" : ""}`}>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#past"
            className="navlink"
          >
            Past
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            x
            href="#about"
            className="navlink"
          >
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
                  setHeaderToggle(false);
                  setDropDown(false);
                }}
                href="#aapi"
              >
                AAPI Adopt a Village
              </a>
              <a
                onClick={() => {
                  setDropDown(false);
                  setHeaderToggle(false);
                }}
                href="#dipam"
              >
                DIPAM Program Platform
              </a>
            </div>
          </div>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#aapi"
            className="navlink"
          >
            AAPI Adopt a Village
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#dipam"
            className="navlink"
          >
            DIPAM Program Platform
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#resource"
            className="navlink"
          >
            Resources
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#contact"
            className="navlink"
          >
            Contact
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
