export const projects = [
  {
    name: 'instagram',
    overview:
      '인스타그램 클론 코딩입니다. Firebase의 Authentication, Cloud firestore, Storage, Hosting Services를 이용하였습니다. Cloud firestore와 Storage에 데이터 및 사진을 저장하고 불러오는 등의 요청 처리 기능을 중심으로 개발하였습니다. 완성된 프로젝트는 Firebase의 Hosting을 통해 배포되었습니다.',
    features:
      '회원가입 및 로그인, 새 게시물 작성 및 삭제, 게시물 좋아요와 북마크, 게시물 댓글, 유저 검색, 다이렉트 메시지 및 게시물 공유, 팔로우와 언팔로우, 프로필 페이지,  프로필 편집 및 비밀번호 변경',
    skills: 'React, Styled-components, Redux-thunk, Firebase',
    github: 'https://github.com/keemtj/project-basic-instagram',
    link: 'https://instagram-73830.web.app',
    images: [
      '/images/instagram/1.png',
      '/images/instagram/2.png',
      '/images/instagram/3.png',
      '/images/instagram/4.png',
      '/images/instagram/5.png',
      '/images/instagram/6.png',
    ],
  },
  {
    name: 'apple',
    overview:
      'React로 구현한 Applekorea 클론 코딩입니다. 메인페이지와 Mac제품 페이지에 대한 페이지 작업을 진행하였습니다. 클론 코딩하면서 Grid 레이아웃에 대한 이해와 적용, 스크롤 위치에 따른 인터렉티브 효과를 구현하는 것을 중점적으로 하였습니다. 완성된 페이지는 Github의 정적페이지 배포를 이용하였습니다.',
    features:
      'Grid 레이아웃, SPA, 메인 페이지와 Mac 제품 페이지, Intersection Observer API를 이용하여 특정 스크롤에서 동영상 재생 및 효과를 넣는 기능',
    skills: 'React, Styled-components',
    github: 'https://github.com/keemtj/project-applekorea',
    link: 'https://keemtj.github.io/project-applekorea',
    images: [
      '/images/apple/1.png',
      '/images/apple/2.png',
      '/images/apple/3.png',
      '/images/apple/4.png',
    ],
  },
  {
    name: 'weather',
    overview:
      '날씨 API를 이용하여 구현한 날씨 검색 웹 앱입니다. dribbble.com에서 디자이너 Arthur.K의 시안을 보고 마크업 작업을 하였습니다. 검색된 지역에 대한 날씨 정보를 바탕으로 최대한 비슷한 날씨 상황에 맞게 비슷한 느낌을 주는 배경 이미지를 가져오도록 구현하였습니다. 완성된 페이지는 Github의 정적페이지 배포를 이용하였습니다.',
    features:
      '검색된 지역의 날씨 상황에 맞게 배경화면을 새롭게 보여주도록 구현, 불필요한 API call을 최소한으로 하도록 코드를 작성, 로컬 스토리지를 통해 새로고침 및 사이트 재접속시 이전 검색결과가 유지되도록 설정, 주간 날씨 정보',
    skills: 'HTML, CSS, JavaScript',
    github: 'https://github.com/keemtj/project-weather',
    link: 'https://keemtj.github.io/project-weather',
    images: [
      '/images/weather/1.png',
      '/images/weather/2.png',
      '/images/weather/3.png',
      '/images/weather/4.png',
      '/images/weather/5.png',
    ],
  },
  {
    name: 'movies',
    overview:
      '영화 API를 이용하여 구현한 영화 및 드라마 검색 웹 앱입니다. uidesigndaily.com에서 모바일 디자인 시안을 참고하여 웹 스타일로 마크업 작업을 하였습니다. Netflix에서 방영하고 있는 데이터만 요청하여 가져옵니다. 완성된 페이지는 Github의 정적페이지 배포를 이용하였습니다.',
    features:
      'async-await, fetch를 이용하여 API 데이터 불러오기(Axios 라이브러리 미사용), 작품 이미지 URL 가져오기, 작품에 마우스 hover시 overview 기능 구현, 영화 검색 API를 이용하여 원하는 데이터 검색 기능 구현, 검색 페이지에서 홈으로 되돌아가는 버튼 구현(Back 버튼), 검색 페이지에서 홈으로 이동할 때 데이터 재요청 없이 화면에 렌더링하도록 구현',
    skills: 'HTML, CSS, JavaScript',
    github: 'https://github.com/keemtj/project-movieApp',
    link: 'https://keemtj.github.io/project-movieApp',
    images: [
      '/images/movies/1.png',
      '/images/movies/2.png',
      '/images/movies/3.png',
    ],
  },
  {
    name: 'countdown',
    overview:
      'JavaScript로 구현한 새해맞이 카운트다운을 나타내는 심플한 프로젝트입니다. uidesigndaily.com에서 디자인 시안을 참고하여 작업하였습니다(현재는 해당 사이트에서 템플릿을 찾아볼 수 없습니다).',
    features:
      '일(days), 시간(hours), 분(minutes), 초(seconds)를 나타내는 타이머 기능, 시간, 분, 초의 자리수 일치(ex. 9 -> 09), 해가 바뀌면 새로운 년도에 맞게 재카운트다운(ex. 0 0 0 0 -> 364 59 59 59)',
    skills: 'HTML, CSS, JavaScript',
    github: 'https://github.com/keemtj/project-countdown',
    link: 'https://keemtj.github.io/project-countdown',
    images: ['/images/countdown/1.png'],
  },
  // {
  //   name: 'airbnb',
  //   skills: ['React', 'Styled-components', 'Redux-thunk', 'Firebase'],
  //   overview: 'airbnb 설명중',
  //   features: '',
  //   images: [
  //     'https://user-images.githubusercontent.com/51189962/102017070-f7bb1d80-3da7-11eb-96b7-908bea59ac2d.gif',
  //   ],
  //   github: '',
  //   link: '',
  // },
  // {
  //   name: 'dayone',
  //   skills: ['React', 'Styled-components', 'Redux-thunk', 'Firebase'],
  //   overview: 'dayone 설명중',
  //   features: '',
  //   images: [],
  //   github: '',
  //   link: '',
  // },
  // {
  //   name: 'bizmemory',
  //   skills: ['React', 'Styled-components', 'Redux-thunk', 'Firebase'],
  //   overview: 'bizmemory 설명중',
  //   features: '',
  //   images: [],
  //   github: '',
  //   link: '',
  // },
  // {
  //   name: 'todolist',
  //   skills: ['React', 'Styled-components', 'Redux-thunk', 'Firebase'],
  //   overview: 'todolist 설명중',
  //   features: '',
  //   images: [],
  //   github: '',
  //   link: '',
  // },
  // {
  //   name: 'ediyacoffee',
  //   skills: ['React', 'Styled-components', 'Redux-thunk', 'Firebase'],
  //   overview: 'ediyacoffee 설명중',
  //   features: '',
  //   images: [],
  //   github: '',
  //   link: '',
  // },
  // {
  //   name: 'koreanair',
  //   skills: ['React', 'Styled-components', 'Redux-thunk', 'Firebase'],
  //   overview: 'koreanair 설명중',
  //   features: '',
  //   images: [],
  //   github: '',
  //   link: '',
  // },
];
