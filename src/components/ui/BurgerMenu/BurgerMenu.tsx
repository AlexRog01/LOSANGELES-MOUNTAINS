import './BurgerMenu.scss';

import classNames from 'classnames';
import { FC, useState } from 'react';

interface Props {
  setMountainNumber: (number: number) => void;
  mountainNumber: number;
}

export const BurgerMenu: FC<Props> = ({ setMountainNumber, mountainNumber }) => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [menu_btn_bar_class, setMenu_btn_bar_class] = useState(
    'burgerMenu__menu-btn-bar unclicked',
  );

  const updateMenu = () => {
    if (!isMenuShow) {
      setIsMenuShow(true);
      setMenu_btn_bar_class('burgerMenu__menu-btn-bar clicked');
    } else {
      setIsMenuShow(false);
      setMenu_btn_bar_class('burgerMenu__menu-btn-bar unclicked');
    }
  };

  return (
    <div className="burgerMenu">
      <button onClick={updateMenu} className="burgerMenu__menu-btn resetButtonStyles">
        <div className={menu_btn_bar_class}></div>
        <div className={menu_btn_bar_class}></div>
        <div className={menu_btn_bar_class}></div>
      </button>

      <ul
        className={classNames('burgerMenu__list', {
          'burgerMenu__list--active': isMenuShow,
        })}
      >
        <li className="burgerMenu__item">
          <button
            className={classNames('burgerMenu__btn resetButtonStyles', {
              'burgerMenu__btn--active': mountainNumber === 1,
            })}
            onClick={() => {
              setMountainNumber(1);
              updateMenu();
            }}
          >
            <div className="burgerMenu__btn-text">MOUNTAIN 1</div>
          </button>
        </li>

        <li className="burgerMenu__item">
          <button
            className={classNames('burgerMenu__btn resetButtonStyles', {
              'burgerMenu__btn--active': mountainNumber === 2,
            })}
            onClick={() => {
              setMountainNumber(2);
              updateMenu();
            }}
          >
            <div className="burgerMenu__btn-text">MOUNTAIN 2</div>
          </button>
        </li>
      </ul>
    </div>
  );
};
