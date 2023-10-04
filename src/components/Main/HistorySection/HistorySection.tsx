/* eslint-disable jsx-a11y/anchor-is-valid */
import './HistorySection.scss';

import photos from '../../../api/photos.json';
import { Logo } from '../../ui/Logo-img/Logo-img';
import { Swiper } from '../../ui/Swiper/Swiper';
import { TitleWithNumber } from '../../ui/TitleWithNumber/TitleWithNumber';

export const HistorySection = () => {
  return (
    <section id="history" className="history">
      <div className="container">
        <nav className="history__navigation nav">
          <a className="logo" href="#">
            <Logo />
            <div className="logo__wrapper">
              <div className="logo__title1">LOSANGELES</div>
              <div className="logo__title2">MOUNTAINS</div>
            </div>
          </a>

          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#history">
                01. HISTORY
              </a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#climb">
                02. TEAM
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="history__content">
        <div className="container">
          <div className="history__description">
            <TitleWithNumber number="01." title="HISTORY" />

            <p className="history__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
              viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est. Nullam
              purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque id
              quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac,
              tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
            </p>
          </div>
        </div>

        <div className="history__photo-swiper">
          <div className="container">
            <div className="history__photo-swiper-container">
              <Swiper photos={photos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
