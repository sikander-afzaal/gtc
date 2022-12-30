import "./Footer.css";

const Footer = () => {
  return (
    <div className="container mt-top">
      <footer>
        <a href="/terms.pdf" download>
          Terms and Conditions
        </a>
        <a href="/privacy.pdf" download>
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default Footer;
