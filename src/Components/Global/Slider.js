import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <StSlider>
      <Carousel
        showThumbs
        showIndicators={false}
        showArrows={true}
        infiniteLoop
        showStatus={false}
      >
        <div>
          <img src="/images/instagram/1.png" />
        </div>
        <div>
          <img src="/images/instagram/2.png" />
        </div>
        <div>
          <img src="/images/instagram/3.png" />
        </div>
        <div>
          <img src="/images/instagram/4.png" />
        </div>
        <div>
          <img src="/images/instagram/5.png" />
        </div>
        <div>
          <img src="/images/instagram/6.png" />
        </div>
      </Carousel>
    </StSlider>
  );
};

const StSlider = styled.div`
  width: 100%;
`;

export default Slider;
