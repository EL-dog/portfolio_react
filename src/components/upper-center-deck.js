import React from "react";
import "./css/upper-center-deck.css";
import TypingText from "./typing-text"; 
function UpperCenterDeck() {
  
    return (
   <div className="about-me">
      <div className="about-me-content">
        <div className="about-left">
          <h2 className="section-title">About Me</h2>
          <p className="bio">
           I build in silence. No noise, no spotlight — just clean code, secure systems, and the kind of reliability that speaks louder than I ever will.
          </p>

     <a href="/resume.pdf" download>
  <button className="resume-btn">Download Resume</button>
</a>
        </div>
        <div className="about-right">
  <div className="typing-wrapper">
    <TypingText
      texts={[
        "I don’t debug — I negotiate with the machine.",
         "Computers are fast. Mine just hates me.",
        "You won’t see me coming — but your logs will.",
        "Crafting zero-day solutions in zero noise.",
          "My firewall’s friendlier than I am."
      ]}
      speed={75}
      delay={2000}
    />
  </div>
</div>

      </div>
    </div>
  );
}

export default UpperCenterDeck;