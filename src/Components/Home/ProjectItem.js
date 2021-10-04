import React from 'react';
import { useHistory } from 'react-router';
import styled, { css } from 'styled-components';
import useFadeIn from '../../Hooks/useFadeIn';

const ProjectItem = ({ filename, name, index }) => {
  const [hover, setHover] = React.useState(null);
  const onMouseEnter = index => setHover(index);
  const onMouseLeave = () => setHover(null);
  const history = useHistory();
  const ref = useFadeIn('up', 0.5);

  return (
    <StProjectItem
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      onClick={() => history.push(`/project?name=${name}`)}
      {...ref}
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
};

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
export default ProjectItem;
