import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import styled from 'styled-components';

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <StHeading>CONTACT</StHeading>
    </SectionWrapper>
  );
};

const StHeading = styled.h2`
  font-size: 9rem;
  font-weight: 900;
  font-style: italic;
  padding: 6rem 3rem 3rem 3rem;
`;

export default ContactSection;
