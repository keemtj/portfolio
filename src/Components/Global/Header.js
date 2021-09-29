import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Header = ({ mode, onToggleMode, onClickHome }) => {
  return (
    <StHeader>
      <StHeading onClick={onClickHome}>KEEMTJ</StHeading>
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
  background: ${({ theme }) => theme.headerBgColor};
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
    flex-flow: column nowrap;
    align-items: center;
    padding: 1.5rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    height: 4rem;
    font-size: 2rem;
    padding: 1rem;
  }
`;

const StHeading = styled.h1`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    align-self: flex-start;
  }
`;

export default Header;
