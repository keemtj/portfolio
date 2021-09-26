import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../Global/SectionWrapper';
import * as data from '../../Data/projects.js';
import { useHistory, useLocation } from 'react-router';
import qs from 'qs';
import ProjectItem from './ProjectItem';

const Project = () => {
  const history = useHistory();
  const { search } = useLocation();
  const query = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  const hasQueryName = query.name;
  console.log(hasQueryName);

  const onMoveDetailsPage = project => {
    history.push(`/project?name=${project.name}`);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      {hasQueryName ? (
        <ProjectItem />
      ) : (
        <>
          <StHeading>ALL PROJECTS</StHeading>
          <StProjects>
            {data.projects().map((project, index) => {
              return (
                <StProject
                  key={index}
                  onClick={() => onMoveDetailsPage(project)}
                >
                  {project.name.toUpperCase()}
                </StProject>
              );
            })}
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
    padding: 9rem 1.5rem 1.5rem 1.5rem;
    font-size: 4rem;
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

export default Project;
