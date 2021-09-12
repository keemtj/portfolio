import React from 'react';
import styled from 'styled-components';

const Aside = ({ mode, onToggleMode, onScrollToTop }) => {
  return (
    <StAside>
      <StScrollToTopButton onClick={onScrollToTop}>TOP</StScrollToTopButton>
      <StToggleButton onClick={onToggleMode}>
        {mode === 'light' ? 'DARK' : 'LIGHT'}
      </StToggleButton>
    </StAside>
  );
};

const StAside = styled.aside`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: center;
  padding: 3rem;
  font-size: 3rem;
  font-weight: 900;
  font-style: inherit;

  @media ${({ theme }) => theme.mobile} {
    padding: 1.5rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    z-index: 0;
  }
`;

const StToggleButton = styled.button`
  color: ${({ theme }) => theme.fontColor};
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;

  &:hover {
    color: gray;
  }

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

const StScrollToTopButton = styled.button`
  color: ${({ theme }) => theme.fontColor};
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;

  &:hover {
    color: gray;
  }
`;

export default Aside;
