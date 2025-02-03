import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import "./Footer.css"; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo */}
          <div className="footer-logo">
            <Link to="/" className="footer-title">SaarthiAI</Link>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Contact Us</Link></li>
              <li><Link to="/">Support Center</Link></li>
              <li><Link to="/">Blog Posts</Link></li>
              <li><Link to="/">FAQs</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/">Webinars</Link></li>
              <li><Link to="/">Case Studies</Link></li>
              <li><Link to="/">E-books</Link></li>
              <li><Link to="/">Tutorials</Link></li>
              <li><Link to="/">Community Forum</Link></li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div className="footer-section">
            <h3>Stay Updated</h3>
            <ul>
              <li><Link to="/">Newsletter</Link></li>
              <li><Link to="/">Events</Link></li>
              <li><Link to="/">Feedback</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Partnerships</Link></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="footer-section">
            <h3>Join</h3>
            <p>Subscribe for the latest updates and insights.</p>
            <div className="footer-subscribe">

            <input type="email" placeholder="Your Email Here" className="footer-input" />
            <button className="footer-button">Join</button>
            </div>
            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>©2025 SaarthiAI. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookie Settings</Link>
          </div>
          <div className="social-icons">
            <Link to=""><Facebook /></Link>
            <Link to=""><Instagram /></Link>
            <Link to=""><Twitter /></Link>
            <Link to=""><Linkedin /></Link>
            <Link to=""><Youtube /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
