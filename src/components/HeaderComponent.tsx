import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function HeaderComponent() {
  return (
    <>
      <div className="header">
        <img src="src/assets/logo.png" alt="Bank Logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
