import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import styled from 'styled-components';
import useInputs from '../../Hooks/useInputs';
import { init } from 'emailjs-com';

const ContactSection = () => {
  const [form, onChange, onSubmit] = useInputs();
  const { name, email, subject, message } = form;

  React.useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_USER_ID);
  });

  return (
    <SectionWrapper id="contact">
      <StHeading>CONTACT</StHeading>
      <StContact>
        <StForm onSubmit={onSubmit} autoComplete="off">
          <label htmlFor="name">성명</label>
          <input
            id="name"
            onChange={onChange}
            type="text"
            name="name"
            value={name}
            placeholder="name"
          />
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            onChange={onChange}
            type="email"
            name="email"
            value={email}
            placeholder="email"
          />
          <label htmlFor="subject">제목</label>
          <input
            id="subject"
            onChange={onChange}
            type="text"
            name="subject"
            value={subject}
            placeholder="subject"
          />
          <label htmlFor="message">메시지</label>
          <textarea
            id="message"
            onChange={onChange}
            type="text"
            name="message"
            value={message}
            placeholder="message"
          />
          <StButton type="submit">보내기</StButton>
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
    padding: 9rem 1.5rem 1.5rem 1.5rem;
    font-size: 4rem;
  }
`;

const StContact = styled.div`
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

const StForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 100%;
`;

const StButton = styled.button`
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid red;
  width: 10rem;
  height: 10rem;
`;

export default ContactSection;
