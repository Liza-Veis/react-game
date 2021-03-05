import React from 'react';
import logo from '../assets/images/rs-logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a className="footer__logo" href="https://rs.school/react/">
        <img src={logo} alt="RS-School" />
      </a>
      <span className="footer__copy">
        Made by <a href="https://github.com/Liza-Veis">@Liza-Veis</a> in 2021
      </span>
    </footer>
  );
};

export default Footer;
