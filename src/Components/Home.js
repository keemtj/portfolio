import React from 'react';
import styled from 'styled-components';

const Home = () => {
  const sections = [
    { text: 1, color: '#150734' },
    { text: 2, color: '#0F2557' },
    { text: 3, color: '#28559A' },
    { text: 4, color: '#3778C2' },
  ];
  return (
    <StMain>
      {sections.map(({ text, color }, index) => (
        <StSection key={index} color={color}>
          {text}
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
  background-color: ${({ color }) => color};
  height: 100vh;
  scroll-snap-align: center;
  font-size: 5rem;
`;
export default Home;
