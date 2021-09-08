import React from 'react';
import useDarkMode from '../Hooks/useDarkMode';
import styled from 'styled-components';

const Header = () => {
  const [mode, onToggleMode] = useDarkMode();

  return (
    <StHeader>
      <h1>HEADER</h1>
      <div>
        <div>Hello react</div>
        <button onClick={onToggleMode}>
          {mode === 'light' && <span>dark</span>}
          {mode === 'dark' && <span>light</span>}로 전환
        </button>
      </div>
    </StHeader>
  );
};

const StHeader = styled.header`
  color: ${({ theme }) => theme.darkMode.fontColor};
`;
export default Header;
