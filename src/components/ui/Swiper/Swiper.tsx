import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Swiper.scss';

import { FC } from 'react';
import Slider from 'react-slick';

interface Photos {
  id: string;
  img_link: string;
}

type Props = {
  photos: Photos[];
};

export const Swiper: FC<Props> = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {photos.map((photo) => (
        <div className="photo-container" key={photo.id}>
          <img className="photo" src={photo.img_link} alt="mountains" />
        </div>
      ))}
    </Slider>
  );
};
