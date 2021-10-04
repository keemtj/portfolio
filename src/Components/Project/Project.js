import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../Global/SectionWrapper';
import { projects as data } from '../../Data/projects.js';
import ProjectDetails from './ProjectDetails';
import useQuery from '../../Hooks/useQuery';
import useFadeIn from '../../Hooks/useFadeIn';
import { HashLink } from 'react-router-hash-link';

const Project = () => {
  const [queryName, onMoveDetailsPage] = useQuery();
  const ref1 = useFadeIn('up', 0.5);
  const ref2 = useFadeIn('up', 0.5);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.parentElement.style.scrollSnapType = 'none';
    return () => {
      if (window.innerWidth <= 768) return;
      document.body.parentElement.style.scrollSnapType = 'y proximity';
    };
  }, [queryName]);

  return (
    <SectionWrapper>
      {queryName ? (
        <ProjectDetails />
      ) : (
        <>
          <StHeading {...ref1}>ALL</StHeading>
          <StProjects {...ref2}>
            {data.map((project, index) => {
              return (
                <StProject
                  key={index}
                  onClick={() => onMoveDetailsPage(project)}
                >
                  {project.name.toUpperCase()}
                </StProject>
              );
            })}
            <StButton>
              <StLink to="/#project">GO BACK HOME</StLink>
            </StButton>
          </StProjects>
        </>
      )}
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
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 3rem;
  column-gap: 3rem;
  font-size: 8rem;
  font-weight: 900;

  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    font-size: 4rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    padding: 1.5rem;
    font-size: 3rem;
  }
`;

const StProject = styled.li`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

const StButton = styled(StProject)``;

const StLink = styled(HashLink)`
  display: inline-flex;
  width: 100%;
  height: 100%;
`;

export default Project;
