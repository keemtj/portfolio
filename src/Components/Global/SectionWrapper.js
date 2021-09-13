import React from 'react';
import styled from 'styled-components';

const SectionWrapper = ({ id, children }) => {
  return <StSection id={id}>{children}</StSection>;
};

const StSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.fontColor};
  scroll-snap-align: start;
`;

export default SectionWrapper;
