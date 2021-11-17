import React from 'react';
import SectionWrapper from '../Global/SectionWrapper';
import styled from 'styled-components';
import useFadeIn from '../../Hooks/useFadeIn';
import RESUME from '../../assets/프론트엔드_이력서_김태진.pdf';
import COVER_LETTER from '../../assets/프론트엔드_자기소개서_김태진.pdf';

const AboutSection = () => {
  const ref1 = useFadeIn('up', 0.5);
  const ref2 = useFadeIn('up', 0.5);
  const ref3 = useFadeIn('up', 0.5);

  const onClickCoverLetter = () => {
    window.open(COVER_LETTER, '_blank');
  };

  const onClickResume = () => {
    window.open(RESUME, '_blank');
  };

  return (
    <SectionWrapper id="about">
      <StHeading {...ref1}>ABOUT</StHeading>
      <StIntroduceBox {...ref2}>
        <div>안녕하세요. 웹 프론트엔드 개발자 김태진입니다.</div>
        <br />
        <div>
          개발자가 되기 위해 공부를 시작한 이후 매일 새로운{' '}
          <StEmphasis>배움</StEmphasis>의 길을 걷고 있습니다. 오늘의 배움이
          내일의 양분이 되어 어제보다 <StEmphasis>성장</StEmphasis>
          하고 있음에 하루하루 즐겁게 개발하고 있습니다. 언제나 문제를 해결하기
          위한 <StEmphasis>집요함</StEmphasis>과 <StEmphasis>끈기</StEmphasis>가
          있고 마침내 해결했을 때 강한 성취감을 느낍니다. 동료와 의견, 코드 혹은
          개발에 대해 이야기를 <StEmphasis>공유</StEmphasis>하는 것을
          좋아합니다. 당장 앞만 보고 달리는 것이 아닌{' '}
          <StEmphasis>목표</StEmphasis>를 갖고 꾸준히 성장하는 개발자가 되고
          싶습니다.
        </div>
      </StIntroduceBox>
      <StInformationBox {...ref3}>
        <StInformationHeadings>
          <div>GITHUB</div>
          <div>EMAIL</div>
          <div>PHONE</div>
          <div>ADDRESS</div>
          <div>COVER LETTER</div>
          <div>RESUME</div>
        </StInformationHeadings>
        <StInformationDatas>
          <StData>
            <a
              href="https://github.com/keemtj"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://github.com/keemtj
            </a>
          </StData>
          <StData>keemgreat@gmail.com</StData>
          <StData>+82 010-6415-4738</StData>
          <StData>Gwanak-gu, Seoul, South Korea</StData>
          <StData onClick={onClickCoverLetter}>DOWNLOAD</StData>
          <StData onClick={onClickResume}>DOWNLOAD</StData>
        </StInformationDatas>
      </StInformationBox>
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

const StIntroduceBox = styled.div`
  padding: 3rem;
  width: 85%;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.5;
  font-style: normal;

  /* laptop */
  @media ${({ theme }) => theme.laptop} {
    width: 90%;
  }
  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    width: 95%;
    padding: 6rem 1.5rem 1.5rem 1.5rem;
    font-size: 2rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    width: 100%;
    padding: 3rem 1.5rem 1.5rem 1.5rem;
    font-size: 1.5rem;
  }
`;

const StEmphasis = styled.span`
  color: ${({ theme }) => theme.emphasis};
`;

const StInformationBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 3rem;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.5;
  column-gap: 2rem;

  /* mobile */
  @media ${({ theme }) => theme.mobile} {
    padding: 6rem 1.5rem 1.5rem 1.5rem;
    font-size: 2rem;
  }
  /* phone */
  @media ${({ theme }) => theme.phone} {
    padding: 3rem 1.5rem 1.5rem 1.5rem;
    font-size: 1.5rem;
  }
`;

const StInformationHeadings = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const StInformationDatas = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const StData = styled.div`
  &:hover {
    color: ${({ theme }) => theme.emphasis};
    cursor: pointer;
  }
  & > a:hover {
    color: ${({ theme }) => theme.emphasis};
  }
`;

export default AboutSection;
