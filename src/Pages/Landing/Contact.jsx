import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="container mt-top">
      <div className="contact-div">
        <h2 className="title">Contact Us</h2>
        <div className="contact-row">
          <h3>Anil Menon</h3>
          <a href="mailto:anil_h_menon@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> anil_h_menon@hotmail.com
          </a>
        </div>
        <div className="contact-row">
          <h3>Laxma Reddy</h3>
          <a href="mailto:gunukulalaxmareddy@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> gunukulalaxmareddy@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
