import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from './details.json';
import './CarouselPage.css';

const CarouselPage = () => {
  const carouselItems = Object.values(data.user.carousel);

  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="carousel-container">
      <h1>{data.user.main_heading}</h1>
      <Carousel>
        {carouselItems.map((item, index) => (
          <div key={index} onClick={() => handleClick(item.link)}>
            <img src={item.image} alt={item.caption} />
            <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
