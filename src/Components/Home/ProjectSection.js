import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router';

const ProjectSection = () => {
  const [hover, setHover] = React.useState(null);
  const onMouseEnter = index => setHover(index);
  const onMouseLeave = () => setHover(null);
  const history = useHistory();
  const projects = [
    {
      filename: 'insta.png',
      name: 'instagram',
    },
    {
      filename: 'apple.png',
      name: 'apple',
    },
    {
      filename: 'weather.png',
      name: 'weather',
    },
    {
      filename: 'movies.png',
      name: 'movies',
    },
    {
      filename: 'countdown.png',
      name: 'countdown',
    },
  ];

  return (
    <SectionWrapper id="project">
      <StHeading>PROJECT</StHeading>
      <StProjects>
        {projects.map(({ filename, name }, index) => {
          return (
            <StProjectItem
              key={index}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={onMouseLeave}
              onClick={() => history.push(`/project?name=${name}`)}
            >
              <StImageWrapper>
                {hover === index && (
                  <>
                    <StCover />
                    <StCoverText>VIEW DETAILS</StCoverText>
                  </>
                )}
                <StImage
                  hover={hover === index}
                  src={`/images/${filename}`}
                  alt={`${name}`}
                />
              </StImageWrapper>
            </StProjectItem>
          );
        })}
      </StProjects>
    </SectionWrapper>
  );
};

const StHeading = styled.h2`
  padding: 9rem 3rem 3rem 3rem;
  font-size: 9rem;
  font-weight: 900;
  cursor: default;

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    font-size: 9rem;
  }
  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    font-size: 6rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    padding: 7rem 1.5rem 1.5rem 1.5rem;
    font-size: 4rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
`;

const StProjects = styled.ul`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 3rem;
  column-gap: 3rem;

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    flex-flow: column nowrap;
    padding: 1.5rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    padding: 0;
  }
`;

const StProjectItem = styled.li`
  width: calc((100% / 2) - 1.5rem);
  position: relative;

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

const StCover = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;

const StCoverText = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 4vw;
  font-weight: 900;
  color: ${({ theme }) => theme.white};

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    font-size: 3.5rem;
  }
`;

const StImageWrapper = styled.div`
  overflow: hidden;
`;

const StImage = styled.img`
  width: 100%;
  transition: all 0.5s ease;
  ${({ hover }) =>
    hover &&
    css`
      transform: scale(1.1);
    `}
`;

export default ProjectSection;
