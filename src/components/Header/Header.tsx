/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.scss';

import { useState } from 'react';

import { Logo } from '../ui/Logo-img/Logo-img';

export const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);

  addEventListener('scroll', () => setScrollTop(window.scrollY));

  const headerStyle = {
    '--scroll-top': `${scrollTop}px`,
  };

  return (
    <header className="header" style={headerStyle as React.CSSProperties}>
      <div className="container">
        <nav className="header__navigation navigation">
          <a href="#">
            <Logo />
          </a>

          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link" href="#history">
                01. HISTORY
              </a>
            </li>

            <li className="navigation__item">
              <a className="navigation__link" href="#climb">
                02. TEAM
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__content">
        <h1 className="header__title1">LOSANGELES</h1>
        <h1 className="header__title2">MOUNTAINS</h1>
      </div>

      <div
        className="header__background-layer layer1"
        style={{ backgroundImage: 'url("public/images/header-background0.png")' }}
      ></div>

      <div
        className="header__background-layer layer2"
        style={{ backgroundImage: 'url("public/images/header_background1.png")' }}
      ></div>
    </header>
  );
};
