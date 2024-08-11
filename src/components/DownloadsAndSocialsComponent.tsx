import {
  faAppStore,
  faGooglePlay,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

function DownloadsAndSocialsComponent() {
  return (
    <div className="nav" style={{ paddingInline: "3em" }}>
      <div
        className="downloadLinks"
        style={{ display: "inline-flex", gap: "2em" }}
      >
        <div
          className="applelink btn w-2rem h-1rem p-2"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem",
            borderRadius: "8px",
            border: "1px solid #202020",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faAppStore} size="2x" />
          <div
            className="text"
            style={{ marginTop: "0.15rem", paddingInline: "1em" }}
          >
            <h5 style={{ fontSize: "small", margin: "0" }}>DOWNLOAD</h5>
            <p style={{ fontSize: ".5rem", margin: "0" }}>ON THE APPSTORE</p>
          </div>
        </div>
        <div
          className="playstorelink btn w-2rem h-1rem p-2"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem",
            border: "1px solid #202020",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faGooglePlay} size="2x" />
          <div
            className="text"
            style={{ marginTop: "0.15rem", paddingInline: "1em" }}
          >
            <h5 style={{ fontSize: "small", margin: "0" }}>DOWNLOAD</h5>
            <p style={{ fontSize: ".5rem", margin: "0" }}>ON THE PLAYSTORE</p>
          </div>
        </div>
        <div
          className="telegramlink btn w-2rem h-1rem p-2"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "1rem",
            borderRadius: "8px",
            border: "1px solid #202020",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faTelegramPlane} size="2x" />
          <div
            className="text"
            style={{ marginTop: "0.15rem", paddingInline: "1em" }}
          >
            <h5 style={{ fontSize: "small", margin: "0" }}>JOIN OUR</h5>
            <p style={{ fontSize: ".5rem", margin: "0" }}>TELEGRAM CHANNEL</p>
          </div>
        </div>
      </div>
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

export default DownloadsAndSocialsComponent;
