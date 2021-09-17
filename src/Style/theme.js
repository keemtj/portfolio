const light = {
  state: 'light',
  white: '#ffffff',
  black: '#202124',
  backgroundColor: '#ffffff',
  headerBgColor: `linear-gradient(
    to bottom,
    gray,
    transparent 100%
  )`,
  fontColor: '#202124',
  emphasis: '#ED4956',
};

const dark = {
  state: 'dark',
  white: '#ffffff',
  black: '#202124',
  backgroundColor: '#202124',
  headerBgColor: `linear-gradient(
    to bottom,
    #202124,
    50%,
    transparent
  )`,
  fontColor: '#ffffff',
  emphasis: '#ED4956',
};

const theme = {
  light,
  dark,
};

export default theme;
