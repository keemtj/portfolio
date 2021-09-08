const lightMode = {
  body: '#fff',
  fontColor: '#000',
};

const darkMode = {
  body: '#000',
  fontColor: '#fff',
};

// const common = {
//   flexCenterRow: `
//     display:flex;
//     flex-flow: row nowrap;
//     align-items: center;
//     justify-contents: center;
//   `,
//   flexCenterColumn: `
//     display:flex;
//     flex-flow: column nowrap;
//     align-items: center;
//     justify-contents: center;
//   `,
//   flexGap: '5px',
// };

const mediaQuery = {
  phone: 'screen and (max-width: 768px)',
  tablet: 'screen and (max-width: 1127px)',
  laptop: 'screen and (max-width: 1440px)',
};

const theme = {
  lightMode,
  darkMode,
  // common,
  mediaQuery,
};

export default theme;
