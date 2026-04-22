import React from "react";
import card from "../../../../assets/images/HeroSection/Card.png";
import styles from "./HeroStyles";

export default function HeroSection() {
  return (
    <div className="container">
      <div className="row mt-5 align-items-center">
        <div className="col-lg-6 col-12" style={styles.text}>
          <div style={{ width: "400px" }}>
            <h3 style={{ fontSize: "42px" }}>
              The <span style={{ color: "#01A84D", fontSize: "42px" }}>#1</span>{" "}
              Job Board for Hiring or Find your next job in{" "}
              <span style={{ color: "#01A84D", fontSize: "42px" }}>Egypt</span>
            </h3>
          </div>

          <p style={styles.paragraph}>
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
        </div>

        <div className="col-lg-6 col-12 text-center">
          <img src={card} alt="card" />
        </div>
      </div>
    </div>
  );
}
