import React from 'react';
import styled, { css } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ArrowSmLeft } from '@styled-icons/heroicons-solid/ArrowSmLeft';
import { ArrowSmRight } from '@styled-icons/heroicons-solid/ArrowSmRight';
import useFadeIn from '../../Hooks/useFadeIn';

export const onClickPrev = () => console.log('prev');
export const onClickNext = () => console.log('next');

const Slider = ({ images }) => {
  const ref = useFadeIn('up', 0);
  return (
    <StSlider {...ref}>
      <Carousel
        infiniteLoop
        showThumbs={true}
        showIndicators={false}
        showArrows={true}
        showStatus={true}
        renderArrowPrev={(onClickPrev, hasPrev, label) =>
          hasPrev && (
            <StButton
              type="button"
              onClick={onClickPrev}
              title={label}
              style={{ left: '1rem' }}
            >
              <StPrevIcon />
            </StButton>
          )
        }
        renderArrowNext={(onClickNext, hasNext, label) =>
          hasNext && (
            <StButton
              type="button"
              onClick={onClickNext}
              title={label}
              style={{ right: '1rem' }}
            >
              <StNextIcon />
            </StButton>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    </StSlider>
  );
};

const StSlider = styled.div`
  width: 100%;
  & .carousel {
    text-align: center;
  }
  & .carousel-status {
    border: none;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: ${({ theme }) => theme.black};
    font-weight: 900;
    text-shadow: none;
  }
  & .carousel-slider {
    border: 3px solid ${({ theme }) => theme.fontColor};
    padding: 0.5rem;
  }
`;

const buttonStyle = css`
  position: absolute;
  z-index: 2;
  top: calc(50% - 1.5rem);
  background: ${({ theme }) => theme.black};
  width: 3rem;
  height: 3rem;
`;

const StButton = styled.button`
  ${buttonStyle}
`;

const iconStyle = css`
  color: ${({ theme }) => theme.white};
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

const StPrevIcon = styled(ArrowSmLeft)`
  ${iconStyle};
`;

const StNextIcon = styled(ArrowSmRight)`
  ${iconStyle};
`;

export default Slider;
