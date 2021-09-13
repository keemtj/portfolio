import React from 'react';
import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { Close } from '@styled-icons/ionicons-sharp/Close';
import { HashLink } from 'react-router-hash-link';

const Navigation = ({ mode, onToggleMode }) => {
  const [open, setOpen] = React.useState(false);
  const onClickMenu = () => {
    setOpen(!open);
  };

  return (
    <StNavWrapper>
      <StNavigation open={open} setOpen={setOpen}>
        <StNavItem>
          <HashLink smooth to="/#home">
            HOME
          </HashLink>
        </StNavItem>
        <StNavItem>
          <HashLink smooth to="/#about">
            ABOUT
          </HashLink>
        </StNavItem>
        <StNavItem>
          <HashLink smooth to="/#project">
            PROJECT
          </HashLink>
        </StNavItem>
        <StNavItem>
          <HashLink smooth to="/#contact">
            CONTACT
          </HashLink>
        </StNavItem>
        <StNavItem>
          <StToggleModeButton onClick={onToggleMode} open={open}>
            {mode === 'light' ? 'DARK' : 'LIGHT'}
          </StToggleModeButton>
        </StNavItem>
      </StNavigation>
      <StBurgur onClick={onClickMenu}>
        {open ? <StCloseIcon /> : <StMenuIcon />}
      </StBurgur>
    </StNavWrapper>
  );
};

const StNavWrapper = styled.nav`
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    width: 100%;
  }
`;

const StNavigation = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 3rem;
  font-size: 3rem;
  font-weight: 900;

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    font-size: 2.5rem;
  }
  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    column-gap: 1.5rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.backgroundColor};
    font-size: 5rem;
  }
`;

const StNavItem = styled.li`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
  &:last-child {
    display: none;
    /* mobile */
    @media ${({ theme }) => theme.mobile} {
      display: block;
    }
  }

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    & + & {
      margin-top: 1.5rem;
    }
  }
`;

const StToggleModeButton = styled.button`
  color: ${({ theme }) => theme.fontColor};
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

const StBurgur = styled.button`
  display: none;

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    display: block;
    padding: 1rem;
    width: 5.5rem;
    height: 5.5rem;
    color: ${({ theme }) => theme.fontColor};
  }
`;

const StMenuIcon = styled(Menu)`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

const StCloseIcon = styled(Close)`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

export default Navigation;
