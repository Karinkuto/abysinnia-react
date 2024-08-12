import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

function NavComponent() {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/" style={{ color: isActive("/") ? "orange" : "black" }}>
            home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ color: isActive("/about") ? "orange" : "black" }}
          >
            about us
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            style={{ color: isActive("/products") ? "red" : "black" }}
          >
            products & services
          </Link>
        </li>
        <li>
          <Link
            to="/ecommerce"
            style={{ color: isActive("/ecommerce") ? "red" : "black" }}
          >
            e-commerce
          </Link>
        </li>
        <li>
          <Link
            to="/vacancy"
            style={{ color: isActive("/vacancy") ? "red" : "black" }}
          >
            vacancy
          </Link>
        </li>
        <li>
          <Link to="/ifb" style={{ color: isActive("/ifb") ? "red" : "black" }}>
            ifb
          </Link>
        </li>
        <li>
          <Link
            to="/media"
            style={{ color: isActive("/media") ? "red" : "black" }}
          >
            media
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            style={{ color: isActive("/support") ? "red" : "black" }}
          >
            online support
          </Link>
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
