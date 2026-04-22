import React from "react";
import footerLogo from "../../../../assets/images/footer_logo/Wazzafny.png";
import styles from "./FooterStyles";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="container" style={styles.footer}>
        <div>
          <a href="#">
            <img src={footerLogo} alt="logo" />
          </a>
        </div>

        <div style={styles.links}>
          <ul style={styles.ul}>
            <h4>Services</h4>
            <li>Browse Jobs</li>
            <li>Companies</li>
            <li>Candidates</li>
          </ul>

          <ul style={styles.ul}>
            <h4>Company</h4>
            <li>About us</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>

          <ul style={styles.ul}>
            <h4>Support</h4>
            <li>Terms of use</li>
            <li>Privacy</li>
            <li>Conditions</li>
          </ul>
        </div>

        <div style={styles.news_latter}>
          <h4 style={{ fontSize: "24px", fontWeight: "700" }}>Newsletter</h4>
          <span>Join & get news regularly</span>

          <form className="d-flex" style={{ position: "relative" }}>
            <input
              style={{ ...styles.footer_input, paddingRight: "80px" }}
              className="form-control"
              type="email"
              placeholder="Enter your email"
            />

            <button
              style={{
                ...styles.footer_button,
                height: "100%",
              }}
              className="btn btn-success"
              type="submit"
            >
              Send
            </button>
          </form>

          <div style={styles.social}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
