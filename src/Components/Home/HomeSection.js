import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../Global/SectionWrapper';
import uesFadeIn from '../../Hooks/useFadeIn';

const HomeSection = () => {
  const ref1 = uesFadeIn('up', 0.5);
  return (
    <SectionWrapper id="home">
      <StBackground>
        <StTextBox {...ref1}>
          <div>{"I'm"}</div>
          <div>{'Taejin Kim.'}</div>
          <div>{'Frontend Developer.'}</div>
        </StTextBox>
      </StBackground>
    </SectionWrapper>
  );
};

const StBackground = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url('/images/workplace.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const StTextBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  font-size: 12rem;
  font-weight: 900;
  font-style: italic;

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    font-size: 9rem;
  }
  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    font-size: 6rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    font-size: 4rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    font-size: 3rem;
  }
`;

export default HomeSection;
