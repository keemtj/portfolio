import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import styled from 'styled-components';
import useFadeIn from '../../Hooks/useFadeIn';
import ProjectItem from './ProjectItem';

const ProjectSection = () => {
  const ref = useFadeIn('up', 0.5);
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
      <StHeading {...ref}>PROJECT</StHeading>
      <StProjects>
        {projects.map(({ filename, name }, index) => {
          return (
            <ProjectItem
              key={index}
              filename={filename}
              name={name}
              index={index}
            />
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

export default ProjectSection;
