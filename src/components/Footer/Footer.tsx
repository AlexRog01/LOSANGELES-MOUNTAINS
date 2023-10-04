/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.scss';

import { Logo } from '../ui/Logo-img/Logo-img';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <a className="footerLogo" href="#">
            <div className="footerLogo__logo">
              <Logo />
            </div>
            <div className="footerLogo__wrapper">
              <div className="footerLogo__title1">LOSANGELES</div>
              <div className="footerLogo__title2">MOUNTAINS</div>
            </div>
          </a>

          <p className="footer__text">COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};
