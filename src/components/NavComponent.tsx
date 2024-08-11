import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function NavComponent() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about us</Link>
        </li>
        <li>
          <Link to="/products">products & services</Link>
        </li>
        <li>
          <Link to="/ecommerce">e-commerce</Link>
        </li>
        <li>
          <Link to="/vacancy">vacancy</Link>
        </li>
        <li>
          <Link to="/ifb">ifb</Link>
        </li>
        <li>
          <Link to="/media">media</Link>
        </li>
        <li>
          <Link to="/support">online support</Link>
        </li>
      </ul>
      <div className="socials">
        <a href="#">
          <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faUserCircle} className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default NavComponent;
