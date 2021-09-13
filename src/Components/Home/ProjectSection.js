import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import styled from 'styled-components';

const ProjectSection = () => {
  return (
    <SectionWrapper id="project">
      <StHeading>PROJECT</StHeading>
    </SectionWrapper>
  );
};

const StHeading = styled.h2`
  padding: 9rem 3rem 3rem 3rem;
  font-size: 9rem;
  font-weight: 900;

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
    padding: 9rem 1.5rem 1.5rem 1.5rem;
    font-size: 4rem;
  }
`;

export default ProjectSection;
