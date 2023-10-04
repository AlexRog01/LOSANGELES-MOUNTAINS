import './ClimbSection.scss';

import classNames from 'classnames';
import { useState } from 'react';

import { BurgerMenu } from '../../ui/BurgerMenu/BurgerMenu';
import { TitleWithNumber } from '../../ui/TitleWithNumber/TitleWithNumber';
import { Schedule } from './Schedule/Schedule';
import { Schedule1 } from './Schedule1/Schedule1';

export const ClimbSection = () => {
  const [mountainNumber, setMountainNumber] = useState(1);

  let content;

  switch (mountainNumber) {
    case 1:
      content = <Schedule />;
      break;

    case 2:
      content = <Schedule1 />;
      break;

    default:
      break;
  }

  return (
    <section id="climb" className="climb">
      <div className="container">
        <div className="climb__title-field">
          <TitleWithNumber number="02." title="CLIMB" />
          <p className="climb__title-text">
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
            hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
          </p>
        </div>
      </div>

      <nav className="climb__navigation climbNav">
        <div className="container">
          <ul className="climbNav__list">
            <li className="climbNav__item">
              <button
                className={classNames('climbNav__btn resetButtonStyles', {
                  'climbNav__btn--active': mountainNumber === 1,
                })}
                onClick={() => setMountainNumber(1)}
              >
                <div className="climbNav__btn-text">MOUNTAIN 1</div>
              </button>
            </li>

            <li className="climbNav__item">
              <button
                className={classNames('climbNav__btn resetButtonStyles', {
                  'climbNav__btn--active': mountainNumber === 2,
                })}
                onClick={() => setMountainNumber(2)}
              >
                <div className="climbNav__btn-text">MOUNTAIN 2</div>
              </button>
            </li>
          </ul>

          <div className="climbNav__burger-menu">
            <BurgerMenu
              mountainNumber={mountainNumber}
              setMountainNumber={setMountainNumber}
            />
          </div>
        </div>
      </nav>

      <div className="climb__content">
        <div className="container">
          <div className="climb__schedule">{content}</div>
        </div>
      </div>
    </section>
  );
};
