import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Header = () => {
  return (
    <StHeader>
      <Navigation />
    </StHeader>
  );
};

const StHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
`;

export default Header;
