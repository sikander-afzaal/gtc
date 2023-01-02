import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
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
        <a className="logo" href="#past">
          <img src="/logo.png" alt="" />
        </a>
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

          <a
            onClick={() => setHeaderToggle(false)}
            href="#dipam"
            className="navlink"
          >
            Disease Reversal Program
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#aapi"
            className="navlink"
          >
            AAPI Adopt a Village
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#platform"
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
