import React from "react";
import "./lower-deck.css";

export default function LowerDeck() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* 📍 Left: Contact Details */}
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>If you have a project or opportunity in mind, I’d love to hear from you.</p>
          <div className="contact-detail">
            <strong>Email:</strong> <a href="mailto:eldog@example.com">eldog@example.com</a>
          </div>
          <div className="contact-detail">
            <strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
          <div className="contact-detail">
            <strong>Location:</strong> Bangalore, India (Remote Available)
          </div>
        </div>

        {/* ✍️ Right: Contact Form */}
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
