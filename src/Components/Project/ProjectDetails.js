import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../Global/SectionWrapper';
import { projects as datas } from '../../Data/projects';
import useQuery from '../../Hooks/useQuery';
import useFadeIn from '../../Hooks/useFadeIn';
import Slider from '../Global/Slider';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  const [queryName] = useQuery();
  const { skills, overview, features, github, link, images } = datas.find(
    data => data.name === queryName,
  );
  const ref1 = useFadeIn('up', 0.1);
  const ref2 = useFadeIn('up', 0.1);
  const ref3 = useFadeIn('left', 0.5);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <StHeading {...ref1}>{queryName.toUpperCase()}</StHeading>
      <StProject>
        <StProjectDetails {...ref2}>
          <StProjectDetailsItem>
            <StSubtitle>OVERVIEW</StSubtitle>
            <StData>{overview}</StData>
          </StProjectDetailsItem>
          <StProjectDetailsItem>
            <StSubtitle>FEATURES</StSubtitle>
            <StData>{features}</StData>
          </StProjectDetailsItem>
          <StProjectDetailsItem>
            <StSubtitle>SKILLS</StSubtitle>
            <StData>{skills}</StData>
          </StProjectDetailsItem>
          <StProjectDetailsItem>
            <StSubtitle>GITHUB</StSubtitle>
            <StData>
              {
                <a href={`${github}`} target="_blank" rel="noreferrer noopener">
                  {github}
                </a>
              }
            </StData>
          </StProjectDetailsItem>
          <StProjectDetailsItem>
            <StSubtitle>LINK</StSubtitle>
            <StData>
              {
                <a href={`${link}`} target="_blank" rel="noreferrer noopener">
                  {link}
                </a>
              }
            </StData>
          </StProjectDetailsItem>
        </StProjectDetails>
        <Slider images={images} />
      </StProject>
      <StButton {...ref3}>
        <StLink to="/project">VIEW ALL</StLink>
      </StButton>
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
    padding: 5rem 1rem 1rem 1rem;
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
    padding: 0rem 1rem;
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
  & + & {
    margin-top: 1.5rem;
  }
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
  font-style: normal;
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
  /* phone */
  @media ${({ theme }) => theme.phone} {
    margin-top: 0.5rem;
  }
`;

const StButton = styled(StHeading)`
  padding: 3rem;
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
    padding: 1.5rem;
    font-size: 4rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    padding: 1rem;
  }
`;

const StLink = styled(Link)`
  display: inline-flex;
  width: 100%;
  height: 100%;
`;

export default ProjectDetails;
