import React from "react";
import './css/upper-deck.css';

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
         
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sahil-ojha-9844a6156/"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/EL-dog"><i className="fab fa-github"></i></a>
            <a href="https://medium.com/@ojhasahil9"><i className="fab fa-medium"></i></a>
     
          </div>
        </div>
        <div className="right-section">
          <img src={require("./cleveland.png")} alt="Profile" className="profile-image" />
        </div>
      </div>

      <div className="background-overlay"></div>
    </div>
  );
}

export default UpperDeck;
