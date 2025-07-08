import React from "react";
import './upper-deck.css';

function UpperDeck() {
  return (
    <div className="upper-deck">
      <div className="upper-deck-content">
        <div className="left-section">
          <h2 className="greeting">Hi There,</h2>
          <h1 className="name">
            I'm <span className="highlight">EL-dog</span>
          </h1>
          <p className="role">A fellow <span className="typed">Programmer</span></p>
          <button className="cta">About Me →</button>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-telegram"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="right-section">
          <img src="/avatar.png" alt="el-dog avatar" className="avatar" />
        </div>
      </div>
      {/* Optional: background grid effect */}
      <div className="background-overlay"></div>
    </div>
  );
}

export default UpperDeck;
