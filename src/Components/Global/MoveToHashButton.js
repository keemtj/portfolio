import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { CheveronDown } from '@styled-icons/zondicons/CheveronDown';

const MoveToHashButton = () => {
  const hash = 'about';
  return (
    <StMoveToHashButton>
      <HashLink smooth to={`/#${hash}`}>
        <StArrowDownIcon />
      </HashLink>
    </StMoveToHashButton>
  );
};

const StMoveToHashButton = styled.button`
  width: 20rem;
  height: 20rem;
  color: ${({ theme }) => theme.white};
`;

const StArrowDownIcon = styled(CheveronDown)`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.white};
`;

export default MoveToHashButton;
