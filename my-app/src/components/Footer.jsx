import './base.css';

const Footer = () => (
  <footer className="custom-footer">
    <h2 className="footer-org">Friends of River Kelvin</h2>
    <p className="footer-team">Team 22</p>
    <div className="footer-socials">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/logos/facebook_logo.png" alt="Facebook" className="footer-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/logos/instagram_logo.png" alt="Instagram" className="footer-icon" />
      </a>
    </div>
  </footer>
);

export default Footer;