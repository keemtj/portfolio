import React from 'react';
import styled, { css } from 'styled-components';

const Footer = () => {
  return (
    <StFooter>
      <div>©2021 Taejin Kim All Rights Reserved.</div>
      <div>Web Front-end developer portfolio.</div>
    </StFooter>
  );
};

const StFooter = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  scroll-snap-align: end;
  height: 10rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-style: normal;

  ${({ theme }) => {
    console.log(theme.state);
    return theme.state === 'light'
      ? css`
          background: ${theme.black};
          color: ${theme.white};
        `
      : css`
          background: ${theme.white};
          color: ${theme.black};
        `;
  }}

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    padding: 1rem;
  }
  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    padding: 1rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    padding: 1.5rem;
    flex-flow: column nowrap;
  }
`;

export default Footer;
