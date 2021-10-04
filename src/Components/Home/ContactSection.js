import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import styled, { css } from 'styled-components';
import useInputs from '../../Hooks/useInputs';
import useFadeIn from '../../Hooks/useFadeIn';

const ContactSection = () => {
  const [form, onChange, onSubmit] = useInputs();
  const { name, email, phone, subject, message } = form;
  const ref1 = useFadeIn('up', 0);
  const ref2 = useFadeIn('up', 0);

  return (
    <SectionWrapper id="contact">
      <StHeading {...ref1}>CONTACT</StHeading>
      <StContact {...ref2}>
        <StForm onSubmit={onSubmit} autoComplete="off">
          <StInputWrapper>
            <StInput
              onChange={onChange}
              type="text"
              name="email"
              value={email}
              placeholder="YOUR EMAIL *"
              required
            />
          </StInputWrapper>
          <StInputWrapper>
            <StInput
              onChange={onChange}
              type="text"
              name="name"
              value={name}
              placeholder="YOUR NAME *"
              required
            />
          </StInputWrapper>
          <StInputWrapper>
            <StInput
              onChange={onChange}
              type="text"
              name="phone"
              value={phone}
              placeholder="YOUR PHONE *"
              required
            />
          </StInputWrapper>
          <StInputWrapper>
            <StInput
              onChange={onChange}
              type="text"
              name="subject"
              value={subject}
              placeholder="SUBJECT *"
              required
            />
          </StInputWrapper>
          <StInputWrapper>
            <StTextarea
              onChange={onChange}
              type="text"
              name="message"
              value={message}
              placeholder="MESSAGE *"
              rows="10"
              required
            />
          </StInputWrapper>
          <StButton type="submit">SEND</StButton>
        </StForm>
      </StContact>
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

const StContact = styled.div`
  width: 100%;
  padding: 0rem 3rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    padding: 1.5rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    padding: 0;
  }
`;

const StForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  width: 50%;

  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    width: 100%;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

const StInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

const inputStyle = css`
  border-radius: unset;
  padding: 1rem;
  width: 100%;
  font-size: 2.5rem;
  font-weight: 900;
  &::placeholder {
    color: gray;
    font-size: 2.5rem;
    font-weight: 900;
    font-style: italic;
  }

  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    width: 100%;
    font-size: 2rem;
    &::placeholder {
      font-size: 2rem;
    }
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    font-size: 1.5rem;
    &::placeholder {
      font-size: 1.5rem;
    }
  }
`;

const StInput = styled.input`
  border-bottom: 3px solid ${({ theme }) => theme.fontColor};
  height: 5rem;
  ${inputStyle}
`;

const StTextarea = styled.textarea`
  border: 3px solid ${({ theme }) => theme.fontColor};
  ${inputStyle}
`;

const StButton = styled.button`
  border: 3px solid ${({ theme }) => theme.fontColor};
  background: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  height: 5rem;
  color: ${({ theme }) => theme.fontColor};
  font-size: 2.5rem;
  font-weight: 900;
  font-family: inherit;
  font-style: italic;
  &:hover,
  &:focus {
    ${({ theme }) => {
      return theme.state === 'light'
        ? css`
            background: ${theme.black};
            color: ${theme.white};
          `
        : css`
            background: ${theme.white};
            color: ${theme.black};
          `;
    }}
  }

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    width: 65%;
  }
  /* tablet */
  @media ${({ theme }) => theme.tablet} {
    width: 100%;
    font-size: 1.5rem;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    font-size: 1.5rem;
  }
`;

export default ContactSection;
