import React from 'react';
import styled from 'styled-components';

const Project = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <StProject>프로젝트 페이지</StProject>;
};

const StProject = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

export default Project;
