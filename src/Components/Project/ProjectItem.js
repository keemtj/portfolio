import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../Global/SectionWrapper';
import qs from 'qs';
import { useLocation } from 'react-router';

const ProjectItem = () => {
  const { search } = useLocation();
  const query = qs.parse(search, {
    ignoreQueryPrefix: true,
  });
  const name = query.name;
  console.log(name);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <StHeading>{name.toUpperCase()}</StHeading>
      <StProject>
        <div>
          <div>{name.toUpperCase()}</div>
          <div>프로젝트 설명</div>
          <div>프로젝트 기술</div>
          <div>프로젝트 기능</div>
        </div>
        <div>프로젝트 이미지</div>
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

export default ProjectItem;
