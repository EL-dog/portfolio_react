import React from "react";
import "./upper-center-deck.css";
function UpperCenterDeck() {
    return (
   <div className="about-me">
      <div className="about-me-content">
        <div className="about-left">
          <h2 className="section-title">About Me</h2>
          <p className="bio">
            I'm a passionate developer focused on building secure, fast, and scalable web applications.  
            I specialize in <strong>Flutter</strong>, <strong>Spring Boot</strong>, and modern frontend tech.
          </p>
          <ul className="skills-list">
            <li>🔥 Flutter + Riverpod</li>
            <li>🔐 JWT + Spring Security</li>
            <li>⚙️ Docker & REST APIs</li>
            <li>📦 AES/RSA Encryption & Secure PWAs</li>
          </ul>
          <button className="resume-btn">Download Resume</button>
        </div>
        <div className="about-right">
          <img src="/about-image.png" alt="Tech Avatar" className="about-image" />
        </div>
      </div>
    </div>
  );
}

export default UpperCenterDeck;