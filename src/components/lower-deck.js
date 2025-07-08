import React from "react";
import "./css/lower-deck.css";

export default function LowerDeck() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>If you have a project or opportunity in mind, I’d love to hear from you.</p>
          <div className="contact-detail">
            <strong>Email:</strong> <a href="mailto:ojhasahil9@gmail.com">ojhasahil9@gmail.com</a>
          </div>
          <div className="contact-detail">
            <strong>Phone:</strong> <a href="tel:+917992152704">+91 79921 52704</a>
          </div>
          <div className="contact-detail">
            <strong>Location:</strong> Bangalore, India (Remote Available)
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Your Phone" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
