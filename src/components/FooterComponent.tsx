import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

import {
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "flowbite-react";

function FooterComponent() {
  return (
    <div className="footer p-5">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          flexDirection: "row",
          gap: "3em",
        }}
      >
        <Footer.Brand
          className="brand-icon"
          href="https://localhost:5731"
          src="src/assets/brand-icon.png"
          alt="abysinnia Logo"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            rowGap: "1em",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "15em" }}>
            <Footer.Title title="Useful Links" className="footer-titles" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Telegram Channel</Footer.Link>
              <Footer.Link href="#">Savings Account</Footer.Link>
              <Footer.Link href="#">Current Account</Footer.Link>
              <Footer.Link href="#">Application Forums</Footer.Link>
              <Footer.Link href="#">Branch/ATM Locator</Footer.Link>
              <Footer.Link href="#">Abysinnia Online Login</Footer.Link>
              <Footer.Link href="#">Online Banking Login</Footer.Link>
              <Footer.Link href="#">GizePay Login</Footer.Link>
              <Footer.Link href="#">Vacancy</Footer.Link>
              <Footer.Link href="#">FAQ</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div style={{ width: "15em" }}>
            <Footer.Title title="Ways to Bank" className="footer-titles" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Abyssinia Online</Footer.Link>
              <Footer.Link href="#">Mobile Banking</Footer.Link>
              <Footer.Link href="#">Virtual Banking</Footer.Link>
              <Footer.Link href="#">Card Banking</Footer.Link>
              <Footer.Link href="#">Agent Banking</Footer.Link>
              <Footer.Link href="#">E-commerce</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div style={{ width: "15em" }}>
            <Footer.Title
              title="International Banking"
              className="footer-titles"
            />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Foreign currency deposit accounts
              </Footer.Link>
              <Footer.Link href="#">Trade services</Footer.Link>
              <Footer.Link href="#">Money Transfer</Footer.Link>
              <Footer.Link href="#">Correspondent Banks</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div style={{ width: "15em" }}>
            <Footer.Title title="Loans" className="footer-titles" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Corporate and Commercial</Footer.Link>
              <Footer.Link href="#">Consumer and Mortgage Products</Footer.Link>
              <Footer.Link href="#">Bank Guarantee</Footer.Link>
              <Footer.Link href="#">Loan Calculator</Footer.Link>
            </Footer.LinkGroup>
            <br />
            <br />
            <Footer.Title title="Customer Care" className="footer-titles" />
            <Footer.LinkGroup col>
              <Footer.Link href="tel:8397">8397 (Toll-free Number)</Footer.Link>
              <Footer.Link href="mailto:contactcenter@bankofabyssinia.com">
                contactcenter@bankofabyssinia.com
              </Footer.Link>
              <Footer.Link href="#">
                SWIFT: ABYSETAA, Addis Ababa, Ethiopia
              </Footer.Link>
              <Footer.Link href="#">
                HQ Building, The Gambia st, Legehar, Addis Ababa Ethiopia
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-links d-flex justify-content-between align-items-center g-3">
          <Footer.Copyright
            href="#"
            by="Bank of Abysinnia™"
            year={2024}
            style={{ display: "flex", gap: "1em" }}
            className="footer-copywrite"
          />
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
      </div>
    </div>
  );
}

export default FooterComponent;
