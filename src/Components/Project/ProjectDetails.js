import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../Global/SectionWrapper';
import { projects as datas } from '../../Data/projects';
import useQuery from '../../Hooks/useQuery';
import Slider from '../Global/Slider';

const ProjectDetails = () => {
  const [queryName] = useQuery();
  const { skills, explanation, features, repository, link } = datas.find(
    data => data.name === queryName,
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <StHeading>{queryName.toUpperCase()}</StHeading>
      <StProject>
        <StProjectDetails>
          <StProjectDetailsItem>
            <StSubtitle>Explanation</StSubtitle>
            <StData>{explanation}</StData>
          </StProjectDetailsItem>
          <StProjectDetailsItem>
            <StSubtitle>Feature</StSubtitle>
            <StData>
              {features.map((feature, index) => (
                <StSkill key={index}>{feature}</StSkill>
              ))}
            </StData>
          </StProjectDetailsItem>
          <StProjectDetailsItem>
            <StSubtitle>Skills</StSubtitle>
            <StData>
              {skills.map((skill, index) => (
                <StSkill key={index}>{skill}</StSkill>
              ))}
            </StData>
          </StProjectDetailsItem>
          <StProjectDetailsItem>
            <StSubtitle>Repository</StSubtitle>
            <StData>
              {
                <a
                  href={`${repository}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {repository}
                </a>
              }
            </StData>
          </StProjectDetailsItem>
          <StProjectDetailsItem>
            <StSubtitle>Link</StSubtitle>
            <StData>
              {
                <a href={`${link}`} target="_blank" rel="noreferrer noopener">
                  {link}
                </a>
              }
            </StData>
          </StProjectDetailsItem>
        </StProjectDetails>
        <Slider />
      </StProject>
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

const StProject = styled.ul`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  row-gap: 3rem;
  column-gap: 3rem;
  font-size: 2rem;

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    flex-flow: column nowrap;
    padding: 1.5rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    padding: 0rem 1.5rem;
  }
`;

const StProjectDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.5;
  column-gap: 2rem;

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    font-size: 2rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    font-size: 1.5rem;
  }
`;

const StProjectDetailsItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    flex-flow: column nowrap;
  }
`;

const StSubtitle = styled.div`
  min-width: 20rem;
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

const StData = styled.div`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
    cursor: pointer;
  }
  & > a:hover {
    color: ${({ theme }) => theme.emphasis};
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    font-size: 1.5rem;
  }
`;

const StSkill = styled.span`
  margin-right: 1rem;
`;

export default ProjectDetails;
