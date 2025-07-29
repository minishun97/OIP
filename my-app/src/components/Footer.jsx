import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: '#004d40', color: 'white', textAlign: 'center', padding: '30px' }}>
    <h2>Friends of River Kelvin</h2>
    <p>Team 22: Lew Jie Shun, Kua Dong Han, Lim Kuan Yong, Keerthana Keshaini, En Thong Lew, Zhi Wen Jeff Tan</p>
    <div style={{ marginTop: '10px' }}>
      <a href="https://facebook.com" style={{ margin: '0 10px' }}>
        <img src="/logos/facebook_logo.png" alt="Facebook" style={{ width: '30px', height: '30px', borderRadius: '5px' }} />
      </a>
      <a href="https://instagram.com" style={{ margin: '0 10px' }}>
        <img src="/logos/instagram_logo.png" alt="Instagram" style={{ width: '30px', height: '30px', borderRadius: '5px' }} />
      </a>
    </div>
  </footer>
);

export default Footer;
