const deviceSizes = {
  mobile: '475px',
  tablet: '768px',
  laptop: '1127px',
  desktop: '1440px',
};

const media = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  desktop: `screen and (max-width: ${deviceSizes.desktop})`,
};

export default media;
