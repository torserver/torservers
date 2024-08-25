import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const CarouselText = styled.h2`
  font-size: 3rem;
  color: white;
  text-align: center;
`;

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function Carousel() {
  return (
    <CarouselContainer>
      <Slider {...carouselSettings}>
        <div>
          <CarouselText>Welcome to Our Landing Page</CarouselText>
        </div>
        <div>
          <CarouselText>Discover Amazing Features</CarouselText>
        </div>
        <div>
          <CarouselText>Get Started Today</CarouselText>
        </div>
      </Slider>
    </CarouselContainer>
  );
}

export default Carousel;