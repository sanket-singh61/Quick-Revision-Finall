import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">QR</div>
          <div>
            <h3>Quick<br/>Revision</h3>
            <ul>
              <li>Learn Smart. Grow Fast.</li>
              <li>Your Notes, Your Power.</li>
              <li>Free Knowledge for Every Mind.</li>
              <li>Study Anywhere, Anytime.</li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#">All Notes</a></li>
              <li><a href="#">Programming</a></li>
              <li><a href="#"> Operating System</a></li>
              <li><a href="#">Cloud Computing</a></li>
              <li><a href="#">Cyber Security</a></li>
              <li><a href="#">Networking</a></li>
              <li><a href="#">AI ML&DS</a></li>
            </ul>
          </div>
          <div>
            <h4>Subject</h4>
            <ul>
              <li><a href="#">CAO</a></li>
              <li><a href="#">OS</a></li>
              <li><a href="#">IOT</a></li>
              <li><a href="#">ICS</a></li>
              <li><a href="#">DBMS</a></li>
              <li><a href="#">CN</a></li>
              <li><a href="#">MES</a></li>
            </ul>
          </div>
        </div>

        {/* Subscribe */}
        <div className="footer-subscribe">
          <h4>Subscribe !</h4>
          <p>Get weekly study tips & new notes in your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Connect Us</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} QuickRevision. All rights reserved.</p>
        {/* <div className="footer-bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Sitemap</a>
        </div> */}
      </div>
    </footer>
  );
}
export default Footer
// Alt + 0169 => © 