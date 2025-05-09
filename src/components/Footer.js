// components/Footer.js
import React from 'react';
import '../style/style.css';

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <p>&copy; {new Date().getFullYear()} Healthcare Management System. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
