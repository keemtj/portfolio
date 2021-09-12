import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Header = ({ mode, onToggleMode, onScrollToTop }) => {
  return (
    <StHeader>
      <StHeading onClick={onScrollToTop}>KEEMTJ</StHeading>
      <Navigation mode={mode} onToggleMode={onToggleMode} />
    </StHeader>
  );
};

const StHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  margin: 0 auto;
  width: 100%;
  height: 6rem;
  font-size: 3rem;
  font-weight: 900;

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    font-size: 2.5rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    font-size: 2.5rem;
    height: fit-content;
    flex-flow: column nowrap;
    align-items: center;
    padding: 1.5rem;
  }
`;

const StHeading = styled.h1`
  &:hover {
    color: gray;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    align-self: flex-start;
  }
`;

export default Header;
