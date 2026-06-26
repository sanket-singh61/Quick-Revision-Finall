import "./Footer.css";
import { Mail, Send, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-main">
            <span className="logo-abbr">QR</span>
          </div>
          <div className="brand-info">
            <h3>Quick<span>Revision</span></h3>
            <ul className="brand-features">
              <li><ChevronRight size={14} className="li-icon"/> Learn Smart. Grow Fast.</li>
              <li><ChevronRight size={14} className="li-icon"/> Your Notes, Your Power.</li>
              <li><ChevronRight size={14} className="li-icon"/> Free Knowledge for Every Mind.</li>
              <li><ChevronRight size={14} className="li-icon"/> Study Anywhere, Anytime.</li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-group">
          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li><Link to="#">All Notes</Link></li>
              <li><Link to="#">Programming</Link></li>
              <li><Link to="#">Operating System</Link></li>
              <li><Link to="#">Cloud Computing</Link></li>
              <li><Link to="#">Cyber Security</Link></li>
              <li><Link to="#">Networking</Link></li>
              <li><Link to="#">AI ML&DS</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Subject</h4>
            <ul>
              <li><Link to="#">CAO</Link></li>
              <li><Link to="#">OS</Link></li>
              <li><Link to="#">IOT</Link></li>
              <li><Link to="#">ICS</Link></li>
              <li><Link to="#">DBMS</Link></li>
              <li><Link to="#">CN</Link></li>
              <li><Link to="#">MES</Link></li>
            </ul>
          </div>
        </div>

        {/* Subscribe */}
        <div className="footer-subscribe">
          <h4>Subscribe Now</h4>
          <p>Get weekly study tips & new notes right in your inbox.</p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-field">
              <Mail size={18} className="mail-icon" />
              <input type="email" placeholder="Enter your email address" required />
            </div>
            <button type="submit" className="subscribe-btn">
              Subscribe <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} QuickRevision. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="#">Terms of Service</Link>
            <div className="dot"></div>
            <Link to="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;