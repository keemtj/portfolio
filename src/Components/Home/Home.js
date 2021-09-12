import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const sections = [
    { text: 'HOME', id: 'home' },
    { text: 'ABOUT', id: 'about' },
    { text: 'PROJECT', id: 'project' },
    { text: 'CONTACT', id: 'contact' },
  ];

  return (
    <StMain>
      {sections.map(({ text, id }, index) => (
        <StSection key={index} id={id}>
          <div>
            <Link to="/project">{text}</Link>
          </div>
        </StSection>
      ))}
    </StMain>
  );
};

const StMain = styled.main`
  width: 100%;
`;

const StSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100vh;
  font-size: 5rem;
  color: ${({ theme }) => theme.fontColor};
  scroll-snap-align: center;
`;

export default Home;
