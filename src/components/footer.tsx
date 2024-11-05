import React from "react";

// import {
//   faFacebook,
//   faTwitter,
//   faLinkedin,
//   faYoutube,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import "../index.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
          </p>
          <br />
          <br />

          <div className="social-icons">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Um</h4>
          <ul>
            <li>
              <a href="#">Kontaktiere Uns</a>
            </li>
            <li>
              <a href="#">Über Uns</a>
            </li>
            <li>
              <a href="#">Karriere</a>
            </li>
            <li>
              <a href="#">Unternehmensinformationen</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hilfe</h4>
          <ul>
            <li>
              <a href="#">Unsere Produzenten</a>
            </li>
            <li>
              <a href="#">Zahlung</a>
            </li>
            <li>
              <a href="#">Versand</a>
            </li>
            <li>
              <a href="#">Stornierung & Rückgabe</a>
            </li>
            <li>
              <a href="#">Verstoß Melden</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Politik</h4>
          <ul>
            <li>
              <a href="#">Rücknahmegarantie</a>
            </li>
            <li>
              <a href="#">Nutzungsbedingungen</a>
            </li>
            <li>
              <a href="#">Sicherheit</a>
            </li>
            <li>
              <a href="#">Privatsphäre</a>
            </li>
            <li>
              <a href="#">Seitenverzeichnis</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
