import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <StHeading>ABOUT</StHeading>
    </SectionWrapper>
  );
};

const StHeading = styled.h2`
  font-size: 9rem;
  font-weight: 900;
  font-style: italic;
`;

export default AboutSection;
