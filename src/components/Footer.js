import React from 'react';
import logo from '../icons_assets/Logo.svg';
const Footer = () => {
  return (
    <footer>
        <section>
          <div>
            <img src={logo} alt='Little Lemon Logo' />
            <p>We are a family owned Mediterraneran restaurant, focused on tradtional recipes served
              with a modern twist.
            </p>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Address: 1234 Lemon Street</li>
              <li>Phone: 123-456-7890</li>
              <li>Email: littlelemon@littlelemon.com</li>
            </ul>
          </div>
        </section>
    </footer>
  );
}

export default Footer;
